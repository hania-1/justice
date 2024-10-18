import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <h1 className="m-2 p-1 font-bold text-4xl text-center text-slate-300 bg-rose-900" data-aos="flip-right">
        Mission
      </h1>

      <div className=" m-2 text-center text-3xl font-serif text-white bg-rose-900"data-aos="flip-right">
        In the end,Eduacte your childers equally,weather its a girl or a
        boy,rather than saying, &quot;Beta Parhao, Beti Chupao&quot;. Lets become one
        nation with the mindset of &quot;Beti Parhao, Mustakbil Bachao&quot;.Lets just pray
        for the betterment of the society and this global issue.
      </div>
      <Image
        src="/pic-18.png"
        alt="Mission"
        className="mx-auto m-2"
        width={500}
        height={500}
        data-aos="flip-right"
      />
    </div>
  );
};

export default Mission;
