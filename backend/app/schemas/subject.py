from pydantic import BaseModel, ConfigDict


class SubjectBase(BaseModel):
    name: str
    code: str
    description: str | None = None
    is_active: bool = True


class SubjectCreate(SubjectBase):
    pass


class SubjectUpdate(SubjectBase):
    pass


class SubjectResponse(SubjectBase):
    id: int

    model_config = ConfigDict(from_attributes=True)