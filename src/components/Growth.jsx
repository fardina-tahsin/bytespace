import { ArrowRight, Award, Check, Flame, GraduationCap, TrendingUp } from "lucide-react";
import Avatars from "./Avatars";

const stats = [
  { value: "12k+", label: "Active students" },
  { value: "70+", label: "Expert-led courses" },
  { value: "16", label: "Top creators" },
];

const perks = [
  "Share your expertise",
  "Monetize your passion",
  "Flexible schedule and autonomy",
  "Build a loyal community",
];

const learning = [
  { label: "UI/UX foundations", value: 72, color: "bg-brand" },
  { label: "Data storytelling", value: 45, color: "bg-violet-500" },
  { label: "Growth marketing", value: 28, color: "bg-teal-500" },
];

const revenue = [35, 48, 40, 62, 55, 78, 96];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Growth() {
  return (
    <section id="creators" className="overflow-hidden bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              For learners
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your path to professional growth starts here.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 italic">
              Sharpen a specific skill or start a brand-new career. Our curated tracks combine hands-on projects
              with feedback from people who do the work every day.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-extrabold tracking-tight text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-xs font-medium text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <a href="#courses" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Explore courses
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-4xl border border-line bg-surface p-5 sm:p-8">
              <div className="mx-auto max-w-sm rounded-3xl border border-line bg-white p-5 shadow-soft">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">This week</p>
                    <p className="mt-1 text-lg font-extrabold">My learning</p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full bg-orange-50 text-orange-500">
                    <Flame size={17} />
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {learning.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-600">{item.label}</span>
                        <span className="font-bold text-slate-400">{item.value}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-surface p-3">
                  <Avatars count="20+" />
                  <p className="whitespace-nowrap text-[11px] font-medium text-slate-400">
                    <span className="font-bold text-ink">5-day</span> streak
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 right-2 hidden items-center gap-2.5 rounded-2xl border border-line bg-white p-3 shadow-card sm:-right-4 sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-ink">
                <Award size={17} />
              </span>
              <div className="text-xs">
                <p className="font-bold">Certificate unlocked</p>
                <p className="text-slate-400">UI/UX foundations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-4xl border border-line bg-surface p-5 sm:p-8">
              <div className="mx-auto max-w-sm rounded-3xl bg-ink p-5 text-white shadow-soft">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                      Revenue this month
                    </p>
                    <p className="mt-1 text-3xl font-extrabold tracking-tight">$4,820</p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 text-accent">
                    <TrendingUp size={17} />
                  </span>
                </div>

                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold text-accent">
                  +12.4% vs last month
                </span>

                <div className="mt-6 flex h-24 items-end gap-2">
                  {revenue.map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-md ${i === revenue.length - 1 ? "bg-accent" : "bg-white/10"}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[9px] font-medium text-white/30">
                  {days.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-full bg-linear-to-br from-rose-400 to-orange-400 text-[10px] font-bold">
                      SM
                    </span>
                    <div className="text-[11px]">
                      <p className="font-semibold">Next payout</p>
                      <p className="text-white/40">Friday · $1,204</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/70">
                    Weekly
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-2 hidden items-center gap-2.5 rounded-2xl border border-line bg-white p-3 shadow-card sm:-left-4 sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-brand/10 text-brand">
                <GraduationCap size={17} />
              </span>
              <div className="text-xs">
                <p className="font-bold">New enrollment</p>
                <p className="text-slate-400">+3 students today</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">For creators</span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Create and manage courses easily.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 italic">
              ByteSpace gives you everything you need to publish beautiful courses, engage your students, and grow a
              sustainable creator business.
            </p>

            <ul className="mt-6 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-ink">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <a
              href="#creator-cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand"
            >
              Start creating
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
