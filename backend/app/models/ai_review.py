from sqlalchemy import (
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
        default="gpt-5.5",
    )

    score = Column(
        Float,
        nullable=True,
    )

    feedback = Column(
        Text,
        nullable=True,
    )

    strengths = Column(
        Text,
        nullable=True,
    )

    weaknesses = Column(
        Text,
        nullable=True,
    )

    recommendations = Column(
        Text,
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