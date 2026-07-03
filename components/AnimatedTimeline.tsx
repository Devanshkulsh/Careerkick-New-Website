"use client";

export function AnimatedTimeline({
  activeIndex: _activeIndex,
  accent: _accent,
}: {
  activeIndex: number;
  accent: string;
}) {
  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block" viewBox="0 0 900 700" fill="none" aria-hidden="true">
        <path
          d="M164 120 C312 58 458 74 594 160 C718 238 764 330 726 408 C680 500 540 546 386 518 C250 494 174 404 202 318 C228 236 322 204 394 224"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.5"
          strokeDasharray="7 12"
          strokeLinecap="round"
        />
      </svg>
      <div className="pointer-events-none absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
    </>
  );
}

