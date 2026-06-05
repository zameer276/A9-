import { useState, useEffect, FormEvent } from "react";
import { X, Sparkles, MessageCircle, Gift, CheckCircle } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface LeadPopupProps {
  onBookSuccess: (name: string, phone: string, treatment: string) => void;
}

export default function LeadPopup({ onBookSuccess }: LeadPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("HydraFacial Glow");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen or closed this popup in this session
    const hasSeenPopup = sessionStorage.getItem("a9_has_seen_lead_popup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("a9_has_seen_lead_popup", "true");
      }, 5000); // Trigger after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitted(true);
    
    // Save lead details to localStorage for clinical records
    const leads = JSON.parse(localStorage.getItem("a9_leads") || "[]");
    leads.push({ name, phone, treatment, timestamp: new Date().toISOString() });
    localStorage.setItem("a9_leads", JSON.stringify(leads));

    // Callback
    onBookSuccess(name, phone, treatment);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hi A9 Skin & Hair Care! I saw your Special Offer and would like to claim my FREE Consultation & 15% HydraFacial discount.\n\nName: ${name || 'Interested Client'}\nPhone: ${phone || '94926 41321'}`
    );
    window.open(`https://wa.me/919492641321?text=${text}`, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
      id="lead-popup-container"
    >
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl border border-teal-50"
        id="lead-popup-wrapper"
      >
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-teal-500 via-pink-500 to-teal-500" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          id="lead-popup-close"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8" id="lead-popup-form-view">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 text-[11px] font-bold tracking-wide uppercase mb-4 animate-bounce">
              <Gift className="w-3.5 h-3.5" />
              <span>Limited Time Offer</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight tracking-tight mb-2">
              Get <span className="text-teal-600">FREE Consultation</span> & 15% off your first HydraFacial!
            </h3>
            
            <p className="font-sans text-sm text-slate-500 mb-6 leading-relaxed">
              Experience dermatologist-led luxury skin and hair care in Manikonda. Claim your special welcome voucher today.
            </p>

            {/* Lead Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  id="lead-input-name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  id="lead-input-phone"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Treatment of Interest
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-3.5 py-3 text-sm focus:outline-none transition-colors"
                  id="lead-input-treatment"
                >
                  <option value="HydraFacial Glow">HydraFacial Skin Infusions</option>
                  <option value="Laser Hair Removal">Pain-free Laser Hair Removal</option>
                  <option value="Hair Regrowth Therapy">Trichology Hair Regrowth</option>
                  <option value="Pigmentation/Melasma">Q-Switch Spot Pigmentation</option>
                  <option value="Mole/Wart Removal">Radiofrequency Mole/Tag Removal</option>
                </select>
              </div>

              {/* Submit triggers */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/15 flex items-center justify-center gap-2"
                  id="lead-form-submit"
                >
                  <Sparkles className="w-4 h-4 fill-white/10" />
                  Claim Free Consultation Vouchers
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3 px-4 border border-teal-200 hover:bg-teal-50 text-teal-700 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                  id="lead-whatsapp-submit"
                >
                  <MessageCircle className="w-4 h-4 text-teal-600 fill-teal-100" />
                  Instant Claim on WhatsApp
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 text-center" id="lead-popup-success-view">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-5 border border-teal-100">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Voucher Claimed Successfully!
            </h3>
            
            <p className="font-sans text-sm text-slate-500 mb-6 leading-relaxed">
              We have locked in your <strong>FREE Consultation</strong> and <strong className="text-teal-600">15% HydraFacial Vouchers</strong> under your number: {phone}. 
            </p>

            <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100/50 text-left space-y-2 mb-6">
              <span className="block text-[11px] font-bold text-teal-600 uppercase tracking-widest text-center">Your Offer ID: A9-VOUCH-15</span>
              <div className="h-0.5 bg-dashed border-teal-100 w-full" />
              <p className="text-xs text-slate-600 text-center">Show this code or your phone number during your booking appointment checkout.</p>
            </div>

            <button
              onClick={handleWhatsAppInstant}
              className="w-full py-3.5 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2"
              id="lead-success-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-white/10" />
              Open WhatsApp to Confirm Slot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
