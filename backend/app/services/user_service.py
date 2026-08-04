from sqlalchemy.orm import Session

from app.auth.security import verify_password
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate


class UserService:

    @staticmethod
    def register(
        db: Session,
        user: UserCreate,
    ):
        existing = UserRepository.get_by_email(
            db,
            user.email,
        )

        if existing:
            raise ValueError(
                "Email already exists"
            )

        return UserRepository.create(
            db,
            user,
        )

    @staticmethod
    def authenticate(
        db: Session,
        email: str,
        password: str,
    ):
        user = UserRepository.get_by_email(
            db,
            email,
        )

        if user is None:
            return None

        if not verify_password(
            password,
            user.password_hash,
        ):
            return None

        return user

    @staticmethod
    def get_current_user(
        db: Session,
        user_id: int,
    ):
        return UserRepository.get_by_id(
            db,
            user_id,
        )