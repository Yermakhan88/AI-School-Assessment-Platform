from pydantic import BaseModel, Field


class TeacherReviewRequest(BaseModel):
    teacher_score: float = Field(
        ge=0,
        le=100,
    )

    teacher_feedback: str


class TeacherReviewResponse(BaseModel):
    message: str