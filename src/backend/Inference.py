import json
import spacy
from transformers import T5Tokenizer, T5ForConditionalGeneration
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer

model_path = "./t5-finetuned"
tokenizer = T5Tokenizer.from_pretrained(model_path)
model = T5ForConditionalGeneration.from_pretrained(model_path)

nlp = spacy.load("en_core_web_sm")

embedder = SentenceTransformer("all-MiniLM-L6-v2")

with open("qa_dataset.json", "r", encoding="utf-8") as f:
    data = json.load(f)

dataset_questions = [item["input_text"] for item in data]
dataset_answers = {item["input_text"]: item["target_text"] for item in data}

dataset_embeddings = embedder.encode(dataset_questions, convert_to_tensor=True)

def preprocess_question(question: str) -> str:
    question = question.lower()

    question = question.replace("harshith's", "his")
    question = question.replace("harshith", "he")
    
    for token in ["harshit", "harshit", "harshiths", "harshgith", "harshiths'"]:
        question = question.replace(f"{token}'s", "his")
        question = question.replace(token, "he")

    return question

def get_answer(user_question: str) -> str:
    processed_question = preprocess_question(user_question)

    input_embedding = embedder.encode([processed_question], convert_to_tensor=True)

    similarities = cosine_similarity(input_embedding.cpu().numpy(), dataset_embeddings.cpu().numpy())[0]

    best_index = similarities.argmax()
    best_score = similarities[best_index]

    if best_score < 0.7:
        if not any(char.isalpha() for char in user_question):
            return "Your input doesn't seem like a proper question. Please rephrase it."
        elif any(char * 5 in user_question for char in set(user_question)):
            return "Your input seems a bit unclear. Could you rephrase it?"
        elif len(user_question.strip().split()) < 2:
            return "Could you please ask a full question? It'll help me give a better answer."
        elif len(user_question.strip().split()) < 3:
            return "Could you please provide a more complete question?"
        elif (not any(char.isalpha() for char in user_question)):
            return "Your input doesn't seem like a proper question. Please rephrase it."
        else:
            return "Oops! That seems outside my scope. But I can help you learn more about Harshith!"

    best_question = dataset_questions[best_index]
    return dataset_answers[best_question]
