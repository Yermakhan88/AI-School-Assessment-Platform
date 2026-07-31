import json
import time

from app.ai.client import client
from app.ai.file_reader import read_file
from app.ai.prompts import PYTHON_REVIEW_PROMPT
from app.ai.client import client, MODEL


class AIReviewService:

    @staticmethod
    def review_python_file(file_path: str):
        start_time = time.perf_counter()

        source_code = read_file(file_path)

        response = client.responses.create(
            model=MODEL,
            input=[
                {
                    "role": "system",
                    "content": PYTHON_REVIEW_PROMPT,
                },
                {
                    "role": "user",
                    "content": source_code,
                },
            ],
        )

        elapsed = (
            time.perf_counter() - start_time
        )

        content = response.output_text

        try:
            result = json.loads(content)
        except Exception:
            result = {
                "score": None,
                "feedback": content,
                "strengths": [],
                "weaknesses": [],
                "recommendations": [],
            }

        result["processing_time"] = round(
            elapsed,
            2,
        )

        result["model"] = "gpt-5.5"

        return result