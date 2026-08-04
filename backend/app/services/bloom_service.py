class BloomService:

    @staticmethod
    def get_level(
        grade: int,
    ):

        if grade <= 4:

            return "Understand"

        if grade <= 9:

            return "Apply"

        return "Create"