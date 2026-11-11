import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Avatars from "./Avatars";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Enthusiastic learner",
    img: "/avatars/sara-malik.png",
    quote:
      "ByteSpace transformed my approach to learning. The diverse range of courses and the quality of content exceeded my expectations.",
  },
  {
    name: "James Lawson",
    role: "Lifelong learner",
    img: "/avatars/james-lawson.png",
    quote:
      "I've tried several online learning platforms, but ByteSpace stands out for its vibrant community and the variety of courses available.",
  },
  {
    name: "Alex Bennett",
    role: "Inspired creator",
    img: "/avatars/alex-bennett.png",
    quote:
      "As a creator, ByteSpace has been a game-changer. The course editor is user-friendly, and the support from the community is incredible.",
  },
];

export default function Testimonials() {
  return (
    <section id="community" className="bg-surface px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Community
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Loved by learners and creators alike
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
            A vibrant community sits at the heart of ByteSpace. Here is what a few of them have to say.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft md:last:col-span-2 lg:last:col-span-1"
            >
              <Quote size={26} className="text-brand/15" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover ring-1 ring-line"
                />
                <span>
                  <span className="block text-sm font-bold">{review.name}</span>
                  <span className="block text-xs text-slate-400">{review.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <Avatars count="12k+" />
          <p className="text-sm text-slate-500">
            <span className="font-bold text-ink">12,000+ learners</span> growing with ByteSpace every day
          </p>
        </div>
      </div>
    </section>
  );
}
