from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.assignment import (
    AssignmentCreate,
    AssignmentResponse,
    AssignmentUpdate,
)
from app.services.assignment_service import AssignmentService

router = APIRouter(
    prefix="/api/assignments",
    tags=["Assignments"],
)


@router.get("/", response_model=List[AssignmentResponse])
def get_assignments(db: Session = Depends(get_db)):
    return AssignmentService.get_all(db)


@router.get("/{assignment_id}", response_model=AssignmentResponse)
def get_assignment(
    assignment_id: int,
    db: Session = Depends(get_db),
):
    assignment = AssignmentService.get_by_id(
        db,
        assignment_id,
    )

    if assignment is None:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    return assignment


@router.post(
    "/",
    response_model=AssignmentResponse,
    status_code=201,
)
def create_assignment(
    assignment: AssignmentCreate,
    db: Session = Depends(get_db),
):
    return AssignmentService.create(
        db,
        assignment,
    )


@router.put(
    "/{assignment_id}",
    response_model=AssignmentResponse,
)
def update_assignment(
    assignment_id: int,
    assignment: AssignmentUpdate,
    db: Session = Depends(get_db),
):
    updated_assignment = AssignmentService.update(
        db,
        assignment_id,
        assignment,
    )

    if updated_assignment is None:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    return updated_assignment


@router.delete("/{assignment_id}")
def delete_assignment(
    assignment_id: int,
    db: Session = Depends(get_db),
):
    assignment = AssignmentService.delete(
        db,
        assignment_id,
    )

    if assignment is None:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    return {
        "message": "Assignment deleted successfully",
    }