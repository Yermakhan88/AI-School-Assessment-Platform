from sqlalchemy import (
    JSON,
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.sql import func

from app.database.database import Base


class AIReview(Base):
    __tablename__ = "ai_reviews"

    id = Column(Integer, primary_key=True, index=True)

    submission_id = Column(
        Integer,
        ForeignKey("submissions.id"),
        nullable=False,
    )

    model = Column(
        String(100),
        nullable=False,
        default="gpt-4.1-mini",
    )

    score = Column(
        Float,
        nullable=True,
    )

    grade = Column(
        String(50),
        nullable=True,
    )

    feedback = Column(
        Text,
        nullable=True,
    )

    strengths = Column(
        JSON,
        nullable=True,
    )

    weaknesses = Column(
        JSON,
        nullable=True,
    )

    recommendations = Column(
        JSON,
        nullable=True,
    )

    processing_time = Column(
        Float,
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )