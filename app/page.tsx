import Image from "next/image";
import Hero from "./component/Hero";
import AboutSection from "./component/AboutSection";
import OurFeature from "./component/OurFeature";
import OurProduct from "./component/OurProduct";
import QuoteSection from "./component/QuoteSection";
import Contact from "./component/Contact";
import Product from "./component/Product";
import CardsDesing from "./component/CardsDesing";
import AboutUsSection from "./component/AboutUsSection";
import Editorial from "./component/Editorial";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <AboutUsSection />
      </div>

      <div>
        <CardsDesing />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <Editorial />
      </div>

      {/* <div>
        <OurFeature />
      </div> */}
      <div>
        <OurProduct />
      </div>

      {/* <Product /> */}
      <div>
        <QuoteSection />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
