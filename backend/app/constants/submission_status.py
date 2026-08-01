from enum import StrEnum


class SubmissionStatus(StrEnum):
    UPLOADED = "UPLOADED"

    AI_REVIEWED = "AI_REVIEWED"

    TEACHER_REVIEWED = "TEACHER_REVIEWED"

    PUBLISHED = "PUBLISHED"