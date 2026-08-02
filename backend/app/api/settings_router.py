from fastapi import APIRouter
import os

router = APIRouter(
    prefix="/api/settings",
    tags=["Settings"],
)


@router.get("/")
def get_settings():
    return {
        "school_name": "AI School Assessment Platform",
        "version": "1.0.0",
        "openai_model": os.getenv(
            "OPENAI_MODEL",
            "gpt-4.1-mini",
        ),
        "api_status": "Connected",
    }