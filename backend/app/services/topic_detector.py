from app.services.openai_service import OpenAIService


class TopicDetector:

    @staticmethod
    def detect(material: str):

        prompt = f"""
Read the educational material.

Return ONLY:

1. Main topic
2. Grade
3. Bloom taxonomy level

Material:

{material[:6000]}
"""

        return OpenAIService.generate(prompt)