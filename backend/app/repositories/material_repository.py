from sqlalchemy.orm import Session

from app.models.material import Material


class MaterialRepository:

    @staticmethod
    def get_all(
        db: Session,
    ):
        return db.query(Material).all()

    @staticmethod
    def get_by_id(
        db: Session,
        material_id: int,
    ):
        return (
            db.query(Material)
            .filter(
                Material.id == material_id
            )
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        material: Material,
    ):
        db.add(material)

        db.commit()

        db.refresh(material)

        return material