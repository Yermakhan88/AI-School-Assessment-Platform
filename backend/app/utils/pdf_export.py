from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate


class PDFExporter:

    @staticmethod
    def generate_teacher_report(
        statistics: dict,
    ) -> bytes:
        buffer = BytesIO()

        doc = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        elements = []

        elements.append(
            Paragraph(
                "<b>AI School Assessment Platform</b>",
                styles["Title"],
            )
        )

        elements.append(
            Paragraph(
                "Teacher Report",
                styles["Heading2"],
            )
        )

        elements.append(
            Paragraph(
                f"Teachers: {statistics['teachers']}",
                styles["BodyText"],
            )
        )

        elements.append(
            Paragraph(
                f"Students: {statistics['students']}",
                styles["BodyText"],
            )
        )

        elements.append(
            Paragraph(
                f"Assignments: {statistics['assignments']}",
                styles["BodyText"],
            )
        )

        elements.append(
            Paragraph(
                f"Submissions: {statistics['submissions']}",
                styles["BodyText"],
            )
        )

        doc.build(elements)

        pdf = buffer.getvalue()

        buffer.close()

        return pdf