"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 bg-red-950">
        <div className="col-span-7 place-self-center text-center sm:text-left bg-red-950">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-red-950">
            <div className="text-transparent bg-clip-text bg-gradient-to-r m-60 text-center from-white to-clack bg-red-900"data-aos="fade-down">
              Stand Against Violence
            </div>
          </h1>
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center "data-aos="fade-down"> A New Day, A New Case! </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg m-10 mb-9 lg:text-xl text-center font-semibold"data-aos="fade-down">
            Sexual harassment and rape are global crises that continue to affect
            millions of lives, often leaving victims traumatized, isolated, and
            without support. Despite growing awareness, these acts of violence
            are still underreported due to stigma, fear of retaliation, and
            inadequate justice systems. The consequences are devastating, not
            only resulting in physical and psychological harm but sometimes
            leading to death. Raising awareness, creating safe spaces for
            survivors, and advocating for stronger laws and swift justice are
            crucial steps in tackling this epidemic. As a society, its our
            collective responsibility to break the silence, support survivors,
            and foster a culture of respect and safety for all.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/pic-6.png"
              alt="hero"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={400}
              height={400}
             
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
