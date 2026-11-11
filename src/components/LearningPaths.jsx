import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Camera,
  Code2,
  Laptop,
  Megaphone,
  Palette,
  Sparkles,
} from "lucide-react";

const paths = [
  {
    label: "Design",
    courses: 18,
    hours: "42h",
    Icon: Palette,
    tile: "bg-accent/25 text-ink group-hover:bg-accent group-hover:text-ink",
    glow: "bg-accent/30",
    border: "hover:border-accent/60",
    tag: "Popular",
  },
  {
    label: "Development",
    courses: 24,
    hours: "68h",
    Icon: Code2,
    tile: "bg-cyan-100 text-cyan-700 group-hover:bg-cyan-500 group-hover:text-white",
    glow: "bg-cyan-400/20",
    border: "hover:border-cyan-400/50",
  },
  {
    label: "IT & Software",
    courses: 16,
    hours: "51h",
    Icon: Laptop,
    tile: "bg-violet-100 text-violet-700 group-hover:bg-violet-500 group-hover:text-white",
    glow: "bg-violet-400/20",
    border: "hover:border-violet-400/50",
  },
  {
    label: "Business",
    courses: 12,
    hours: "28h",
    Icon: Briefcase,
    tile: "bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white",
    glow: "bg-amber-400/20",
    border: "hover:border-amber-400/50",
  },
  {
    label: "Marketing",
    courses: 21,
    hours: "36h",
    Icon: Megaphone,
    tile: "bg-rose-100 text-rose-700 group-hover:bg-rose-500 group-hover:text-white",
    glow: "bg-rose-400/20",
    border: "hover:border-rose-400/50",
    tag: "Trending",
  },
  {
    label: "Photography",
    courses: 9,
    hours: "19h",
    Icon: Camera,
    tile: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white",
    glow: "bg-emerald-400/20",
    border: "hover:border-emerald-400/50",
  },
];

export default function LearningPaths() {
  return (
    <section id="paths" className="relative overflow-hidden bg-surface px-5 py-20 text-ink sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-light opacity-70 mask-[radial-gradient(75%_65%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-24 top-10 size-72 animate-blob rounded-full bg-brand/15 blur-[120px] motion-reduce:animate-none" />
        <div className="absolute -right-20 bottom-0 size-72 animate-blob-slow rounded-full bg-accent/25 blur-[120px] motion-reduce:animate-none" />
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 animate-blob-reverse rounded-full bg-violet-400/10 blur-[140px] motion-reduce:animate-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore diverse paths at <span className="text-brand">ByteSpace</span>
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-md text-sm italic leading-relaxed text-slate-500">
              Follow a guided curriculum built by experts, or mix and match courses to design a path that is entirely
              your own.
            </p>
            <a href="#" className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Browse all paths
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map(({ label, courses, hours, Icon, tile, glow, border, tag }, i) => (
            <a
              key={label}
              href="#courses"
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card ${border}`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 ${glow}`}
              />

              <div className="relative flex items-start justify-between">
                <span
                  className={`grid size-12 place-items-center rounded-2xl transition duration-300 group-hover:scale-105 ${tile}`}
                >
                  <Icon size={22} />
                </span>
                <span className="text-3xl font-black leading-none text-slate-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-extrabold text-ink">{label}</h3>
                  {tag && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ink">
                      {tag}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {courses} courses · {hours} of content
                </p>
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs font-semibold text-slate-500 transition group-hover:text-brand">
                  Start learning
                </span>
                <span className="grid size-8 place-items-center rounded-full border border-line text-slate-400 transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-slate-500">
          <p>
            <span className="font-bold text-ink">70+</span> courses across{" "}
            <span className="font-bold text-ink">6</span> learning paths
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            New paths added every month
          </p>
        </div>
      </div>
    </section>
  );
}
