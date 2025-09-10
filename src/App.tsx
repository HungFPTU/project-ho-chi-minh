import { useState } from "react";
import Hero from "./components/Hero";
import SideNav from "./components/SideNav";
import Section from "./components/Section";
import CoSoHinhThanh from "./components/CoSoHinhThanh";
import { periods } from "./data/periods";

export default function App() {
  const [currentPage, setCurrentPage] = useState("qua-trinh-hinh-thanh");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-dignified-bg font-serif">
      <header className="sticky top-0 z-50 bg-national-navy/95 backdrop-blur border-b border-national-gold/20 shadow-lg">
        <div className="w-full max-w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="font-extrabold text-national-gold text-base sm:text-lg md:text-xl font-display tracking-wide">
            Tư Tưởng Hồ Chí Minh
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-national-gold/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-5 h-5 text-national-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6 text-sm">
            <button
              onClick={() => setCurrentPage("co-so-hinh-thanh")}
              className={`transition-colors duration-300 hover:underline decoration-national-gold underline-offset-4 ${
                currentPage === "co-so-hinh-thanh"
                  ? "text-national-gold font-semibold"
                  : "text-national-gold-light hover:text-national-gold"
              }`}
            >
              Cơ sở hình thành
            </button>
            <button
              onClick={() => setCurrentPage("qua-trinh-hinh-thanh")}
              className={`transition-colors duration-300 hover:underline decoration-national-gold underline-offset-4 ${
                currentPage === "qua-trinh-hinh-thanh"
                  ? "text-national-gold font-semibold"
                  : "text-national-gold-light hover:text-national-gold"
              }`}
            >
              Quá trình hình thành
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-national-navy/98 backdrop-blur border-t border-national-gold/20">
            <nav className="px-4 py-4 space-y-2">
              <button
                onClick={() => {
                  setCurrentPage("co-so-hinh-thanh");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentPage === "co-so-hinh-thanh"
                    ? "bg-national-gold/20 text-national-gold font-semibold"
                    : "text-national-gold-light hover:bg-national-gold/10 hover:text-national-gold"
                }`}
              >
                Cơ sở hình thành
              </button>
              <button
                onClick={() => {
                  setCurrentPage("qua-trinh-hinh-thanh");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentPage === "qua-trinh-hinh-thanh"
                    ? "bg-national-gold/20 text-national-gold font-semibold"
                    : "text-national-gold-light hover:bg-national-gold/10 hover:text-national-gold"
                }`}
              >
                Quá trình hình thành
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="w-full max-w-full px-4 sm:px-6 py-4 sm:py-6">
        {currentPage === "qua-trinh-hinh-thanh" ? (
          <>
            <Hero />

            {/* Mobile navigation for periods */}
            <div className="md:hidden mt-6 mb-8">
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-national-gold/10 p-4">
                <h3 className="text-sm font-semibold text-national-navy mb-3 font-display flex items-center gap-2">
                  <div className="w-1 h-3 bg-national-red rounded-full"></div>
                  Các giai đoạn
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {periods.map((p) => (
                    <a
                      key={p.id}
                      href={`#${p.years}`}
                      className="px-3 py-2 text-xs bg-national-gold/10 hover:bg-national-gold/20 text-national-navy rounded-lg transition-all duration-200 text-center font-medium hover:font-semibold"
                    >
                      {p.years}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[300px,1fr] gap-6 xl:gap-8 mt-6 xl:mt-8">
              <SideNav />
              <div className="space-y-8 xl:space-y-12">
                {periods.map(p => (
                  <Section key={p.id} {...p} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <CoSoHinhThanh />
        )}
      </main>

      <footer className="text-center text-xs sm:text-sm text-national-navy-lighter py-8 sm:py-12 bg-national-navy-light/10 border-t border-national-gold/10">
        <div className="w-full max-w-full px-4 sm:px-6">
          <p className="mb-2">© {new Date().getFullYear()} — Tư tưởng Hồ Chí Minh: Di sản vĩnh cửu của dân tộc</p>
          <p className="text-xs opacity-75">Tóm lược học thuật, ảnh minh họa do cộng đồng cung cấp</p>
        </div>
      </footer>
    </div>
  );
}
