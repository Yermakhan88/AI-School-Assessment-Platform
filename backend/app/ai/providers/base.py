from typing import Protocol

from app.ai.schemas import AIReviewResult


class AIProvider(Protocol):
    def review(
        self,
        prompt: str,
        text: str,
    ) -> AIReviewResult:
        """
        Analyze text and return structured AI review.
        """
        ...