import time
import traceback

from sqlalchemy.orm import Session

from app.ai.client import MODEL
from app.ai.file_reader import read_file
from app.ai.prompt_builder import PromptBuilder
from app.ai.providers.base import AIProvider
from app.ai.providers.openai_provider import OpenAIProvider
from app.ai.request import AIReviewRequest

from app.constants.submission_status import SubmissionStatus

from app.repositories.ai_review_repository import AIReviewRepository
from app.repositories.submission_repository import SubmissionRepository

from app.schemas.ai_review import AIReviewCreate


class AIReviewService:

    def __init__(
        self,
        provider: AIProvider | None = None,
    ):
        self.provider = provider or OpenAIProvider()

    def review_submission(
        self,
        db: Session,
        submission_id: int,
    ):
        submission = SubmissionRepository.get_by_id(
            db,
            submission_id,
        )

        if submission is None:
            raise ValueError(
                "Submission not found."
            )

        source_code = read_file(
            submission.file_path
        )

        system_prompt = PromptBuilder.build_python_prompt(
            assignment=submission.assignment.title,
            source_code=source_code,
        )

        request = AIReviewRequest(
            assignment_title=submission.assignment.title,
            assignment_description=submission.assignment.description,
            language="python",
            source_code=source_code,
            system_prompt=system_prompt,
        )

        start = time.perf_counter()

        try:
            result = self.provider.review(request)

        except Exception:
            traceback.print_exc()
            raise
            

        elapsed = round(
            time.perf_counter() - start,
            2,
        )

        review = AIReviewCreate(
            submission_id=submission.id,
            model=MODEL,
            score=result.score,
            feedback=result.summary,
            strengths=result.strengths,
            weaknesses=result.weaknesses,
            recommendations=result.recommendations,
            processing_time=elapsed,
        )

        ai_review = AIReviewRepository.create(
            db,
            review,
        )

        #
        # Update Submission
        #

        submission.ai_score = result.score
        submission.ai_feedback = result.summary
        submission.status = SubmissionStatus.AI_REVIEWED

        db.commit()
        db.refresh(submission)

        return ai_review