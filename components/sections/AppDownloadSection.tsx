import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AppDownloadSection() {
  return (
    <section id="neet-ug" className="relative overflow-hidden bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <AuroraBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">Careerkick Guidance. Wherever You Are.</h2>
          <p className="mt-5 max-w-2xl text-text-muted md:text-lg">Connect with counsellors, track deadlines, compare colleges, and keep your admission plan moving.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton className="bg-white text-base">Book Counselling</MagneticButton>
            <MagneticButton>WhatsApp Us</MagneticButton>
          </div>
        </ScrollReveal>
        <ScrollReveal className="relative h-[420px]">
          <PhoneMockup className="left-10 top-6 rotate-[-8deg]" title="Counsellor Alert" lines={["Document review done", "Choice list ready", "Call at 8 PM"]} />
          <PhoneMockup className="right-8 top-20 rotate-[9deg] [animation-delay:1s]" title="College Search" lines={["MBBS", "Govt colleges", "High chance"]} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhoneMockup({ className, title, lines }: { className: string; title: string; lines: string[] }) {
  return (
    <div className={`absolute w-52 animate-float rounded-[32px] border border-white/10 bg-surface-2 p-3 shadow-elevated ${className}`}>
      <div className="rounded-[24px] border border-white/10 bg-base p-4">
        <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-white/20" />
        <p className="font-display text-xl font-semibold text-white">{title}</p>
        <div className="mt-5 space-y-3">
          {lines.map((line) => <div key={line} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-text-muted">{line}</div>)}
        </div>
      </div>
    </div>
  );
}

