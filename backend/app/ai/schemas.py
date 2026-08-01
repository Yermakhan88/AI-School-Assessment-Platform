from pydantic import BaseModel, Field


class AIReviewResult(BaseModel):
    score: int = Field(
        ge=0,
        le=100,
        description="Final score from 0 to 100",
    )

    grade: str = Field(
        description="Overall grade (Excellent, Good, Satisfactory, Needs Improvement)"
    )

    summary: str = Field(
        description="Short overall assessment"
    )

    strengths: list[str]

    weaknesses: list[str]

    recommendations: list[str]