# AI School Assessment Platform

# System Architecture

---

## Overall Architecture

```text
                    Web Browser
                          │
                          │
                          ▼
                Next.js Frontend
                          │
              React + TypeScript
                          │
                          ▼
                FastAPI REST API
                          │
          Repository + Service Layer
                          │
                          ▼
                  SQLAlchemy ORM
                          │
                          ▼
                 PostgreSQL Database
                          │
                          ▼
                  File Storage
                          │
                          ▼
                    OpenAI API
```

---

# Backend Architecture

```text
API Router

↓

Service Layer

↓

Repository Layer

↓

SQLAlchemy

↓

PostgreSQL
```

---

# Frontend Architecture

```text
Pages

↓

Dashboard

↓

Components

↓

Hooks

↓

Services

↓

REST API
```

---

# Authentication

```text
User

↓

Login

↓

JWT

↓

Protected API

↓

Role Check
```

Roles

- Administrator

- Teacher

- Student

---

# Assignment Workflow

```text
Teacher

↓

Assignment

↓

Student

↓

Submission

↓

AI Review

↓

Teacher Review

↓

Final Grade
```

---

# AI Workflow

```text
Submission

↓

Read File

↓

Detect File Type

↓

Prompt Engine

↓

OpenAI

↓

JSON Parser

↓

AI Review

↓

Database

↓

Teacher Review
```

---

# Database

```text
User

Teacher

Student

Subject

Assignment

Submission

AI Review
```

---

# Technology Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Base UI
- React Query

Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication

Artificial Intelligence

- OpenAI Responses API

Deployment

- Docker (planned)

Future

- Kubernetes
- CI/CD