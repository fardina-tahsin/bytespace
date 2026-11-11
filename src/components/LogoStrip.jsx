import { Cloud, Flame, Gem, Rocket, Zap } from "lucide-react";

const logos = [
  { name: "LeadSpace", Icon: Zap },
  { name: "Omnichan", Icon: Rocket },
  { name: "Aquarian", Icon: Gem },
  { name: "Logobase", Icon: Flame },
  { name: "Nimbus", Icon: Cloud },
];

export default function LogoStrip() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand/80 lg:text-left">
          Trusted by teams at
        </p>

        <div className="hidden h-8 w-px bg-line lg:block" />

        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:mask-none">
          <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:animate-none">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-10 pr-10 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0 lg:gap-14 lg:pr-14"
              >
                {logos.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="group flex items-center gap-2.5 text-sm font-bold text-brand/70 transition hover:text-ink"
                  >
                    <span className="grid size-8 place-items-center rounded-lg bg-brand/5 text-brand/80 ring-1 ring-line transition duration-300 group-hover:bg-brand group-hover:text-accent group-hover:ring-brand">
                      <Icon size={16} strokeWidth={2.2} />
                    </span>
                    {name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
