from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.assignment import Assignment
from app.models.student import Student
from app.models.submission import Submission
from app.models.teacher import Teacher


class ReportRepository:

    @staticmethod
    def get_statistics(db: Session):
        return {
            "teachers": db.query(func.count(Teacher.id)).scalar(),
            "students": db.query(func.count(Student.id)).scalar(),
            "assignments": db.query(func.count(Assignment.id)).scalar(),
            "submissions": db.query(func.count(Submission.id)).scalar(),
        }

    @staticmethod
    def get_submissions(db: Session):
        return (
            db.query(Submission)
            .order_by(Submission.submitted_at.desc())
            .all()
        )