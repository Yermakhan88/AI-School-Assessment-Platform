from pydantic import BaseModel, ConfigDict, EmailStr


class StudentBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    group_name: str
    is_active: bool = True


class StudentCreate(StudentBase):
    pass


class StudentUpdate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: int

    model_config = ConfigDict(from_attributes=True)