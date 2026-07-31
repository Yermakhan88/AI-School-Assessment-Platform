from sqlalchemy.orm import Session

from app.models.subject import Subject
from app.schemas.subject import SubjectCreate, SubjectUpdate


class SubjectRepository:

    @staticmethod
    def get_all(db: Session):
        return db.query(Subject).order_by(Subject.id).all()

    @staticmethod
    def get_by_id(db: Session, subject_id: int):
        return (
            db.query(Subject)
            .filter(Subject.id == subject_id)
            .first()
        )

    @staticmethod
    def create(db: Session, subject: SubjectCreate):
        db_subject = Subject(
            name=subject.name,
            code=subject.code,
            description=subject.description,
            is_active=subject.is_active,
        )

        db.add(db_subject)
        db.commit()
        db.refresh(db_subject)

        return db_subject

    @staticmethod
    def update(
        db: Session,
        subject_id: int,
        subject: SubjectUpdate,
    ):
        db_subject = (
            db.query(Subject)
            .filter(Subject.id == subject_id)
            .first()
        )

        if db_subject is None:
            return None

        db_subject.name = subject.name
        db_subject.code = subject.code
        db_subject.description = subject.description
        db_subject.is_active = subject.is_active

        db.commit()
        db.refresh(db_subject)

        return db_subject

    @staticmethod
    def delete(db: Session, subject_id: int):
        db_subject = (
            db.query(Subject)
            .filter(Subject.id == subject_id)
            .first()
        )

        if db_subject:
            db.delete(db_subject)
            db.commit()

        return db_subject