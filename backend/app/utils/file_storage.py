from pathlib import Path
from uuid import uuid4

UPLOAD_DIR = (
    Path(__file__)
    .resolve()
    .parent.parent.parent
    / "storage"
    / "submissions"
)

UPLOAD_DIR.mkdir(
    parents=True,
    exist_ok=True,
)


def generate_filename(
    original_name: str,
) -> str:
    extension = Path(original_name).suffix

    return f"{uuid4().hex}{extension}"