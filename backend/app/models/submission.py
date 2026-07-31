from sqlalchemy import (
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database.database import Base


class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)

    assignment_id = Column(
        Integer,
        ForeignKey("assignments.id"),
        nullable=False,
    )

    student_id = Column(
        Integer,
        ForeignKey("students.id"),
        nullable=False,
    )

    file_name = Column(
        String(255),
        nullable=False,
    )

    file_path = Column(
        String(500),
        nullable=False,
    )

    submitted_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    ai_score = Column(
        Float,
        nullable=True,
    )

    teacher_score = Column(
        Float,
        nullable=True,
    )

    feedback = Column(
        Text,
        nullable=True,
    )

    status = Column(
        String(50),
        default="Submitted",
    )

    assignment = relationship("Assignment")