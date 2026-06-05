import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Purple Semi Circle */}
        <div className="block absolute
right-[2%]
sm:right-[8%]
md:right-[13%]
top-[120px]
sm:top-[150px]
md:top-[190px]
w-[40px]
h-[40px]
sm:w-[60px]
sm:h-[60px]
md:w-[90px]
md:h-[90px]
bg-[#8e38de]
rounded-full
rotate-[40deg]
"
style={{
  clipPath: "inset(0 0 0 50%)"
}}
></div>


        {/* HEADING */}

        <h1
          className="
          text-[38px]
          sm:text-[55px]
          md:text-[80px]
          lg:text-[110px]
          leading-[0.9]
          font-light
          tracking-[-0.04em]
          relative
          z-10
          "
        >
          The {""}
          <span className="relative inline-block">
                thinkers
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
          {""} and
          <br />

          doers were ch
          <span className="bg-pink-200 px-2 rounded-full">
            anging
          </span>

          <br />

          the{" "}
          <span className="bg-green-100 px-4 rounded-full">
            status
          </span>{" "}
          Quo with
        </h1>

        {/* PARAGRAPH */}

        <p
          className="
          mt-6
          max-w-[650px]
          mx-auto
          text-gray-600
          text-sm
          md:text-lg
          leading-8
          relative
          z-10
          "
        >
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        {/* DESKTOP PHOTOS */}

        <div
  className=" relative h-[260px] sm:h-[330px] md:h-[430px] mt-12 md:mt-20">

          <img
  src={image1}
  alt=""
  className="
  absolute
  left-[0%]
sm:left-[2%]
bottom-[5px]
sm:bottom-[10px]
  w-[70px] h-[70px]
sm:w-[120px] sm:h-[120px]
md:w-[200px] md:h-[200px]
  rounded-full
  object-cover
  border-1 border-white
  z-10
  "
/>

<img
  src={image2}
  alt=""
  className="
  absolute
 left-[8%]
sm:left-[10%]
md:left-[13%]

bottom-[35px]
sm:bottom-[60px]
md:bottom-[85px]
  w-[80px] h-[80px]
sm:w-[140px] sm:h-[140px]
md:w-[192px] md:h-[192px]
  rounded-full
  object-cover
  border-4 border-white
  z-20
  "
/>

<img
  src={image3}
  alt=""
  className="absolute left-[35%] top-[0px] w-[90px] h-[90px]
sm:w-[140px] sm:h-[140px]
md:w-[180px] md:h-[180px] rounded-full object-cover border-4 border-white"
/>

<img
  src={image16}
  alt=""
  className="absolute left-[43%] bottom-[35px] w-[70px] h-[70px]
sm:w-[110px] sm:h-[110px]
md:w-[140px] md:h-[140px] rounded-full object-cover border-4 border-white"
/>

<img
  src={image4}
  alt=""
  className="absolute left-[60%] top-[60px] w-[70px] h-[70px]
sm:w-[130px] sm:h-[130px]
md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-white"
/>

<img
  src={image17}
  alt=""
  className="absolute left-[68%] top-[150px] w-[70px] h-[70px]
sm:w-[110px] sm:h-[110px]
md:w-[140px] md:h-[140px] rounded-full object-cover border-4 border-white"
/>

<img
  src={image5}
  alt=""
  className="absolute right-[5%] top-[40px] w-[70px] h-[70px]
sm:w-[130px] sm:h-[130px]
md:w-[160px] md:h-[130px] rounded-full object-cover border-4 border-white"
/>

<img
  src={image6}
  alt=""
  className="absolute -right-[9%] bottom-[50px] w-[80px] h-[80px]
sm:w-[130px] sm:h-[130px]
md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-white"
/>
          {/* Decorative Stars */}

          <div className="absolute left-[2%] top-[40%] text-blue-400 text-3xl">
            ✦
          </div>

          <div className="absolute right-[30%] top-[10%] text-pink-400 text-3xl">
            ✦
          </div>

        </div>

        

      </div>

    </section>
  );
}