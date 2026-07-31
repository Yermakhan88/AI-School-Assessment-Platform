from pathlib import Path

PROMPTS_DIR = (
    Path(__file__)
    .resolve()
    .parent
    / "prompts"
)


def load_prompt(filename: str) -> str:
    prompt_path = PROMPTS_DIR / filename

    if not prompt_path.exists():
        raise FileNotFoundError(
            f"Prompt not found: {filename}"
        )

    return prompt_path.read_text(
        encoding="utf-8"
    )