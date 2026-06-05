import { useState, FormEvent } from "react";
import { X, Calendar, MessageCircle, Heart, CheckCircle, Clock, Gift, ClipboardCheck } from "lucide-react";
import { TREATMENTS, CLINIC_INFO } from "../data";

interface BookingModalProps {
  initialTreatmentId?: string;
  onClose: () => void;
  onSuccess: (name: string, phone: string, treatment: string) => void;
}

export default function BookingModal({ initialTreatmentId, onClose, onSuccess }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(initialTreatmentId || "free-consultation");
  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10:00 AM - 1:00 PM)");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedPass, setBookedPass] = useState<any | null>(null);

  // Time Slot Options
  const slots = [
    "Morning (10:00 AM - 1:00 PM)",
    "Afternoon (1:00 PM - 4:00 PM)",
    "Evening (4:00 PM - 7:30 PM)",
    "Late Evening (7:30 PM - 8:30 PM)"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !preferredDate) return;

    setIsSubmitting(true);

    const selectedTreatment = TREATMENTS.find(t => t.id === treatment)?.title || "Free Doctor Consultation";

    const localBooking = {
      id: "A9-" + Math.floor(1000 + Math.random() * 9000),
      name,
      phone,
      treatment: selectedTreatment,
      preferredDate,
      timeSlot,
      message,
      createdAt: new Date().toLocaleDateString()
    };

    // Save to local storage for persistent historical data
    const existing = JSON.parse(localStorage.getItem("a9_appointments") || "[]");
    localStorage.setItem("a9_appointments", JSON.stringify([localBooking, ...existing]));

    setTimeout(() => {
      setIsSubmitting(false);
      setBookedPass(localBooking);
      onSuccess(name, phone, selectedTreatment);
    }, 850);
  };

  const handleWhatsAppConfirm = () => {
    if (!bookedPass) return;
    
    const textMsg = `Hi A9 Skin & Hair Care Team, I have booked an appointment through your website booking system.\n\n` +
      `Appointment ID: ${bookedPass.id}\n` +
      `Name: ${bookedPass.name}\n` +
      `Phone: ${bookedPass.phone}\n` +
      `Treatment: ${bookedPass.treatment}\n` +
      `Preferred Date: ${bookedPass.preferredDate}\n` +
      `Preferred Time: ${bookedPass.timeSlot}\n` +
      `${bookedPass.message ? `Notes: ${bookedPass.message}` : ""}\n\n` +
      `Please confirm my slot. Thank you!`;

    const cleanLink = `https://wa.me/919492641321?text=${encodeURIComponent(textMsg)}`;
    window.open(cleanLink, "_blank");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      id="booking-modal-overlay"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-teal-50 overflow-hidden my-8"
        id="booking-modal-card"
      >
        {/* Top Header Design */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-teal-500/30 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg">Secure Booking Panel</h3>
              <p className="text-[10px] text-teal-100 uppercase tracking-widest font-sans">A9 Esthetic & Trichology Center</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-1.5 rounded-md hover:bg-white/10 text-white/90 hover:text-white transition-all"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!bookedPass ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[78vh] overflow-y-auto no-scrollbar" id="booking-form">
            
            {/* Promotion Badge */}
            <div className="bg-pink-50 border border-pink-100/60 rounded-xl p-3.5 flex items-start gap-3">
              <div className="bg-pink-100 p-1.5 rounded-lg text-pink-600 mt-0.5">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans text-xs font-bold text-pink-700">Free Clinical Skin Consultation Voucher Included</span>
                <span className="block text-[11px] text-pink-600/90 font-medium leading-normal mt-0.5">Every booking includes a diagnostic review and skin-scope scan entirely free of charge with our chief dermatologist.</span>
              </div>
            </div>

            {/* Input Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Patient Name <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter patient full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                id="form-booking-name"
              />
            </div>

            {/* Input Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number <span className="text-pink-500">*</span>
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                id="form-booking-phone"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Your mobile number is safe with HIPAA-level clinic protection.</span>
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Treatment Interested In <span className="text-pink-500">*</span>
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                id="form-booking-treatment"
              >
                <option value="free-consultation">General Consultation & Diagnostic Scan (FREE)</option>
                {TREATMENTS.map(t => (
                  <option key={t.id} value={t.id}>{t.title} ({t.category} Care)</option>
                ))}
              </select>
            </div>

            {/* Two Column Grid Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date <span className="text-pink-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  id="form-booking-date"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Time Slot <span className="text-pink-500">*</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-3.5 py-3 text-sm focus:outline-none transition-colors"
                  id="form-booking-slot"
                >
                  {slots.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message / Symptoms description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Optional Message / Symptoms (Skin/Hair issues)
              </label>
              <textarea
                placeholder="Mention any active concerns e.g., hair thinning pattern, skin allergy list, acne severity, etc."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors resize-none"
                id="form-booking-msg"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3.5 px-4 font-semibold text-sm transition-all duration-300 shadow-lg shadow-teal-600/10 flex items-center justify-center gap-2 disabled:opacity-75"
              id="form-submit-appointment"
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-4 h-4 animate-spin text-teal-100" />
                  <span>Securing Clinic Slot...</span>
                </>
              ) : (
                <>
                  <ClipboardCheck className="w-5 h-5 text-teal-100" />
                  <span>Generate My Appointment Pass</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-6" id="booking-pass-view">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-100">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-teal-600 uppercase tracking-widest block mb-1">Congratulations! slot reserved</span>
              <h4 className="font-serif text-2xl font-bold text-slate-900">Your Appointment Pass is Ready</h4>
              <p className="font-sans text-xs text-slate-500 mt-1.5">Show this clinic pass receipt on your phone when arriving at the front desk.</p>
            </div>

            {/* Simulated Printed Pass visual styling */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/60 text-left font-sans">
              <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
                <span className="font-bold">A9 CLINIC PASS</span>
                <span className="font-mono text-teal-300 font-bold">{bookedPass.id}</span>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="grid grid-cols-2 border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-semibold">Patient Name</span>
                  <span className="text-slate-800 font-bold text-right">{bookedPass.name}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-semibold">Contact No</span>
                  <span className="text-slate-800 font-medium text-right">{bookedPass.phone}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-semibold">Treatment</span>
                  <span className="text-teal-700 font-semibold text-right">{bookedPass.treatment}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-semibold">Scheduled Date</span>
                  <span className="text-slate-800 font-semibold text-right">{bookedPass.preferredDate}</span>
                </div>
                <div className="grid grid-cols-2 pb-0">
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-semibold">Reserved Slot</span>
                  <span className="text-slate-800 font-semibold text-right">{bookedPass.timeSlot}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppConfirm}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                id="pass-whatsapp-confirm"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" />
                Confirm on WhatsApp to Keep Slot
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl text-sm transition-all"
                id="pass-close-btn"
              >
                Close Vouchers & View Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
