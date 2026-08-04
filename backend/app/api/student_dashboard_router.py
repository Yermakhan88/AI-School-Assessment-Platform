from fastapi import APIRouter

router = APIRouter(
    prefix="/api/student",
    tags=["Student Dashboard"],
)


@router.get("/dashboard")
def dashboard():
    return {
        "assignment": None,
        "submission": None,
    }