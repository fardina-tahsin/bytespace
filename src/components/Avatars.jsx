import Image from "next/image";

const avatars = [
  { name: "Jordan Lee", src: "/avatars/jordan-lee.png" },
  { name: "Amelia Ross", src: "/avatars/amelia-ross.png" },
  { name: "Noah Kim", src: "/avatars/noah-kim.png" },
  { name: "Sara Malik", src: "/avatars/sara-malik.png" },
];

export default function Avatars({ count = "20+", ring = "ring-white" }) {
  return (
    <div className="flex items-center">
      {avatars.map((a) => (
        <Image
          key={a.src}
          src={a.src}
          alt={a.name}
          width={56}
          height={56}
          className={`-ml-2 size-7 rounded-full object-cover ring-2 ${ring} first:ml-0`}
        />
      ))}
      <span
        className={`-ml-2 grid h-7 place-items-center rounded-full bg-accent px-2 text-[10px] font-extrabold text-ink ring-2 ${ring}`}
      >
        {count}
      </span>
    </div>
  );
}
