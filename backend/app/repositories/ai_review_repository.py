from sqlalchemy.orm import Session

from app.models.ai_review import AIReview
from app.schemas.ai_review import (
    AIReviewCreate,
    AIReviewUpdate,
)


class AIReviewRepository:

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(AIReview)
            .order_by(AIReview.created_at.desc())
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        review_id: int,
    ):
        return (
            db.query(AIReview)
            .filter(AIReview.id == review_id)
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        review: AIReviewCreate,
    ):
        db_review = AIReview(**review.model_dump())

        db.add(db_review)
        db.commit()
        db.refresh(db_review)

        return db_review

    @staticmethod
    def update(
        db: Session,
        review_id: int,
        review: AIReviewUpdate,
    ):
        db_review = (
            db.query(AIReview)
            .filter(AIReview.id == review_id)
            .first()
        )

        if db_review is None:
            return None

        data = review.model_dump()

        for key, value in data.items():
            setattr(db_review, key, value)

        db.commit()
        db.refresh(db_review)

        return db_review

    @staticmethod
    def delete(
        db: Session,
        review_id: int,
    ):
        db_review = (
            db.query(AIReview)
            .filter(AIReview.id == review_id)
            .first()
        )

        if db_review:
            db.delete(db_review)
            db.commit()

        return db_review