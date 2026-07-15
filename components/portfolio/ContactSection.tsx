"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Map from "../../components/shared/Map";

const officeLocations = [
  {
    name: "Careerkick Services",
    branch: "Kanpur Branch",
    address: "117 N 65, Rani Ganj, Kakadeo, Kanpur, 208025",
    href: "https://maps.app.goo.gl/C7fjCr7jsH5zcAPE8",
  },
  {
    name: "Careerkick Services",
    branch: "Greater Noida Branch",
    address: "2nd floor, AA -007, Block A, Ansal Golf Link -1, Greater Noida, Uttar Pradesh 201315",
    href: "https://maps.app.goo.gl/j23DFmnco28ps6T29",
  },
  {
    name: "Careerkick Services",
    branch: "Gorakhpur Branch",
    address: "2nd floor, 401, LIG 1st St, near Bargadwa, Vikas Nagar, Gorakhpur, Uttar Pradesh 273007",
    href: "https://maps.app.goo.gl/QzgpEZ2osVwjUfQK9",
  },
  {
    name: "Careerkick Services",
    branch: "Indore Branch",
    address: "Apollo Trade center, 402, Geeta Bhawan, Indore, Madhya Pradesh 452001",
    href: "https://maps.app.goo.gl/DqN6i7ZoypTeLGCT7",
  },
];

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7390950914",
    detail: "Talk to our admissions growth team for a quick qualification call.",
    href: "tel:+917390950914",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@careerkick.in",
    detail: "Share your institution details and we will respond with the next steps.",
    href: "mailto:info@careerkick.in",
  },
];

const quickNotes = [
  "Fast response within one business day",
];

const cardEase = [0.22, 1, 0.36, 1] as const;
const OFFICE_CENTER: [number, number] = [80.2894, 26.4783];
const OFFICE_LOCATION_URL = "https://maps.app.goo.gl/Ty7ihijGkG6ZdQ2a7";

const ContactSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} id="contact" className="section-shell relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute left-1/2 top-16 h-52 w-[72%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: cardEase }}
          className="section-heading"
        >
          <span className="section-kicker">Let&apos;s Connect</span>
          <h2 className="section-title">
            Start Your <span className="text-primary text-glow">Growth</span> Story
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            Tell us where your institution stands today and we will map the clearest path toward stronger branding, admissions, and revenue momentum.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 24 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: cardEase }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 glass sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 top-12 h-44 w-44 rounded-full bg-white/12 blur-3xl" />
            <div className="pointer-events-none absolute left-10 top-20 h-24 w-40 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Strategic Consultation
                  </p>
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Let&apos;s plan your next admissions cycle
                  </h3>
                </div>

                <div className="inline-flex self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Growth-first outreach
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {quickNotes.map((note, index) => (
                  <motion.div
                    key={note}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: cardEase }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/85 sm:text-xs"
                  >
                    {note}
                  </motion.div>
                ))}
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: cardEase }}
                  className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.5rem] border border-primary/20 bg-primary/10 px-6 py-10 text-center sm:min-h-[360px]"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: cardEase }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-background/50 sm:h-20 sm:w-20"
                  >
                    <Send className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                  </motion.div>
                  <p className="mt-5 text-2xl font-semibold sm:text-3xl">Thank you!</p>
                  <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    Your message is with us. We&apos;ll reach out shortly to understand your goals and suggest the next step.
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-4 sm:gap-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="grid gap-4 sm:gap-5"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { name: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
                        {
                          name: "college",
                          label: "College / Institution",
                          type: "text",
                          placeholder: "Institution name",
                        },
                        { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98XXXXXXX" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 18 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.45, delay: 0.18 + index * 0.06, ease: cardEase }}
                        >
                          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-5"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.42, ease: cardEase }}
                    >
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your institution, current admissions challenge, and what kind of support you are looking for."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-5"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.5, ease: cardEase }}
                      className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        Prefer a quick call? Drop your details and we&apos;ll connect with the right person.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:scale-[1.01] hover:neon-glow-strong sm:w-auto sm:min-w-[190px]"
                      >
                        Send Message
                        <Send className="h-4 w-4" />
                      </button>
                    </motion.div>
                  </form>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.6, ease: cardEase }}
                    className="rounded-[1.5rem] border border-white/10 p-5 glass sm:p-6"
                  >
                    <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                      &quot;If your college isn&apos;t growing, it&apos;s falling behind. Let&apos;s build a stronger admissions engine together.&quot;
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">CareerKick Services</p>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 24 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: cardEase }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 18 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease: cardEase }}
            >
                <Map
                  center={OFFICE_CENTER}
                  title="CareerKick Office"
                  address={officeLocations[0].address}
                  locationUrl={OFFICE_LOCATION_URL}
                  className="h-56 sm:h-64"
                />
              </motion.div>

            <div className="grid gap-4 sm:gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {officeLocations.map((office, index) => (
                  <motion.a
                    key={office.name}
                    href={office.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: cardEase }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:neon-glow"
                  >
                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center">
                      <div className="absolute inset-0 rounded-[1.5rem] bg-primary/20 blur-xl transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute inset-2 rounded-[1.25rem] bg-gradient-to-br from-primary/40 via-cyan-400/25 to-primary/10 shadow-[0_24px_40px_-24px_rgba(14,165,233,0.8)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" />
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-background/80 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.7)]">
                        <MapPin className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Tap to open maps
                    </p>
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/70 px-4 text-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {office.name} — {office.branch}
                    </div>
                  </motion.a>
                ))}
              </div>
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: cardEase }}
                  className="group rounded-[1.5rem] border border-white/10 p-4 transition-all duration-500 glass hover:-translate-y-1 hover:neon-glow sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-1 block break-words text-base font-semibold text-foreground transition-colors duration-300 hover:text-primary sm:text-lg"
                      >
                        {item.value}
                      </a>
                      <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
