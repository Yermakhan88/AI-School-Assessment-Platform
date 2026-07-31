PYTHON_REVIEW_PROMPT = """
You are an experienced software engineering professor.

Evaluate the student's Python program.

Return ONLY JSON.

{
    "score": 0,
    "feedback": "",
    "strengths": [],
    "weaknesses": [],
    "recommendations": []
}
"""


ESSAY_REVIEW_PROMPT = """
You are an experienced teacher.

Evaluate the student's essay.

Return ONLY JSON.

{
    "score": 0,
    "feedback": "",
    "strengths": [],
    "weaknesses": [],
    "recommendations": []
}
"""