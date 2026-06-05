import { useState, useRef, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface BeforeAfterSliderProps {
  key?: string;
  beforeImg: string;
  afterImg: string;
  title: string;
  duration: string;
  clinicalNote: string;
}

export default function BeforeAfterSlider({ 
  beforeImg, 
  afterImg, 
  title, 
  duration, 
  clinicalNote 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse/Touch handles
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 shadow-sm" id={`slider-card-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      
      {/* Interactive Slider Area */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        className="relative h-64 sm:h-76 w-full overflow-hidden select-none cursor-ew-resize bg-slate-105"
        id="slider-interactive-area"
      >
        {/* AFTER Image (Full container background) */}
        <ImageWithFallback 
          src={afterImg} 
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          variant="beforeAfter"
        />

        {/* AFTER Badge (Bottom-Right) */}
        <div className="absolute bottom-3 right-3 z-10 bg-teal-600/90 backdrop-blur-md text-white font-sans text-[11px] font-bold py-1 px-2.5 rounded-md tracking-wider uppercase shadow-sm">
          After
        </div>

        {/* BEFORE Image (Clipped view) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <ImageWithFallback 
            src={beforeImg} 
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            variant="beforeAfter"
          />
        </div>

        {/* BEFORE Badge (Bottom-Left) */}
        <div className="absolute bottom-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-white font-sans text-[11px] font-bold py-1 px-2.5 rounded-md tracking-wider uppercase shadow-sm">
          Before
        </div>

        {/* Drag Line Separator bar */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize transition-opacity"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-teal-600 shadow-lg border-2 border-teal-500 flex items-center justify-between px-1 bg-teal-50/98">
            <MoveLeft className="w-3.5 h-3.5" />
            <MoveRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Info Details Area */}
      <div className="p-5 flex-1 flex flex-col justify-between" id="slider-details-area">
        <div>
          <h4 className="font-serif font-bold text-lg text-slate-800 leading-tight mb-1">
            {title}
          </h4>
          <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 py-1 px-3.5 rounded-full mb-3 border border-teal-100">
            🕒 Timeframe: {duration}
          </span>
          <p className="font-sans text-xs text-slate-500 leading-relaxed italic">
            &ldquo;{clinicalNote}&rdquo;
          </p>
        </div>
      </div>

    </div>
  );
}
