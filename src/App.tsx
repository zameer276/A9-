import { useState, useEffect, FormEvent } from "react";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Award, 
  ChevronDown,
  Clock,
  ArrowRight,
  BookmarkCheck,
  CheckCircle,
  HelpCircle,
  MapPin,
  Flame,
  Check,
  Bookmark
} from "lucide-react";

// Types
import { Treatment } from "./types";

// Data
import { 
  CLINIC_INFO, 
  TREATMENTS, 
  GENERAL_FAQS, 
  GOOGLE_REVIEWS, 
  EXPERT_SPECIALISTS, 
  BEFORE_AFTER_RESULTS, 
  ADVANCED_TECHNOLOGIES 
} from "./data";

// Components
import Navbar from "./components/Navbar";
import LeadPopup from "./components/LeadPopup";
import BookingModal from "./components/BookingModal";
import TreatmentDetail from "./components/TreatmentDetail";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Footer from "./components/Footer";

export default function App() {
  // Navigation active section
  const [activeSection, setActiveSection] = useState("home");
  
  // Dialog Open States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedTreatment, setPreSelectedTreatment] = useState<string | undefined>(undefined);
  
  const [selectedDetailTreatment, setSelectedDetailTreatment] = useState<Treatment | null>(null);
  
  // Category Filtering for treatments list
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Skin' | 'Hair' | 'Laser' | 'Advanced'>('All');

  // FAQ Accordion Active Index
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // Status Vouchers notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // In-Page Appointment Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "free-general",
    date: "",
    message: ""
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  useEffect(() => {
    // Scroll active position detection
    const handleScrollDetect = () => {
      const sections = ["home", "treatments", "about", "gallery", "reviews", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollDetect);
    return () => window.removeEventListener("scroll", handleScrollDetect);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleBookNow = (treatmentId?: string) => {
    setPreSelectedTreatment(treatmentId);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (name: string, phone: string, treatmentTitle: string) => {
    triggerToast(`🎉 Booking submitted! Vouchers locked for ${name} (${phone}) - ${treatmentTitle}`);
  };

  const handleInPageSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setIsFormSubmitting(true);
    
    // Save locally
    const appointmentId = "A9-" + Math.floor(1000 + Math.random() * 9000);
    const existing = JSON.parse(localStorage.getItem("a9_appointments") || "[]");
    const selectedTreatmentInfo = TREATMENTS.find(t => t.id === formData.treatment)?.title || "Free Doctor Skin-Scope Scan";
    
    const record = {
      id: appointmentId,
      name: formData.name,
      phone: formData.phone,
      treatment: selectedTreatmentInfo,
      preferredDate: formData.date,
      timeSlot: "Selected Direct Slot",
      message: formData.message,
      createdAt: new Date().toLocaleDateString()
    };
    
    localStorage.setItem("a9_appointments", JSON.stringify([record, ...existing]));

    setTimeout(() => {
      setIsFormSubmitting(false);
      setIsFormSuccess(true);
      triggerToast(`🎉 Clinic appointment pass ${appointmentId} created!`);
    }, 800);
  };

  const handleInPageWhatsApp = () => {
    const selectedText = TREATMENTS.find(t => t.id === formData.treatment)?.title || "Free Consultation";
    const text = encodeURIComponent(
      `Hi A9 Skin & Hair Care Clinic! I would like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nTreatment: ${selectedText}\nPreferred Date: ${formData.date}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/919492641321?text=${text}`, "_blank");
    setIsFormSuccess(false);
    setFormData({ name: "", phone: "", treatment: "free-general", date: "", message: "" });
  };

  const filteredTreatments = selectedCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50/60" id="main-app-container">
      
      {/* Target Key Words for Screen Reader local indexing as comments */}
      <h1 className="sr-only">Best Skin Clinic in Manikonda Hyderabad - A9 Skin & Hair Care Clinic</h1>
      <h2 className="sr-only">Best Hair Clinic in Hyderabad, Laser Hair Removal Manikonda, Hair Regrowth Treatment Hyderabad</h2>

      {/* Navbar Container */}
      <Navbar 
        onBookClick={handleBookNow} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-gradient-to-tr from-teal-500/10 via-white to-pink-500/5"
      >
        {/* Glow Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-300/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-300/10 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="hero-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge / Tagline */}
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-800 uppercase tracking-widest leading-none mx-auto lg:mx-0 shadow-sm animate-pulse">
                <Sparkles className="w-4 h-4 fill-teal-100" />
                <span>Premium Quality Dermatologist Supervised Clinic</span>
              </div>

              {/* H1 Main SEO Title */}
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight lg:leading-[1.1]">
                Advanced Skin & Hair Solutions <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-pink-500 bg-clip-text text-transparent italic">
                  for Men & Women
                </span>
              </h2>

              <p className="font-sans text-slate-500 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
                A9 Skin & Hair Care Clinic in Manikonda, Hyderabad brings you FDA-approved lasers, high-infusing HydraFacials, and state-of-the-art trichology. Get a personalized medical audit for a beautiful transformation.
              </p>

              {/* Interactive CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleBookNow()}
                  className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                  id="hero-cta-book"
                >
                  <Calendar className="w-4.5 h-4.5 text-teal-100" />
                  <span>Schedule Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-teal-200 bg-white hover:bg-teal-50 text-teal-700 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  id="hero-cta-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 fill-teal-100 text-teal-600" />
                  <span>Consultation on WhatsApp</span>
                </a>
              </div>

              {/* Special offer highlighted strip */}
              <div className="p-3.5 bg-yellow-50 text-yellow-900 rounded-xl border border-yellow-200/50 max-w-lg mx-auto lg:mx-0 flex items-center gap-2.5 text-left text-xs">
                <Flame className="w-4.5 h-4.5 text-amber-500 fill-amber-300 shrink-0" />
                <div>
                  <span className="font-bold">Exclusive Online Vouchers:</span> Claim a <strong>Free Skin Scanner Audit</strong> & 15% discount on HydraFacial sessions today!
                </div>
              </div>

              {/* Trust Indicators metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0 text-center font-sans">
                <div className="space-y-0.5">
                  <span className="block font-serif font-extrabold text-2xl text-slate-800">1000+</span>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Happy Clients</span>
                </div>
                <div className="space-y-0.5 border-x border-slate-200/60">
                  <span className="block font-serif font-extrabold text-2xl text-slate-800">100%</span>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">USFDA Safe</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block font-serif font-extrabold text-2xl text-slate-800">12+ Yrs</span>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Exp Doctors</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative" id="hero-visual-col">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                
                {/* Back Decorative Glass Ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-pink-500 rounded-2xl transform rotate-3 scale-[1.02] opacity-10 blur-sm pointer-events-none" />

                {/* Main Image Banner Card */}
                <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl skew-y-0 max-h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80" 
                    alt="A9 Premium Dermatology Clinic Interior"
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlaid Card for clinic timings */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-teal-50 font-sans flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Operational Hours</span>
                      <span className="block text-xs font-bold text-slate-800 leading-normal">{CLINIC_INFO.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative floating components */}
                <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl p-3 border border-slate-100 flex items-center gap-2.5 max-w-[180px] animate-float">
                  <div className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase font-black tracking-wide">Technology</span>
                    <span className="block text-[11px] font-bold text-slate-800 leading-tight">USFDA Certified</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-3 border border-slate-100 flex items-center gap-2.5 max-w-[180px]">
                  <div className="w-7 h-7 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase font-black tracking-wide">Consultation</span>
                    <span className="block text-[11px] font-bold text-slate-800 leading-tight">Free Diagnosis</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Elements Features Grid */}
      <section className="bg-white border-y border-teal-50/50 py-10" id="trust-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 p-2">
              <div className="w-9 h-9 rounded-xl bg-teal-55 text-teal-600 flex items-center justify-center shrink-0 bg-teal-50 mb-1 lg:mb-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900">Advanced Technology</span>
                <span className="block text-[10px] text-slate-500 leading-tight">Modern clinical lasers</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 p-2">
              <div className="w-9 h-9 rounded-xl bg-teal-55 text-teal-600 flex items-center justify-center shrink-0 bg-teal-50 mb-1 lg:mb-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900">Expert Specialists</span>
                <span className="block text-[10px] text-slate-500 leading-tight">Dermatologists led</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 p-2">
              <div className="w-9 h-9 rounded-xl bg-teal-55 text-teal-600 flex items-center justify-center shrink-0 bg-teal-50 mb-1 lg:mb-0">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900">Affordable Packages</span>
                <span className="block text-[10px] text-slate-500 leading-tight">No high hidden markups</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 p-2">
              <div className="w-9 h-9 rounded-xl bg-teal-55 text-teal-600 flex items-center justify-center shrink-0 bg-teal-50 mb-1 lg:mb-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900">Safe & Effective</span>
                <span className="block text-[10px] text-slate-500 leading-tight">Clinically proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-block text-[11px] font-bold text-teal-600 bg-teal-50 py-1 px-4 rounded-full uppercase tracking-widest">Clinical Care Offerings</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Advanced Clinical Skin & Hair Care
            </h3>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Explore our USFDA-approved treatments custom-tailored to solve your specific skin, hair, and laser concerns safely under chief doctor supervision.
            </p>
          </div>

          {/* Filtering Categories Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="treatment-category-filter">
            {(['All', 'Skin', 'Hair', 'Laser', 'Advanced'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-xs font-semibold py-2 px-4.5 rounded-full border transition-all ${
                  selectedCategory === cat 
                    ? "bg-teal-650 bg-teal-600 hover:bg-teal-700 text-white border-teal-600 shadow-md shadow-teal-600/10" 
                    : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200/80"
                }`}
                id={`cat-filter-btn-${cat.toLowerCase()}`}
              >
                {cat === 'All' ? 'All Solutions' : `${cat} Care`}
              </button>
            ))}
          </div>

          {/* Treatments Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="treatments-display-grid">
            {filteredTreatments.map((t) => (
              <div 
                key={t.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                id={`treatment-card-${t.id}`}
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img 
                    src={t.imageUrl} 
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-wider text-teal-800 bg-teal-50 py-1 px-2.5 rounded-md border border-teal-100">
                      {t.category}
                    </span>
                  </div>
                </div>

                {/* Texts Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-slate-900 tracking-tight leading-snug group-hover:text-teal-600 transition-colors">
                      {t.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {t.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-1.5 border-t border-slate-100 mt-2 text-[11px] text-slate-400 font-sans">
                    <span>🕒 Recovery: <strong className="text-slate-600 font-bold">Fast</strong></span>
                    <span>⭐ Consultation: <strong className="text-teal-600 font-bold">FREE</strong></span>
                  </div>
                </div>

                {/* Primary Card CTAs */}
                <div className="bg-slate-50/80 p-4 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedDetailTreatment(t)}
                    className="flex-1 font-sans text-xs font-semibold py-2.5 px-3 border border-slate-200 hover:border-teal-200 hover:bg-white text-slate-700 bg-white hover:text-teal-600 rounded-lg text-center transition-colors"
                    id={`learn-more-${t.id}`}
                  >
                    Medical Guide
                  </button>
                  <button
                    onClick={() => handleBookNow(t.id)}
                    className="flex-1 font-sans text-xs font-bold py-2.5 px-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-center transition-colors shadow-sm"
                    id={`book-now-${t.id}`}
                  >
                    Slot Booking
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left about visual section */}
            <div className="lg:col-span-5 relative" id="about-visuals">
              <div className="space-y-4">
                <div className="relative rounded-2xl bg-slate-50 overflow-hidden border-2 border-white shadow-xl max-h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" 
                    alt="Experienced Dermatology Doctor Consultation"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-serif font-bold text-md">ISO-9001 Patient Standard Clinic</span>
                </div>

                <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl flex items-start gap-3 max-w-sm">
                  <div className="text-teal-600 mt-1">
                    <Award className="w-5 h-5 fill-teal-100" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-teal-800">Mission & Vision Statement</span>
                    <span className="block text-[11px] text-teal-700 leading-normal mt-0.5">To deliver luxurious, evidence-based skin and trichology treatments that empower patients with true confidence, setting new industry standards of clinical safety.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right about description column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-[10px] font-bold text-teal-600 bg-teal-50 py-1 px-3.5 rounded-full uppercase tracking-widest font-sans">
                  The Esthetic Standard
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  A9 Skin & Hair Care Center, Manikonda
                </h3>
              </div>

              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                Licensed strictly under certified clinical parameters, A9 Skin & Hair Care embodies the seamless integration of modern skincare science and aesthetic beauty wellness. We recognize that no two skins are identical. Hence, our clinic deploys deep cellular diagnosis before any procedure begins.
              </p>

              {/* Doctors specialists row */}
              <div className="space-y-4 pt-4 border-t border-slate-100" id="specialist-doctor-profiles">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest tracking-loose font-sans">
                  Our Experienced Specialists
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                  {EXPERT_SPECIALISTS.map((doc, idx) => (
                    <div key={idx} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                      <img 
                        src={doc.imageUrl} 
                        alt={doc.name} 
                        className="w-16 h-16 rounded-xl object-cover border border-white shadow-sm shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="space-y-1">
                        <span className="block text-xs font-bold text-slate-900 leading-snug">{doc.name}</span>
                        <span className="block text-[10px] text-teal-600 font-semibold">{doc.role}</span>
                        <span className="block text-[9px] text-slate-400 font-medium leading-none">{doc.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech panel list */}
              <div className="space-y-3 pt-3" id="technology-capabilities">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans">
                  Gold Standard Medical Technology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADVANCED_TECHNOLOGIES.slice(0, 2).map((tech, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-xl p-3 shadow-xs">
                      <span className="block font-sans text-xs font-bold text-slate-800">{tech.name}</span>
                      <span className="block text-[10px] text-slate-500 leading-normal mt-0.5">{tech.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Before and After Interactive Gallery */}
      <section id="gallery" className="py-20 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-block text-[11px] font-bold text-teal-600 bg-teal-50 py-1 px-4 rounded-full uppercase tracking-widest">Visual Evidence</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Clinical Transfigurations
            </h3>
            <p className="font-sans text-sm text-slate-500 leading-relaxed animate-glow">
              Compare actual skincare, hair growth, and pigmentation treatments directly. Use the interactive sliders to inspect deep cellular recovery progress.
            </p>
          </div>

          {/* Interactive sliders grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="before-after-gallery-grid">
            {BEFORE_AFTER_RESULTS.map((res) => (
              <BeforeAfterSlider 
                key={res.id}
                title={res.title}
                beforeImg={res.beforeImg}
                afterImg={res.afterImg}
                duration={res.duration}
                clinicalNote={res.clinicalNote}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Google Reviews Style Cards */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-block text-[11px] font-bold text-teal-600 bg-teal-50 py-1 px-4 rounded-full uppercase tracking-widest">Client Testimonials</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Google Customer Reviews
            </h3>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Read authentic feedback from high-satisfaction cosmetic patients who achieved exceptional results right here in Manikonda.
            </p>
          </div>

          {/* Google style cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="google-reviews-grid">
            {GOOGLE_REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-150/60 shadow-xs hover:border-teal-200 transition-colors flex flex-col justify-between h-full space-y-4"
                id={`review-card-${rev.id}`}
              >
                <div className="space-y-2.5">
                  {/* Google Logo / Star rating header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-[9px] font-mono">G</div>
                      <span className="text-[10px] text-slate-400 font-bold font-sans uppercase">Google Review</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.time}</span>
                  </div>

                  <div className="flex text-amber-400 gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className="text-lg leading-none">★</span>
                    ))}
                  </div>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed italic line-clamp-5">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Author footer info */}
                <div className="flex items-center gap-3 pt-2.5 border-t border-slate-200/40">
                  <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-850 flex items-center justify-center font-bold font-sans text-xs">
                    {rev.authorInitials}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{rev.author}</span>
                    <span className="block text-[10px] text-teal-600/90 font-semibold">{rev.treatmentTag}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advanced Technologies Gallery (Separated Tech section) */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-block text-[11px] font-bold text-teal-600 bg-teal-50 py-1 px-4 rounded-full uppercase tracking-widest">Medical Superiority</span>
              <h3 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
                Our Cutting Edge Armamentarium
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Unlike local beauty spas, A9 utilizes certified medical machines designed for safety on darker pigments and fragile hair cells.
              </p>
              <button
                onClick={() => handleBookNow()}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 py-3 px-5 rounded-lg shadow-sm"
              >
                Request Machine Demonstration
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" id="technologies-all-grid">
              {ADVANCED_TECHNOLOGIES.map((tech, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-5 rounded-xl text-left space-y-2 group shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-semibold text-xs border border-teal-100">
                    {idx + 1}
                  </div>
                  <h4 className="font-sans font-bold text-sm text-slate-800">{tech.name}</h4>
                  <p className="text-xs text-slate-500 leading-normal font-sans">{tech.description}</p>
                  <span className="block text-[10px] text-teal-600 font-bold bg-teal-50/50 border border-teal-100/50 p-1.5 px-2.5 rounded-lg text-center font-sans tracking-wide">
                    ✨ Advantage: {tech.benefit}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-10">
            <span className="inline-block text-[11px] font-bold text-pink-600 bg-pink-50 py-1 px-4 rounded-full uppercase tracking-widest">FAQ Help Center</span>
            <h3 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
              General Clinical Questions
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500">
              Clear healthcare skin facts answered thoughtfully by our core medical consultants.
            </p>
          </div>

          {/* Accordion implementation */}
          <div className="space-y-3.5" id="general-faqs-accordion">
            {GENERAL_FAQS.map((faq) => {
              const isActive = activeFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-150/60"
                  id={`faq-item-wrapper-${faq.id}`}
                >
                  <button
                    onClick={() => setActiveFaqId(isActive ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-sans text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-100/40"
                    id={`faq-trigger-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isActive ? "rotate-180 text-teal-600" : ""
                    }`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-40 border-t border-slate-200/50" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 bg-white/70 font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Appointment Booking & Contact Section */}
      <section id="contact" className="py-20 bg-slate-50/60 border-t border-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Quick Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-bold text-teal-600 bg-teal-50 py-1 px-4 rounded-full uppercase tracking-widest">Connect Today</span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Schedule Your Free Clinical Evaluation
                </h3>
              </div>

              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                Have an urgent skin allergy or follicle question? Ring our frontdesk representative or book directly here. Our clinics operate throughout weekends to match busy IT schedules around Manikonda.
              </p>

              {/* Direct channels */}
              <div className="space-y-3 font-sans text-xs" id="contact-channels">
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-150 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-450 uppercase font-black tracking-wider leading-none">Phone Verification</span>
                    <strong className="block text-slate-800 text-sm mt-0.5">94926 41321</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-150 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <MessageCircle className="w-5 h-5 fill-teal-100" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-450 uppercase font-black tracking-wider leading-none font-sans">WhatsApp Slots</span>
                    <strong className="block text-slate-800 text-sm mt-0.5">94926 41321</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-150 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-450 uppercase font-black tracking-wider leading-none font-sans">Clinic Location Address</span>
                    <strong className="block text-slate-800 leading-normal mt-0.5">CF4G+HVW, Manikonda Rd, Hyderabad</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* In-Page Appointment Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-lg relative" id="inpage-booking-form-wrapper">
              
              {!isFormSuccess ? (
                <form onSubmit={handleInPageSubmit} className="space-y-4" id="inpage-lead-form">
                  <h4 className="font-serif font-bold text-xl text-slate-900 border-b border-slate-100 pb-3">Online Appointment Request</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Patient Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        id="inpage-input-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-Digit Mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        id="inpage-input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Treatment Interested In *</label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-3.5 py-3 text-sm focus:outline-none transition-colors"
                        id="inpage-input-treatment"
                      >
                        <option value="free-general">Skin/Hair Consultation & Scope Scan (FREE)</option>
                        {TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>{t.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        id="inpage-input-date"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Optional Message / Symptoms</label>
                    <textarea
                      placeholder="List any concerns you have"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors resize-none"
                      id="inpage-input-msg"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isFormSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3.5 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    id="inpage-submit-btn"
                  >
                    {isFormSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-teal-100" />
                        <span>Generating Consultation Pass...</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4.5 h-4.5 text-teal-150 fill-teal-100" />
                        <span>Book My Appointment Slot</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center p-6 space-y-6" id="inpage-success-block">
                  <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-100">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-teal-600 uppercase tracking-widest">Appointment Reserved</span>
                    <h4 className="font-serif font-bold text-xl text-slate-900 mt-1">Ready for Immediate Confirmation</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1.5 leading-normal">
                      We have compiled your diagnostic consultation file. Confirm via WhatsApp to receive your fast-track queue pass.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleInPageWhatsApp}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
                      id="inpage-success-whatsapp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/10" />
                      Instant Confirm on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFormSuccess(false)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
                      id="inpage-success-close"
                    >
                      Fill Another Form
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer onBookClick={() => handleBookNow()} setActiveSection={setActiveSection} />

      {/* Sticky Mobile bottom buttons */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-3 flex sm:hidden gap-3 shadow-2xl"
        id="mobile-sticky-dock"
      >
        <a 
          href={`tel:${CLINIC_INFO.phoneNumber}`}
          className="flex-1 bg-slate-900 text-white text-xs font-bold py-3.5 px-2 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          id="sticky-phone"
        >
          <Phone className="w-4 h-4 text-teal-400" />
          <span>Call 94926 41321</span>
        </a>
        <a 
          href={CLINIC_INFO.whatsappLink}
          className="flex-1 bg-teal-600 text-white text-xs font-bold py-3.5 px-2 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-700 transition-all shadow-md shadow-teal-500/10"
          id="sticky-whatsapp"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white/10" />
          <span>WhatsApp Consultation</span>
        </a>
      </div>

      {/* Floating Sticky WhatsApp Button (Desktop version) */}
      <a
        href={CLINIC_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border border-teal-400 group"
        title="Chat on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg whitespace-nowrap shadow-xl transition-all tracking-wider uppercase border border-slate-800">
          Consult Dr. on WhatsApp
        </span>
      </a>

      {/* Lead Capture Popup Component */}
      <LeadPopup onBookSuccess={handleBookingSuccess} />

      {/* Appointment Booking Modal */}
      {isBookingOpen && (
        <BookingModal 
          initialTreatmentId={preSelectedTreatment} 
          onClose={() => setIsBookingOpen(false)}
          onSuccess={handleBookingSuccess}
        />
      )}

      {/* Treatment Detail Informational Modal */}
      {selectedDetailTreatment && (
        <TreatmentDetail 
          treatment={selectedDetailTreatment}
          onClose={() => setSelectedDetailTreatment(null)}
          onBookClick={(tId) => {
            setSelectedDetailTreatment(null);
            handleBookNow(tId);
          }}
        />
      )}

      {/* Global Status Notification Toast */}
      {toastMessage && (
        <div 
          className="fixed bottom-6 left-6 z-50 bg-slate-900 border border-slate-800 text-white text-xs px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 max-w-sm animate-bounce"
          id="global-toast"
        >
          <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-2xs">✓</div>
          <span className="font-sans leading-relaxed text-slate-150">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
