import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ParalaxHeaderJs from "@/components/ParalaxHeaderjs";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <ParalaxHeaderJs />
      <Hero />
      <Intro />
      <Testimonials />
    </main>
  );
}
