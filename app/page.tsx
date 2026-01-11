import Image from "next/image";
import Hero from "./component/Hero";
import AboutSection from "./component/AboutSection";
import OurFeature from "./component/OurFeature";
import OurProduct from "./component/OurProduct";
import QuoteSection from "./component/QuoteSection";
import Contact from "./component/Contact";
import Product from "./component/Product";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <AboutSection />
      </div>
      {/* <div>
        <OurFeature />
      </div> */}
      <div>
        <OurProduct />
      </div>
      <Product />
      <div>
        <QuoteSection />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
