from sqlalchemy.orm import Session

from app.repositories.student_repository import StudentRepository
from app.schemas.student import StudentCreate, StudentUpdate


class StudentService:

    @staticmethod
    def get_all(db: Session):
        return StudentRepository.get_all(db)

    @staticmethod
    def get_by_id(db: Session, student_id: int):
        return StudentRepository.get_by_id(db, student_id)

    @staticmethod
    def create(db: Session, student: StudentCreate):
        return StudentRepository.create(db, student)

    @staticmethod
    def update(
        db: Session,
        student_id: int,
        student: StudentUpdate,
    ):
        return StudentRepository.update(
            db,
            student_id,
            student,
        )

    @staticmethod
    def delete(db: Session, student_id: int):
        return StudentRepository.delete(
            db,
            student_id,
        )