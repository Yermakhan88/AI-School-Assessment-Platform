from sqlalchemy.orm import Session

from app.models.student import Student
from app.schemas.student import StudentCreate, StudentUpdate


class StudentRepository:

    @staticmethod
    def get_all(db: Session):
        return db.query(Student).order_by(Student.id).all()

    @staticmethod
    def get_by_id(db: Session, student_id: int):
        return (
            db.query(Student)
            .filter(Student.id == student_id)
            .first()
        )

    @staticmethod
    def create(db: Session, student: StudentCreate):
        db_student = Student(
            full_name=student.full_name,
            email=student.email,
            phone=student.phone,
            group_name=student.group_name,
            is_active=student.is_active,
        )

        db.add(db_student)
        db.commit()
        db.refresh(db_student)

        return db_student

    @staticmethod
    def update(
        db: Session,
        student_id: int,
        student: StudentUpdate,
    ):
        db_student = (
            db.query(Student)
            .filter(Student.id == student_id)
            .first()
        )

        if db_student is None:
            return None

        db_student.full_name = student.full_name
        db_student.email = student.email
        db_student.phone = student.phone
        db_student.group_name = student.group_name
        db_student.is_active = student.is_active

        db.commit()
        db.refresh(db_student)

        return db_student

    @staticmethod
    def delete(db: Session, student_id: int):
        db_student = (
            db.query(Student)
            .filter(Student.id == student_id)
            .first()
        )

        if db_student:
            db.delete(db_student)
            db.commit()

        return db_student