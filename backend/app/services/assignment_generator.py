from app.services.openai_service import OpenAIService


class AssignmentGenerator:

    @staticmethod
    def generate(material: str):

        prompt = f"""
You are an educational assessment expert.

Analyze the educational material.

Return ONLY valid JSON.

Schema:

{{
  "topic": "",
  "grade": 0,
  "learning_objectives": [
    "",
    "",
    ""
  ],
  "bloom_level": "",
  "assignment": {{
    "title": "",
    "description": "",
    "tasks": [
      "",
      "",
      "",
      "",
      ""
    ]
  }},
  "rubric": [
    {{
      "criteria": "",
      "score": 20
    }},
    {{
      "criteria": "",
      "score": 20
    }},
    {{
      "criteria": "",
      "score": 20
    }},
    {{
      "criteria": "",
      "score": 20
    }},
    {{
      "criteria": "",
      "score": 20
    }}
  ]
}}

Rules:

- Return ONLY JSON.
- Grade must be integer.
- Rubric total score = 100.
- Tasks must match Bloom taxonomy.
- Learning objectives must match the topic.

Educational Material:

{material[:8000]}
"""

        return OpenAIService.generate(prompt)