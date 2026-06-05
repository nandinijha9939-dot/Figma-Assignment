import image8 from "../assets/image8.png";

export default function OfferSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5] overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto relative">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
          <div
  className="
    absolute
    top-[150px]
sm:top-[220px]
md:top-[260px]

right-0
sm:right-2
md:right-5
    w-0
    h-0
    border-l-[60px]
    border-r-[60px]
    border-b-[100px]
    border-l-transparent
    border-r-transparent
    border-b-red-400
    rotate-0
    z-20
  "
></div>
<div
  className="
    absolute
    -top-4
    right-[160px]
sm:right-[180px]
md:right-[240px]
    w-0
    h-0
    border-l-[60px]
    border-r-[60px]
    border-b-[100px]
    border-l-transparent
    border-r-transparent
    border-b-red-400
    rotate-0
    z-0
  "
></div>
            <img
              src={image8}
              alt=""
              className="
              relative z-10
                w-[280px]
                h-[280px]
                sm:w-[360px]
                sm:h-[360px]
                md:w-[320px]
                md:h-[320px]
                lg:w-[380px]
                lg:h-[380px]
                rounded-full
                object-cover
              "
            />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 z-2 md:order-2">

            <h2 className="text-[42px] sm:text-[52px] md:text-[68px] leading-tight font-light">

              <span className="bg-green-100 px-2 sm:px-3 z-10 md:px-4 rounded-full">
                See
              </span>{" "}
              how we can

              <br />

              help you {" "}
              <span className="relative inline-block">
               progress
               
    <span
  className="
    absolute
    left-0
    bottom-[2px]
    sm:bottom-[4px]
    md:bottom-[8px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-2deg]
  "
></span>

<span
  className="
    absolute
    left-0
    bottom-[4px]
    sm:bottom-[6px]
    md:bottom-[12px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-5deg]
  "
></span>

<span
  className="
    absolute
    left-0
    bottom-0
    sm:bottom-[2px]
    md:bottom-[4px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-1deg]
  "
></span>
      </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8 max-w-lg">
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-8 text-sm">
              Read more →
            </button>

          </div>

        </div>

        {/* Decorative Stars */}
        <div className="hidden md:block absolute left-[52%] top-[40%] text-pink-400 text-3xl">
          ✦
        </div>

        <div className="hidden md:block absolute right-0 top-[40%] text-yellow-400 text-4xl">
          ✦
        </div>

        <div className="hidden md:block absolute left-[12%] bottom-0 text-green-400 text-4xl">
          ✦
        </div>

      </div>

      {/* OFFER LIST */}

      <div className="max-w-7xl mx-auto mt-20 relative z-10 md:mt-32">

        <h2 className="text-4xl md:text-7xl leading-none font-light mb-12">

          What we{" "}

          <span className="bg-green-200 z-10 px-4 rounded-full">
            can
          </span>

          <br />
          <span className="relative inline-block">

    offer
    <span
  className="
    absolute
    left-0
    bottom-[2px]
    sm:bottom-[4px]
    md:bottom-[8px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-2deg]
  "
></span>

<span
  className="
    absolute
    left-0
    bottom-[4px]
    sm:bottom-[6px]
    md:bottom-[12px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-5deg]
  "
></span>

<span
  className="
    absolute
    left-0
    bottom-0
    sm:bottom-[2px]
    md:bottom-[4px]
    w-full
    h-[1.5px]
    bg-[#f7b733]
    rotate-[-1deg]
  "
></span>
</span>
          {""} you!

        </h2>

        {/* ROW 1 */}

        <div className="border-b py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          <p className="text-gray-500 text-sm">
            Office of multiple interest content
          </p>

          <h3 className="text-2xl md:text-[42px] font-light">
            Collaborative & partnership
          </h3>

          <div className="text-right text-2xl">
            →
          </div>

        </div>

        {/* ROW 2 */}

        <div className="border-b py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          <p className="text-gray-500 text-sm">
            The hanger US Air force digital experimental
          </p>

          <h3 className="text-xl md:text-4xl font-light">
            We talk about our weight
          </h3>

          <div className="text-right text-2xl">
            →
          </div>

        </div>

        {/* ROW 3 */}

        <div className="border-b py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          <p className="text-gray-500 text-sm">
            Delta faucet content, social, digital
          </p>

          <h3 className="text-xl md:text-4xl font-light">
            Piloting digital confidence
          </h3>

          <div className="text-right text-2xl">
            →
          </div>

        </div>

      </div>

    </section>
  );
}