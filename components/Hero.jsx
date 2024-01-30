import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Link from "next/link";
function Hero() {
  return (
    <div className="container m-20 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 md:order-2 md:pl-8">
        <BackgroundAnimation />
      </div>
      <div className="w-full md:w-1/2 md:order-1 md:pl-8">
        <h2 className="text-white text-6xl font-bold mb-4">
          Hello!
          <br />
          I m Nurettin Yıldız
        </h2>
        <p className="text-xl mb-8 text-slate-400 leading-8">
          a Front End Developer with a focus
          on building scalable server-side applications using React.js. I am
          proficient in leveraging the power of Next.js and React.js to create
          seamless and efficient web development experiences. Passionate about
          UI libraries, I enjoy incorporating them into my projects to enhance
          user interfaces and deliver visually appealing applications. My goal
          is to contribute to a more user-friendly and interactive web.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full py-3 px-8 shadow-lg uppercase tracking-wider">
          <Link className="bg-transparent" href="mailto:nyildiz61.ny@gmail.com">Get In Touch</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
