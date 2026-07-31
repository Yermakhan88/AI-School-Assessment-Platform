from abc import ABC, abstractmethod

from app.ai.schemas import AIReviewResult


class AIProvider(ABC):
    @abstractmethod
    def review(
        self,
        prompt: str,
        text: str,
    ) -> AIReviewResult:
        """
        Analyze text and return structured AI review.
        """
        raise NotImplementedError