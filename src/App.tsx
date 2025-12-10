// src/App.tsx
import React, { useState } from "react";
import { Lang, languages, copy } from "./translations";

// Imágenes organizadas estratégicamente
const images = {
  logo: "/images/logo dorado 1.png",
  heroMain: "/images/0_0 (1).png",
  heroAlt: "/images/3.png",
  tanksPipelines: "/images/3.png",
  refineryLogo: "/images/89d43e1f-9382-4493-85b3-ab852dbc9e59.png",
  tanksAerial: "/images/3d33f9c8-4361-4912-b162-bf22d39b6d99.png",
  teamWorkers: "/images/b4f35a8e-b4ba-40f3-8a59-a15c9a9a9319.png",
  tanksSunset: "/images/4bda1246-63f2-42da-af89-c1ec1f8b1cd7.png",
  pipelineCloseup: "/images/u3933955513_hyperrealistic_close-up_of_stainless_steel_oil_pi_fd904a4f-5dff-45e5-8bf3-9cb69e8af5d3_3.png",
  facilityDay: "/images/u3933955513_ultra_realistic_daytime_scene_of_a_modern_oil__ga_64e83200-6954-4e36-8ff7-71697826cfef_0.png",
  refineryVision: "/images/u3933955513_ultra_realistic_industrial_collage_showing_energy_cc02e604-d637-4ba0-94f4-62490d7413aa_2.png",
  lngTanks: "/images/u3933955513_ultra_realistic_spherical_LNG_storage_tanks_sunse_0dda7b8e-37a9-4461-aeb3-86fa49d375c8_3.png",
};

// Iconos personalizados Oil & Gas
const OgIcon: React.FC<{ name:
  | "barrel"
  | "globe"
  | "energy"
  | "shield"
  | "target"
  | "vision"
  | "gem"
  | "pump"
  | "wrench"
  | "flame"
  | "sustain"
  | "tech"
  | "clipboard"
  | "monitor"
  | "check"
  | "rocket"
  | "chart"
  | "money"
}> = ({ name }) => {
  const common = "w-5 h-5 text-amber-400";
  switch (name) {
    case "barrel":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 5h12M6 19h12" />
          <path d="M7 5v14a5 5 0 0 0 10 0V5a5 5 0 0 0-10 0Z" />
          <path d="M6 9h12M6 14h12" />
        </svg>
      );
    case "globe":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18Z" />
        </svg>
      );
    case "energy":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 6 14h5l-1 8 7-12h-5z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" />
          <path d="M9 12.5 11 15l4-4" />
        </svg>
      );
    case "target":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      );
    case "vision":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 12S6.5 6 12 6s9.5 6 9.5 6-4 6-9.5 6S2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "gem":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7 4-3 5 8 11 8-11-3-5H7Z" />
          <path d="M7 4h10M4 9h16M9 4l3 5 3-5" />
        </svg>
      );
    case "pump":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4h6v16H7z" />
          <path d="M7 9h6M10 4v16" />
          <path d="M13 7h3l2 2v6a2 2 0 0 1-2 2h-1" />
          <circle cx="10" cy="12" r="2" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 3a6 6 0 0 1-7.5 8.5L7 18l-3-3 6.5-6.5A6 6 0 0 1 21 3Z" />
          <path d="M7 18 4 21" />
        </svg>
      );
    case "flame":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1 3-4 4.5-4 8a4 4 0 0 0 8 0c0-3.5-3-5-4-8Z" />
          <path d="M12 14a2 2 0 0 1-2-2c0-1.2.7-2 2-3 .9.7 2 1.7 2 3a2 2 0 0 1-2 2Z" />
        </svg>
      );
    case "sustain":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c-4-2-7-5.5-7-9a7 7 0 0 1 14 0c0 3.5-3 7-7 9Z" />
          <path d="M12 12V7m0 5-2.5 2.5" />
        </svg>
      );
    case "tech":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M4 14h16M9 18v2h6v-2" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="5" width="12" height="16" rx="2" />
          <path d="M9 3h6v4H9zM9 11h6M9 15h4" />
        </svg>
      );
    case "monitor":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 13 4 4 10-10" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15c3-1 5-3 6-6 2-1 5-2 8-1-1 3-2 6-1 8-3 1-5 3-6 6-2-1-4-3-7-7Z" />
          <path d="M9 12c.5-.5 1.5-1.5 2-2" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19V5m0 14h16" />
          <rect x="7" y="11" width="3" height="5" />
          <rect x="12" y="9" width="3" height="7" />
          <rect x="17" y="7" width="3" height="9" />
        </svg>
      );
    case "money":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 9v6m10-6v6" />
        </svg>
      );
    default:
      return null;
  }
};

// Componente del Logo - tamaño duplicado
const Logo: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const sizes = {
    sm: { img: "h-16", text: "text-xs" },
    md: { img: "h-20", text: "text-sm" },
    lg: { img: "h-32", text: "text-base" },
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img 
          src={images.logo} 
          alt="Larankha Logo" 
          className={`${sizes[size].img} w-auto object-contain`}
        />
      </div>
      <span className={`${sizes[size].text} text-amber-400 font-semibold tracking-[0.2em] uppercase mt-1`}>
        Oil &amp; Gas Trading
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState<boolean>(false);

  // Cursor de flama
  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const handleLeave = () => setCursorVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Al cambiar de "página" en la SPA, hacer scroll al inicio (especialmente en móvil)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 768;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isMobile ? "smooth" : "auto",
    });
  }, [currentPage]);
  const t = copy[lang];

  // Navegación entre páginas
  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return <ProductsPage t={t} lang={lang} />;
      case "about":
        return <AboutPage t={t} lang={lang} />;
      case "tanks":
        return <TanksPage t={t} lang={lang} />;
      case "careers":
        return <CareersPage t={t} lang={lang} />;
      case "contact":
        return <ContactPage t={t} lang={lang} />;
      default:
        return <HomePage t={t} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-50"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Cursor de flama animada */}
      {cursorVisible && (
        <div
          className="flame-cursor"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          }}
        >
          <div className="flame-cursor-inner" />
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/90 border-b border-amber-500/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => {
              setCurrentPage("home");
              setMenuOpen(false);
            }}
            className="hover:opacity-80 transition"
            aria-label="Ir al inicio"
          >
            <Logo size="md" />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { key: "home", label: t.nav.home },
              { key: "about", label: t.nav.philosophy },
              { key: "products", label: t.nav.products },
              { key: "tanks", label: t.nav.tanks },
              { key: "careers", label: t.nav.careers },
              { key: "contact", label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                  currentPage === item.key
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-slate-300 hover:text-amber-300 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              aria-label="Language selector"
              className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native}
                </option>
              ))}
            </select>
            <button
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-700 text-slate-200 hover:border-amber-400 hover:text-amber-300 transition"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur px-4 py-3">
            <div className="flex flex-col gap-2">
              {[
                { key: "home", label: t.nav.home },
                { key: "about", label: t.nav.philosophy },
                { key: "products", label: t.nav.products },
                { key: "tanks", label: t.nav.tanks },
                { key: "careers", label: t.nav.careers },
                { key: "contact", label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${
                    currentPage === item.key
                      ? "bg-amber-500/15 text-amber-300"
                      : "text-slate-200 hover:text-amber-300 hover:bg-slate-800/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Contenido dinámico */}
      {renderPage()}

      {/* Footer Global */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo size="sm" />
              </div>
              <p className="text-xs text-slate-400">
                Larankha Oil And Gas Trading Co. L.L.C
                <br />
                DET Trade License 1095390
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-amber-400 mb-3">Quick Links</h4>
              <div className="space-y-2">
                {["home", "products", "tanks", "careers"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className="block text-xs text-slate-400 hover:text-amber-300 transition capitalize"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-amber-400 mb-3">Products</h4>
              <div className="text-xs text-slate-400 space-y-1">
                <p>Diesel · Gasoline</p>
                <p>Jet Fuel · LNG</p>
                <p>Base Oils · Crude</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-amber-400 mb-3">Contact</h4>
              <div className="text-xs text-slate-400 space-y-1">
                <p>+971 4 294 1614</p>
                <p>contact@larankhadubai.com</p>
                <p>Downtown Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-slate-500">
            <div>© 2022-2025 Larankha Oil And Gas Trading Co. L.L.C · All rights reserved.</div>
            <div>Built in Dubai · Powering the world's energy needs</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ==================== HOME PAGE ====================
const HomePage: React.FC<{ t: any; setCurrentPage: (p: string) => void }> = ({
  t,
  setCurrentPage,
}) => {
  return (
    <>
      {/* HERO con imagen principal */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden section-fade-up">
        <div className="absolute inset-0">
          <img
            src={images.heroMain}
            srcSet={`${images.heroMain} 1600w, ${images.heroAlt} 1200w`}
            sizes="(min-width:1024px) 50vw, 100vw"
            alt="Larankha Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-amber-300">
                LARANKHA OIL &amp; GAS · DUBAI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg text-slate-300 max-w-xl">
              {t.hero.subtitle}
            </p>

            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-amber-200/80">
              {t.hero.quote}
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setCurrentPage("contact")}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-full text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105"
              >
                {t.hero.ctaPrimary}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/50 px-8 py-4 rounded-full text-sm font-medium text-slate-200 hover:border-amber-500 hover:text-amber-300 transition"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={<OgIcon name="barrel" />} label="Products" value="15+" hint="Oil & Gas Types" />
                <StatCard icon={<OgIcon name="globe" />} label="Coverage" value="Global" hint="Multi-region" />
                <StatCard icon={<OgIcon name="energy" />} label="Supply" value="24/7" hint="Non-stop delivery" />
                <StatCard icon={<OgIcon name="shield" />} label="Standards" value="ESG" hint="Certified" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & CERTS */}
      <section className="py-14 bg-slate-950/70 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Trusted by</p>
              <h3 className="text-xl font-semibold text-white">Global energy operators & partners</h3>
            </div>
            <div className="flex flex-wrap gap-3 text-[12px] text-slate-400">
              {["ESG Compliant", "ISO-ready", "HSE Focus", "24/7 Ops"].map((b) => (
                <span key={b} className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-slate-300">
            {["Aviation", "Marine", "Government", "Industrial"].map((seg) => (
              <div key={seg} className="rounded-2xl border border-slate-800 bg-slate-900/40 py-4 px-3">
                {seg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG / CERTS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            { title: "ESG & Compliance", desc: "Safety, environment & governance embedded in operations", icon: <OgIcon name="shield" /> },
            { title: "Digital Monitoring", desc: "Real-time tank telemetry & logistics visibility", icon: <OgIcon name="monitor" /> },
            { title: "Operational Excellence", desc: "SLA-driven supply with audited processes", icon: <OgIcon name="check" /> },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="mt-1 text-amber-400">{item.icon}</div>
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Milestones</p>
            <h3 className="text-3xl font-bold text-white">Growth & Expansion</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { year: "2022", text: "Foundation in Dubai, launch of trading ops." },
              { year: "2023", text: "Multi-product storage network online." },
              { year: "2024", text: "Digital monitoring across key hubs." },
              { year: "2025", text: "ESG upgrade & expansion to new regions." },
            ].map((step) => (
              <div key={step.year} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-amber-400 font-semibold mb-2">{step.year}</div>
                <p className="text-sm text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUBS MAP (cards) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Hubs & Logistics</p>
              <h3 className="text-2xl font-bold text-white">Strategic global presence</h3>
              <p className="text-sm text-slate-400">Optimized supply routes and tank capacity in key markets.</p>
            </div>
            <div className="flex gap-3 text-xs text-slate-300">
              <span className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60">24/7 Ops</span>
              <span className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60">Digital telemetry</span>
              <span className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60">ESG ready</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Dubai", focus: "HQ · Trading · Storage" },
              { city: "Rotterdam", focus: "Marine · Bunkering" },
              { city: "Houston", focus: "Jet · Industrial supply" },
              { city: "Singapore", focus: "Logistics · Multi-grade" },
              { city: "Mediterranean", focus: "Strategic terminals" },
              { city: "Africa Hubs", focus: "Emerging markets" },
            ].map((hub) => (
              <div key={hub.city} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">{hub.city}</span>
                  <OgIcon name="globe" />
                </div>
                <p className="text-xs text-slate-400">{hub.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA DE CAPACIDADES */}
      <section className="py-16 md:py-20 bg-slate-900/50 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              World-class infrastructure powering global energy distribution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ImageCard
              image={images.tanksPipelines}
              title="Storage Network"
              description="Strategic tank farms with advanced monitoring systems"
            />
            <ImageCard
              image={images.tanksAerial}
              title="Global Presence"
              description="Multi-region storage across key trading hubs"
            />
            <ImageCard
              image={images.refineryLogo}
              title="Refinery Operations"
              description="State-of-the-art processing and distribution"
            />
          </div>
        </div>
      </section>

      {/* FILOSOFÍA con imagen de fondo */}
      <section className="relative py-20 md:py-24 overflow-hidden section-fade-up">
        <div className="absolute inset-0">
          <img
            src={images.refineryVision}
            alt="Refinery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.philosophy.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PhilosophyCard
              icon={<OgIcon name="target" />}
              title={t.philosophy.missionTitle}
              text={t.philosophy.missionText}
            />
            <PhilosophyCard
              icon={<OgIcon name="vision" />}
              title={t.philosophy.visionTitle}
              text={t.philosophy.visionText}
            />
            <PhilosophyCard
              icon={<OgIcon name="gem" />}
              title={t.philosophy.valuesTitle}
              text={t.philosophy.valuesText}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS PREVIEW */}
      <section className="py-16 md:py-20 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t.products.title}</h2>
              <p className="text-slate-400 mb-8">{t.products.subtitle}</p>

              <div className="grid grid-cols-2 gap-4">
                {t.products.groups.slice(0, 4).map((group: any) => (
                  <div
                    key={group.name}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 hover:border-amber-500/50 transition"
                  >
                    <h3 className="text-sm font-semibold text-amber-400 mb-2">
                      {group.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {group.items.slice(0, 2).join(" · ")}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage("products")}
                className="mt-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium"
              >
                View all products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <img
                src={images.pipelineCloseup}
                alt="Pipeline"
                className="rounded-3xl shadow-2xl shadow-amber-500/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-amber-400">15+</div>
                <div className="text-xs text-slate-400">Product Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO PREVIEW */}
      <section className="py-16 md:py-20 bg-slate-900/50 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={images.teamWorkers}
                alt="Team"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">{t.nav.team}</h2>
              <p className="text-slate-400 mb-6">
                Larankha is led by an experienced leadership team combining trading,
                logistics, finance and risk management expertise.
              </p>
              <ul className="space-y-3">
                {[
                  "Founder & CEO – Strategic vision & global growth",
                  "Vice Director – Operations & efficiency",
                  "Managing Director – Business development",
                  "CFO – Financial strategy & stability",
                ].map((role) => (
                  <li key={role} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    {role}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage("careers")}
                className="mt-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium"
              >
                Join our team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.tanksSunset}
            alt="Tanks Sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Power Your Business?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today to discuss your energy requirements
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-4 rounded-full text-sm font-bold text-slate-950 shadow-xl hover:scale-105 transition"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
};

// ==================== PRODUCTS PAGE ====================
const ProductsPage: React.FC<{ t: any; lang: string }> = ({ t }) => {
  return (
    <>
      {/* Hero Products */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.pipelineCloseup}
            alt="Pipeline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.products.title}
          </h1>
          <p className="text-xl text-slate-300">{t.products.subtitle}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {t.products.groups.map((group: any, idx: number) => (
              <div
                key={group.name}
                className="group bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-3xl mb-2">
                      {[<OgIcon key="b" name="barrel" />, <OgIcon key="p" name="pump" />, <OgIcon key="w" name="wrench" />, <OgIcon key="f" name="flame" />][idx]}
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">
                      {group.name}
                    </h3>
                  </div>
                  <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mt-4" />
                </div>
                <ul className="space-y-3">
                  {group.items.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LNG Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">LNG & Gas Solutions</h2>
              <p className="text-slate-400 mb-6">
                State-of-the-art liquefied natural gas storage and distribution capabilities
                with spherical tanks designed for maximum safety and efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Liquefied Natural Gas (LNG)
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Liquefied Petroleum Gas (LPG)
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Advanced cryogenic storage
                </li>
              </ul>
            </div>
            <div>
              <img
                src={images.lngTanks}
                alt="LNG Tanks"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ==================== ABOUT PAGE ====================
const AboutPage: React.FC<{ t: any; lang: string }> = ({ t }) => {
  return (
    <>
      {/* Hero About */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.refineryLogo}
            alt="Refinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Larankha
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <PhilosophyCard
              icon={<OgIcon name="target" />}
              title={t.philosophy.missionTitle}
              text={t.philosophy.missionText}
              large
            />
            <PhilosophyCard
              icon={<OgIcon name="vision" />}
              title={t.philosophy.visionTitle}
              text={t.philosophy.visionText}
              large
            />
            <PhilosophyCard
              icon={<OgIcon name="gem" />}
              title={t.philosophy.valuesTitle}
              text={t.philosophy.valuesText}
              large
            />
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={images.tanksSunset}
              alt="Facility"
              className="rounded-3xl shadow-2xl"
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-400 mb-4">
                Founded in Dubai, Larankha Oil And Gas Trading Co. L.L.C has established
                itself as a trusted partner in the global energy market.
              </p>
              <p className="text-slate-400 mb-4">
                With strategic operations across multiple regions, we deliver excellence
                in oil and gas trading, storage, and distribution.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">2022</div>
                  <div className="text-xs text-slate-500">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-xs text-slate-500">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">24/7</div>
                  <div className="text-xs text-slate-500">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.future.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.future.bullets.map((bullet: string, idx: number) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
              >
                <div className="text-amber-400 mb-4">
                  {[<OgIcon key="s" name="sustain" />, <OgIcon key="g" name="globe" />, <OgIcon key="t" name="tech" />, <OgIcon key="c" name="clipboard" />][idx]}
                </div>
                <p className="text-sm text-slate-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ==================== TANKS PAGE ====================
const TanksPage: React.FC<{ t: any; lang: string }> = ({ t }) => {
  return (
    <>
      {/* Hero Tanks */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.tanksAerial}
            alt="Tanks Aerial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.tanks.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.tanks.text}
          </p>
        </div>
      </section>

      {/* Tank Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageCard
              image={images.tanksPipelines}
              title="Pipeline Network"
              description="Connected infrastructure for efficient distribution"
            />
            <ImageCard
              image={images.tanksAerial}
              title="Storage Capacity"
              description="Multi-product storage facilities"
            />
            <ImageCard
              image={images.tanksSunset}
              title="24/7 Operations"
              description="Round-the-clock monitoring and safety"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Storage Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <OgIcon name="monitor" />,
                title: "Real-time Monitoring",
                desc: "Advanced tank level monitoring and safety controls",
              },
              {
                icon: <OgIcon name="globe" />,
                title: "Strategic Locations",
                desc: "Hubs in key global ports and trading zones",
              },
              {
                icon: <OgIcon name="check" />,
                title: "HSE Compliance",
                desc: "Strict HSE and ESG compliance across all terminals",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/50 transition"
              >
                <div className="flex justify-center mb-4 text-amber-400">{item.icon}</div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LNG Spherical Tanks */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Spherical LNG Storage</h2>
              <p className="text-slate-400 mb-6">
                Our spherical tanks represent the pinnacle of LNG storage technology,
                designed for maximum pressure resistance and minimal heat transfer.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Cryogenic storage capability
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Advanced insulation systems
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  24/7 pressure monitoring
                </li>
              </ul>
            </div>
            <img
              src={images.lngTanks}
              alt="LNG Spherical Tanks"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// ==================== CAREERS PAGE ====================
const CareersPage: React.FC<{ t: any; lang: string }> = ({ t }) => {
  return (
    <>
      {/* Hero Careers */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.teamWorkers}
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.careers.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.careers.intro}
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Join Larankha?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.careers.perks.map((perk: string, idx: number) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
              >
                <div className="text-amber-400 mb-4">
                  {[<OgIcon key="r" name="rocket" />, <OgIcon key="c" name="chart" />, <OgIcon key="m" name="money" />, <OgIcon key="g" name="globe" />][idx]}
                </div>
                <p className="text-sm text-slate-300">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Leadership</h2>
              <ul className="space-y-4">
                {[
                  { role: "Founder & CEO", desc: "Strategic vision & global growth" },
                  { role: "Vice Director", desc: "Operations & efficiency" },
                  { role: "Managing Director", desc: "Business development & partnerships" },
                  { role: "CFO", desc: "Financial strategy & long-term stability" },
                  { role: "Customer Relations", desc: "Client experience & support" },
                ].map((item) => (
                  <li key={item.role} className="flex items-start gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold">
                      {item.role[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-amber-400">{item.role}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={images.refineryLogo}
              alt="Refinery"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-slate-400 mb-8">
            For current openings, please contact HR via email
          </p>
          <a
            href="mailto:contact@larankhadubai.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-4 rounded-full text-sm font-bold text-slate-950 shadow-xl hover:scale-105 transition"
          >
            📧 contact@larankhadubai.com
          </a>
        </div>
      </section>
    </>
  );
};

// ==================== CONTACT PAGE ====================
const ContactPage: React.FC<{ t: any; lang: string }> = ({ t }) => {
  return (
    <>
      {/* Hero Contact */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.heroMain}
            alt="Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-slate-300">
            Larankha Oil And Gas Trading Co. L.L.C · DET Trade License 1095390
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.contact.addressTitle}
              </h2>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-6">
                {t.contact.address.map((line: string) => (
                  <p key={line} className="text-slate-300">{line}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                  <div className="text-xs text-slate-500 mb-1">{t.contact.phoneLabel}</div>
                  <div className="text-amber-400 font-semibold">+971 4 294 1614</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                  <div className="text-xs text-slate-500 mb-1">{t.contact.emailLabel}</div>
                  <div className="text-amber-400 font-semibold text-sm">contact@larankhadubai.com</div>
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Operational hours: 09:00 – 18:00 (GST), Sunday to Friday
              </p>
            </div>

            {/* Form */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">{t.contact.formTitle}</h3>
              <p className="text-sm text-slate-400 mb-6">{t.contact.formSubtitle}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submission should be wired to your backend / API.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    aria-label={t.contact.formName}
                    placeholder={t.contact.formName}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    aria-label={t.contact.formEmail}
                    placeholder={t.contact.formEmail}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    {t.contact.formCompany}
                  </label>
                  <input
                    type="text"
                    aria-label={t.contact.formCompany}
                    placeholder={t.contact.formCompany}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={4}
                    aria-label={t.contact.formMessage}
                    placeholder={t.contact.formMessage}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 rounded-xl text-sm font-bold text-slate-950 shadow-xl hover:shadow-amber-500/30 transition"
                >
                  {t.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ==================== COMPONENTES AUXILIARES ====================

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; hint: string }> = ({
  icon,
  label,
  value,
  hint,
}) => (
  <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 hover:border-amber-500/30 flex items-start gap-3 card-elevated">
    <div className="mt-0.5 text-amber-400">{icon}</div>
    <div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-bold text-amber-400 leading-tight">{value}</div>
      <div className="text-xs text-slate-500">{hint}</div>
    </div>
  </div>
);

const ImageCard: React.FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => (
  <div className="group relative overflow-hidden rounded-3xl card-elevated">
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      sizes="(min-width:1024px) 33vw, 100vw"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  </div>
);

const PhilosophyCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  text: string;
  large?: boolean;
}> = ({ icon, title, text, large }) => (
  <div
    className={`bg-slate-900/50 border border-slate-800 rounded-3xl ${
      large ? "p-8" : "p-6"
    } hover:border-amber-500/30 transition`}
  >
    <div className="mb-4 text-amber-400">{icon}</div>
    <h3 className={`${large ? "text-xl" : "text-lg"} font-bold text-amber-400 mb-3`}>
      {title}
    </h3>
    <p className={`${large ? "text-base" : "text-sm"} text-slate-300 leading-relaxed`}>
      {text}
    </p>
  </div>
);

export default App;
