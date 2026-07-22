"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const whatsappIconUrl =
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783077224/vecteezy_whatsapp-logo-social-icon-3d-web-button_52112852_io1hcv.png";
const whatsappNumber = "7393062116";

const menuItems = [
  {
    label: "Book Free Call",
    message: "Hi Careerkick, I want to book a free counselling call.",
  },
  {
    label: "Admission Help",
    message: "Hi Careerkick, I need help with counselling and admission.",
  },
  {
    label: "Event Query",
    message: "Hi Careerkick, I want details about upcoming events.",
  },
] as const;

export function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-[95] sm:bottom-6 sm:left-6">
      <AnimatePresence>
        {open && (
          <motion.div
            className="mb-3 w-[calc(100vw-2rem)] max-w-[280px] overflow-hidden rounded-xl border border-[#25D366]/25 bg-[#071008]/95 shadow-elevated backdrop-blur-xl sm:max-w-[320px]"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="border-b border-white/10 px-4 py-3 sm:py-4">
              <p className="font-display text-base font-semibold text-white sm:text-lg">
                Chat on WhatsApp
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/60 sm:text-xs">
                Choose a quick option and continue the conversation.
              </p>
            </div>

            <div className="space-y-1.5 p-2 sm:space-y-2 sm:p-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={getWhatsAppUrl(item.message)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/10 sm:py-3 sm:text-sm"
                >
                  {item.label}
                  <span className="text-[#25D366]">Open</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center">
        <button
          type="button"
          aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full bg-transparent text-white transition-transform duration-300 hover:scale-[1.06] focus-visible:shadow-[0_0_0_2px_#25D366,0_0_0_5px_#050704] sm:h-[76px] sm:w-[76px] lg:h-24 lg:w-24",
            open && "scale-[1.06]",
          )}
        >
          {whatsappIconUrl ? (
            <img
              src={whatsappIconUrl}
              alt=""
              className="h-16 w-16 object-contain drop-shadow-[0_16px_28px_rgba(37,211,102,0.28)] sm:h-[76px] sm:w-[76px] lg:h-24 lg:w-24"
            />
          ) : (
            <WhatsAppMark />
          )}
        </button>
      </div>
    </div>
  );
}

function getWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

function WhatsAppMark() {
  return (
    <svg
      className="h-16 w-16 text-[#25D366] drop-shadow-[0_16px_28px_rgba(37,211,102,0.28)] sm:h-[76px] sm:w-[76px] lg:h-24 lg:w-24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.06L2.3 21.7l4.76-1.25A9.96 9.96 0 1 0 12.04 2Zm0 18.16a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.82.74.75-2.75-.2-.31A8.18 8.18 0 1 1 12.04 20.16Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.21-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}
