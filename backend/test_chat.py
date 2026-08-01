from app.ai.client import client

try:
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "user",
                "content": "Reply with exactly: OpenAI connection successful",
            }
        ],
    )

    print(response.choices[0].message.content)

except Exception as e:
    print(type(e).__name__)
    print(e)