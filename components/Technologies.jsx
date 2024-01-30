import React from "react";
import { FaDatabase } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
function Technologies() {
  return (
    <div id="technologies" className="flex flex-col ml-32">
      <h1 className="text-white font-bold text-5xl mb-8 mt-52 mr-80">Technologies</h1>
      <p className="text-slate-500 leading-normal text-2xl">
      I ve worked with a range a technologies in the web development world. <br/> From Front-end To Design
      </p>
      <br/>
        <div className="flex flex-row mt-8 gap-20">
          <div className="flex flex-col mr-8">
            <h1 className="text-white font-bold text-3xl mb-5">Front-End</h1>
            <FaReact className="text-white text-3xl mb-5" />
            <p className="text-slate-500 leading-normal text-xl">
              HTML, CSS, JavaScript, React, Next.js,<br/>Tailwind CSS,Bootstrap, Material UI,
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-3xl mb-5">Others</h1>
            <FaDatabase className="text-white text-3xl mb-5" />
            <p className="text-slate-500 leading-normal text-xl">
             MongoDB, Firebase, C++, C, Java
            </p>
          </div>
        </div>
    </div>
  );
}

export default Technologies;
