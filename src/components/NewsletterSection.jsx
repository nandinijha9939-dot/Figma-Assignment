export default function NewsletterSection() {
  return (
    <section className="relative bg-[#dfeedd] pt-20 md:pt-28">
      <div className="hidden md:block absolute left-[35%] top-0 z-20">

  <svg
    width="220"
    height="120"
    viewBox="0 0 220 120"
    fill="none"
  >

    {/* Left Curve */}
    <path
      d="
      M 80 -10
      C 130 30,
        20 40,
        20 90
      "
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Left Arrow */}
    <path
      d="
      M 14 82
      L 20 92
      L 26 82
      "
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Right Curve */}
    <path
      d="
      M 200 -10
      C 245 20,
        140 40,
        150 90
      "
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right Arrow */}
    <path
      d="
      M 144 82
      L 150 92
      L 156 82
      "
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

  </svg>

</div>
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl sm:text-6xl md:text-[100px] leading-none font-light">

          Subscribe to

          <br />

          our newsletter

        </h2>

        <p className="mt-6 text-sm md:text-base text-gray-700">

          To make your stay special and even more memorable

        </p>

        <button
          className="
            mt-8
            bg-black
            text-white
            px-8
            py-4
            rounded-full
            hover:scale-105
            duration-300
          "
        >
          Subscribe Now
        </button>

      </div>
      <div className="hidden md:block absolute right-[13%] top-[190px] rotate-[30deg]">
  <svg width="100" height="200" viewBox="0 0 100 200">
    <path
      d="M100 0 A100 100 0 0 0 100 200 L100 0"
      fill="#8e38de"
    />
  </svg>
</div>
    </section>
  );
}