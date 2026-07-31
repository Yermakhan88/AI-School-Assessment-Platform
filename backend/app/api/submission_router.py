from typing import List
import shutil

from fastapi import (
    APIRouter,
    Depends,
    File,
    Form,
    HTTPException,
    UploadFile,
)
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.submission import Submission
from app.schemas.submission import (
    SubmissionCreate,
    SubmissionResponse,
    SubmissionUpdate,
)
from app.services.submission_service import SubmissionService
from app.utils.file_storage import (
    UPLOAD_DIR,
    generate_filename,
)

router = APIRouter(
    prefix="/api/submissions",
    tags=["Submissions"],
)


@router.get("/", response_model=List[SubmissionResponse])
def get_submissions(
    db: Session = Depends(get_db),
):
    return SubmissionService.get_all(db)


@router.get("/{submission_id}", response_model=SubmissionResponse)
def get_submission(
    submission_id: int,
    db: Session = Depends(get_db),
):
    submission = SubmissionService.get_by_id(
        db,
        submission_id,
    )

    if submission is None:
        raise HTTPException(
            status_code=404,
            detail="Submission not found",
        )

    return submission


@router.post(
    "/",
    response_model=SubmissionResponse,
    status_code=201,
)
def create_submission(
    submission: SubmissionCreate,
    db: Session = Depends(get_db),
):
    return SubmissionService.create(
        db,
        submission,
    )


@router.put(
    "/{submission_id}",
    response_model=SubmissionResponse,
)
def update_submission(
    submission_id: int,
    submission: SubmissionUpdate,
    db: Session = Depends(get_db),
):
    updated_submission = SubmissionService.update(
        db,
        submission_id,
        submission,
    )

    if updated_submission is None:
        raise HTTPException(
            status_code=404,
            detail="Submission not found",
        )

    return updated_submission


@router.delete("/{submission_id}")
def delete_submission(
    submission_id: int,
    db: Session = Depends(get_db),
):
    submission = SubmissionService.delete(
        db,
        submission_id,
    )

    if submission is None:
        raise HTTPException(
            status_code=404,
            detail="Submission not found",
        )

    return {
        "message": "Submission deleted successfully",
    }


@router.post("/upload")
async def upload_submission(
    assignment_id: int = Form(...),
    student_id: int = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    filename = generate_filename(file.filename)

    destination = UPLOAD_DIR / filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    submission = Submission(
        assignment_id=assignment_id,
        student_id=student_id,
        file_name=file.filename,
        file_path=str(destination),
        status="UPLOADED",
    )

    db.add(submission)
    db.commit()
    db.refresh(submission)

    return {
        "message": "Homework uploaded successfully",
        "submission_id": submission.id,
        "status": submission.status,
        "file_name": submission.file_name,
    }