from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from fastapi.responses import Response

from app.database.database import get_db
from app.services.report_service import ReportService

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"],
)


@router.get("/statistics")
def get_statistics(
    db: Session = Depends(get_db),
):
    return ReportService.get_statistics(db)


@router.get("/submissions")
def get_submissions(
    db: Session = Depends(get_db),
):
    return ReportService.get_submissions(db)


@router.get("/teacher/pdf")
def teacher_report(
    db: Session = Depends(get_db),
):
    pdf = ReportService.generate_teacher_report(
        db,
    )

    return Response(
        content=pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
                "attachment; filename=teacher_report.pdf"
        },
    )