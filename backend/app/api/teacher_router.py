from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.teacher import (
    TeacherCreate,
    TeacherResponse,
    TeacherUpdate,
)
from app.services.teacher_service import TeacherService

router = APIRouter(
    prefix="/api/teachers",
    tags=["Teachers"],
)


@router.get("/", response_model=List[TeacherResponse])
def get_teachers(db: Session = Depends(get_db)):
    return TeacherService.get_all(db)


@router.get("/{teacher_id}", response_model=TeacherResponse)
def get_teacher(
    teacher_id: int,
    db: Session = Depends(get_db),
):
    teacher = TeacherService.get_by_id(db, teacher_id)

    if teacher is None:
        raise HTTPException(
            status_code=404,
            detail="Teacher not found",
        )

    return teacher


@router.post("/", response_model=TeacherResponse, status_code=201)
def create_teacher(
    teacher: TeacherCreate,
    db: Session = Depends(get_db),
):
    return TeacherService.create(db, teacher)


@router.put("/{teacher_id}", response_model=TeacherResponse)
def update_teacher(
    teacher_id: int,
    teacher: TeacherUpdate,
    db: Session = Depends(get_db),
):
    updated_teacher = TeacherService.update(
        db,
        teacher_id,
        teacher,
    )

    if updated_teacher is None:
        raise HTTPException(
            status_code=404,
            detail="Teacher not found",
        )

    return updated_teacher


@router.delete("/{teacher_id}")
def delete_teacher(
    teacher_id: int,
    db: Session = Depends(get_db),
):
    teacher = TeacherService.delete(db, teacher_id)

    if teacher is None:
        raise HTTPException(
            status_code=404,
            detail="Teacher not found",
        )

    return {"message": "Teacher deleted successfully"}