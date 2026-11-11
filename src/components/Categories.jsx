"use client";
import { useState } from "react";

const categories = [
  "Featured",
  "Marketing",
  "Social Media",
  "UI/UX Design",
  "Film & Video",
  "Freelance",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
];

export default function Categories() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="categories" className="bg-accent/50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Discover your passion.
          <br className="hidden sm:block" /> 
          Build skills that last.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-slate-600">
          From technology to the arts, explore curated courses across the fields that matter most to your career and
          life.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                active === category
                  ? "bg-brand text-accent shadow-card"
                  : "border border-line bg-surface text-slate-600 hover:border-slate-300 hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
