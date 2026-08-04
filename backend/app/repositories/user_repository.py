from sqlalchemy.orm import Session

from app.auth.security import hash_password
from app.models.user import User
from app.schemas.user import UserCreate


class UserRepository:

    @staticmethod
    def get_by_id(
        db: Session,
        user_id: int,
    ):
        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    @staticmethod
    def get_by_email(
        db: Session,
        email: str,
    ):
        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        user: UserCreate,
    ):
        db_user = User(
            full_name=user.full_name,
            email=user.email,
            password_hash=hash_password(
                user.password
            ),
            role=user.role,
            is_active=user.is_active,
        )

        db.add(db_user)
        db.commit()
        db.refresh(db_user)

        return db_user