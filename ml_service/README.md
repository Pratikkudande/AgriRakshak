# ML Service

This service powers the grape disease prediction feature for the AgriRakshak frontend.

## Setup

Use Python 3.11 and create a virtual environment:

```powershell
py -3.11 -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r ml_service\requirements.txt
```

## Run

```powershell
python ml_service\app.py
```

The API will start at `http://localhost:5000`.

## Endpoints

- `GET /api/health`
- `POST /api/predict`

For prediction, send a multipart form request with the image under the `image` field.
