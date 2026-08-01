from openai import APIStatusError

from app.ai.client import client, MODEL

try:
    response = client.responses.create(
        model=MODEL,
        input="Reply with exactly: OpenAI connection successful",
    )

    print("SUCCESS")
    print(response.output_text)

except APIStatusError as e:
    print("Status code:", e.status_code)
    print("Response:", e.response.text)

except Exception as e:
    print(type(e).__name__)
    print(e)