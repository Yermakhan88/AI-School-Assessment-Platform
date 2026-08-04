from sqlalchemy.orm import Session

from app.models.material import Material
from app.repositories.material_repository import (
    MaterialRepository,
)


class MaterialService:

    @staticmethod
    def get_all(
        db: Session,
    ):
        return MaterialRepository.get_all(db)

    @staticmethod
    def get_by_id(
        db: Session,
        material_id: int,
    ):
        return MaterialRepository.get_by_id(
            db,
            material_id,
        )

    @staticmethod
    def create(
        db: Session,
        material: Material,
    ):
        return MaterialRepository.create(
            db,
            material,
        )