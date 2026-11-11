import { ArrowRight, Sparkles } from "lucide-react";

export default function CreatorCTA() {
  return (
    <section id="creator-cta" className="bg-white px-5 py-20 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-white sm:px-12 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-30 mask-[radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-brand/40 blur-[90px]" />
          <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-accent/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
            <Sparkles size={13} className="text-accent" />
            Join 16 expert creators
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Unlock your potential as a creator with ByteSpace.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm italic leading-relaxed text-white/60">
            Share what you know, reach thousands of motivated learners, and get paid for the work you love. Your
            first course can be live in a weekend.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-ink transition hover:bg-white"
            >
              Join as a creator
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              See creator tools
            </a>
          </div>

          <p className="mt-6 text-[11px] font-medium text-white/40">
            No upfront fees · Keep 90% of revenue · Weekly payouts
          </p>
        </div>
      </div>
    </section>
  );
}
