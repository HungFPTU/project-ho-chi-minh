import { useState, useEffect } from "react";
import { periods } from "../data/periods";

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    periods.forEach((period) => {
      const element = document.getElementById(period.years);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <aside className="hidden xl:block sticky top-6 h-fit bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-national-gold/10 p-6 transition-all duration-300 hover:shadow-2xl">
      {/* Header với progress indicator */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-3 text-national-navy font-display flex items-center gap-2">
          <div className="w-1 h-4 bg-national-red rounded-full"></div>
          Các giai đoạn phát triển
        </div>

        {/* Progress bar */}
        <div className="w-full bg-national-gold/20 rounded-full h-1 mb-2">
          <div
            className="bg-national-gold h-1 rounded-full transition-all duration-500 ease-out"
            style={{
              width: activeSection ? `${((periods.findIndex(p => p.years === activeSection) + 1) / periods.length) * 100}%` : '0%'
            }}
          ></div>
        </div>
        <div className="text-xs text-national-navy-lighter text-center">
          {activeSection ? `${periods.findIndex(p => p.years === activeSection) + 1} / ${periods.length}` : '0 / 5'}
        </div>
      </div>

      {/* Navigation items */}
      <ul className="space-y-2 text-sm">
        {periods.map((p, index) => {
          const isActive = activeSection === p.years;
          const isPassed = periods.findIndex(period => period.years === activeSection) > index;

          return (
            <li key={p.id}>
              <button
                onClick={() => scrollToSection(p.years)}
                className={`group w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-national-gold/20 border-l-4 border-national-gold shadow-md transform scale-[1.02]"
                    : isPassed
                    ? "bg-national-gold/10 border-l-4 border-national-gold/50 hover:bg-national-gold/15"
                    : "hover:bg-national-gold/10 border-l-2 border-transparent hover:border-national-gold/50"
                }`}
              >
                {/* Status indicator */}
                <div className={`w-2 h-2 rounded-full mt-1.5 transition-all duration-300 ${
                  isActive
                    ? "bg-national-red scale-125 shadow-lg animate-pulse"
                    : isPassed
                    ? "bg-national-gold"
                    : "bg-national-gold/50 group-hover:bg-national-gold group-hover:scale-110"
                }`}></div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className={`font-medium transition-all duration-300 ${
                    isActive
                      ? "text-national-navy font-semibold"
                      : isPassed
                      ? "text-national-navy"
                      : "text-national-navy group-hover:text-national-navy-light"
                  }`}>
                    {p.years}
                  </div>
                  <div className={`text-xs mt-0.5 leading-tight transition-all duration-300 ${
                    isActive
                      ? "text-national-navy-lighter"
                      : isPassed
                      ? "text-national-navy-lighter"
                      : "text-national-navy-lighter group-hover:text-national-navy"
                  }`}>
                    {p.title.split(" – ")[0]}
                  </div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-national-red rounded-full animate-ping"></div>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full mt-6 p-3 bg-national-navy/10 hover:bg-national-navy/20 rounded-lg transition-all duration-300 group"
      >
        <div className="flex items-center justify-center gap-2 text-national-navy-lighter group-hover:text-national-navy">
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-xs font-medium">Lên đầu trang</span>
        </div>
      </button>
    </aside>
  );
}
