# AI School Assessment Platform

# Entity Relationship Diagram (ERD)

## Database Structure

The platform uses a relational PostgreSQL database.

---

# Entities

## User

Stores authentication and authorization information.

Fields

- id
- full_name
- email
- password_hash
- role
- is_active

---

## Teacher

Stores teacher information.

Fields

- id
- full_name
- email
- subject
- is_active

---

## Student

Stores student information.

Fields

- id
- full_name
- email
- phone
- group_name
- is_active

---

## Subject

Stores school subjects.

Fields

- id
- name
- code
- description
- is_active

---

## Assignment

Stores homework and assessment tasks.

Fields

- id
- title
- description
- teacher_id
- subject_id
- due_date
- max_score
- is_active

Relationships

- Teacher → Assignment (1:N)
- Subject → Assignment (1:N)

---

## Submission

Stores uploaded homework.

Fields

- id
- assignment_id
- student_id
- file_name
- file_path
- submitted_at
- status

Relationships

- Assignment → Submission (1:N)
- Student → Submission (1:N)

---

## AI Review

Stores AI assessment results.

Fields

- id
- submission_id
- model
- score
- feedback
- strengths
- weaknesses
- recommendations
- processing_time
- created_at

Relationship

- Submission → AI Review (1:N)

---

# ER Diagram

```text
Teacher
    │
    │ 1
    │
    ├───────────────┐
    │               │
    ▼               │
Assignment          │
    ▲               │
    │               │
    │               │
Subject             │
                    │
                    ▼
               Submission
                    ▲
                    │
Student             │
                    │
                    ▼
                AI Review
```

---

# Cardinality

Teacher

1 → N Assignments

Subject

1 → N Assignments

Assignment

1 → N Submissions

Student

1 → N Submissions

Submission

1 → N AI Reviews

---

# Future Extensions

The database can be extended with:

- Notifications
- Attendance
- Exams
- Courses
- AI Tutor
- Learning Analytics
- Plagiarism Detection