import { ArrowRight, Clock3, Play, Search, Sparkles, Star } from "lucide-react";
import Avatars from "./Avatars";
import Navbar from "./Navbar";

const popular = ["UI/UX Design", "Data Science", "Marketing", "Web Development"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(47,75,255,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-40 mask-[linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute -right-32 top-24 size-96 rounded-full bg-brand/30 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 size-80 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto grid max-w-360 items-center gap-14 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-18 lg:pt-10">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
            <Sparkles size={14} className="text-accent" />
            Over 70 courses from world-class creators
          </span>

          <h1 className="mt-6 max-w-xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Master the skills that shape your <span className="text-accent">future.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 italic">
            Learn from industry experts, follow guided paths, and build a portfolio that gets you noticed - all at
            your own pace.
          </p>

          <form action="#courses" className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl bg-white p-2 shadow-soft">
            <Search size={18} className="ml-2 shrink-0 text-slate-400" />
            <input
              type="search"
              name="q"
              placeholder="Search courses, topics, or creators"
              className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-ink placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Search
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/50">
            <span className="font-medium text-white/70">Popular:</span>
            {popular.map((tag) => (
              <a
                key={tag}
                href="#courses"
                className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/25 hover:text-white"
              >
                {tag}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <Avatars count="12k+" ring="ring-ink" />
              <div className="text-xs leading-tight text-white/60">
                <p className="font-semibold text-white">12,000+ learners</p>
                <p>already growing with us</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div className="text-xs leading-tight text-white/60">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-bold text-white">4.9</span>
              </div>
              <p className="mt-1">from 2,400+ reviews</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-x-8 top-10 h-[85%] rounded-[2.5rem] bg-brand/40 blur-3xl" />

          <div className="relative rounded-4xl border border-white/10 bg-white/4 p-2.5 backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-5 text-ink shadow-soft">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand">
                  Design
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <Clock3 size={13} /> 6h 20m
                </span>
              </div>

              <div className="relative mt-4 h-40 overflow-hidden rounded-2xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <span className="absolute left-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
                  Bestseller
                </span>
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-14 place-items-center rounded-full bg-white/95 text-brand shadow-xl">
                    <Play size={20} className="translate-x-0.5 fill-brand" />
                  </span>
                </span>
                <p className="absolute bottom-4 left-4 text-xs font-semibold text-white/90">UI/UX Masterclass</p>
              </div>

              <h3 className="mt-4 text-base font-extrabold">Design systems that scale</h3>
              <p className="mt-1 text-xs text-slate-500">Jordan Lee · 12 lessons</p>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400">Progress</span>
                <span className="font-extrabold text-brand">68%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-linear-to-r from-brand to-violet-500" />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <Avatars count="20+" />
                <span className="text-base font-extrabold">
                  $24 <span className="text-[10px] font-medium text-slate-400">/ course</span>
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 left-6 hidden animate-float rounded-2xl border border-line bg-white p-3.5 text-ink shadow-soft lg:block">
            <p className="text-[10px] font-semibold text-slate-400">Weekly goal</p>
            <p className="mt-0.5 text-lg font-extrabold">4 / 5 lessons</p>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`h-1.5 w-5 rounded-full ${i < 4 ? "bg-brand" : "bg-slate-200"}`} />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-12 right-6 hidden animate-float-slow items-center gap-2.5 rounded-2xl border border-line bg-white p-3.5 text-ink shadow-soft sm:flex">
            <span className="grid size-9 place-items-center rounded-full bg-accent text-ink">
              <Sparkles size={16} />
            </span>
            <div className="text-xs">
              <p className="font-bold">Certificate unlocked</p>
              <p className="text-slate-400">UI/UX Foundations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
