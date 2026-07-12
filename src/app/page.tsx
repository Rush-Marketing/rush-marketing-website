import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { Contact } from "@/components/contact";
import { CultureQuote } from "@/components/culture-quote";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";
import { Martech } from "@/components/martech";
import { Nav } from "@/components/nav";
import { Office } from "@/components/office";
import { Ondernemers } from "@/components/ondernemers";
import { OpenCta } from "@/components/open-cta";
import { People } from "@/components/people";
import { Perks } from "@/components/perks";
import { Proces } from "@/components/proces";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Stats } from "@/components/stats";
import { Values } from "@/components/values";
import { Winkelkaart } from "@/components/winkelkaart";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Reveal />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <CultureQuote />
      <Ondernemers />
      <Martech />
      <Brands />
      <Winkelkaart />
      <Values />
      <Perks />
      <Office />
      <People />
      <Jobs />
      <Proces />
      <OpenCta />
      <Contact />
      <Footer />
    </>
  );
}
