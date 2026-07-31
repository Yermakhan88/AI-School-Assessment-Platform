from pydantic import BaseModel, Field


class AIReviewResult(BaseModel):
    score: int = Field(
        ge=0,
        le=100,
        description="Final score",
    )

    feedback: str

    strengths: list[str]

    weaknesses: list[str]

    recommendations: list[str]