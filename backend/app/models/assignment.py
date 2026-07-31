from sqlalchemy import (
    Boolean,
    Column,
    Date,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.orm import relationship

from app.database.database import Base


class Assignment(Base):
    __tablename__ = "assignments"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(
        String(255),
        nullable=False,
    )

    description = Column(
        Text,
        nullable=True,
    )

    teacher_id = Column(
        Integer,
        ForeignKey("teachers.id"),
        nullable=False,
    )

    subject_id = Column(
        Integer,
        ForeignKey("subjects.id"),
        nullable=False,
    )

    due_date = Column(
        Date,
        nullable=False,
    )

    max_score = Column(
        Integer,
        default=100,
        nullable=False,
    )

    is_active = Column(
        Boolean,
        default=True,
    )

    teacher = relationship(
        "Teacher",
        back_populates="assignments",
    )

    subject = relationship(
        "Subject",
        back_populates="assignments",
    )