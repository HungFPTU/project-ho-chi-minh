export default function CoSoHinhThanh() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-national-gold/20">
        <div className="bg-gradient-to-br from-national-navy via-national-navy-light to-national-red min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <div className="border-l-4 border-national-gold pl-4 sm:pl-6 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-display text-national-gold-light leading-tight mb-4">
                Cơ sở hình thành
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Khám phá những nền tảng tư tưởng và điều kiện lịch sử đã tạo nên Tư tưởng Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-national-gold text-national-navy px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          Cơ sở lý luận
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Section 1 */}
        <div className="bg-white rounded-2xl shadow-xl border border-national-gold/10 p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-national-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-national-gold rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-national-navy font-display mb-2">
              Nền tảng triết học
            </h3>
          </div>
          <p className="text-national-navy-lighter leading-relaxed">
            Những nguyên lý triết học Mác-Lênin và tư tưởng cách mạng đã tạo nền móng cho sự hình thành tư tưởng Hồ Chí Minh.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-xl border border-national-gold/10 p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-national-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-national-gold rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-national-navy font-display mb-2">
              Bối cảnh lịch sử
            </h3>
          </div>
          <p className="text-national-navy-lighter leading-relaxed">
            Sự ảnh hưởng của phong trào dân tộc, cách mạng thế giới và hoàn cảnh Việt Nam đầu thế kỷ XX.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-xl border border-national-gold/10 p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-national-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-national-gold rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-national-navy font-display mb-2">
              Kinh nghiệm thực tiễn
            </h3>
          </div>
          <p className="text-national-navy-lighter leading-relaxed">
            Những bài học từ cuộc sống, hoạt động cách mạng và quan sát xã hội của Hồ Chí Minh.
          </p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-r from-national-navy/5 to-national-gold/5 rounded-2xl border border-national-gold/20 p-4 sm:p-6 md:p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-national-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-national-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-national-navy font-display mb-3 sm:mb-4">
            Nội dung đang được phát triển
          </h2>
          <p className="text-sm sm:text-base text-national-navy-lighter leading-relaxed mb-4 sm:mb-6">
            Trang này đang trong quá trình xây dựng nội dung chi tiết về các cơ sở hình thành Tư tưởng Hồ Chí Minh.
            Chúng tôi sẽ sớm cập nhật những thông tin quý báu về nguồn gốc và nền tảng của tư tưởng vĩ đại này.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-national-gold/10 text-national-navy px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              🔍 Nghiên cứu lịch sử
            </div>
            <div className="bg-national-gold/10 text-national-navy px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              📚 Tài liệu tham khảo
            </div>
            <div className="bg-national-gold/10 text-national-navy px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              🎯 Phân tích chuyên sâu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
