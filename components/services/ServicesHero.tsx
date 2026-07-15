import TypingHeading from "../shared/TypingHeading";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="section-shell relative flex min-h-[70vh] items-center overflow-hidden sm:min-h-[80vh] lg:min-h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source
          src="https://res.cloudinary.com/dhlqc0ymy/video/upload/v1775546975/hero4_pvvjbo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Darker Gradient Overlay for better contrast */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80 lg:bg-linear-to-r lg:from-black/80 lg:via-black/50 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-none px-4 py-14 sm:px-10 sm:py-20 lg:px-20 lg:py-0">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5 text-white sm:space-y-7">
            <div className="w-full max-w-4xl">
              <div className="min-h-[10.5rem] sm:min-h-[12.5rem] lg:min-h-[14.5rem]">
                <TypingHeading
                  staticText="Your NEET success starts with"
                  words={[
                    "smarter guidance.",
                    "Careerkick.",
                    "expert mentorship.",
                    "the right strategy.",
                  ]}
                  className="max-w-[16ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-white sm:max-w-[14ch] sm:text-5xl sm:leading-[1.12] lg:max-w-[12ch] lg:text-7xl lg:leading-[1.06]"
                  staticTextClass="text-white/95"
                  dynamicTextClass="text-[#56b016]"
                  cursorClass="text-[#56b016]"
                  typingSpeed={50}
                  deletingSpeed={30}
                  delayBetweenWords={1500}
                />
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:text-white">
              Every mark counts. Every day matters.{" "}
              <span className="text-white font-medium">Careerkick</span> gives
              you expert guidance, a personalised strategy, and the support you
              need to crack your dream college.
            </p>

            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:rounded-full sm:px-4 sm:py-1.5">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[0.65rem] sm:tracking-[0.25em]">
                India&apos;s Most Trusted Counselling Platform
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="hidden lg:block">
            <div className="animate-float">{/* <HeroInsightCard /> */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
