import type { Period } from "../data/periods";

export default function Section({ title, years, image, bullets, highlight, gallery }: Period) {

  return (
    <section id={years} className="scroll-mt-24 my-12">
      <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-white rounded-3xl shadow-2xl border-2 border-red-200 overflow-hidden">
        <div className="p-8 sm:p-10 md:p-12">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="shrink-0 relative">
              <img
                src={image}
                alt={`${title} - ${years}`}
                className="w-full sm:w-44 md:w-52 lg:w-60 xl:w-66 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-48 object-contain rounded-2xl shadow-lg border-2 border-yellow-200 bg-yellow-50"
              />
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg border-2 border-yellow-300 z-10">
                {years}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 font-display leading-tight drop-shadow-lg">{title}</h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-1.5 w-16 bg-yellow-500 rounded-full"></div>
                <p className="text-base text-red-700 font-semibold">{years}</p>
              </div>
            </div>
          </div>

        <ul className="space-y-4 leading-relaxed">
          {bullets.map((b, i) => (
            <li key={i} className="pl-6 relative">
              <div className="absolute left-0 top-2 w-3 h-3 bg-yellow-500 rounded-full shadow-md"></div>
              <span className="text-gray-800 text-lg font-medium">{b}</span>
            </li>
          ))}
        </ul>

        {highlight && highlight.length > 0 && (
          <div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-gradient-to-r from-yellow-50 to-red-50 p-6 shadow-lg border-2 border-yellow-200">
            {highlight.map((h, i) => (
              <p key={i} className={`${i === 0 ? "text-red-800 font-bold text-xl mb-3" : "text-gray-800 text-lg font-medium"} leading-relaxed`}>
                {h}
              </p>
            ))}
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-red-800 mb-6 font-display">Hình ảnh minh họa</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map((src, i) => (
                <div key={i} className="relative">
                  <img
                    src={src}
                    alt={`${title} - minh họa ${i + 1}`}
                    className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-54 object-contain rounded-2xl shadow-lg border-2 border-yellow-200 bg-yellow-50"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
