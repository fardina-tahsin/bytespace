import { Globe, Mail, MessageCircle, Send } from "lucide-react";
import Logo from "./Logo";

const columns = [
  { title: "Learn", links: ["All courses", "Learning paths", "Categories", "Pricing"] },
  { title: "Company", links: ["About us", "Become a creator", "Careers", "Contact"] },
  { title: "Support", links: ["Help center", "Community", "Privacy policy", "Terms of service"] },
];

const socials = [
  { label: "Website", Icon: Globe },
  { label: "Community", Icon: MessageCircle },
  { label: "Newsletter", Icon: Send },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1.6fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm italic leading-relaxed text-white/50">
              Learn skills that move you forward. Join thousands of learners and creators building better careers
              together.
            </p>

            <form className="mt-6 flex max-w-sm items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 pl-4">
              <Mail size={16} className="shrink-0 text-white/40" />
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-ink transition hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/60 transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-accent/40 text-accent/70 transition hover:border-accent/70 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
