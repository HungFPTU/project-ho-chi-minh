# Hướng dẫn thêm hình ảnh cho trang web Hồ Chí Minh

## Cơ sở thực tiễn - Các hình ảnh cần thiết

### I. Tình hình Việt Nam cuối thế kỷ XIX đầu thế kỷ XX
Đặt các file hình ảnh vào thư mục `public/images/` với các tên sau:

1. **sample-vietnam-colonial.jpg** - Hình ảnh về sự xâm lược của Pháp vào Việt Nam năm 1858
   - Gợi ý: Hình ảnh bản đồ Việt Nam thời kỳ thực dân Pháp, hoặc hình ảnh quân đội Pháp

2. **sample-national-uprisings.jpg** - Hình ảnh các phong trào yêu nước
   - Gợi ý: Hình ảnh khởi nghĩa Trương Định, Nguyễn Trung Trực, Hoàng Hoa Thám

3. **sample-french-colonialism.jpg** - Hình ảnh về chế độ thực dân Pháp
   - Gợi ý: Hình ảnh Hà Nội hoặc Sài Gòn thời kỳ thực dân, hình ảnh nông dân Việt Nam khổ cực

### II. Tình hình thế giới cuối thế kỷ XIX đầu thế kỷ XX
4. **sample-world-revolution.jpg** - Hình ảnh về chủ nghĩa đế quốc
   - Gợi ý: Hình ảnh các nước đế quốc châu Âu, bản đồ thuộc địa thế giới

5. **sample-october-revolution.jpg** - Hình ảnh Cách mạng tháng Mười Nga 1917
   - Gợi ý: Hình ảnh Lenin, Hồng quân, cách mạng tháng Mười

6. **sample-comintern-formation.jpg** - Hình ảnh Quốc tế Cộng sản
   - Gợi ý: Hình ảnh Lenin tại Quốc tế Cộng sản, biểu tượng Quốc tế Cộng sản

7. **sample-world-revolutionary-movements.jpg** - Hình ảnh phong trào cách mạng thế giới
   - Gợi ý: Hình ảnh phong trào cách mạng ở Trung Quốc, Ấn Độ, các nước châu Á

## Cách thêm hình ảnh:

1. **Chuẩn bị hình ảnh:**
   - Định dạng: JPG, PNG, WebP
   - Kích thước khuyến nghị: 800x600px hoặc lớn hơn cho chất lượng tốt
   - Dung lượng: < 500KB mỗi file

2. **Đặt vào thư mục:**
   ```
   public/images/
   ├── sample-vietnam-colonial.jpg
   ├── sample-national-uprisings.jpg
   ├── sample-french-colonialism.jpg
   ├── sample-world-revolution.jpg
   ├── sample-october-revolution.jpg
   ├── sample-comintern-formation.jpg
   └── sample-world-revolutionary-movements.jpg
   ```

3. **Kiểm tra hiển thị:**
   - Sau khi thêm hình ảnh, refresh trang web
   - Hình ảnh sẽ tự động thay thế các placeholder

## Lưu ý:
- Các link hình ảnh trong code đã được thiết lập sẵn
- Bạn chỉ cần đặt hình ảnh với đúng tên file vào thư mục `public/images/`
- Nếu đổi tên file, cần cập nhật lại đường dẫn trong file `src/data/periods.ts`

## Nguồn hình ảnh gợi ý:
- Wikimedia Commons (miễn phí bản quyền)
- Bảo tàng Cách mạng Việt Nam
- Bảo tàng Hồ Chí Minh
- Kho ảnh tư liệu lịch sử
