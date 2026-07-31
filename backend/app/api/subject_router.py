from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.subject import (
    SubjectCreate,
    SubjectResponse,
    SubjectUpdate,
)
from app.services.subject_service import SubjectService

router = APIRouter(
    prefix="/api/subjects",
    tags=["Subjects"],
)


@router.get("/", response_model=List[SubjectResponse])
def get_subjects(db: Session = Depends(get_db)):
    return SubjectService.get_all(db)


@router.get("/{subject_id}", response_model=SubjectResponse)
def get_subject(
    subject_id: int,
    db: Session = Depends(get_db),
):
    subject = SubjectService.get_by_id(db, subject_id)

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found",
        )

    return subject


@router.post("/", response_model=SubjectResponse, status_code=201)
def create_subject(
    subject: SubjectCreate,
    db: Session = Depends(get_db),
):
    return SubjectService.create(db, subject)


@router.put("/{subject_id}", response_model=SubjectResponse)
def update_subject(
    subject_id: int,
    subject: SubjectUpdate,
    db: Session = Depends(get_db),
):
    updated_subject = SubjectService.update(
        db,
        subject_id,
        subject,
    )

    if updated_subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found",
        )

    return updated_subject


@router.delete("/{subject_id}")
def delete_subject(
    subject_id: int,
    db: Session = Depends(get_db),
):
    subject = SubjectService.delete(db, subject_id)

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found",
        )

    return {
        "message": "Subject deleted successfully",
    }