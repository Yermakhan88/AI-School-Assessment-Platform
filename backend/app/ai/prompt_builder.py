from app.ai.prompt_loader import load_prompt


class PromptBuilder:

    @staticmethod
    def build_python_prompt(
        assignment: str,
        source_code: str,
    ) -> str:

        system_prompt = load_prompt(
            "python.md"
        )

        return f"""
{system_prompt}

Assignment:

{assignment}

Student Solution:

{source_code}
"""