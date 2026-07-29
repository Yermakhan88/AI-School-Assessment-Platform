from fastapi import FastAPI

app = FastAPI(
    title="AI School Assessment Platform API",
    description="Backend API for AI School Assessment Platform",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "AI School Assessment Platform API",
        "status": "running",
        "version": "1.0.0",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy"
    }