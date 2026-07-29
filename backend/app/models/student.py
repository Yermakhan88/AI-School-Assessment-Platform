from sqlalchemy import Boolean, Column, Integer, String

from app.database.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(255), nullable=False)

    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    phone = Column(String(30), nullable=False)

    group_name = Column(String(100), nullable=False)

    is_active = Column(
        Boolean,
        default=True,
    )