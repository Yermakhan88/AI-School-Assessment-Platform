from sqlalchemy.orm import Session, joinedload

from app.models.assignment import Assignment
from app.schemas.assignment import (
    AssignmentCreate,
    AssignmentUpdate,
)


class AssignmentRepository:

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(Assignment)
            .options(
                joinedload(Assignment.teacher),
                joinedload(Assignment.subject),
            )
            .order_by(Assignment.id)
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        assignment_id: int,
    ):
        return (
            db.query(Assignment)
            .options(
                joinedload(Assignment.teacher),
                joinedload(Assignment.subject),
            )
            .filter(Assignment.id == assignment_id)
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        assignment: AssignmentCreate,
    ):
        db_assignment = Assignment(
            title=assignment.title,
            description=assignment.description,
            teacher_id=assignment.teacher_id,
            subject_id=assignment.subject_id,
            due_date=assignment.due_date,
            max_score=assignment.max_score,
            is_active=assignment.is_active,
        )

        db.add(db_assignment)
        db.commit()
        db.refresh(db_assignment)

        return db_assignment

    @staticmethod
    def update(
        db: Session,
        assignment_id: int,
        assignment: AssignmentUpdate,
    ):
        db_assignment = (
            db.query(Assignment)
            .filter(Assignment.id == assignment_id)
            .first()
        )

        if db_assignment is None:
            return None

        db_assignment.title = assignment.title
        db_assignment.description = assignment.description
        db_assignment.teacher_id = assignment.teacher_id
        db_assignment.subject_id = assignment.subject_id
        db_assignment.due_date = assignment.due_date
        db_assignment.max_score = assignment.max_score
        db_assignment.is_active = assignment.is_active

        db.commit()
        db.refresh(db_assignment)

        return db_assignment

    @staticmethod
    def delete(
        db: Session,
        assignment_id: int,
    ):
        db_assignment = (
            db.query(Assignment)
            .filter(Assignment.id == assignment_id)
            .first()
        )

        if db_assignment:
            db.delete(db_assignment)
            db.commit()

        return db_assignment