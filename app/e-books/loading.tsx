export default function EBooksLoading() {
  return (
    <section className="section-shell min-h-screen pt-28 md:pt-36">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 md:px-8">
        <div className="section-heading">
          <div className="mx-auto h-8 w-36 animate-pulse rounded-full bg-violet/15" />
          <div className="mx-auto mt-5 h-14 max-w-lg animate-pulse rounded-lg bg-white/10" />
          <div className="mx-auto mt-4 h-6 max-w-xl animate-pulse rounded-full bg-white/8" />
        </div>
        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-gradient-card shadow-card">
              <div className="aspect-[16/10] animate-pulse rounded-t-lg bg-white/8" />
              <div className="space-y-4 p-6">
                <div className="h-4 w-24 animate-pulse rounded-full bg-violet/15" />
                <div className="h-8 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-16 animate-pulse rounded bg-white/8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
