import json

from sqlalchemy.orm import Session

from app.models.material import Material
from app.repositories.material_repository import (
    MaterialRepository,
)

from app.services.material_parser import MaterialParser
from app.services.topic_detector import TopicDetector


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

    @staticmethod
    def analyze(
        db: Session,
        material_id: int,
    ):
        material = MaterialRepository.get_by_id(
            db,
            material_id,
        )

        if material is None:
            return None

        #
        # Parse uploaded material
        #

        text = MaterialParser.parse(
            material.filepath,
        )

        #
        # AI Analysis
        #

        result = TopicDetector.detect(text)

        objectives = json.dumps(
            result["learning_objectives"],
            ensure_ascii=False,
        )

        MaterialRepository.save_ai_analysis(
            db=db,
            material_id=material.id,
            topic=result["topic"],
            learning_objectives=objectives,
            bloom_level=result["bloom_level"],
            generated_assignment="",
            generated_rubric="",
        )

        return MaterialRepository.get_by_id(
            db,
            material.id,
        )