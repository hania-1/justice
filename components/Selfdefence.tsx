import React from "react";
import Image from "next/image";

const Selfdefence = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl text-gray-400" data-aos="flip-right">
        Selfdefence
      </h1>
      <div className=" font-semibold text-center text-2xl text-gray-300 m-6" data-aos="flip-right">
        So, The Question is how can we make our selves safe from all the
        attacks.The answer is &quot;Self Defence&quot;.Learning self defence is very
        important,in this generation, where &quot;Gol Roti&quot; can wait, but the main &
        most important thing is to teach your daughter self defence,the
        soluction is not that you kept your daughers at homes,and not let them
        study, just beacuse you think &quot;if its someone else daughter today ,
        tomorrow there will be your daughers&quot;.
      </div>
      <Image
        src="/pic-21.png"
        alt="Self Defence"
        className="mx-auto m-2"
        width={500}
        height={500}
        data-aos="flip-right"
      />
      <div>
        <h2 className="font-bold text-center text-4xl text-gray-400 m-5" data-aos="flip-right">
          Is Keep Our Daughters Uneduacted Is The Soluction?
        </h2>
        <div className="font-semibold text-center text-3xl text-gray-300"data-aos="flip-right" >
          The Answer is NO!
          <div className="font-semibold text-center text-2xl text-zinc-200 m-6"data-aos="flip-right" >
            WHY? WHY should we keep our daughter uneduacted? and not eduacte our
            SONS! Why we dont say them to take control on there inner
            Animal/HAWAS/SHAYTAN as its way better then calling your daughtres
            home at 5pm!
          </div>
          <div className="font-semibold text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
            Closing Eyes and running from the truth is not the soluction, if we
            give eduaction to our sons, then there will be our daughers who fell
            safe while going out, no matter what they wore, A Lap Coat , A
            Burkhaa , A Frok or A KAFAN! There Will Always Be A GIRL,WHO IS WRONG
            Not the Boy,Who Forced Her, Kidnaped Her, Still the Mistake Will Alaways Comes From
           A WOMENs Side!
          </div>
          <div>
          <Image
              src="/pic-4.png"
              alt="Self Defence"
              className="mx-auto m-2"
              width={500}
              height={500}
              data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selfdefence;
