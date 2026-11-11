import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-jakarta" 
});

export const metadata = {
  title: "ByteSpace - Learn skills that move you forward",
  description:
    "Explore hundreds of expert-led courses in design, development, data, business, and more. Learn at your pace and grow your career with ByteSpace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
