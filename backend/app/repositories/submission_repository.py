from datetime import datetime

from sqlalchemy.orm import Session, joinedload

from app.constants.submission_status import SubmissionStatus
from app.models.submission import Submission
from app.schemas.submission import (
    SubmissionCreate,
    SubmissionUpdate,
)


class SubmissionRepository:

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(Submission)
            .options(
                joinedload(Submission.student),
                joinedload(Submission.assignment),
            )
            .order_by(Submission.id.desc())
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        submission_id: int,
    ):
        return (
            db.query(Submission)
            .options(
                joinedload(Submission.student),
                joinedload(Submission.assignment),
            )
            .filter(Submission.id == submission_id)
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        submission: SubmissionCreate,
    ):
        db_submission = Submission(
            assignment_id=submission.assignment_id,
            student_id=submission.student_id,
            file_name=submission.file_name,
            file_path=submission.file_path,
            ai_score=submission.ai_score,
            teacher_score=submission.teacher_score,
            ai_feedback=submission.ai_feedback,
            teacher_feedback=submission.teacher_feedback,
            status=submission.status,
        )

        db.add(db_submission)
        db.commit()
        db.refresh(db_submission)

        return db_submission

    @staticmethod
    def update(
        db: Session,
        submission_id: int,
        submission: SubmissionUpdate,
    ):
        db_submission = (
            db.query(Submission)
            .filter(Submission.id == submission_id)
            .first()
        )

        if db_submission is None:
            return None

        db_submission.assignment_id = submission.assignment_id
        db_submission.student_id = submission.student_id
        db_submission.file_name = submission.file_name
        db_submission.file_path = submission.file_path

        db_submission.ai_score = submission.ai_score
        db_submission.teacher_score = submission.teacher_score

        db_submission.ai_feedback = submission.ai_feedback
        db_submission.teacher_feedback = submission.teacher_feedback

        db_submission.status = submission.status

        db.commit()
        db.refresh(db_submission)

        return db_submission

    @staticmethod
    def update_teacher_review(
        db: Session,
        submission_id: int,
        teacher_score: float,
        teacher_feedback: str,
    ):
        submission = (
            db.query(Submission)
            .filter(Submission.id == submission_id)
            .first()
        )

        if submission is None:
            return None

        submission.teacher_score = teacher_score
        submission.teacher_feedback = teacher_feedback
        submission.reviewed_at = datetime.utcnow()
        submission.status = SubmissionStatus.TEACHER_REVIEWED

        db.commit()
        db.refresh(submission)

        return submission

    @staticmethod
    def delete(
        db: Session,
        submission_id: int,
    ):
        db_submission = (
            db.query(Submission)
            .filter(Submission.id == submission_id)
            .first()
        )

        if db_submission:
            db.delete(db_submission)
            db.commit()

        return db_submission