from sqlalchemy import Boolean, Column, Integer, String

from app.database.database import Base


class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    subject = Column(String(150), nullable=False)
    is_active = Column(Boolean, default=True)