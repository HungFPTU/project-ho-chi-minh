export default function Hero() {
    return (
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-yellow-300">
        <img
          src="/images/tu-tuong-hcm2.png"
          alt="Tổng quan các giai đoạn tư tưởng Hồ Chí Minh"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-gradient-to-t from-red-600/95 via-red-500/80 to-transparent text-white">
          <div className="border-l-4 border-yellow-300 pl-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-yellow-200 leading-tight select-none drop-shadow-lg">
              Quá trình hình thành & phát triển
              <span className="block text-yellow-300 mt-3 font-black">Tư tưởng Hồ Chí Minh</span>
            </h1>
            <p className="opacity-95 mt-4 text-base md:text-lg lg:text-xl xl:text-2xl max-w-5xl leading-relaxed select-none font-medium drop-shadow-md">
              Hành trình tư tưởng vĩ đại của lãnh tụ Hồ Chí Minh qua 5 giai đoạn lịch sử,
              với những đóng góp quan trọng cho sự nghiệp giải phóng dân tộc và cách mạng Việt Nam.
            </p>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-yellow-400 text-red-700 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm select-none border-2 border-yellow-300 shadow-lg">
          Di sản Dân tộc
        </div>
      </div>
    );
  }
  