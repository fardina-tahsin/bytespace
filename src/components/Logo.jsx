import Link from "next/link";
import { Layers } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
      <span className="grid size-9 place-items-center rounded-xl bg-accent text-ink shadow-[inset_0_-2px_0_rgba(10,16,36,0.15)]">
        <Layers size={18} strokeWidth={2.4} />
      </span>
      <span className={`text-lg ${light ? "text-white" : "text-ink"}`}>
        ByteSpace<span className={light ? "text-accent" : "text-brand"}>.</span>
      </span>
    </Link>
  );
}
