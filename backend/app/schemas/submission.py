from datetime import datetime

from pydantic import BaseModel, ConfigDict


class StudentShort(BaseModel):
    id: int
    full_name: str

    model_config = ConfigDict(
        from_attributes=True
    )


class AssignmentShort(BaseModel):
    id: int
    title: str

    model_config = ConfigDict(
        from_attributes=True
    )


class SubmissionBase(BaseModel):
    assignment_id: int

    student_id: int

    file_name: str

    file_path: str

    ai_score: float | None = None

    teacher_score: float | None = None

    ai_feedback: str | None = None

    teacher_feedback: str | None = None

    status: str = "UPLOADED"


class SubmissionCreate(SubmissionBase):
    pass


class SubmissionUpdate(SubmissionBase):
    pass


class SubmissionResponse(SubmissionBase):
    id: int

    submitted_at: datetime

    reviewed_at: datetime | None = None

    student: StudentShort

    assignment: AssignmentShort

    model_config = ConfigDict(
        from_attributes=True
    )