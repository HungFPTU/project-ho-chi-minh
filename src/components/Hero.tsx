export default function Hero() {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-national-gold/20">
        <img
          src="/images/tu-tuong-hcm2.png"
          alt="Tổng quan các giai đoạn tư tưởng Hồ Chí Minh"
          className="w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gradient-to-t from-national-navy/90 via-national-navy/70 to-transparent text-white">
          <div className="border-l-4 border-national-gold pl-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold font-display text-national-gold-light leading-tight">
              Quá trình hình thành & phát triển
              <span className="block text-national-red-light mt-2">Tư tưởng Hồ Chí Minh</span>
            </h1>
            <p className="opacity-90 mt-3 text-sm md:text-base lg:text-lg xl:text-xl max-w-5xl leading-relaxed">
              Hành trình tư tưởng vĩ đại của lãnh tụ Hồ Chí Minh qua 5 giai đoạn lịch sử,
              với những đóng góp quan trọng cho sự nghiệp giải phóng dân tộc và cách mạng Việt Nam.
            </p>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-national-red/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Di sản Dân tộc
        </div>
      </div>
    );
  }
  