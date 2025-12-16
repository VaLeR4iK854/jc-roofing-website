@echo off
echo ==========================================
echo   JC Roofing Website - GitHub Deployment
echo ==========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo.
)

echo Adding all files...
git add .

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update JC Roofing website

echo Committing changes...
git commit -m "%commit_msg%"

echo.
echo IMPORTANT: Before running this script, make sure you have:
echo 1. Created a repository on GitHub
echo 2. Have the repository URL ready
echo.

set /p repo_url="Enter your GitHub repository URL (https://github.com/username/repo.git): "

if "%repo_url%"=="" (
    echo Error: Repository URL is required!
    pause
    exit /b
)

echo Adding remote origin...
git remote add origin "%repo_url%" 2>nul || git remote set-url origin "%repo_url%"

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo.
echo ==========================================
echo Deployment complete! 
echo Your website will be available at:
echo https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
echo.
echo Don't forget to enable GitHub Pages in your repository settings!
echo ==========================================
pause
