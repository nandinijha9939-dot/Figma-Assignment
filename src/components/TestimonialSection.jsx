import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">

        {/* Heading */}

        <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-light leading-tight mb-20">

          <span className="bg-green-100 px-3 rounded-full">
            What
          </span>{" "}
          our customer

          <br />

          says {" "}
          <span className="relative inline-block">

    About Us

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

        {/* Floating Images */}

        <img
          src={image9}
          alt=""
          className="
            absolute
            left-0
            top-16
            w-12 h-12
            md:w-16 md:h-16
            rounded-full
            object-cover
          "
        />

        <img
          src={image10}
          alt=""
          className="
            absolute
            left-4
            top-56
            w-20 h-20
            md:w-32 md:h-32
            rounded-full
            object-cover
          "
        />

        <img
          src={image11}
          alt=""
          className="
            absolute
            left-0
            bottom-20
            w-12 h-12
            hidden md:block
            md:w-16 md:h-16
            rounded-full
            object-cover
          "
        />

        <img
          src={image12}
          alt=""
          className="
            absolute
            right-10
            top-16
            w-12 h-12
            md:w-16 md:h-16
            rounded-full
            object-cover
          "
        />

        <img
          src={image13}
          alt=""
          className="
            absolute
            right-24
            hidden md:block
            top-44
            w-12 h-12
            md:w-16 md:h-16
            rounded-full
            object-cover
          "
        />

        <img
          src={image15}
          alt=""
          className="
            absolute
            right-24
            top-48
            hidden md:block
            w-14 h-14
            md:w-20 md:h-20
            rounded-full
            object-cover
          "
        />

        <img
          src={image14}
          alt=""
          className="
            absolute
            right-0
            bottom-0
            w-24 h-24
            md:w-40 md:h-40
            rounded-full
            object-cover
          "
        />

        {/* Testimonial Card */}

        <div
          className="
            max-w-3xl
            mx-auto
            bg-[#eef7ef]
            rounded-[30px]
            p-6
            md:p-10
            text-center
          "
        >

          

          <div className="relative max-w-xl mx-auto bg-[#eef7ef] rounded-[30px] p-8 md:p-10 text-center">

  {/* Left quote */}
  <span className="absolute left-6 top-4 text-5xl md:text-6xl text-gray-300 font-bold">
    “
  </span>

  <p className="text-gray-700 leading-8 text-base md:text-xl px-4">

    Elementum delivered the site within the
    timeline as they requested. In the end,
    the client found a 50% increase in traffic
    in days since its launch. They also had an
    impressive ability to use technologies that
    the company hasn't used, which has also
    proved to be easy to use and reliable.

  </p>

  {/* Right quote */}
  <span className="absolute right-8 bottom-4 text-5xl md:text-6xl text-gray-300 font-bold">
    ”
  </span>

</div>

          

        </div>

      </div>

    </section>
  );
}