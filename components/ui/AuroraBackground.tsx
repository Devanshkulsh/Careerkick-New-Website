export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 -top-52 h-[800px] w-[800px] rounded-full bg-violet/10 blur-[120px] will-change-transform [animation:float1_8s_ease-in-out_infinite]" />
      <div className="absolute -right-48 -top-24 h-[600px] w-[600px] rounded-full bg-cyan/10 blur-[120px] will-change-transform [animation:float2_10s_ease-in-out_infinite]" />
      <div className="absolute -bottom-72 left-1/2 h-[700px] w-[700px] rounded-full bg-magenta/10 blur-[120px] will-change-transform [animation:float3_12s_ease-in-out_infinite]" />
    </div>
  );
}

