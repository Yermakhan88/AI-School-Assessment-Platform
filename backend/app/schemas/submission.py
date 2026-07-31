from datetime import datetime

from pydantic import BaseModel, ConfigDict


class SubmissionBase(BaseModel):
    assignment_id: int
    student_id: int
    file_name: str
    file_path: str
    ai_score: float | None = None
    teacher_score: float | None = None
    feedback: str | None = None
    status: str = "Submitted"


class SubmissionCreate(SubmissionBase):
    pass


class SubmissionUpdate(SubmissionBase):
    pass


class SubmissionResponse(SubmissionBase):
    id: int
    submitted_at: datetime

    model_config = ConfigDict(from_attributes=True)