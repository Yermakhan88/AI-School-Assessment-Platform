from pydantic import BaseModel


class AssignmentGenerationRequest(BaseModel):
    material: str
    subject: str
    grade: int
    language: str


class AssignmentGenerationResponse(BaseModel):
    topic: str
    bloom_level: str
    assignment: str
    rubric: str