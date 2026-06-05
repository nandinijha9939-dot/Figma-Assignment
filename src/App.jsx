import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgressSection from "./components/ProgressSection";
import OfferSection from "./components/OfferSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-[#f5f5f5] overflow-hidden">

      <Navbar />

      <HeroSection />

      <div className="relative">

        <ProgressSection />

       {/* CURVE 1 */}

<div
  className="
  absolute
  left-0
  top-[65%]

  w-full

  h-[250px]
  sm:h-[350px]
  md:h-[500px]
  lg:h-[700px]

  pointer-events-none
  z-[1]
  "
>

  <svg
    className="w-full h-full"
    viewBox="0 0 1600 900"
    preserveAspectRatio="none"
  >

    <path
      d="
       M 430 470

C 520 180,
  650 220,
  760 380

C 870 520,
  980 500,
  1080 220

C 1180 -10,
  1380 80,
  1600 220
      "
      stroke="#ff6b6b"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
      fill="none"
      strokeLinecap="round"
    />

  </svg>

</div>

      </div>

      <div className="relative">

        <OfferSection />

       {/* CURVE 2 */}

<div
  className="
  absolute
  left-0

  top-[52%]
  sm:top-[45%]
  md:top-[38%]
  lg:top-[32%]

  w-full

  h-[180px]
  sm:h-[260px]
  md:h-[420px]
  lg:h-[550px]

  pointer-events-none
  z-[1]
  "
>

  <svg
    className="w-full h-full"
    viewBox="0 0 1600 500"
    preserveAspectRatio="none"
  >

    <path
      d="
        M 700 340

        C 740 350,
          760 350,
          780 220

        C 800 40,
          980 40,
          1150 120

        C 1280 180,
          1420 240,
          1520 170

        C 1580 130,
          1620 60,
          1700 20
      "
      stroke="#ff6b6b"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
      fill="none"
      strokeLinecap="round"
    />

  </svg>

</div>

      </div>

      <TestimonialSection />

      <NewsletterSection />

      <Footer />

    </div>
  );
}

export default App;