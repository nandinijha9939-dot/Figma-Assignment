
import image7 from "../assets/image7.png";

export default function ProgressSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 overflow-hidden">

      <div className="border-2px max-w-8xl mx-auto px-8 relative">

       <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <h2
              className="
              font-light
              leading-[1]
              text-[42px]
              sm:text-[55px]
              md:text-[70px]
              lg:text-[68px]
              "
            >
              <span className="relative inline-block">
    Tomorrow
    
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
  {""} should
              <br />
              be better than {" "}
              <span className="bg-green-100 px-3 rounded-full">
              today
              </span>
            </h2>

            <p className="mt-8 max-w-md text-gray-600 leading-8">
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-8 flex items-center gap-3 text-black">
              Read more
              <span>→</span>
            </button>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Pink shape */}

              <div className="absolute -top-6 right-0 w-40 h-40 bg-red-400 rotate-12 z-0"></div>

              {/* Main Image */}

              <img
                src={image7}
                alt=""
                className="
                relative z-10
                w-[280px]
                h-[280px]
                sm:w-[350px]
                sm:h-[350px]
                lg:w-[430px]
                lg:h-[430px]
                rounded-full
                object-cover
                "
              />

            </div>

          </div>

        </div>

        {/* Decorative stars */}

        <div className="hidden lg:block">
          <div className="absolute left-[15%] top-[45%] text-green-400 text-4xl">
            ✦
          </div>

          <div className="absolute left-[48%] top-[45%] text-pink-400 text-3xl">
            ✦
          </div>

          <div className="absolute right-[10%] top-[45%] text-yellow-400 text-4xl">
            ✦
          </div>
        </div>

      </div>

    </section>
  );
}