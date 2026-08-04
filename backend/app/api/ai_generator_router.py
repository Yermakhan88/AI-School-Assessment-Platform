from fastapi import APIRouter

router = APIRouter(
    prefix="/api/ai-generator",
    tags=["AI Generator"],
)