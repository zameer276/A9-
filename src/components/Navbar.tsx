import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface NavbarProps {
  onBookClick: (treatmentId?: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ onBookClick, activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Treatments", id: "treatments" },
    { label: "About Us", id: "about" },
    { label: "Before & After", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavItemClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to element
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Design */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavItemClick("home")}
            id="navbar-logo"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-teal-500/15 group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-bold text-xl tracking-tighter">A9</span>
            </div>
            <div>
              <span className="block font-serif font-bold text-lg md:text-xl text-slate-900 leading-tight tracking-tight">
                A9 Skin & Hair
              </span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-teal-600">
                Care Clinic • Manikonda
              </span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center gap-8" id="navbar-desktop-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`font-sans text-sm font-medium transition-colors hover:text-teal-600 relative py-1.5 ${
                  activeSection === item.id 
                    ? "text-teal-600 font-semibold" 
                    : "text-slate-600"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-4" id="navbar-desktop-cta">
            <a 
              href={`tel:${CLINIC_INFO.phoneNumber}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-600 transition-colors py-2 px-3 border border-slate-200/80 rounded-lg hover:border-teal-200 bg-white"
              id="navbar-phone-call"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Call 94926 41321</span>
            </a>
            <button
              onClick={() => onBookClick()}
              className="relative overflow-hidden group rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4.5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20 shadow-sm"
              id="navbar-book-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </span>
            </button>
          </div>

          {/* Mobile Menu Actuator */}
          <div className="flex lg:hidden items-center gap-2.5" id="navbar-mobile-controls">
            <a 
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100 hover:bg-teal-100 transition-colors"
              title="WhatsApp Consultation"
              id="navbar-mobile-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-teal-100" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-slate-100 border border-slate-200/80"
              aria-label="Toggle menu"
              id="navbar-mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (with slide toggle animation) */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-b border-teal-50 bg-white/98 backdrop-blur-lg px-4 pt-2 pb-6 shadow-xl"
          id="navbar-mobile-drawer"
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`w-full text-left font-sans py-3 px-3.5 rounded-lg text-sm transition-colors flex items-center justify-between ${
                  activeSection === item.id 
                    ? "bg-teal-50/70 text-teal-800 font-semibold border-l-4 border-teal-600" 
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            
            <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col sm:flex-row gap-3">
              <a 
                href={`tel:${CLINIC_INFO.phoneNumber}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700"
                id="mobile-call-btn"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call 94926 41321</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2 hover:from-teal-750 hover:to-teal-850"
                id="mobile-book-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
