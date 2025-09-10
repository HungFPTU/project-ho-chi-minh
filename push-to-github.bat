@echo off
echo ===============================================
echo    TU TUONG HO CHI MINH - PUSH TO GITHUB
echo ===============================================
echo.

echo Nhap URL cua GitHub repository:
echo (VD: https://github.com/username/tu-tuong-ho-chi-minh-timeline.git)
echo.
set /p repo_url="Repository URL: "

echo.
echo Dang cau hinh GitHub repository...
git remote add origin %repo_url% 2>nul || (
    echo Repository da ton tai, dang cap nhat...
    git remote remove origin
    git remote add origin %repo_url%
)

echo.
echo Dang push code len GitHub...
git push -u origin master

if %errorlevel% equ 0 (
    echo.
    echo ===============================================
    echo ✅ PUSH THANH CONG!
    echo ===============================================
    echo.
    echo Repository: %repo_url%
    echo.
    echo 🎉 Chuc mung! Code da duoc day len GitHub thanh cong!
    echo.
    echo 📝 Ke tiep:
    echo   1. Truy cap repository tren GitHub de kiem tra
    echo   2. Co the deploy len Vercel hoac GitHub Pages
    echo   3. Xem file GITHUB_SETUP.md de biet them chi tiet
    echo.
) else (
    echo.
    echo ❌ PUSH THAT BAI!
    echo.
    echo Vui long kiem tra:
    echo   - Repository URL co chinh xac khong
    echo   - Ban co quyen push vao repository khong
    echo   - Internet connection on dinh khong
    echo.
    echo Xem file GITHUB_SETUP.md de huong dan chi tiet.
    echo.
)

echo Nhan phim bat ky de thoat...
pause >nul
