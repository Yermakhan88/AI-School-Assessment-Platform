from pydantic import BaseModel


class DashboardStats(BaseModel):
    teachers: int
    students: int
    subjects: int
    assignments: int
    submissions: int