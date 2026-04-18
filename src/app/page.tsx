import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { Contact } from "@/components/contact";
import { CultureQuote } from "@/components/culture-quote";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";
import { Nav } from "@/components/nav";
import { OpenCta } from "@/components/open-cta";
import { People } from "@/components/people";
import { Perks } from "@/components/perks";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Stats } from "@/components/stats";
import { TeamCollage } from "@/components/team-collage";
import { Values } from "@/components/values";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Brands />
      <CultureQuote />
      <Values />
      <Perks />
      <TeamCollage />
      <People />
      <Jobs />
      <OpenCta />
      <Contact />
      <Footer />
    </>
  );
}
