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

      {/* Part III - Traditional Values */}
      <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-white rounded-3xl shadow-2xl border-2 border-yellow-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-red-700 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 drop-shadow-lg">
                III.a. Giá trị truyền thống tốt đẹp của dân tộc Việt Nam
              </h2>
              <p className="text-red-100 text-base sm:text-lg opacity-95 font-medium drop-shadow-md">
                Nền tảng tinh thần
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-300">
                <span className="text-red-700 font-bold text-2xl">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 md:p-12">
          {/* Main Content */}
          <div className="space-y-8 mb-10">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                <strong>Truyền thống yêu nước:</strong> Chủ nghĩa yêu nước là giá trị xuyên suốt trong những truyền thống tốt đẹp của dân tộc Việt Nam
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-3 shadow-lg"></div>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Dân ta có một lòng nồng nàn yêu nước, kiên cường đấu tranh, còn tinh thần là còn nước. Chúng ta chiến đấu vì độc lập tự do, để bảo vệ chủ quyền và toàn vẹn lãnh thổ
              </p>
            </div>

            {/* Nguyen Ai Quoc Inheritance */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                Nguyên Ái Quốc tiếp thu
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium leading-relaxed">
                      <strong>Đánh giặc vì độc lập</strong> → <em>độc lập rồi sao nữa?</em>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium leading-relaxed">
                      <strong>Yêu nước gắn liền với yêu dân</strong> → <em>không còn bóc lột nhân dân</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-yellow-100 to-red-100 rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
            <h4 className="text-red-800 font-bold text-xl mb-3 flex items-center gap-3">
              <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
              Ý nghĩa
            </h4>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              Những giá trị truyền thống tốt đẹp của dân tộc Việt Nam, đặc biệt là truyền thống yêu nước, đã được Nguyễn Ái Quốc tiếp thu và phát triển thành nền tảng tinh thần cho Tư tưởng Hồ Chí Minh và cách mạng Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Part III - b. Tinh hoa văn hoá nhân loại */}
      <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-white rounded-3xl shadow-2xl border-2 border-red-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-700 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 drop-shadow-lg">
                III.b. Tinh hoa văn hoá nhân loại
              </h2>
              <p className="text-yellow-200 text-base sm:text-lg opacity-95 font-medium drop-shadow-md">
                Sự tiếp thu và phát triển
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-4 border-red-300">
                <span className="text-yellow-200 font-bold text-2xl">
                  3b
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 md:p-12">
          {/* NHO GIÁO */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              NHO GIÁO
            </h3>

            {/* Gallery Images */}
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                  <img
                    src="/images/nhogiao.png"
                    alt="Nho giáo - Triết lý hành đạo"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                  <img
                    src="/images/nhogiao2.png"
                    alt="Nho giáo - Văn hoá lễ giáo"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* 1. Positive aspects */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                1. Những yếu tố tích cực của Nho giáo mà Bác Hồ vận dụng
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Triết lý hành động:</strong> hành đạo, giúp đời
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Lý tưởng xã hội:</strong> hướng đến một xã hội yên bình
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Triết lý nhân sinh:</strong> từ vua đến dân đều phải lấy tu thân làm gốc
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đề cao văn hoá, lễ giáo:</strong> hình thành truyền thống hiếu học của dân tộc
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Negative aspects */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                2. Những mặt hạn chế, tiêu cực của Nho giáo
              </h4>
              <div className="space-y-4">
                <p className="text-gray-800 text-lg font-medium leading-relaxed mb-4">
                  <strong>Tư tưởng duy tâm, lạc hậu, phản động:</strong>
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                    <span className="text-gray-800 text-lg font-medium">Đẳng cấp, phân biệt giàu nghèo, coi thường lao động chân tay</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                    <span className="text-gray-800 text-lg font-medium">Khinh thường phụ nữ</span>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-lg p-6 border border-red-200">
                  <p className="text-gray-700 text-lg font-medium mb-3"><strong>Ví dụ:</strong></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 font-medium">
                    <div className="bg-red-50 p-3 rounded">"Thượng trí – hạ ngu"</div>
                    <div className="bg-red-50 p-3 rounded">"Quân tử – tiểu nhân"</div>
                    <div className="bg-red-50 p-3 rounded">"Dân ngu khu đen"</div>
                    <div className="bg-red-50 p-3 rounded">"Nhất nam viết hữu, thập nữ viết vô"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Ho Chi Minh's innovation */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                3. Bác Hồ sáng tạo, bổ sung nội dung mới từ Nho giáo
              </h4>
              <div className="space-y-6">
                <p className="text-gray-800 text-lg font-medium leading-relaxed">
                  Dùng nhiều mệnh đề của Nho giáo nhưng thổi vào ý nghĩa cách mạng mới
                </p>
                <div className="bg-white rounded-lg p-6 border border-red-200">
                  <p className="text-gray-700 text-lg font-medium mb-3"><strong>Ví dụ:</strong></p>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    "Quân đội ta trung với Đảng, hiếu với dân…" → Biến tư tưởng "trung quân, ái quốc" thành trung với Đảng, hiếu với dân
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Confucian view of human nature */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                4. Quan điểm Nho giáo về bản chất con người
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium leading-relaxed">
                      <strong>Mạnh Tử:</strong> "Nhân chi sơ tính bản thiện"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium leading-relaxed">
                      <strong>Tuân Tử:</strong> "Nhân chi sơ tính bản ác"
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-red-200 mt-6">
                  <p className="text-red-700 font-bold text-lg mb-3">Bác Hồ: đưa quan điểm mới</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-800 text-lg font-medium">Con người sinh ra vốn thiện, hiền dữ không phải bẩm sinh</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-800 text-lg font-medium">Giáo dục, rèn luyện quyết định phần nhiều tính cách con người</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Revolutionary morality */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                5. Về rèn luyện đạo đức cách mạng
              </h4>
              <div className="space-y-6">
                <p className="text-gray-800 text-lg font-medium leading-relaxed">
                  Đạo đức không sẵn có, mà do rèn luyện mà nên
                </p>
                <div className="bg-white rounded-lg p-6 border border-red-200">
                  <p className="text-gray-700 text-lg font-medium mb-3"><strong>Bác Hồ minh hoạ bằng thơ:</strong></p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-800 text-lg font-medium">Gạo đem vào giã đau đớn → gạo trắng</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-800 text-lg font-medium">Con người cũng vậy, qua gian nan thử thách mới thành công</span>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <p className="text-red-700 font-bold text-lg mb-3">Liên hệ triết lý Nho giáo:</p>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    Tu thân – tề gia – trị quốc – bình thiên hạ, lấy tu thân làm gốc
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PHẬT GIÁO */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              PHẬT GIÁO
            </h3>

            {/* Gallery Images */}
            <div className="mb-10">
              <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-red-100 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200 max-w-2xl mx-auto">
                <img
                  src="/images/phatgiao.png"
                  alt="Phật giáo - Tinh thần vị tha và từ bi"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 1. Introduction and influence */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                1. Sự du nhập và ảnh hưởng của Phật giáo
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Phật giáo du nhập vào nước ta rất sớm</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Ảnh hưởng sâu rộng đến đời sống tinh thần, phong tục, tín ngưỡng, tập quán và lối sống của nhân dân</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Hồ Chí Minh cũng chịu ảnh hưởng, nhất là những mặt tích cực gắn với tinh thần dân tộc và nhân dân lao động</span>
                </div>
              </div>
            </div>

            {/* 2. Positive aspects */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                2. Những mặt tích cực của Phật giáo
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tư tưởng vị tha, từ bi, bác ái:</strong> cứu khổ cứu nạn, tình yêu thương rộng lớn (cả con người, chim muông, cây cỏ)
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Thực hành:</strong> ăn chay, niệm Phật, không sát sinh
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Nếp sống đạo đức:</strong> trong sạch, giản dị, chăm lo việc thiện
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Các chùa tổ chức:</strong> khám chữa bệnh, giúp đỡ người nghèo
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Equality and democracy */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                3. Tinh thần bình đẳng, dân chủ, chất phác
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đức Phật:</strong> "Ta là Phật đã thành, chúng sinh là Phật sẽ thành" → khẳng định mọi người đều bình đẳng, không phân biệt đẳng cấp
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Thiền tông đề cao luật "chấp tác":</strong> "Nhất nhật bất tác, nhất nhật bất thực" → coi trọng lao động, chống lười biếng
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Ở Việt Nam:</strong> Phật giáo gắn bó với nhân dân, đất nước, tham gia cộng đồng, đấu tranh chống giặc ngoại xâm
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Connection to Ho Chi Minh */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                4. Liên hệ đến Hồ Chí Minh
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    Bác Hồ khai thác những mặt tích cực của Phật giáo để phục vụ cách mạng
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đặc biệt là:</strong> tinh thần bình đẳng, thương người, nếp sống giản dị, gắn bó với nhân dân
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Western Thought and Culture */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              Tư tưởng và Văn hoá phương Tây đối với bác Hồ Chí Minh
            </h3>

            {/* Gallery Images */}
            <div className="mb-10">
              <div className="relative aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl overflow-hidden shadow-lg border-2 border-red-200 max-w-2xl mx-auto">
                <img
                  src="/images/chulenin.png"
                  alt="Tư tưởng và Văn hoá phương Tây - Chủ nghĩa dân chủ"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 1. Early contact */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                1. Tiếp xúc sớm với văn hoá phương Tây
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Ngay từ nhỏ, học ở Đông Ba, Quốc học Huế → làm quen với văn hoá Pháp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Rất mê môn Lịch sử, đặc biệt quan tâm đến Đại cách mạng Pháp 1789</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Khi xuất dương, sống và hoạt động chủ yếu ở châu Âu → chịu ảnh hưởng sâu rộng của văn hoá dân chủ, cách mạng phương Tây</span>
                </div>
              </div>
            </div>

            {/* 2. Essence of Western culture */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                2. Tinh hoa văn hoá phương Tây
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    Quan tâm khẩu hiệu nổi tiếng của Cách mạng Pháp 1789: "Tự do - Bình đẳng - Bác ái"
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Kế thừa các quan điểm nhân quyền, dân quyền trong:</strong>
                  </p>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg font-medium">Tuyên ngôn độc lập 1776 (Mỹ)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg font-medium">Tuyên ngôn Nhân quyền và Dân quyền 1791 (Pháp)</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Nghiên cứu tư tưởng nhân văn, dân chủ, pháp quyền của các nhà khai sáng:</strong> Voltaire, Rousseau, Montesquieu…
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Practical activities in the West */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                3. Thực tiễn hoạt động ở phương Tây
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đến Mỹ, từng sống ở New York:</strong> thăm khu Harlem → chứng kiến phong trào của người da đen
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Ghi nhận tinh thần đấu tranh:</strong> cho tự do, độc lập, quyền sống
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Những tư tưởng trong Tuyên ngôn độc lập 1776 (Mỹ):</strong> được Người trích dẫn trong Tuyên ngôn độc lập 2/9/1945
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Năm 1913 sang Anh:</strong> tham gia công đoàn thủy thủ, biểu tình, đình công
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Năm 1917 sang Pháp:</strong> sống tại Paris → trung tâm chính trị, văn hoá châu Âu
                  </p>
                </div>
              </div>
            </div>

            {/* 4. French environment influence */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                4. Ảnh hưởng từ môi trường Pháp
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Paris:</strong> nơi hợp lưu các dòng văn hoá, điều kiện tiếp thu nhanh chóng tri thức thời đại
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tư tưởng dân chủ trong các tác phẩm của nhà khai sáng Pháp:</strong> tác động mạnh đến Người
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tinh thần pháp luật (Montesquieu):</strong> ảnh hưởng sâu sắc
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Khế ước xã hội (Rousseau):</strong> được nghiên cứu kỹ lưỡng
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Hoạt động cách mạng tại Pháp:</strong> tham gia hội họp, đảng phái, tự do báo chí, tranh luận tại các diễn đàn
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Learning democratic work */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                5. Học tập cách làm việc dân chủ
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tham gia sinh hoạt khoa học ở Câu lạc bộ Phôbua:</strong> rèn luyện kỹ năng nghiên cứu, tranh luận
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Sinh hoạt chính trị trong Đảng Xã hội Pháp:</strong> học hỏi phương pháp tổ chức, vận động quần chúng
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đặc biệt Đại hội Tua 1920:</strong> trực tiếp tham gia, học hỏi kinh nghiệm
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Trực tiếp rèn luyện trong phong trào công nhân Pháp:</strong> được dìu dắt bởi các nhà cách mạng, trí thức tiến bộ
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Conclusion */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                6. Kết luận
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Hồ Chí Minh đã chắt lọc tinh hoa văn hoá phương Tây, đặc biệt là tư tưởng dân chủ, tự do, bình đẳng</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Kết hợp với thực tiễn hoạt động và truyền thống dân tộc → hình thành tư tưởng cách mạng, phong cách làm việc dân chủ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Marxism-Leninism */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              Chủ nghĩa Mác – Lênin trong tư tưởng Hồ Chí Minh
            </h3>

            {/* 1. Role of October Revolution */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                1. Vai trò của Cách mạng Tháng Mười Nga 1917
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Mở ra thời đại mới trong lịch sử nhân loại</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Trở thành nguồn cảm hứng và định hướng cho Hồ Chí Minh trong quá trình tìm đường cứu nước</span>
                </div>
              </div>
            </div>

            {/* 2. Marxism-Leninism as decisive theoretical foundation */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                2. Chủ nghĩa Mác – Lênin: Cơ sở lý luận quyết định
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Trở thành bước ngoặt quan trọng trong sự phát triển tư tưởng Hồ Chí Minh</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Cung cấp lý luận khoa học, cách mạng và thực tiễn để giải quyết vấn đề dân tộc, giai cấp, con đường giải phóng</span>
                </div>
              </div>
            </div>

            {/* 3. Creative application and development */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                3. Sự vận dụng và phát triển sáng tạo
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Hồ Chí Minh vận dụng sáng tạo chủ nghĩa Mác-Lênin vào hoàn cảnh cụ thể của Việt Nam</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Giải quyết thành công cuộc khủng hoảng về đường lối cứu nước đầu thế kỷ XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 shadow-md"></div>
                  <span className="text-gray-800 text-lg font-medium">Đưa phong trào cách mạng Việt Nam thoát khỏi bế tắc, tìm ra con đường đúng đắn: giải phóng dân tộc gắn với chủ nghĩa xã hội</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subjective Factors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
              Nhân tố Chủ quan
            </h3>

            {/* 1. General theme */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                1. Chủ đề tổng quát
              </h4>
              <p className="text-gray-800 text-lg font-medium leading-relaxed">
                Nhân tố chủ quan trong tư tưởng Hồ Chí Minh: bao gồm khả năng tư duy, trí tuệ và phẩm chất đạo đức, năng lực hoạt động thực tiễn
              </p>
            </div>

            {/* 2. Thinking ability and intelligence */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-yellow-600 rounded-full"></div>
                2. Khả năng tư duy và trí tuệ HCM
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Học thuyết Mác:</strong> Muốn giải phóng dân tộc phải đi theo con đường Mác
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đảng lãnh đạo cách mạng:</strong> Cách mạng phải do giai cấp công nhân, nông dân lao động lãnh đạo
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Cách mạng là sự nghiệp quần chúng:</strong> Quần chúng nhân dân là động lực chủ yếu
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Con đường phát triển cách mạng:</strong>
                  </p>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg font-medium">Cách mạng giải phóng dân tộc → Cách mạng dân chủ nhân dân → Giải phóng xã hội, giải phóng con người</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đặc điểm cách mạng thuộc địa:</strong> Có quan hệ mật thiết với cách mạng vô sản chính quốc, nhưng không phụ thuộc vào chính quốc
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Moral qualities and practical activity capacity */}
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300 shadow-lg">
              <h4 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-6 bg-red-600 rounded-full"></div>
                3. Phẩm chất đạo đức và năng lực hoạt động thực tiễn
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tư duy độc lập, sáng tạo:</strong> Tự chủ, sáng suốt, đầu óc phê phán tinh tường
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Tâm hồn yêu nước:</strong> Một chiến sĩ cộng sản chân chính, gắn bó với dân tộc
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Bản lĩnh kiên định:</strong> Luôn tin vào nhân dân, khiêm tốn, bình dị, ham học hỏi
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <strong>Đầu óc thực tiễn:</strong> Luôn gắn lý luận với hành động, học hỏi từ thực tế
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Conclusion */}
          <div className="bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
            <h4 className="text-red-800 font-bold text-xl mb-3 flex items-center gap-3">
              <div className="w-3 h-6 bg-red-600 rounded-full"></div>
              Tổng kết
            </h4>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              Tư tưởng Hồ Chí Minh được hình thành trên nền tảng tiếp thu và phát triển sáng tạo tinh hoa văn hoá nhân loại từ Nho giáo, Phật giáo, văn hoá phương Tây, chủ nghĩa Mác-Lênin, kết hợp với những giá trị truyền thống tốt đẹp của dân tộc Việt Nam và nhân tố chủ quan của Hồ Chí Minh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
