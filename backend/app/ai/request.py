from pydantic import BaseModel


class AIReviewRequest(BaseModel):
    assignment_title: str
    assignment_description: str
    source_code: str
    language: str = "python"
    system_prompt: str