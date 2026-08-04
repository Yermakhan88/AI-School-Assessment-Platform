import traceback

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.ai_review import AIReviewResponse
from app.services.ai_review_service import AIReviewService

router = APIRouter(
    prefix="/api/ai-review",
    tags=["AI Review"],
)

service = AIReviewService()


@router.post(
    "/{submission_id}",
    response_model=AIReviewResponse,
)
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

    except Exception:
        traceback.print_exc()
        raise