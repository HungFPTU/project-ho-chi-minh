Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "    TU TUONG HO CHI MINH - PUSH TO GITHUB" -ForegroundColor Yellow
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = Read-Host "Nhap URL cua GitHub repository (VD: https://github.com/username/repo.git)"

Write-Host ""
Write-Host "Dang cau hinh GitHub repository..." -ForegroundColor Green

# Thử thêm remote, nếu đã tồn tại thì remove và add lại
$addResult = git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Repository da ton tai, dang cap nhat..." -ForegroundColor Yellow
    git remote remove origin
    git remote add origin $repoUrl
}

Write-Host ""
Write-Host "Dang push code len GitHub..." -ForegroundColor Green
$pushResult = git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "===============================================" -ForegroundColor Green
    Write-Host "           ✅ PUSH THANH CONG!" -ForegroundColor Green
    Write-Host "===============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository: $repoUrl" -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 Chuc mung! Code da duoc day len GitHub thanh cong!" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "📝 Ke tiep:" -ForegroundColor Cyan
    Write-Host "   1. Truy cap repository tren GitHub de kiem tra" -ForegroundColor White
    Write-Host "   2. Co the deploy len Vercel hoac GitHub Pages" -ForegroundColor White
    Write-Host "   3. Xem file GITHUB_SETUP.md de biet them chi tiet" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ PUSH THAT BAI!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Vui long kiem tra:" -ForegroundColor Yellow
    Write-Host "   - Repository URL co chinh xac khong" -ForegroundColor White
    Write-Host "   - Ban co quyen push vao repository khong" -ForegroundColor White
    Write-Host "   - Internet connection on dinh khong" -ForegroundColor White
    Write-Host ""
    Write-Host "Xem file GITHUB_SETUP.md de huong dan chi tiet." -ForegroundColor Cyan
    Write-Host ""
}

Read-Host "Nhan Enter de thoat"
