from app.prompts.assignment_prompt import SYSTEM_PROMPT
from app.schemas.ai_generator import (
    AssignmentGenerationRequest,
    AssignmentGenerationResponse,
)
from app.services.openai_service import (
    OpenAIService,
)


class AIGeneratorService:

    @staticmethod
    def generate(
        request: AssignmentGenerationRequest,
    ):

        prompt = f"""

Educational material

{request.material}

Subject

{request.subject}

Grade

{request.grade}

Language

{request.language}

"""

        result = OpenAIService.generate(

            SYSTEM_PROMPT + prompt

        )

        return result