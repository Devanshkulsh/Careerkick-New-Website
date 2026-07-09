"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studentImageTestimonials } from "@/data/studentImageTestimonials";

export function StudentImageTestimonialsSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const testimonialItems = useMemo(
    () => [
      ...studentImageTestimonials,
      ...studentImageTestimonials,
      ...studentImageTestimonials,
    ],
    []
  );

  const bindNavigation = (swiper: SwiperType) => {
    setTimeout(() => {
      if (!prevRef.current || !nextRef.current) return;

      const navigation = swiper.params.navigation;

      if (navigation && typeof navigation !== "boolean") {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
      swiper.autoplay.start();
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faf4] px-4 py-16 text-slate-950 sm:py-20 md:px-8 md:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[#51A70A]/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald/10 blur-[130px]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Student Stories</SectionLabel>
          </div>

          <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-normal text-slate-900 sm:text-4xl md:text-5xl">
            Real faces,{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              real counselling journeys.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
            Hear from students and families who moved through counselling with
            more clarity, better decisions, and a lot less stress.
          </p>
        </ScrollReveal>
      </div>

      {/* Carousel Full Width */}
      <div
        className="relative mt-10 w-screen overflow-hidden sm:mt-12 md:mt-14"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black clamp(1.25rem, 8vw, 4rem), black calc(100% - clamp(1.25rem, 8vw, 4rem)), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black clamp(1.25rem, 8vw, 4rem), black calc(100% - clamp(1.25rem, 8vw, 4rem)), transparent 100%)",
        }}
      >
        <div className="relative w-full px-3 sm:px-5 md:px-8 lg:px-10">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides={false}
            slidesPerView="auto"
            loop
            speed={850}
            spaceBetween={16}
            observer
            observeParents
            resizeObserver
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 65,
              modifier: 1.2,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 14,
              },
              640: {
                spaceBetween: 16,
              },
              1024: {
                spaceBetween: 18,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={bindNavigation}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="student-testimonial-swiper !overflow-visible !pb-8 !pt-4 sm:!pb-10"
          >
            {testimonialItems.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                className="!h-auto !w-[250px] sm:!w-[280px] md:!w-[310px] lg:!w-[330px] xl:!w-[350px]"
              >
                <article className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-[#51A70A]/15 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08),0_10px_0_rgba(81,167,10,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(15,23,42,0.13),0_14px_0_rgba(81,167,10,0.08)] sm:min-h-[445px] sm:rounded-[32px] sm:p-4">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-slate-100 sm:rounded-[26px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 310px, 350px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                    <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#51A70A] shadow-lg backdrop-blur sm:left-4 sm:top-4 sm:h-10 sm:w-10">
                      <Quote size={19} fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-2 pb-3 pt-4 sm:px-3 sm:pb-4 sm:pt-5">
                    <h3 className="font-display text-lg font-bold leading-tight text-slate-950 sm:text-xl">
                      {item.name}
                    </h3>

                    <div className="mt-3 h-1.5 w-11 rounded-full bg-[#51A70A] sm:w-12" />

                    <p className="mt-4 whitespace-normal break-words text-sm leading-7 text-slate-700 sm:text-[15px]">
                      {item.testimonial}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="relative z-20 mt-2 flex items-center justify-center gap-5 sm:gap-6">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous testimonial"
              className="student-testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#51A70A]/15 bg-white text-slate-700 shadow-xl transition-all hover:-translate-x-1 hover:bg-[#51A70A] hover:text-white active:scale-95 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={26} strokeWidth={2.5} />
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="Next testimonial"
              className="student-testimonial-next flex h-12 w-12 items-center justify-center rounded-full border border-[#51A70A]/15 bg-white text-slate-700 shadow-xl transition-all hover:translate-x-1 hover:bg-[#51A70A] hover:text-white active:scale-95 sm:h-14 sm:w-14"
            >
              <ChevronRight size={26} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .student-testimonial-swiper .swiper-wrapper {
          align-items: stretch;
          transition-timing-function: ease;
        }

        .student-testimonial-swiper .swiper-slide {
          height: auto;
        }

        .student-testimonial-swiper .swiper-slide > article {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
