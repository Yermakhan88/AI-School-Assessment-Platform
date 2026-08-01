import requests

from app.ai.client import API_KEY

response = requests.get(
    "https://api.openai.com/v1/me",
    headers={
        "Authorization": f"Bearer {API_KEY}"
    },
)

print(response.status_code)
print(response.text)