from datetime import datetime

from pydantic import BaseModel, ConfigDict


class AIReviewBase(BaseModel):
    submission_id: int
    model: str = "gpt-5.5"

    score: float | None = None

    feedback: str | None = None

    strengths: str | None = None

    weaknesses: str | None = None

    recommendations: str | None = None

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