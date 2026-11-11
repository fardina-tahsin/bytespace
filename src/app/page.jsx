import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Categories from "@/components/Categories";
import CourseGrid from "@/components/CourseGrid";
import LearningPaths from "@/components/LearningPaths";
import Growth from "@/components/Growth";
import CreatorCTA from "@/components/CreatorCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Categories />
      <CourseGrid />
      <LearningPaths />
      <Growth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
