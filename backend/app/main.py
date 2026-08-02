from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.teacher_router import router as teacher_router
from app.api.student_router import router as student_router
from app.api.subject_router import router as subject_router
from app.api.assignment_router import router as assignment_router
from app.api.auth_router import router as auth_router
from app.api.submission_router import router as submission_router
from app.api.ai_review_router import router as ai_review_router
from app.api.dashboard_router import router as dashboard_router
from app.api.report_router import router as report_router
from app.api.settings_router import router as settings_router

from app.database.database import Base, engine

# Импорт моделей
from app.models.teacher import Teacher  # noqa: F401
from app.models.student import Student  # noqa: F401
from app.models.subject import Subject  # noqa: F401
from app.models.assignment import Assignment  # noqa: F401
from app.models.user import User  # noqa: F401
from app.models.submission import Submission  # noqa: F401
from app.models.ai_review import AIReview  # noqa: F401

# Создание таблиц
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI School Assessment Platform API",
    description="Backend API",
    version="1.0.0",
)

# ==========================
# CORS
# ==========================

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Routers
# ==========================

app.include_router(teacher_router)
app.include_router(student_router)
app.include_router(subject_router)
app.include_router(assignment_router)
app.include_router(auth_router)
app.include_router(submission_router)
app.include_router(ai_review_router)
app.include_router(dashboard_router)
app.include_router(report_router)
app.include_router(settings_router)

# ==========================
# Endpoints
# ==========================

@app.get("/")
def root():
    return {
        "message": "AI School Assessment Platform API",
        "database": "PostgreSQL",
        "status": "running",
    }


@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "database": "connected",
    }