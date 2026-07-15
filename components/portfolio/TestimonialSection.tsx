"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Careerkick has significantly improved our student outreach and admission process. Their structured counseling approach ensures that students joining us are well-informed and genuinely interested.",
    name: "Naiminath Ayurvedic Medical College",
    role: "Admission & Outreach Team",
    image: "/logos/naiminath-ayurvedic.png",
  },
  {
    id: 2,
    text: "Working with Careerkick has streamlined our admission pipeline. Their team consistently delivers quality student leads with proper guidance, making the entire process smooth and efficient.",
    name: "Major SD Singh Ayurvedic Medical College",
    role: "Admission Cell",
    image: "/logos/uni-sd.png",
  },
  {
    id: 3,
    text: "Careerkick brings professionalism and transparency to student counseling. Their digital approach and personalized guidance have helped us connect with the right candidates.",
    name: "Maharana Group of Institutions, Kanpur",
    role: "Academic Coordination Team",
    image: "/logos/maharana-pratap.png",
  },
  {
    id: 4,
    text: "The team at Careerkick understands the admission ecosystem deeply. Their support has helped us improve both student quality and overall enrollment efficiency.",
    name: "Sarvdev Ayurvedic Medical College",
    role: "Admissions Department",
    image: "/logos/sarvdev.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (i: number) => {
    if (i === index) return "center";
    if (i === (index - 1 + testimonials.length) % testimonials.length)
      return "left";
    if (i === (index + 1) % testimonials.length) return "right";
    return "hidden";
  };

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            SEE WHAT <span className="text-primary text-glow">COLLEGES</span>{" "}
            SAY ABOUT US{" "}
          </h2>
        </div>

        {/* Controls - Fixed: added relative and z-30 to ensure clickability */}
        <div className="relative z-30 mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:justify-end sm:px-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-95 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-95 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative -mt-8 sm:mt-12 flex min-h-[420px] sm:min-h-[350px] items-center justify-center overflow-visible">
          <AnimatePresence initial={false} mode="popLayout">
            {testimonials.map((item, i) => {
              const position = getPosition(i);
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === "center" ? 1 : 0.25,
                    scale: position === "center" ? 1 : isMobile ? 0.7 : 0.8,
                    x:
                      position === "center"
                        ? 0
                        : position === "left"
                          ? isMobile
                            ? "-45%"
                            : -350
                          : isMobile
                            ? "45%"
                            : 350,
                    zIndex: position === "center" ? 20 : 10,
                    filter: position === "center" ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                  className="absolute w-[90%] max-w-[320px] sm:max-w-[420px] cursor-pointer"
                  onClick={() =>
                    position !== "center" &&
                    (position === "left" ? prev() : next())
                  }
                >
                  <div
                    className={`relative h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-xl transition-colors duration-500 sm:rounded-[2rem] sm:p-10 ${position === "center" ? "border-primary/20 bg-white/[0.05]" : ""}`}
                  >
                    <span className="absolute top-2 right-6 sm:top-4 sm:right-8 text-4xl sm:text-6xl font-serif text-primary/10 select-none">
                      &rdquo;
                    </span>

                    <p className="relative z-10 mb-6 sm:mb-8 text-sm sm:text-lg font-medium leading-relaxed text-foreground/90">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full rounded-full object-cover border-2 border-primary/20"
                          onError={(event) => {
                            event.currentTarget.src = "/logo.png";
                            event.currentTarget.className = "h-full w-full rounded-full border-2 border-primary/20 bg-white object-contain p-1";
                          }}
                        />
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate text-sm sm:text-base font-bold text-foreground">
                          {item.name}
                        </p>
                        <p className="truncate text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/80">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
