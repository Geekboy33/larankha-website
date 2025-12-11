// src/App.tsx
import React, { useState, useEffect, useRef } from "react";
import { Lang, languages, copy } from "./translations";

// ==================== ANIMATED COUNTER HOOK ====================
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

// ==================== WHATSAPP FLOATING BUTTON ====================
const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "34627296872"; // Spain WhatsApp number
  const message = "Hello, I'm interested in Larankha Oil & Gas Trading services.";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isHovered ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'}`}>
            Chat Now
          </span>
        </div>
      </div>
    </a>
  );
};

// ==================== COOKIE CONSENT BANNER ====================
const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍪</span>
          <p className="text-sm text-slate-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-6 py-2 border border-slate-700 hover:border-slate-600 text-slate-300 rounded-lg transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== FAQ ACCORDION ====================
const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className="border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 text-left bg-slate-900/50 hover:bg-slate-900/70 transition"
    >
      <span className="font-semibold text-white pr-4">{question}</span>
      <svg
        className={`w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

// ==================== ANIMATED STAT CARD ====================
const AnimatedStatCard: React.FC<{ 
  icon: React.ReactNode; 
  value: number; 
  suffix?: string;
  label: string; 
}> = ({ icon, value, suffix = "", label }) => {
  const { count, ref } = useCountUp(value, 2000);
  
  return (
    <div ref={ref} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-amber-500/30 transition group">
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-amber-400 mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
};

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
  barco: "/images/barco.png",
  camion: "/images/camion.png",
  gasolina: "/images/gasolina.png",
  jet: "/images/jet.png",
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
  | "ship"
  | "truck"
  | "anchor"
  | "route"
  | "timer"
  | "lock"
; size?: "sm" | "md" | "lg" }> = ({ name, size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-7 h-7"
  };
  const common = `${sizes[size]} text-amber-400`;
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
    case "ship":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20 4 9h16l2 11" />
          <path d="M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
          <path d="M12 4v5" />
          <path d="M8 9V7m8 2V7" />
          <path d="M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
        </svg>
      );
    case "truck":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 3h15v13H1z" />
          <path d="M16 8h4l3 3v5h-7V8Z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
          <path d="M8 16H3m13 0h-1" />
        </svg>
      );
    case "anchor":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <path d="M12 8v13" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
          <path d="M12 8 9 11h6l-3-3Z" />
        </svg>
      );
    case "route":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="19" r="3" />
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H18" />
          <circle cx="18" cy="5" r="3" />
        </svg>
      );
    case "timer":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2" />
          <path d="M9 2h6" />
          <path d="M12 2v2" />
        </svg>
      );
    case "lock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1.5" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
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

      {/* Floating Components */}
      <WhatsAppButton />
      <CookieConsent />
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

      {/* LOGISTICS & DISTRIBUTION - Barco y Camión */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">Logistics & Distribution</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Global Delivery Network</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Seamless transportation by sea and land, ensuring your energy supplies reach their destination safely and on time.
            </p>
              </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Maritime Transport */}
            <div className="group relative overflow-hidden rounded-3xl card-elevated">
              <img
                src={images.barco}
                alt="Maritime Transport - Oil Tanker"
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/30">
                    <OgIcon name="ship" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Maritime Transport</h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  Global shipping routes with modern tanker fleet for crude, refined products and LNG.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Crude Oil", "LNG", "Refined Products"].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-[11px] text-amber-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Land Transport */}
            <div className="group relative overflow-hidden rounded-3xl card-elevated">
              <img
                src={images.camion}
                alt="Land Transport - Fuel Truck"
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/30">
                    <OgIcon name="truck" size="lg" />
              </div>
                  <h3 className="text-xl font-bold text-white">Land Transport</h3>
            </div>
                <p className="text-sm text-slate-300 mb-3">
                  Reliable road logistics with specialized fleet for last-mile fuel delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Diesel", "Gasoline", "Jet Fuel"].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-[11px] text-amber-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: "anchor" as const, value: "50+", label: "Ports served" },
              { icon: "route" as const, value: "1000+", label: "Routes active" },
              { icon: "timer" as const, value: "98%", label: "On-time delivery" },
              { icon: "lock" as const, value: "Zero", label: "Incidents target" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-amber-500/30 transition">
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-xl bg-amber-500/10">
                    <OgIcon name={stat.icon} size="md" />
                  </div>
                </div>
                <div className="text-xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIATION FUEL / JET FUEL */}
      <section className="py-20 bg-gradient-to-b from-slate-900/30 to-slate-950 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <img
                src={images.jet}
                alt="Jet Fuel - Aviation Refueling"
                className="rounded-3xl shadow-2xl shadow-amber-500/10 transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-900/95 backdrop-blur border border-amber-500/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10">
                    <OgIcon name="energy" size="md" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-400">Jet A-1</div>
                    <div className="text-xs text-slate-400">Premium Aviation Fuel</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">Aviation Fuel</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powering Global Aviation
            </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We supply premium Jet A-1 fuel to airports, FBOs, and aviation operators worldwide. 
                Our aviation fuel meets the highest international standards, ensuring safe and efficient flight operations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "shield" as const, label: "ASTM Certified", desc: "International standards" },
                  { icon: "globe" as const, label: "Global Supply", desc: "Multi-region coverage" },
                  { icon: "timer" as const, label: "24/7 Delivery", desc: "Airport logistics" },
                  { icon: "check" as const, label: "Quality Control", desc: "Lab-tested batches" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 mt-0.5">
                      <OgIcon name={item.icon} size="sm" />
          </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage("products")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-semibold hover:from-amber-400 hover:to-orange-400 transition shadow-lg shadow-amber-500/20"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
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
                src={images.gasolina}
                alt="Larankha Gas Station"
                className="rounded-3xl shadow-2xl shadow-amber-500/10"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <OgIcon name="pump" size="md" />
                  <div>
                    <div className="text-xl font-bold text-amber-400">15+</div>
                    <div className="text-xs text-slate-400">Product Types</div>
                  </div>
                </div>
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

      {/* CERTIFICATIONS / BADGES */}
      <section className="py-16 bg-slate-950/50 border-y border-slate-800 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Certifications & Standards</p>
            <h3 className="text-2xl font-bold text-white">Industry-Leading Compliance</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "ISO 9001", desc: "Quality Management", icon: "check" as const },
              { name: "ISO 14001", desc: "Environmental", icon: "sustain" as const },
              { name: "API Certified", desc: "Petroleum Standards", icon: "barrel" as const },
              { name: "ASTM", desc: "Testing Standards", icon: "clipboard" as const },
              { name: "HSE", desc: "Health & Safety", icon: "shield" as const },
              { name: "ESG Ready", desc: "Sustainability", icon: "globe" as const },
            ].map((cert) => (
              <div
                key={cert.name}
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center hover:border-amber-500/50 hover:bg-slate-900/70 transition-all cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                    <OgIcon name={cert.icon} size="lg" />
                  </div>
                </div>
                <div className="text-sm font-semibold text-amber-400">{cert.name}</div>
                <div className="text-xs text-slate-500">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / PARTNERS LOGOS */}
      <section className="py-16 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Trusted Partners</p>
            <h3 className="text-2xl font-bold text-white">Working with Industry Leaders</h3>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x gap-12 py-4">
              {[
                { name: "ADNOC", sector: "National Oil Co." },
                { name: "Emirates", sector: "Aviation" },
                { name: "DP World", sector: "Logistics" },
                { name: "ENOC", sector: "Energy" },
                { name: "Etihad", sector: "Aviation" },
                { name: "Masdar", sector: "Renewables" },
                { name: "DEWA", sector: "Utilities" },
                { name: "Emarat", sector: "Fuel Retail" },
              ].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-slate-900/30 border border-slate-800 rounded-xl px-8 py-4 hover:border-amber-500/30 transition"
                >
                  <div className="text-lg font-bold text-slate-300">{client.name}</div>
                  <div className="text-xs text-slate-500">{client.sector}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-slate-600 mt-6">* Representative of typical client industries</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-slate-900/30 to-slate-950 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Client Testimonials</p>
            <h3 className="text-3xl font-bold text-white">What Our Partners Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Larankha has been instrumental in ensuring our fuel supply chain runs smoothly. Their 24/7 availability and quality standards are unmatched.",
                author: "Operations Director",
                company: "Major Aviation Company",
                rating: 5
              },
              {
                quote: "The professionalism and reliability of Larankha's team have made them our preferred partner for oil & gas trading in the region.",
                author: "Procurement Manager",
                company: "Industrial Conglomerate",
                rating: 5
              },
              {
                quote: "Exceptional service from initial inquiry to delivery. Their understanding of the MENA market is invaluable to our operations.",
                author: "Supply Chain Head",
                company: "Maritime Logistics Firm",
                rating: 5
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/30 transition relative"
              >
                <div className="absolute -top-3 left-6 text-4xl text-amber-500/30">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-800 pt-4">
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY STATS ANIMATED */}
      <section className="py-16 bg-slate-950/70 section-fade-up">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedStatCard
              icon={<OgIcon name="barrel" size="lg" />}
              value={500}
              suffix="K+"
              label="Barrels Traded Monthly"
            />
            <AnimatedStatCard
              icon={<OgIcon name="globe" size="lg" />}
              value={25}
              suffix="+"
              label="Countries Served"
            />
            <AnimatedStatCard
              icon={<OgIcon name="ship" size="lg" />}
              value={150}
              suffix="+"
              label="Shipments Per Year"
            />
            <AnimatedStatCard
              icon={<OgIcon name="shield" size="lg" />}
              value={99}
              suffix="%"
              label="On-Time Delivery"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

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

// ==================== FAQ SECTION COMPONENT ====================
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What types of petroleum products does Larankha trade?",
      answer: "We specialize in trading a comprehensive range of petroleum products including Diesel (10ppm & 50ppm), Gasoline (87-95 Octanes), Jet Fuel A-1, LNG, LPG, Base Oils (SN150, SN500), and crude oil. All products meet international quality standards."
    },
    {
      question: "Which regions do you serve?",
      answer: "Larankha operates globally with strategic hubs in Dubai (HQ), Rotterdam, Houston, Singapore, Mediterranean ports, and emerging African markets. We serve clients across MENA, Europe, Americas, and Asia-Pacific regions."
    },
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by product and delivery method. For bulk maritime shipments, we typically work with cargo lots. For land-based deliveries, we offer flexible volumes to meet your operational needs. Contact our trading desk for specific requirements."
    },
    {
      question: "How do you ensure product quality?",
      answer: "All our products undergo rigorous quality control through certified laboratories. We comply with ASTM, API, and ISO standards. Each shipment comes with a Certificate of Analysis (COA) and Certificate of Origin (COO)."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms including Letters of Credit (LC), Documentary Collections, and established credit facilities for qualified partners. Our finance team works with clients to structure optimal payment solutions."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, our operations and trading desks operate 24/7 to support global time zones. You can reach us via phone, email, or WhatsApp at any time for urgent inquiries and supply coordination."
    },
  ];

  return (
    <section className="py-20 section-fade-up">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">FAQ</p>
          <h3 className="text-3xl font-bold text-white">Frequently Asked Questions</h3>
          <p className="text-slate-400 mt-3">Everything you need to know about our services</p>
    </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
