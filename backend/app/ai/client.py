import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")

if not API_KEY:
    raise RuntimeError(
        "OPENAI_API_KEY is not configured."
    )

MODEL = os.getenv(
    "OPENAI_MODEL",
    "gpt-4.1-mini",
)

client = OpenAI(
    api_key=API_KEY,
)