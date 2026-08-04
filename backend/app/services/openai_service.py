import os

from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


class OpenAIService:

    @staticmethod
    def generate(prompt: str) -> str:

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are an educational AI assistant."
                },
                {
                    "role": "user",
                    "content": prompt
                },
            ],
            temperature=0.3,
        )

        return response.choices[0].message.content