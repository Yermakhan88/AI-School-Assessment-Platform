from sqlalchemy.orm import Session

from app.repositories.subject_repository import SubjectRepository
from app.schemas.subject import SubjectCreate, SubjectUpdate


class SubjectService:

    @staticmethod
    def get_all(db: Session):
        return SubjectRepository.get_all(db)

    @staticmethod
    def get_by_id(db: Session, subject_id: int):
        return SubjectRepository.get_by_id(db, subject_id)

    @staticmethod
    def create(db: Session, subject: SubjectCreate):
        return SubjectRepository.create(db, subject)

    @staticmethod
    def update(
        db: Session,
        subject_id: int,
        subject: SubjectUpdate,
    ):
        return SubjectRepository.update(
            db,
            subject_id,
            subject,
        )

    @staticmethod
    def delete(db: Session, subject_id: int):
        return SubjectRepository.delete(
            db,
            subject_id,
        )