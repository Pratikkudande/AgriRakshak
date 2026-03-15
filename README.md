# AgriRakshak

AgriRakshak is a React frontend with a separate Python ML service for grape leaf disease prediction.

## Prerequisites

- Node.js and npm
- Python 3.11

## Frontend Setup

Install frontend dependencies:

```powershell
npm install
```

Run the frontend:

```powershell
npm run dev
```

The frontend runs on the Vite local URL, usually `http://localhost:5173`.

## ML Service Setup

Create the Python virtual environment:

```powershell
python -m venv .venv
```

Install ML service dependencies:

```powershell
.\.venv\Scripts\python.exe -m pip install -r ml_service\requirements.txt
```

Run the ML service:

```powershell
.\start_ml_service.ps1
```

If PowerShell blocks the script, use:

```powershell
powershell -ExecutionPolicy Bypass -File .\start_ml_service.ps1
```

The ML API runs at `http://127.0.0.1:5000`.

## Run Full Project

Open two terminals in `d:\AgriRakshak`.

Terminal 1:

```powershell
.\start_ml_service.ps1
```

Terminal 2:

```powershell
npm run dev
```

## Health Check

Verify the ML service:

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:5000/api/health
```
