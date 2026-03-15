$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path $projectRoot

$pythonExe = Join-Path $projectRoot ".venv\Scripts\python.exe"
$requirementsFile = Join-Path $projectRoot "ml_service\requirements.txt"

if (-not (Test-Path $pythonExe)) {
    Write-Error "Virtual environment not found. Run: python -m venv .venv"
    exit 1
}

if (-not (Test-Path $requirementsFile)) {
    Write-Error "Requirements file not found at ml_service\requirements.txt"
    exit 1
}

& $pythonExe -m flask --app ml_service.app run --host 127.0.0.1 --port 5000 --no-debugger --no-reload
