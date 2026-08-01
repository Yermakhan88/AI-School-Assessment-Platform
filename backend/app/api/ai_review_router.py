from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.ai_review_service import AIReviewService

router = APIRouter(
    prefix="/ai-review",
    tags=["AI Review"],
)

service = AIReviewService()


@router.post("/{submission_id}")
def review_submission(
    submission_id: int,
    db: Session = Depends(get_db),
):
    try:
        return service.review_submission(
            db,
            submission_id,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )