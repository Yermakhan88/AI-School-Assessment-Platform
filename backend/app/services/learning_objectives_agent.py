from app.services.openai_service import OpenAIService


class LearningObjectivesAgent:

    @staticmethod
    def generate(
        topic: str,
        grade: int,
    ) -> dict:

        prompt = f"""
You are an educational AI.

Generate learning objectives.

Return ONLY valid JSON.

Schema:

{{
    "learning_objectives":[
        "",
        "",
        ""
    ]
}}

Topic:

{topic}

Grade:

{grade}
"""

        return OpenAIService.generate(prompt)