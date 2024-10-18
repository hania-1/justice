import React from "react";
import Image from "next/image"; // Import Image from next/image

const Case = () => {
  return (
    <div className="m-2 p-1 font-bold text-white text-2xl"data-aos="flip-right">
      <h1 className="text-4xl text-center"data-aos="flip-right" >Cases</h1>

      {/* Title Section */}
      <div className="text-left ml-20"data-aos="flip-right">
        Rape Cases
      </div>

      {/* First Box: Text with Image on the Right */}
      <div className="flex m-4"data-aos="flip-right" >
        {/* Text Box */}
        <div className="relative w-72 h-96 border-4 border-black flex justify-center items-center ml-3"data-aos="flip-right">
          <main className="absolute text-white p-3"data-aos="flip-right">
            <div className="text-base font-semibold"data-aos="flip-right">
              Rape and sexual violence are widespread global issues, with
              significant underreporting due to stigma, fear of retaliation, and
              lack of trust in law enforcement. According to the United Nations,
              over 250,000 rape cases or attempts are recorded by police
              annually worldwide, though the actual number is likely much higher
              due to unreported cases. South Africa, for example, is believed to
              have as many as 500,000 rapes per year.
            </div>
          </main>
        </div>

        {/* Image on the Right */}
        <Image
          src="/pic-2.png"  // Ensure the correct path for the image
          alt="hero"
          width={288}  // Replace with the actual width
          height={400}  // Replace with the actual height
          className="w-72 object-cover m-4 p-6 ml-auto"
         data-aos="flip-right"
        />
      </div>

      {/* Second Section */}
      <div className="m-2 p-1 font-bold text-white text-2xl"data-aos="flip-right">
        {/* Title Section */}
        <div className="text-left ml-20"data-aos="flip-right">
          Deaths By Rape & Harassment
        </div>

        {/* Flex container: Text Box and Image on the Right */}
        <div className="flex m-4" data-aos="flip-right">
          {/* Text Box */}
          <div className="relative w-96 h-96 border-4 border-black flex justify-center items-center"data-aos="flip-right">
            <main className="absolute text-white p-3"data-aos="flip-right">
              <div className="font-semibold text-sm"data-aos="flip-right" >
                Rape and sexual harassment significantly impact mortality rates
                among victims. The World Health Organization (WHO) reported that
                approximately 87,000 women were killed globally in 2017, with
                38% of these homicides linked to intimate partners or family
                members due to sexual violence. In the U.S., studies indicate
                that one in five women have faced completed or attempted rape,
                with mental health issues leading to elevated suicide rates
                among survivors. Furthermore, women experiencing intimate
                partner violence are over three times more likely to suffer from
                depression and twice as likely to experience post-traumatic
                stress disorder (PTSD), highlighting the need to address the
                connection between violence, mental health, and societal
                attitudes to reduce fatalities.
              </div>
            </main>
          </div>

          {/* Image on the Right */}
          <Image
            src="/pic-7.png"  // Ensure the correct path for the image
            alt="hero"
            width={288}  // Replace with the actual width
            height={400}  // Replace with the actual height
            className="w-72 object-cover m-4 p-6 ml-96"
          data-aos="flip-right"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="text-left ml-20"data-aos="flip-right">
        Reported Violence & Incidence
      </div>

      <div className="flex m-4"data-aos="flip-right" >
        {/* Text Box */}
        <div className="relative w-60 h-96 border-4 border-black flex justify-center items-center ml-4"data-aos="flip-right">
          <main className="absolute text-white p-3"data-aos="flip-right">
            <div className="font-semibold text-sm" data-aos="flip-right">
              Reported incidents of sexual violence and harassment remain a
              pressing concern globally. In the United States, approximately 1
              in 5 women and 1 in 71 men report having been raped at some point
              in their lives, with 81% of women and 35% of men experiencing
              significant harassment. College campuses are
              particularly affected, with around 13% of students reporting
              experiences of rape or sexual assault. Female undergraduate
              students face higher risks, with 26.4% reporting such incidents.
            </div>
          </main>
        </div>

        {/* Image on the Right */}
        <Image
          src="/pic-3.png"  // Ensure the correct path for the image
          alt="hero"
          width={288}  // Replace with the actual width
          height={400}  // Replace with the actual height
          className="w-72 object-cover ml-4 m-4 p-6"
          data-aos="flip-right"
        />
      </div>
    </div>
  );
};

export default Case;
