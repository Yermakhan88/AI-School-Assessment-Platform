from openai import APIError

from app.ai.client import client, MODEL
from app.ai.request import AIReviewRequest
from app.ai.schemas import AIReviewResult


class OpenAIProvider:
    """
    Production implementation using OpenAI Responses API.
    """

    def review(
        self,
        request: AIReviewRequest,
    ) -> AIReviewResult:

        response = client.responses.parse(
            model=MODEL,
            input=[
                {
                    "role": "system",
                    "content": request.system_prompt,
                },
                {
                    "role": "user",
                    "content": f"""
Assignment:
{request.assignment_title}

Description:
{request.assignment_description}

Programming language:
{request.language}

Student solution:

{request.source_code}
""",
                },
            ],
            text_format=AIReviewResult,
        )

        if response.output_parsed is None:
            raise RuntimeError(
                "OpenAI returned empty structured output."
            )

        return response.output_parsed