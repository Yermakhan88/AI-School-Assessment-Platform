from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class AIReviewBase(BaseModel):
    submission_id: int

    model: str = "gpt-4.1-mini"

    score: float | None = None

    grade: str | None = None

    feedback: str | None = None

    strengths: list[str] = Field(default_factory=list)

    weaknesses: list[str] = Field(default_factory=list)

    recommendations: list[str] = Field(default_factory=list)

    processing_time: float | None = None


class AIReviewCreate(AIReviewBase):
    pass


class AIReviewUpdate(AIReviewBase):
    pass


class AIReviewResponse(AIReviewBase):
    id: int

    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )