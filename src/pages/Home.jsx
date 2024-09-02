import React from "react";
import { SiWebpack, SiTypescript, SiMonkeytype, SiRedux } from "react-icons/si";
import { BiSolidFileHtml, BiSolidFileJson } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdHttps } from "react-icons/md";
import { useState, useEffect } from "react";

function Home() {
  const [reactValue, setReactValue] = useState(0);
  const [jsValue, setJsValue] = useState(0);
  const [tsValue, setTsValue] = useState(0);

  useEffect(() => {
    const maxSkillLevel = 85;
    const maxjsvalue = 80;
    const maxtsvalue = 30;

    const interval = setInterval(() => {
      setReactValue((prev) => (prev < maxSkillLevel ? prev + 1 : prev));
      setJsValue((prev) => (prev < maxjsvalue ? prev + 1 : prev));
      setTsValue((prev) => (prev < maxtsvalue ? prev + 1 : prev));
    }, 20); 

    if (
      reactValue >= maxSkillLevel &&
      jsValue >= maxSkillLevel &&
      tsValue >= maxSkillLevel
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [reactValue, jsValue, tsValue]);

  return (
    <div>
      <div className="mx-auto max-w-[400px]">
        <div className="flex gap-7 mx-auto p-6">
          <div className="avatar animate-avatar placeholder">
            <div className="bg-neutral text-neutral-content w-32 rounded-full">
              <span className="text-3xl">A</span>
            </div>
          </div>
          <div className="flex max-h-32 w-[200px] flex-col">
            <label htmlFor="">React</label>
            <input
              className="range w-full bg-slate-500 range-success"
              type="range"
              value={reactValue}
              readOnly
              min={0}
              max="100"
            />
            <label htmlFor="">JavaScript</label>
            <input
              type="range"
              min={0}
              max="100"
              value={jsValue}
              className="range w-full bg-slate-500 range-success"
            />
            <label htmlFor="">TypeScript</label>
            <input
              type="range"
              min={0}
              max="100"
              value={tsValue}
              className="range w-full bg-slate-500 range-success"
            />
          </div>
        </div>
        <div className="flex p-5 gap-6 ">
          <h1 className="text-2xl">Frontend Developer</h1>
          <h2 className="bg-blue-500 text-black flex mx-auto w-[100px] text-center rounded-lg ">
            <span className="justify-center flex items-center font-semibold mx-auto">
              Mid-level
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2  gap-5">
          <div className="w-[160px] p-5">
            <h1 className="text-2xl">Skills</h1>
            <hr className="mt-3" />
            <h4>
              <p className="mt-2">
                Lorem ipsum do. Qui perferendis modi enim, necessitatibus rerum
                dolores dolorum m!
              </p>
            </h4>
          </div>
          <div className="w-[160px] p-5">
            <h1 className="text-2xl">Hobbys</h1>
            <hr className="mt-3" />
            <h4>
              <p className="mt-2">
                Lorem ipsum do. Qui perferendis modi enim, necessitatibus rerum
                dolores dolorum m!
              </p>
            </h4>
          </div>
          <div className="w-[300px]">
            <div className="w-full p-5">
              <h1 className="text-2xl">Interests</h1>
              <hr className="mt-3" />
              <h4>
                <p className="mt-2">
                  Lorem ipsum do. Qui perferendis modi enim, necessitatibus
                  rerum dolores dolorum m!
                </p>
              </h4>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl mt-4 ">Skills</h1>
        <hr className="pt-5  mx-auto mt-5" />
        <div className="grid grid-cols-5 mt-5  p-5 gap-3">
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <BiSolidFileHtml />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">Css</span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <SiTypescript />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <IoLogoJavascript />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <FaReact />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <SiRedux />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <SiMonkeytype />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <BiSolidFileJson />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <MdHttps />
              </span>
            </div>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">
                <SiWebpack />
              </span>
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
