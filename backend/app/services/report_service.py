from sqlalchemy.orm import Session

from app.repositories.report_repository import (
    ReportRepository,
)
from app.utils.pdf_export import PDFExporter


class ReportService:

    @staticmethod
    def get_statistics(db: Session):
        return ReportRepository.get_statistics(db)

    @staticmethod
    def get_submissions(db: Session):
        return ReportRepository.get_submissions(db)

    @staticmethod
    def generate_teacher_report(
        db: Session,
    ):
        statistics = ReportRepository.get_statistics(
            db,
        )

        return PDFExporter.generate_teacher_report(
            statistics,
        )