from pydantic import BaseModel, ConfigDict, EmailStr


class TeacherBase(BaseModel):
    full_name: str
    email: EmailStr
    subject: str
    is_active: bool = True


class TeacherCreate(TeacherBase):
    pass


class TeacherUpdate(TeacherBase):
    pass


class TeacherResponse(TeacherBase):
    id: int

    model_config = ConfigDict(from_attributes=True)