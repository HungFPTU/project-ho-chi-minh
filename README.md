# Tư Tưởng Hồ Chí Minh - Timeline Website

🌟 **Website tương tác về hành trình tư tưởng Hồ Chí Minh** - Di sản vĩnh cửu của dân tộc Việt Nam

## 📋 Tổng quan

Website này trình bày một cách sống động và tương tác về quá trình hình thành và phát triển tư tưởng Hồ Chí Minh qua các giai đoạn lịch sử quan trọng. Với thiết kế responsive, màu sắc dân tộc và các tính năng tương tác hiện đại.

## ✨ Tính năng chính

### 🎨 Thiết kế
- **Responsive Design**: Hoạt động hoàn hảo trên mọi thiết bị
- **Màu sắc dân tộc**: Đỏ quốc kỳ, vàng quốc huy, xanh navy
- **Typography cổ điển**: Font serif tôn kính và trang trọng

### 🚀 Tính năng
- **2 Trang chính**: Cơ sở hình thành & Quá trình hình thành
- **Navigation tương tác**: Menu hamburger trên mobile
- **Sidebar thông minh**: Theo dõi tiến độ đọc, highlight active section
- **Gallery với Lightbox**: Phóng to hình ảnh
- **Smooth animations**: Transitions mượt mà

### 📱 Responsive
- **Mobile-first**: Tối ưu cho điện thoại
- **Tablet & Desktop**: Trải nghiệm đầy đủ
- **Touch-friendly**: Min 44px touch targets

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Linting**: ESLint + TypeScript ESLint

## 🚀 Cài đặt và chạy

```bash
# Clone repository
git clone [repository-url]
cd project-ho-chi-minh

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Cấu trúc project

```
src/
├── components/
│   ├── Hero.tsx              # Hero section với gradient
│   ├── SideNav.tsx           # Sidebar với progress tracking
│   ├── Section.tsx           # Component hiển thị từng giai đoạn
│   └── CoSoHinhThanh.tsx     # Trang Cơ sở hình thành
├── data/
│   ├── periods.ts            # Dữ liệu các giai đoạn
│   └── rubric.ts             # Dữ liệu tiêu chí đánh giá
├── App.tsx                   # Main app component
├── index.css                 # Global styles + responsive
└── main.tsx                  # Entry point
```

## 🎯 Các giai đoạn được trình bày

1. **Trước 1911** - Thời kỳ hình thành tư tưởng yêu nước
2. **1911-1920** - Bước đầu tiếp cận văn hóa phương Tây
3. **1920-1930** - Tham gia cách mạng thế giới
4. **1930-1945** - Lãnh đạo cách mạng Việt Nam
5. **1945-1969** - Xây dựng chủ nghĩa xã hội

## 🤝 Đóng góp

Website này là sản phẩm của nhóm HCM202 - một dự án học thuật nhằm tôn vinh di sản tư tưởng Hồ Chí Minh.

## 📄 License

© 2024 - Tư tưởng Hồ Chí Minh: Di sản vĩnh cửu của dân tộc

---

**Lưu ý**: Hình ảnh minh họa được cung cấp bởi cộng đồng, có bản quyền tương ứng.