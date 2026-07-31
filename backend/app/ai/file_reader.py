from pathlib import Path


SUPPORTED_EXTENSIONS = {
    ".py",
    ".txt",
    ".md",
}


def read_file(file_path: str) -> str:
    path = Path(file_path)

    if not path.exists():
        raise FileNotFoundError(
            f"File not found: {file_path}"
        )

    if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
        raise ValueError(
            f"Unsupported file type: {path.suffix}"
        )

    return path.read_text(
        encoding="utf-8",
        errors="ignore",
    )