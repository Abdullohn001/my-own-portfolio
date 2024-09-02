import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="w-full">
      <Title text="Contact Me" />
      <div className="container-avatar">
        <div className="mx-auto mt-16 avitar">
          <h1 className="text font text-3xl mx-auto">A</h1>
        </div>
      </div>
      <div className="mt-[100px] px-10 w-full">
        <ul className="mx-auto">
          <Link to="https://t.me/ID_24806">
            <li className="mx-auto flex links items-center bg-[#2C3D54] text-[#DDD9CE] text-font rounded-lg text-center backdrop-blur-sm shadow-2xl mt-5 h-[60px]">
              <a className="mx-auto" href="">
                Telegram
              </a>
            </li>
          </Link>
          <Link to="https://github.com/Abdullohn001">
            <li className="mx-auto flex links items-center bg-[#2C3D54] text-[#DDD9CE] text-font rounded-lg text-center backdrop-blur-sm shadow-2xl mt-5 h-[60px]">
              <a className="mx-auto" href="">
                Git Hub
              </a>
            </li>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61556235622414&mibextid=ZbWKwL">
            <li className="mx-auto flex links items-center bg-[#2C3D54] text-[#DDD9CE] text-font rounded-lg text-center backdrop-blur-sm shadow-2xl mt-5 h-[60px]">
              <a
                className="mx-auto"
                href="https://www.facebook.com/profile.php?id=61556235622414&mibextid=ZbWKwL"
              >
                Facebook
              </a>
            </li>
          </Link>
          <Link to="">
            <li className="mx-auto flex links items-center bg-[#2C3D54] text-[#DDD9CE] text-font rounded-lg text-center mt-5 h-[60px]">
              <a className="mx-auto" href="">
                Gmail
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
