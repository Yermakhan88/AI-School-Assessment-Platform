from sqlalchemy.orm import Session

from app.repositories.teacher_repository import TeacherRepository
from app.schemas.teacher import TeacherCreate, TeacherUpdate


class TeacherService:

    @staticmethod
    def get_all(db: Session):
        return TeacherRepository.get_all(db)

    @staticmethod
    def get_by_id(db: Session, teacher_id: int):
        return TeacherRepository.get_by_id(db, teacher_id)

    @staticmethod
    def create(db: Session, teacher: TeacherCreate):
        return TeacherRepository.create(db, teacher)

    @staticmethod
    def update(
        db: Session,
        teacher_id: int,
        teacher: TeacherUpdate,
    ):
        return TeacherRepository.update(
            db,
            teacher_id,
            teacher,
        )

    @staticmethod
    def delete(db: Session, teacher_id: int):
        return TeacherRepository.delete(db, teacher_id)