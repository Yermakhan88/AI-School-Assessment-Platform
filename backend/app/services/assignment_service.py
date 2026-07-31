from sqlalchemy.orm import Session

from app.repositories.assignment_repository import AssignmentRepository
from app.schemas.assignment import (
    AssignmentCreate,
    AssignmentUpdate,
)


class AssignmentService:

    @staticmethod
    def get_all(db: Session):
        return AssignmentRepository.get_all(db)

    @staticmethod
    def get_by_id(
        db: Session,
        assignment_id: int,
    ):
        return AssignmentRepository.get_by_id(
            db,
            assignment_id,
        )

    @staticmethod
    def create(
        db: Session,
        assignment: AssignmentCreate,
    ):
        return AssignmentRepository.create(
            db,
            assignment,
        )

    @staticmethod
    def update(
        db: Session,
        assignment_id: int,
        assignment: AssignmentUpdate,
    ):
        return AssignmentRepository.update(
            db,
            assignment_id,
            assignment,
        )

    @staticmethod
    def delete(
        db: Session,
        assignment_id: int,
    ):
        return AssignmentRepository.delete(
            db,
            assignment_id,
        )