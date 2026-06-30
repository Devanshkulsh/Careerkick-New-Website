"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <motion.nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        {scrolled && (
          <motion.div
            layoutId="navbar-bg"
            className="absolute inset-x-2 inset-y-2 -z-10 rounded-full border border-white/5 bg-base/80 shadow-card backdrop-blur-xl md:inset-x-6"
            transition={{ duration: 0.35 }}
          />
        )}

        <a
          href="#"
          className="flex items-center"
          aria-label="Careerkick home"
        >
          <Image
            src="/logo-bg.png"
            alt="Careerkick"
            width={1000}
            height={250}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative py-2 text-sm font-medium text-text-muted transition-colors hover:text-white",
                index === 0 && "text-white",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-brand transition-all duration-300",
                  index === 0 ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <MagneticButton className="px-5 py-2 text-sm">
            Book Free Call
          </MagneticButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 bg-white transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 bg-white transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 -z-10 flex flex-col justify-center bg-base/95 px-8 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="space-y-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block font-display text-4xl font-semibold text-white"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <MagneticButton className="absolute bottom-10 left-8 right-8 py-4 text-base">
              Book Free Call
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
