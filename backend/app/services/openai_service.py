import json
import os

from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


class OpenAIService:

    @staticmethod
    def generate(prompt: str):

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an educational AI assistant. "
                        "Always return valid JSON only. "
                        "Do not wrap the response in markdown."
                    ),
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.2,
            response_format={
                "type": "json_object"
            },
        )

        content = (
            response
            .choices[0]
            .message
            .content
        )

        return json.loads(content)