import { X, Calendar, Plus, Sparkles, CheckCircle2 } from "lucide-react";
import { Treatment } from "../types";

interface TreatmentDetailProps {
  treatment: Treatment;
  onClose: () => void;
  onBookClick: (treatmentId: string) => void;
}

export default function TreatmentDetail({ treatment, onClose, onBookClick }: TreatmentDetailProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      id="treatment-detail-overlay"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        id="treatment-detail-card"
      >
        {/* Banner Image */}
        <div className="relative h-48 sm:h-64 bg-slate-900" id="treatment-detail-banner">
          <img 
            src={treatment.imageUrl} 
            alt={treatment.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/60 text-white/90 hover:text-white transition-all backdrop-blur-sm border border-white/10"
            id="treatment-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="inline-block text-[10px] font-bold text-teal-300 bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-sm font-sans">
              Clinical {treatment.category} Category
            </span>
            <h3 className="font-serif text-2xl sm:text-3.5xl font-bold leading-tight tracking-tight">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar" id="treatment-content">
          
          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-teal-600 uppercase tracking-widest font-sans flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Overview & Clinical Purpose
            </h4>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans">
              Proven Treatment Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="treatment-benefits-grid">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex gap-3">
                  <div className="text-teal-600 mt-0.5">
                    <CheckCircle2 className="w-4.5 h-4.5 fill-teal-50" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-bold text-slate-800">{benefit.title}</span>
                    <span className="block text-[11px] text-slate-500 leading-normal mt-0.5">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans">
              The Safe Procedural Journey
            </h4>
            <div className="space-y-2.5 pl-2" id="treatment-procedure-steps">
              {treatment.procedure.map((step, idx) => {
                const parts = step.split(":");
                return (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-6.5 h-6.5 rounded-full bg-teal-50 text-teal-600 border border-teal-150 flex items-center justify-center font-mono font-bold text-[11px] shadow-sm">
                        {idx + 1}
                      </div>
                      {idx < treatment.procedure.length - 1 && (
                        <div className="w-0.5 bg-teal-100 h-9 my-1" />
                      )}
                    </div>
                    <div className="pt-0.5 pb-2">
                      {parts.length > 1 ? (
                        <>
                          <strong className="text-slate-800 text-xs font-bold font-sans">{parts[0]}</strong>
                          <span className="text-slate-500 text-xs font-sans block leading-normal mt-0.5">{parts.slice(1).join(":")}</span>
                        </>
                      ) : (
                        <span className="text-slate-600 text-xs font-sans block leading-normal">{step}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recovery Time Panel */}
          <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 flex items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] font-bold text-teal-600 uppercase tracking-wider">Recovery Time</span>
              <span className="block text-xs font-semibold text-teal-800 font-sans mt-0.5">{treatment.recoveryTime}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-teal-100/60 font-sans text-[10px] font-bold text-teal-800 text-center uppercase tracking-wide">
              Safe & Fast
            </div>
          </div>

          {/* Treatment FAQs */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans border-b border-slate-100 pb-1">
              Treatment FAQs
            </h4>
            <div className="space-y-3" id="treatment-faqs">
              {treatment.faqs.map((faq, idx) => (
                <div key={faq.id || idx} className="space-y-1 bg-slate-50/40 p-3 rounded-xl border border-slate-100">
                  <span className="block font-sans text-xs font-bold text-slate-800">Q: {faq.question}</span>
                  <span className="block font-sans text-xs text-slate-500 leading-relaxed">A: {faq.answer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-slate-50/80 border-t border-slate-100 p-5 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="block text-[11px] text-slate-400 font-medium">Free Doctor consultation</span>
            <span className="block text-xs font-semibold text-slate-700">100% Satisfaction Guarantee</span>
          </div>
          <button
            onClick={() => onBookClick(treatment.id)}
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all duration-300 shadow-md shadow-teal-600/10 flex items-center justify-center gap-2"
            id="detail-book-now-btn"
          >
            <Calendar className="w-4 h-4 text-teal-100" />
            Book This Treatment Now
          </button>
        </div>

      </div>
    </div>
  );
}
