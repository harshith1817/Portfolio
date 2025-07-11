import os
os.environ["USE_TF"] = "0"

from datasets import load_dataset, DatasetDict
from transformers import (
    T5Tokenizer,
    T5ForConditionalGeneration,
    Trainer,
    TrainingArguments,
    DataCollatorForSeq2Seq
)
from sklearn.model_selection import train_test_split
import pandas as pd

data = pd.read_json("qa_dataset.json")

train_df, test_df = train_test_split(data, test_size=0.1, random_state=42)

train_df.to_json("train_tmp.json", orient="records", lines=True)
test_df.to_json("test_tmp.json", orient="records", lines=True)

dataset = DatasetDict({
    "train": load_dataset("json", data_files="train_tmp.json", split="train"),
    "test": load_dataset("json", data_files="test_tmp.json", split="train")
})

model_name = "t5-small"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)

def preprocess(example):
    inputs = tokenizer(example["input_text"], padding="max_length", truncation=True, max_length=128)
    targets = tokenizer(example["target_text"], padding="max_length", truncation=True, max_length=64)
    inputs["labels"] = targets["input_ids"]
    return inputs


tokenized_dataset = dataset.map(preprocess, batched=True)


training_args = TrainingArguments(
    output_dir="./t5-finetuned",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,
    num_train_epochs=10,
    weight_decay=0.01,
    save_strategy="epoch",
    logging_strategy="no",     
    report_to="none"          
)


trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset["train"],
    eval_dataset=tokenized_dataset["test"],
    tokenizer=tokenizer,
    data_collator=DataCollatorForSeq2Seq(tokenizer, model),
)

trainer.train()
