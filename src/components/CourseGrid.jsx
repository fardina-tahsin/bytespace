import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Clock3,
  Database,
  Palette,
  PenTool,
  Rocket,
  Star,
  Timer,
  Wallet,
} from "lucide-react";

const courses = [
  {
    title: "Learn Figma from Basic",
    by: "Jordan Lee",
    category: "Design",
    rating: "4.9",
    lessons: 12,
    hours: "6h 20m",
    price: 24,
    Icon: Palette,
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    img: "/avatars/jordan-lee.png",
  },
  {
    title: "Build Digital Assets That Sell",
    by: "Amelia Ross",
    category: "Illustration",
    rating: "4.8",
    lessons: 10,
    hours: "4h 45m",
    price: 29,
    Icon: PenTool,
    gradient: "from-slate-700 via-slate-800 to-slate-950",
    img: "/avatars/amelia-ross.png",
  },
  {
    title: "The Power of Big Data",
    by: "Noah Kim",
    category: "Data Science",
    rating: "4.9",
    lessons: 18,
    hours: "9h 10m",
    price: 89,
    Icon: Database,
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
    img: "/avatars/noah-kim.png",
  },
  {
    title: "Balancing Productivity and Life",
    by: "Sara Malik",
    category: "Productivity",
    rating: "4.7",
    lessons: 8,
    hours: "3h 30m",
    price: 19,
    Icon: Timer,
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    img: "/avatars/sara-malik.png",
  },
  {
    title: "Mastering Money Management",
    by: "Leo Hart",
    category: "Finance",
    rating: "4.8",
    lessons: 14,
    hours: "7h 15m",
    price: 35,
    Icon: Wallet,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    img: "/avatars/leo-hart.png",
  },
  {
    title: "From Idea to Startup Success",
    by: "Priya Nair",
    category: "Business",
    rating: "4.9",
    lessons: 16,
    hours: "8h 05m",
    price: 59,
    Icon: Rocket,
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    img: "/avatars/priya-nair.png",
  },
];

export default function CourseGrid() {
  return (
    <section id="courses" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-light opacity-60 mask-[radial-gradient(80%_65%_at_50%_45%,black,transparent)]" />
        <div className="absolute -left-32 top-0 size-112 animate-blob rounded-full bg-brand/30 blur-[110px] motion-reduce:animate-none" />
        <div className="absolute -right-28 top-24 size-104 animate-blob-slow rounded-full bg-accent/40 blur-[120px] [animation-delay:-6s] motion-reduce:animate-none" />
        <div className="absolute bottom-4 left-1/3 size-96 animate-blob-reverse rounded-full bg-violet-400/30 blur-[120px] [animation-delay:-3s] motion-reduce:animate-none" />
        <div className="absolute -bottom-24 right-1/4 size-80 animate-blob-slow rounded-full bg-cyan-400/25 blur-[100px] [animation-delay:-10s] motion-reduce:animate-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Popular right now</h2>
          </div>
          <a
            href="#"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-brand border border-accent px-6 py-2 text-sm font-bold text-accent transition hover:border-ink hover:text-ink"
          >
            Browse all courses
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(
            ({ title, by, category, rating, lessons, hours, price, Icon, gradient, img }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-brand to-ink p-3 text-white transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
              >
                <div className={`relative h-40 overflow-hidden rounded-2xl bg-linear-to-br ${gradient}`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />

                  <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur transition group-hover:bg-accent group-hover:text-ink">
                    {category}
                  </span>
                  <button
                    type="button"
                    aria-label={`Save ${title}`}
                    className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-accent hover:text-ink"
                  >
                    <Bookmark size={14} />
                  </button>

                  <Icon
                    size={58}
                    strokeWidth={1.4}
                    className="absolute -bottom-2 right-2 text-white/20 transition duration-500 group-hover:scale-110 group-hover:text-accent/30"
                  />

                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/25 px-5 py-0 text-[9px] font-semibold text-white backdrop-blur">
                    <Clock3 size={12} /> {hours}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-semibold text-white/70">
                      <Star size={12} className="fill-amber-400 text-amber-400" /> {rating}
                    </span>
                    <span className="text-white/60">{lessons} lessons</span>
                  </div>

                  <h3 className="mt-2 text-base font-extrabold leading-snug text-accent">{title}</h3>

                  <div className="mt-3 flex items-center gap-2">
                    <Image
                      src={img}
                      alt=""
                      width={48}
                      height={48}
                      className="size-8 rounded-full object-cover ring-2 ring-white/20"
                    />
                    <span className="text-xs text-white/60">by <span className="italic">{by}</span></span>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <p className="text-lg font-extrabold text-white">
                      ${price} <span className="text-[10px] font-medium text-white/50">/ course</span>
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-bold text-white/80 transition hover:text-accent"
                    >
                      View <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
