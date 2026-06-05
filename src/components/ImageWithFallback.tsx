import { useState, ImgHTMLAttributes, CSSProperties } from "react";
import { Sparkles, User, HelpCircle, Activity, ShieldCheck } from "lucide-react";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  variant?: "treatment" | "doctor" | "beforeAfter" | "general" | "clinic";
  style?: CSSProperties;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  category = "",
  variant = "general",
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  if (hasError) {
    // Get appropriate colors and icons based on categories / variants
    let icon = <Sparkles className="w-8 h-8 text-teal-600/60" />;
    let gradient = "from-teal-50 to-pink-50/40 border-teal-100/50";
    let title = "Clinical Skin Treatment";
    let label = "A9 Patient Standard Care";

    if (variant === "doctor") {
      icon = <User className="w-6 h-6 text-teal-600" />;
      gradient = "from-teal-50 to-emerald-50 border-teal-100";
      title = "Medical Specialist";
      label = "A9 Dermatology Board";
    } else if (category.toLowerCase() === "hair" || alt.toLowerCase().includes("hair")) {
      icon = <Activity className="w-8 h-8 text-teal-600" />;
      gradient = "from-teal-50 to-emerald-50/50 border-teal-100/40";
      title = "Trichology Care";
      label = "Hair Restoration Solutions";
    } else if (category.toLowerCase() === "laser" || alt.toLowerCase().includes("laser")) {
      icon = <ShieldCheck className="w-8 h-8 text-pink-500/70" />;
      gradient = "from-pink-50/50 to-teal-50/50 border-pink-100/40";
      title = "USFDA Clean Laser";
      label = "Triple-Wavelength Safety";
    } else if (variant === "beforeAfter") {
      icon = <Sparkles className="w-8 h-8 text-teal-600" />;
      gradient = "from-teal-50/40 to-slate-100 border-teal-150/50";
      title = "Confidential Recovery File";
      label = "Real Patient Results";
    } else if (variant === "clinic") {
      icon = <ShieldCheck className="w-8 h-8 text-teal-600" />;
      gradient = "from-teal-50 to-slate-50 border-teal-100/40";
      title = "A9 Premium Clinic Interior";
      label = "Manikonda Center, Hyderabad";
    }

    return (
      <div 
        className={`flex flex-col items-center justify-center text-center p-6 border bg-gradient-to-br ${gradient} ${className} select-none`}
        id={`fallback-container-${alt.replace(/\s+/g, '-').toLowerCase()}`}
        style={{ minHeight: "150px" }}
      >
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-2">
          {icon}
        </div>
        <span className="block font-serif font-bold text-slate-800 text-sm leading-tight">
          {alt || title}
        </span>
        <span className="block font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 bg-white/70 px-2.5 py-0.5 rounded-full border border-slate-100">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
