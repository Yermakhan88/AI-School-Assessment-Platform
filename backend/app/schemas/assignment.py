from datetime import date

from pydantic import BaseModel, ConfigDict

from app.schemas.teacher import TeacherResponse
from app.schemas.subject import SubjectResponse


class AssignmentBase(BaseModel):
    title: str
    description: str | None = None
    teacher_id: int
    subject_id: int
    due_date: date
    max_score: int = 100
    is_active: bool = True


class AssignmentCreate(AssignmentBase):
    pass


class AssignmentUpdate(AssignmentBase):
    pass


class AssignmentResponse(BaseModel):
    id: int

    title: str
    description: str | None = None

    due_date: date
    max_score: int
    is_active: bool

    teacher: TeacherResponse
    subject: SubjectResponse

    model_config = ConfigDict(from_attributes=True)