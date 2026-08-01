from sqlalchemy.orm import Session

from app.repositories.submission_repository import SubmissionRepository
from app.schemas.submission import (
    SubmissionCreate,
    SubmissionUpdate,
)


class SubmissionService:

    @staticmethod
    def get_all(db: Session):
        return SubmissionRepository.get_all(db)

    @staticmethod
    def get_by_id(
        db: Session,
        submission_id: int,
    ):
        return SubmissionRepository.get_by_id(
            db,
            submission_id,
        )

    @staticmethod
    def create(
        db: Session,
        submission: SubmissionCreate,
    ):
        return SubmissionRepository.create(
            db,
            submission,
        )

    @staticmethod
    def update(
        db: Session,
        submission_id: int,
        submission: SubmissionUpdate,
    ):
        return SubmissionRepository.update(
            db,
            submission_id,
            submission,
        )

    @staticmethod
    def update_teacher_review(
        db: Session,
        submission_id: int,
        teacher_score: float,
        teacher_feedback: str,
    ):
        return SubmissionRepository.update_teacher_review(
            db=db,
            submission_id=submission_id,
            teacher_score=teacher_score,
            teacher_feedback=teacher_feedback,
        )

    @staticmethod
    def delete(
        db: Session,
        submission_id: int,
    ):
        return SubmissionRepository.delete(
            db,
            submission_id,
        )