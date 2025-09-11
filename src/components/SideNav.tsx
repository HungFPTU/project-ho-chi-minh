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
    <aside className="hidden xl:block sticky top-6 h-fit bg-gradient-to-br from-yellow-50 to-white/90 backdrop-blur rounded-3xl shadow-2xl border-2 border-red-200 p-8">
      {/* Header với progress indicator */}
      <div className="mb-8">
        <div className="text-lg font-bold mb-4 text-red-800 font-display flex items-center gap-3">
          <div className="w-2 h-6 bg-red-600 rounded-full"></div>
          Các giai đoạn phát triển
        </div>

        {/* Progress bar */}
        <div className="w-full bg-yellow-200 rounded-full h-2 mb-3">
          <div
            className="bg-yellow-500 h-2 rounded-full shadow-sm"
            style={{
              width: activeSection ? `${((periods.findIndex(p => p.years === activeSection) + 1) / periods.length) * 100}%` : '0%'
            }}
          ></div>
        </div>
        <div className="text-sm text-red-700 text-center font-semibold">
          {activeSection ? `${periods.findIndex(p => p.years === activeSection) + 1} / ${periods.length}` : '0 / 5'}
        </div>
      </div>

      {/* Navigation items */}
      <ul className="space-y-3">
        {periods.map((p, index) => {
          const isActive = activeSection === p.years;
          const isPassed = periods.findIndex(period => period.years === activeSection) > index;

          return (
            <li key={p.id}>
              <button
                onClick={() => scrollToSection(p.years)}
                className={`w-full flex items-start gap-4 p-4 rounded-2xl ${
                  isActive
                    ? "bg-yellow-100 border-l-4 border-yellow-500 shadow-lg"
                    : isPassed
                    ? "bg-red-50 border-l-4 border-red-400"
                    : "border-l-2 border-transparent hover:bg-yellow-50"
                }`}
              >
                {/* Status indicator */}
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  isActive
                    ? "bg-red-600 shadow-lg"
                    : isPassed
                    ? "bg-yellow-500"
                    : "bg-yellow-300"
                }`}></div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className={`font-bold text-base ${
                    isActive
                      ? "text-red-800"
                      : isPassed
                      ? "text-red-700"
                      : "text-red-600"
                  }`}>
                    {p.years}
                  </div>
                  <div className={`text-sm mt-1 leading-tight font-medium ${
                    isActive
                      ? "text-red-700"
                      : isPassed
                      ? "text-red-600"
                      : "text-red-500"
                  }`}>
                    {p.title.split(" – ")[0]}
                  </div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full mt-8 p-4 bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl"
      >
        <div className="flex items-center justify-center gap-3 text-red-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-sm font-bold">Lên đầu trang</span>
        </div>
      </button>
    </aside>
  );
}
