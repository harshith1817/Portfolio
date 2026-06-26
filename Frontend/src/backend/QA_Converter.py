import json

with open("LargerIntents.json", "r", encoding="utf-8") as file:
    data = json.load(file)

qa_pairs = []

for block in data:
    answer = block["answer"].strip()
    for q in block["questions"]:
        qa_pairs.append({
            "input_text": f"question: {q.strip()}",
            "target_text": answer
        })

with open("qa_dataset.json", "w", encoding="utf-8") as f:
    json.dump(qa_pairs, f, ensure_ascii=False, indent=2)
