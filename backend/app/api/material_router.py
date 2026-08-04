from pathlib import Path
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
from app.models.material import Material
from app.schemas.material import MaterialResponse
from app.services.material_service import MaterialService

router = APIRouter(
    prefix="/api/materials",
    tags=["Materials"],
)

UPLOAD_DIR = Path("uploads/materials")
UPLOAD_DIR.mkdir(
    parents=True,
    exist_ok=True,
)


@router.get(
    "/",
    response_model=list[MaterialResponse],
)
def get_materials(
    db: Session = Depends(get_db),
):
    return MaterialService.get_all(db)


@router.get(
    "/{material_id}",
    response_model=MaterialResponse,
)
def get_material(
    material_id: int,
    db: Session = Depends(get_db),
):
    material = MaterialService.get_by_id(
        db,
        material_id,
    )

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Material not found.",
        )

    return material


@router.post(
    "/upload",
    response_model=MaterialResponse,
)
async def upload_material(
    title: str = Form(...),
    grade: int = Form(...),
    teacher_id: int = Form(...),
    subject_id: int = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    extension = Path(
        file.filename
    ).suffix.lower()

    if extension not in [
        ".pdf",
        ".docx",
        ".pptx",
        ".txt",
    ]:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type.",
        )

    filepath = (
        UPLOAD_DIR /
        file.filename
    )

    with open(
        filepath,
        "wb",
    ) as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    material = Material(
        title=title,
        filename=file.filename,
        filepath=str(filepath),
        file_type=extension,
        grade=grade,
        teacher_id=teacher_id,
        subject_id=subject_id,
        is_processed=False,
    )

    return MaterialService.create(
        db,
        material,
    )


@router.post(
    "/{material_id}/analyze",
    response_model=MaterialResponse,
)
def analyze_material(
    material_id: int,
    db: Session = Depends(get_db),
):
    material = MaterialService.analyze(
        db,
        material_id,
    )

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Material not found.",
        )

    return material