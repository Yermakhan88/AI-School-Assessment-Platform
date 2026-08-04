from pydantic import BaseModel


class StudentAssignment(BaseModel):
    id: int
    title: str
    description: str
    due_date: str
    subject: str


class StudentSubmission(BaseModel):
    id: int
    ai_score: int | None
    teacher_score: int | None
    ai_feedback: str | None
    teacher_feedback: str | None
    status: str


class StudentDashboardResponse(BaseModel):
    assignment: StudentAssignment | None
    submission: StudentSubmission | None