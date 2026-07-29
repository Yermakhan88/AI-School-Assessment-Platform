from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.teacher_router import router as teacher_router
from app.database.database import Base, engine

# Импорт моделей
from app.models.teacher import Teacher  # noqa: F401

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