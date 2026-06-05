import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Star } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface FooterProps {
  onBookClick: () => void;
  setActiveSection: (sec: string) => void;
}

export default function Footer({ onBookClick, setActiveSection }: FooterProps) {
  const handleLogoClick = () => {
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const seoTargetKeywords = [
    "Best Skin Clinic in Manikonda",
    "Best Hair Clinic in Hyderabad",
    "Laser Hair Removal Hyderabad",
    "HydraFacial Manikonda",
    "Hair Regrowth Treatment Hyderabad",
    "Dermatology Clinic Hyderabad",
    "Skin Clinic Manikonda"
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden pt-16 pb-8" id="footer-section">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-pink-500/5 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand & Interactive Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleLogoClick} id="footer-logo">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 via-teal-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                <span className="font-serif font-bold text-lg">A9</span>
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white leading-tight">
                  A9 Skin & Hair Care
                </span>
                <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-teal-400 font-semibold">
                  Luxury Aesthetic Center
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              We specialize in state-of-the-art dermatological care, pain-free laser technology, and non-invasive hair restoration. Led by expert doctors dedicated to premium aesthetics.
            </p>

            {/* Ratings Certification Banner */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl max-w-xs">
              <div className="flex text-amber-400 gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-300 font-bold font-sans">
                4.9/5 Star Clinics Google Reviews
              </span>
            </div>

            {/* Timings */}
            <div className="space-y-1.5 font-sans justify-start text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-500" />
                <span className="font-semibold text-white">Operational Timings:</span>
              </div>
              <span className="block pl-6 text-slate-400">{CLINIC_INFO.timings}</span>
              <span className="block pl-6 text-[10px] text-teal-400 font-medium">✨ Sunday Open For Comfort Bookings</span>
            </div>
          </div>

          {/* Column 2: Live Appointment Form Embed / Quick Contact Details */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-white border-b border-white/10 pb-2">
              Instant Consult
            </h4>
            
            <div className="space-y-3.5 font-sans text-xs">
              <a 
                href={`tel:${CLINIC_INFO.phoneNumber}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 hover:bg-white/10 transition-colors text-slate-200 group"
                id="footer-call-rect"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400">Call Frontdesk</span>
                  <span className="block font-bold">94926 41321</span>
                </div>
              </a>

              <a 
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 hover:bg-white/10 transition-colors text-slate-200 group"
                id="footer-whatsapp-rect"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-teal-500/10" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400">WhatsApp Query</span>
                  <span className="block font-bold">94926 41321</span>
                </div>
              </a>

              <button
                onClick={onBookClick}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 shadow-md shadow-teal-500/10 flex items-center justify-center gap-2"
                id="footer-book-banner-btn"
              >
                Book Free Consultation Clinic Slot
              </button>
            </div>
          </div>

          {/* Column 3: Google Maps Embed Map */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-white border-b border-white/10 pb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              Manikonda Location
            </h4>
            
            {/* Embedded Iframe */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/10 shadow-lg" id="footer-google-map">
              <iframe
                title="A9 Skin & Hair Care Manikonda"
                src={CLINIC_INFO.googleMapsEmbed}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <p className="font-sans text-[11px] text-slate-400 flex items-start gap-1.5 leading-normal">
              <span>📍 Address: CF4G+HVW, Manikonda Rd, Hyderabad, Telangana 500089. (Conveniently adjacent to main landmarks with dedicated car slots)</span>
            </p>
          </div>

        </div>

        {/* Middle Segment: SEO Search Terms for local Manikonda Ranking */}
        <div className="py-6 border-b border-white/5 space-y-3" id="footer-seo-cloud">
          <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Local Clinical SEO Search Phrases</span>
          <div className="flex flex-wrap gap-1.5 font-sans">
            {seoTargetKeywords.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[10px] text-slate-500 bg-white/2 bg-opacity-10 border border-white/5 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] text-slate-500" id="footer-bottom">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>© {new Date().getFullYear()} A9 Skin & Hair Care Clinic. All cosmetic medical rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <span>Clinical Treatments</span>
            <span>•</span>
            <span>Trusted Experts</span>
            <span>•</span>
            <span>Manikonda, Hyderabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
