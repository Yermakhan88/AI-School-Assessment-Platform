from app.services.openai_service import OpenAIService


class TopicDetector:

    @staticmethod
    def detect(material: str) -> dict:

        prompt = f"""
You are an educational AI expert.

Analyze the educational material below.

Return ONLY valid JSON.

Schema:

{{
    "topic": "",
    "grade": 0,
    "learning_objectives": [
        "",
        "",
        ""
    ],
    "bloom_level": ""
}}

Rules:

- Grade must be integer.
- learning_objectives must contain exactly 3 items.
- bloom_level must be one of:

Remember
Understand
Apply
Analyze
Evaluate
Create

Educational Material:

{material[:6000]}
"""

        return OpenAIService.generate(prompt)