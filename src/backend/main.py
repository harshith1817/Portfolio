from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from Inference import get_answer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://chbsh.vercel.app"
    ],
    # allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    question = data.get("message", "")
    response = get_answer(question)
    return {"response": response}