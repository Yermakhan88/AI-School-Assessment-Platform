from sqlalchemy.orm import Session

from app.models.teacher import Teacher
from app.schemas.teacher import TeacherCreate, TeacherUpdate


class TeacherRepository:

    @staticmethod
    def get_all(db: Session):
        return db.query(Teacher).order_by(Teacher.id).all()

    @staticmethod
    def get_by_id(db: Session, teacher_id: int):
        return db.query(Teacher).filter(Teacher.id == teacher_id).first()

    @staticmethod
    def create(db: Session, teacher: TeacherCreate):
        db_teacher = Teacher(
            full_name=teacher.full_name,
            email=teacher.email,
            subject=teacher.subject,
            is_active=teacher.is_active,
        )

        db.add(db_teacher)
        db.commit()
        db.refresh(db_teacher)

        return db_teacher

    @staticmethod
    def update(
        db: Session,
        teacher_id: int,
        teacher: TeacherUpdate,
    ):
        db_teacher = (
            db.query(Teacher)
            .filter(Teacher.id == teacher_id)
            .first()
        )

        if db_teacher is None:
            return None

        db_teacher.full_name = teacher.full_name
        db_teacher.email = teacher.email
        db_teacher.subject = teacher.subject
        db_teacher.is_active = teacher.is_active

        db.commit()
        db.refresh(db_teacher)

        return db_teacher

    @staticmethod
    def delete(db: Session, teacher_id: int):
        teacher = (
            db.query(Teacher)
            .filter(Teacher.id == teacher_id)
            .first()
        )

        if teacher:
            db.delete(teacher)
            db.commit()

        return teacher