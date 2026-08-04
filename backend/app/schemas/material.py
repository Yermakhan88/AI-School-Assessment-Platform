from datetime import datetime

from pydantic import BaseModel


class MaterialCreate(BaseModel):
    title: str
    grade: int
    teacher_id: int
    subject_id: int


class MaterialResponse(BaseModel):
    id: int

    title: str

    filename: str

    filepath: str

    file_type: str

    grade: int

    teacher_id: int

    subject_id: int

    is_processed: bool

    uploaded_at: datetime

    class Config:
        from_attributes = True