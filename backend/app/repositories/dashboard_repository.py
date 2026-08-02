from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.assignment import Assignment
from app.models.student import Student
from app.models.subject import Subject
from app.models.submission import Submission
from app.models.teacher import Teacher


class DashboardRepository:

    @staticmethod
    def get_stats(db: Session):
        return {
            "teachers": db.query(func.count(Teacher.id)).scalar(),
            "students": db.query(func.count(Student.id)).scalar(),
            "subjects": db.query(func.count(Subject.id)).scalar(),
            "assignments": db.query(func.count(Assignment.id)).scalar(),
            "submissions": db.query(func.count(Submission.id)).scalar(),
        }