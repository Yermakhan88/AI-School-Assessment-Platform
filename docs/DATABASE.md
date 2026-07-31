# Database Structure

## Tables

- users
- teachers
- students
- subjects
- assignments
- submissions
- ai_reviews

---

## Relationships

```
Teacher
     │
     ▼
Assignment
     ▲
     │
Subject

Assignment
     │
     ▼
Submission

Submission
     │
     ▼
AI Review
```