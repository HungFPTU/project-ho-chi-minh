export default function CoSoHinhThanh() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-yellow-400/30">
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-yellow-500 min-h-[200px] sm:min-h-[250px] lg:min-h-[280px] flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <div className="border-l-4 border-yellow-300 pl-4 sm:pl-6 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-display text-yellow-200 leading-tight mb-4 drop-shadow-lg">
                Cơ sở thực tiễn
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                Khám phá những điều kiện lịch sử và thực tiễn đã tạo nền tảng cho sự hình thành Tư tưởng Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-yellow-400 text-red-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-300">
          Cơ sở thực tiễn
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300/30 rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Main Content - Vietnam Situation */}
      <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-white rounded-3xl shadow-2xl border-2 border-red-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 drop-shadow-lg">
                I. Tình hình Việt Nam cuối thế kỷ XIX đầu thế kỷ XX
              </h2>
              <p className="text-yellow-200 text-base sm:text-lg opacity-95 font-medium drop-shadow-md">
                Cơ sở thực tiễn nội tại
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-300">
                <span className="text-red-700 font-bold text-2xl">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 md:p-12">
          {/* Gallery Images */}
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                <img
                  src="/images/19-20-1.png"
                  alt="Sự xâm lược của Pháp vào Việt Nam"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                <img
                  src="/images/19-20-2.png"
                  alt="Các phong trào yêu nước Việt Nam"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                <img
                  src="/images/19-20-3.png"
                  alt="Khởi nghĩa Trương Định, Nguyễn Trung Trực"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                <img
                  src="/images/19-20-4.png"
                  alt="Khởi nghĩa Hoàng Hoa Thám"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-8 mb-10">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Năm 1858, thực dân Pháp sau khi đã hoàn thành bình định Việt Nam về mặt quân sự → bắt tay vào việc khai thác thuộc địa VN, biến nước ta từ một quốc gia phong kiến độc lập trở thành một thuộc địa nửa phong kiến.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Sự xâm nhập của chủ nghĩa tư sản Pháp đã làm nảy sinh trong xã hội Việt Nam 2 giai cấp mới: giai cấp công nhân và giai cấp tư sản.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Do mâu thuẫn giai cấp nên các phong trào yêu nước diễn ra không ngừng: khởi nghĩa Trương Định, khởi nghĩa Nguyễn Trung Trực, khởi nghĩa Hoàng Hoa Thám…
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Nhưng đều thất bại do chưa có đường lối đúng đắn, chưa tin tưởng vào lực lượng quần chúng cũng như thắng lợi cuối cùng, chưa có lãnh đạo.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-10 border-2 border-yellow-300 shadow-lg">
            <h4 className="text-red-700 font-bold text-xl mb-4 flex items-center gap-3">
              <div className="w-3 h-6 bg-red-600 rounded-full"></div>
              Bài học thất bại
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">Cách mạng tư sản không giải phóng được dân tộc</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">Cần đường lối cách mạng mới</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">Chủ nghĩa Mác-Lênin là giải pháp</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
            <h4 className="text-red-800 font-bold text-xl mb-3 flex items-center gap-3">
              <div className="w-3 h-6 bg-red-600 rounded-full"></div>
              Kết luận
            </h4>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              Những thất bại của phong trào yêu nước truyền thống đã chứng minh sự bế tắc của con đường cũ và tạo nên nhu cầu cấp thiết phải tìm một lý luận cứu nước khoa học hơn.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - World Situation */}
      <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-white rounded-3xl shadow-2xl border-2 border-yellow-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-red-700 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 drop-shadow-lg">
                II. Tình hình thế giới cuối thế kỷ XIX đầu thế kỷ XX
              </h2>
              <p className="text-red-100 text-base sm:text-lg opacity-95 font-medium drop-shadow-md">
                Cơ sở thực tiễn quốc tế
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-4 border-red-300">
                <span className="text-yellow-200 font-bold text-2xl">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 md:p-12">
          {/* Gallery Images */}
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-red-100 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
                <img
                  src="/images/2-1.png"
                  alt="Cách mạng tháng Mười Nga 1917"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-red-100 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
                <img
                  src="/images/2-2.png"
                  alt="Quốc tế Cộng sản và phong trào cách mạng thế giới"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-8 mb-10">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Cuối thế kỷ XIX, đầu thế kỷ XX, chủ nghĩa tư bản trên thế giới đã phát triển từ giai đoạn tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Nhu cầu cần mở rộng, xâm lược thuộc địa → nảy sinh 3 mâu thuẫn: + Giai cấp vô sản và giai cấp tư sản + Giữa các nước đế quốc + Đế quốc và dân tộc thuộc địa
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Có mâu thuẫn hiển nhiên sẽ có đấu tranh. Điển hình như ở Trung Quốc, Liên Xô, Ấn Độ… Và trong đó tiêu biểu là sự thành công của CMT10 Nga năm 1917 lật đổ giai cấp tư sản và giai cấp địa chủ phong kiến. Xây dựng nên XHCN và mở ra con đường cứu nước cho các dân tộc bị áp bức trên thế giới.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Ngày 2-3-1919, Quốc tế Cộng sản ra đời ở Mátxcơva trở thành Bộ tham mưu lãnh đạo phong trào cách mạng thế giới. Đẩy mạnh tuyên truyền chủ nghĩa Mác Lênin và kinh nghiệm CMT10 Nga ra khắp thế giới → Ảnh hưởng to lớn đến Nguyễn Ái Quốc trên hành trình tìm mục tiêu và con đường cứu nước
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-10 border-2 border-red-300 shadow-lg">
            <h4 className="text-red-700 font-bold text-xl mb-4 flex items-center gap-3">
              <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
              Ý nghĩa lịch sử
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">CMT10 Nga chứng minh chủ nghĩa Mác-Lênin đúng</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">Quốc tế Cộng sản định hướng phong trào thế giới</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                <span className="text-gray-800 text-lg font-medium">Ảnh hưởng trực tiếp đến Nguyễn Ái Quốc</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-yellow-100 to-red-100 rounded-2xl p-6 border-2 border-yellow-300 shadow-lg">
            <h4 className="text-red-800 font-bold text-xl mb-3 flex items-center gap-3">
              <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
              Kết luận
            </h4>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              Những cơ sở thực tiễn này đã tạo nên điều kiện lịch sử khách quan, thúc đẩy Nguyễn Ái Quốc tiếp thu chủ nghĩa Mác-Lênin và sáng lập Đảng Cộng sản Việt Nam, đưa cách mạng Việt Nam bước sang trang mới.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gradient-to-br from-red-100 via-yellow-100 to-white rounded-3xl border-2 border-red-300 shadow-2xl p-8 sm:p-10 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 font-display mb-6 drop-shadow-lg">
            Tổng kết cơ sở thực tiễn
          </h2>
          <p className="text-gray-800 leading-relaxed max-w-4xl mx-auto text-xl font-medium">
            Những điều kiện lịch sử và thực tiễn ở Việt Nam và trên thế giới đã tạo nên nền tảng vững chắc cho sự ra đời và phát triển của Tư tưởng Hồ Chí Minh, từ đó định hướng con đường cách mạng của dân tộc Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
            <h3 className="text-red-700 font-bold text-xl mb-4 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              Cơ sở nội tại
            </h3>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              Tình hình Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX với sự thất bại của các phong trào yêu nước truyền thống.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
            <h3 className="text-red-700 font-bold text-xl mb-4 flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-600 rounded-full shadow-md"></div>
              Cơ sở quốc tế
            </h3>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              Phong trào cách mạng thế giới, đặc biệt là thắng lợi của Cách mạng tháng Mười Nga và sự ra đời của Quốc tế Cộng sản.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
