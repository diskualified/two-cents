import React from "react";
import Image from "next/image";
import Instagram from "@/public/imgs/insta_icon.svg";
import Linkedin from "@/public/imgs/linkedin_icon.svg";
import Youtube from "@/public/imgs/youtube_icon.svg";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-12 py-12 px-7 sm:px-12">
      <p className="flex justify-center p-6 text-rose-950 font-semibold">
        <a href="mailto:twopercentprod@gmail.com">twopercentprod@gmail.com</a>
      </p>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/davidqian02" target="_blank">
          <Image className="w-12 h-12" src={Linkedin} alt="linkedin"></Image>
        </a>
        <a href="https://www.instagram.com/2centsstudios" target="_blank">
          <Image className="w-12 h-12" src={Instagram} alt="instagram"></Image>
        </a>
        <a href="https://www.youtube.com/@diskualified" target="_blank">
          <Image className="w-12 h-12" src={Youtube} alt="youtube"></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
