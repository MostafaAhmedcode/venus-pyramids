@echo off
REM ──────────────────────────────────────────────────────────────
REM  start-backend.bat — Start the Venus Pyramids Python backend
REM ──────────────────────────────────────────────────────────────
echo.
echo  Starting Venus Pyramids Backend (port 8000)...
echo  Press Ctrl+C to stop.
echo.
cd /d "%~dp0"
python server.py
