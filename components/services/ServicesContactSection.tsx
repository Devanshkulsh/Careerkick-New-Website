import React from "react";
import { Phone, Mail, User, Send,} from "lucide-react";

export default function ServicesContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#56b016] sm:text-sm">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:mt-4 sm:text-5xl">
            Let&apos;s build your counselling plan together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            Speak to an advisor, request a callback, or send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch perspective-[1500px] lg:gap-10">
          
          {/* LEFT PANEL - CONTACT INFO */}
          <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-3xl shadow-[#56b016]/10 transition-all duration-500">
            <div className="rounded-t-[20px] bg-[#56b016] px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl">
              Get In Touch With Us Now!
            </div>

            <div className="grid gap-3 rounded-b-[20px] bg-slate-50 p-3 sm:gap-4">
              <ContactCard
                iconSrc="/icons/contact.gif"
                iconAlt="Phone"
                title="Phone"
                link="tel:+917396062116"
                linkText="+91 7396062116"
              />

              <ContactCard
                iconSrc="/icons/email.gif"
                iconAlt="Email"
                title="Email"
                link="mailto:info@careerkick.in"
                linkText="info@careerkick.in"
              />

              <ContactCard
                iconSrc="/icons/location.gif"
                iconAlt="Location"
                title="Location"
                link="https://maps.app.goo.gl/LoJTZNfKucYpX2kLA"
                linkText="2nd Floor, AA-007 Golf Link-1, Greater Noida"
                isAddress
              />

              <ContactCard
                iconSrc="/icons/website.gif"
                iconAlt="Website"
                title="Website"
                link="https://careerkick.in"
                linkText="careerkick.in"
              />
            </div>
          </div>

          {/* RIGHT PANEL - FORM */}
          <div className="rounded-3xl border border-slate-100 bg-white shadow-3xl shadow-[#56b016]/10 transition-all duration-500">
            <div className="rounded-t-3xl bg-[#56b016] px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl">
              Contact Us
            </div>
            <form className="space-y-5 p-6 sm:space-y-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center text-sm text-slate-600">
                Share a few details and our team will reach out quickly.
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<User size={18} />} placeholder="First Name *" />
                <Input icon={<User size={18} />} placeholder="Last Name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<Phone size={18} />} placeholder="Mobile No *" />
                <Input icon={<Mail size={18} />} placeholder="Email ID *" />
              </div>
              <textarea
                placeholder="Message"
                className="min-h-35 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none shadow-inner transition focus:border-[#56b016] focus:ring-4 focus:ring-[#56b016]/20 sm:px-5 sm:py-4"
                rows={5}
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#56b016] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#56b016]/25 transition-all duration-300 hover:bg-[#4b9914] hover:shadow-[#56b016]/35 sm:px-10 sm:py-4"
                >
                  Submit Application <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  link: string;
  linkText: string;
  isAddress?: boolean;
}

function ContactCard({ iconSrc, iconAlt, title, link, linkText, isAddress = false }: ContactCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-6 sm:text-left transition-all duration-300">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#56b016]/25 bg-[#56b016]/10 text-[#56b016] shadow-inner sm:h-14 sm:w-14">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          loading="lazy"
        />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">{title}</p>
        <a href={link} className={`mt-1.5 inline-flex font-semibold text-black transition hover:text-[#56b016] ${isAddress ? "text-sm text-slate-700 leading-relaxed" : "text-base"}`}>
          {linkText}
        </a>
      </div>
    </div>
  );
}

function Input({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner transition focus-within:border-[#56b016] focus-within:ring-4 focus-within:ring-[#56b016]/20 sm:px-5 sm:py-4">
      <span className="text-slate-400">{icon}</span>
      <input type="text" placeholder={placeholder} className="w-full bg-transparent outline-none placeholder:text-slate-400" />
    </div>
  );
}
