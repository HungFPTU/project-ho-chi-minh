# 🚀 Hướng dẫn Push Code lên GitHub

## 📋 Chuẩn bị

### 1. Tạo Repository trên GitHub

1. Truy cập [GitHub.com](https://github.com)
2. Click **"New repository"**
3. Điền thông tin:
   - **Repository name**: `tu-tuong-ho-chi-minh-timeline` hoặc tên bạn muốn
   - **Description**: `Website tương tác về hành trình tư tưởng Hồ Chí Minh`
   - **Visibility**: Public hoặc Private
4. **KHÔNG** check "Add a README file" (vì đã có rồi)
5. Click **"Create repository"**

### 2. Copy Repository URL

Sau khi tạo, copy URL của repository (ví dụ: `https://github.com/username/tu-tuong-ho-chi-minh-timeline.git`)

## 🔧 Push Code lên GitHub

### Phương pháp 1: Sử dụng Git Command Line

```bash
# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push code lên GitHub
git push -u origin master

# Nếu gặp lỗi "fatal: remote origin already exists"
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```

### Phương pháp 2: Sử dụng GitHub Desktop (Dễ hơn)

1. **Tải GitHub Desktop**: https://desktop.github.com/
2. **Mở GitHub Desktop**
3. **File > Add Local Repository**
4. **Chọn folder**: `G:\HCM202_group1\project-ho-chi-minh`
5. **Publish repository**:
   - Click **"Publish repository"**
   - Điền tên repository
   - Chọn visibility (Public/Private)
   - Click **"Publish Repository"**

## ✅ Kiểm tra

Sau khi push thành công:

1. Truy cập repository trên GitHub
2. Kiểm tra xem tất cả files đã được upload chưa
3. Code sẽ xuất hiện trong repository

## 🎯 Deploy (Tùy chọn)

### Sử dụng GitHub Pages

1. Trong repository, click **Settings**
2. Scroll xuống **Pages**
3. **Source**: Chọn **"GitHub Actions"**
4. GitHub sẽ tự động tạo workflow để deploy
5. Website sẽ được publish tại: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Sử dụng Vercel (Khuyến nghị)

1. Truy cập [Vercel.com](https://vercel.com)
2. **Import Git Repository**
3. Chọn repository vừa tạo
4. Vercel sẽ tự động deploy
5. Nhận URL production (ví dụ: `https://tu-tuong-ho-chi-minh-timeline.vercel.app`)

## 🔧 Troubleshooting

### Lỗi "Permission denied"
```bash
# Nếu gặp lỗi authentication
git config --global credential.helper store
# Sau đó nhập username/password khi push
```

### Lỗi "Repository not found"
- Kiểm tra lại URL repository
- Đảm bảo repository được tạo với tên chính xác
- Kiểm tra quyền access (public/private)

### Lỗi "Branch master not found"
```bash
# Đổi tên branch thành main (nếu cần)
git branch -M main
git push -u origin main
```

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy kiểm tra:
- Repository URL chính xác chưa
- Có quyền push vào repository chưa
- Internet connection ổn định chưa

---

**🎉 Chúc mừng! Project của bạn đã sẵn sàng trên GitHub!**
