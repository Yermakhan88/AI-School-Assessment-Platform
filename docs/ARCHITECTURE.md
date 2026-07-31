# AI School Assessment Platform

## System Architecture

The platform follows a modern client-server architecture.

```
Next.js Frontend
        │
        ▼
 FastAPI REST API
        │
        ▼
 SQLAlchemy ORM
        │
        ▼
 PostgreSQL Database
```

---

## Backend Layers

```
API Router
      │
      ▼
Service Layer
      │
      ▼
Repository Layer
      │
      ▼
Database
```

---

## Frontend Layers

```
Pages

↓

Components

↓

Hooks

↓

Services

↓

FastAPI
```

---

## Authentication

- JWT
- bcrypt
- Roles
    - ADMIN
    - TEACHER
    - STUDENT

---

## Modules

- Authentication
- Teachers
- Students
- Subjects
- Assignments
- Submissions
- AI Review
- Analytics