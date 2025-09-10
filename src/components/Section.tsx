import { useState } from "react";
import type { Period } from "../data/periods";

export default function Section({ title, years, image, bullets, highlight, gallery }: Period) {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  return (
    <section id={years} className="scroll-mt-24 my-12">
      <div className="bg-white rounded-2xl shadow-xl border border-national-gold/10 p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="shrink-0 relative">
            <img
              src={image}
              alt={`${title} - ${years}`}
              className="w-full sm:w-44 md:w-52 lg:w-60 xl:w-66 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-48 object-cover rounded-lg cursor-zoom-in shadow-md hover:shadow-lg transition-shadow duration-300 border border-national-gold/20"
              onClick={() => openLightbox(image)}
            />
            <div className="absolute -top-2 -right-2 bg-national-red text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
              {years}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-national-navy font-display leading-tight">{title}</h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-1 w-12 bg-national-gold rounded-full"></div>
              <p className="text-sm text-national-navy-lighter font-medium">{years}</p>
            </div>
          </div>
        </div>

        <ul className="space-y-3 leading-relaxed text-national-navy-lighter">
          {bullets.map((b, i) => (
            <li key={i} className="pl-6 relative">
              <div className="absolute left-0 top-1 w-2 h-2 bg-national-gold rounded-full"></div>
              <span className="text-national-navy">{b}</span>
            </li>
          ))}
        </ul>

        {highlight && highlight.length > 0 && (
          <div className="mt-6 rounded-xl border-l-4 border-national-red bg-gradient-to-r from-national-red/5 to-national-gold/5 p-5 shadow-inner">
            {highlight.map((h, i) => (
              <p key={i} className={`${i === 0 ? "text-national-navy font-semibold text-lg mb-2" : "text-national-navy-lighter"} leading-relaxed`}>
                {h}
              </p>
            ))}
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-national-navy mb-4 font-display">Hình ảnh minh họa</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <div key={i} className="relative group">
                  <img
                    src={src}
                    alt={`${title} - minh họa ${i + 1}`}
                    className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-54 object-cover rounded-lg cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-300 border border-national-gold/20 hover:border-national-gold/40"
                    onClick={() => openLightbox(src)}
                  />
                  <div className="absolute inset-0 bg-national-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="bg-white/90 text-national-navy px-3 py-1 rounded-full text-sm font-medium">
                      Phóng to
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {open && activeSrc && (
        <div
          className="fixed inset-0 bg-national-navy/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={activeSrc}
              alt={title}
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl border border-national-gold/30"
            />
            <button
              className="absolute -top-4 -right-4 bg-national-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold hover:bg-national-red-dark transition-colors duration-200 shadow-lg"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
