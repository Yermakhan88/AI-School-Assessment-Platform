from sqlalchemy import Boolean, Column, Integer, String

from app.database.database import Base


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)

    code = Column(
        String(50),
        unique=True,
        nullable=False,
        index=True,
    )

    description = Column(String(500), nullable=True)

    is_active = Column(
        Boolean,
        default=True,
    )