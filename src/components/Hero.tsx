export default function Hero() {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-national-gold/20">
        <img
          src="/images/tu-tuong-hcm2.png"
          alt="Tổng quan các giai đoạn tư tưởng Hồ Chí Minh"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gradient-to-t from-national-navy/90 via-national-navy/70 to-transparent text-white">
          <div className="border-l-4 border-national-gold pl-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-national-gold-light leading-tight select-none">
              Quá trình hình thành & phát triển
              <span className="block text-national-red-light mt-2">Tư tưởng Hồ Chí Minh</span>
            </h1>
            <p className="opacity-90 mt-3 text-sm md:text-base lg:text-lg xl:text-xl max-w-5xl leading-relaxed select-none">
              Hành trình tư tưởng vĩ đại của lãnh tụ Hồ Chí Minh qua 5 giai đoạn lịch sử,
              với những đóng góp quan trọng cho sự nghiệp giải phóng dân tộc và cách mạng Việt Nam.
            </p>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-national-red/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm select-none">
          Di sản Dân tộc
        </div>
      </div>
    );
  }
  