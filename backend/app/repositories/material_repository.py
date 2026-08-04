from sqlalchemy.orm import Session

from app.models.material import Material


class MaterialRepository:

    @staticmethod
    def get_all(
        db: Session,
    ):
        return (
            db.query(Material)
            .order_by(Material.id.desc())
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        material_id: int,
    ):
        return (
            db.query(Material)
            .filter(Material.id == material_id)
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

    @staticmethod
    def save_ai_analysis(
        db: Session,
        material_id: int,
        topic: str,
        learning_objectives: str,
        bloom_level: str,
        generated_assignment: str,
        generated_rubric: str,
    ):
        material = (
            db.query(Material)
            .filter(Material.id == material_id)
            .first()
        )

        if material is None:
            return None

        material.topic = topic
        material.learning_objectives = learning_objectives
        material.bloom_level = bloom_level
        material.generated_assignment = generated_assignment
        material.generated_rubric = generated_rubric
        material.is_processed = True

        db.commit()
        db.refresh(material)

        return material