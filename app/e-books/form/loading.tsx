export default function EbookFormLoading() {
  return (
    <section className="section-shell min-h-screen pt-28 md:pt-36">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8">
        <div className="section-heading">
          <div className="mx-auto h-8 w-36 animate-pulse rounded-full bg-violet/15" />
          <div className="mx-auto mt-5 h-14 max-w-xl animate-pulse rounded-lg bg-white/10" />
          <div className="mx-auto mt-4 h-6 max-w-lg animate-pulse rounded-full bg-white/8" />
        </div>
        <div className="mx-auto h-80 w-full max-w-5xl animate-pulse rounded-lg border border-white/10 bg-gradient-card" />
        <div className="mx-auto h-96 w-full max-w-5xl animate-pulse rounded-lg border border-white/10 bg-black/20" />
      </div>
    </section>
  );
}
