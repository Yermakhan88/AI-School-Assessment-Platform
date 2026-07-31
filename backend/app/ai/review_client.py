from openai import OpenAI

from app.ai.client import (
    MODEL,
    client,
)
from app.ai.schemas import AIReviewResult


class AIReviewClient:

    @staticmethod
    def review(
        prompt: str,
        submission_text: str,
    ) -> AIReviewResult:

        response = client.responses.parse(
            model=MODEL,
            input=[
                {
                    "role": "system",
                    "content": prompt,
                },
                {
                    "role": "user",
                    "content": submission_text,
                },
            ],
            text_format=AIReviewResult,
        )

        return response.output_parsed