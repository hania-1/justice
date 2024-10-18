import React from "react";
import Image from "next/image";

const Protection = () => {
  return (
    <div className="m-2 p-1 font-bold text-white text-2xl">
      <h1 className="text-4xl text-center font-bold" data-aos="flip-right">
        Speaking UP!
      </h1>
      <div
        className="text-center ml-20 font-semibold text-2xl"
        data-aos="flip-right"
      >
        Speaking up for the &quot;Ziyadtii&quot; is the example that we are all
        living and know the difference betwen good and bad...& not just
        breathing with blocked minds, closed eyes and stitched mouths.
        <Image
          src="/pic-1.png"
          alt="Specking up"
          className="mx-auto m-2"
          width={500}
          height={500}
        />
        {/* protest */}
        <h2
          className="text-3xl text-center m-4 font-bold"
          data-aos="flip-right"
        >
          Protest
        </h2>
        <div
          className="flex items-center justify-between m-20 ml-6 font-semibold text-gray-300"
          data-aos="flip-right"
        >
          {/* Image Section 15*/}
          <Image
            src="/pic-15.png"
            alt="Protest"
            className="m-5"
            width={500}
            height={500}
          />

          {/* Text Section */}
          <div className="text-right" data-aos="flip-right">
            The PGC Incident Protest in which 1000s of students put there part
            in the protest as a sign of Azad Quom, Azad Soch the students did
            there best to achive the justice for that girl,who was raped by a
            Security Guard in the College Basement.
          </div>
        </div>
        <div
          className="flex items-center justify-between m-20 ml-6 font-semibold text-gray-300"
          data-aos="flip-right"
        >
          {/* Text Section on the left */}
          <div className="text-left">
            The Police did Lathii Charge and also used Ansoo Gas to stop the
            protest & students. Alot of students got injured. Few of them are
            also dead and missing.This Incident took place On 11 October 2024, a
            17-year-old female HSSC-I ICS student at Punjab College Gulberg
            campus 10 in Lahore, Punjab, Pakistan, was allegedly raped in the
            basement of the college building. The victim was transferred to a
            nearby hospital and was said to have been shifted to the ICU in a
            critical condition,sadly after few hours of treatment, the girl lost
            the race of life.
          </div>

          {/* Image Section on the right */}
          <Image
            src="/pic-16.png"
            alt="Protest"
            className="m-3"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Protection;
