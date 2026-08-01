from app.ai.client import client

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Say hello"
)

print(response.output_text)