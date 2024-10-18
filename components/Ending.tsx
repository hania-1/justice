import React from "react";
import Link from "next/link";
import Image from "next/image";

const Ending = () => {
  return (
    <div
      className="text-center m-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg"
      data-aos="zoom-in"
    >
      <h2 className="text-2xl font-bold">Join the Fight Against Violence</h2>
      <p className="mt-4 text-base">
        We all have a role in creating a safer, more equitable world. Whether
        through education, advocacy, or support for survivors, every action
        counts.
      </p>

      {/* Call to Action Button */}
      <Link
        href="https://wpc.sindhpolice.gov.pk/"
        className="inline-block mt-6 px-6 py-3 bg-red-900 text-black rounded-lg hover:bg-gray-300 transition-colors duration-300"
        data-aos="fade-up"
      >
        Learn How You Can Help
      </Link>
      <Image
        src="/pic-17.png"
        alt="Logo"
        width={200}
        height={200}
        className="mx-auto mt-6"
      />
      <div className="mt-6 font-serif text-center font-semibold">
        Its our responsibilitie to help, and rise our voices for the
        victimes.
      </div>
    </div>
    
  );
};

export default Ending;
