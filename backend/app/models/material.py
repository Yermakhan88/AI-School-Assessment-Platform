from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
)

from sqlalchemy.sql import func

from app.database.database import Base


class Material(Base):
    __tablename__ = "materials"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    title = Column(
        String,
        nullable=False,
    )

    filename = Column(
        String,
        nullable=False,
    )

    filepath = Column(
        String,
        nullable=False,
    )

    file_type = Column(
        String,
        nullable=False,
    )

    grade = Column(
        Integer,
        nullable=False,
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

    is_processed = Column(
        Boolean,
        default=False,
    )

    uploaded_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )