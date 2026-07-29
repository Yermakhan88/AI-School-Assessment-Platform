from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.student import (
    StudentCreate,
    StudentResponse,
    StudentUpdate,
)
from app.services.student_service import StudentService

router = APIRouter(
    prefix="/api/students",
    tags=["Students"],
)


@router.get("/", response_model=List[StudentResponse])
def get_students(db: Session = Depends(get_db)):
    return StudentService.get_all(db)


@router.get("/{student_id}", response_model=StudentResponse)
def get_student(
    student_id: int,
    db: Session = Depends(get_db),
):
    student = StudentService.get_by_id(db, student_id)

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found",
        )

    return student


@router.post("/", response_model=StudentResponse, status_code=201)
def create_student(
    student: StudentCreate,
    db: Session = Depends(get_db),
):
    return StudentService.create(db, student)


@router.put("/{student_id}", response_model=StudentResponse)
def update_student(
    student_id: int,
    student: StudentUpdate,
    db: Session = Depends(get_db),
):
    updated_student = StudentService.update(
        db,
        student_id,
        student,
    )

    if updated_student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found",
        )

    return updated_student


@router.delete("/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(get_db),
):
    student = StudentService.delete(db, student_id)

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found",
        )

    return {
        "message": "Student deleted successfully",
    }