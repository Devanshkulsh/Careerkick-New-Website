export function WorkflowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow opacity-45 blur-3xl" />
      <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-violet/25 to-transparent" />
      <div className="absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-violet/10 blur-[90px]" />
      <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-violet/10 blur-[100px]" />
    </div>
  );
}

