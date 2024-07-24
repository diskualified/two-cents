import React from "react";
import Image from "next/image";
import Instagram from "@/public/imgs/insta_icon.svg";
import Linkedin from "@/public/imgs/linkedin_icon.svg";
import Youtube from "@/public/imgs/youtube_icon.svg";
import Mail from "@/public/imgs/mail_icon.svg";
import headerPic from "@/public/imgs/comiccoin.png";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center gap-12 min-h-screen">
      <div className="flex justify-center">
        <Image
          className="w-[450px] lg:w-1/3"
          src={headerPic}
          alt="contact picture"
        ></Image>
      </div>

      <h1 className="flex justify-center">Contact Us</h1>
      <div className="flex flex-row justify-center gap-12">
        <a href="https://www.linkedin.com/in/davidqian02" target="_blank">
          <Image className="w-24 h-24" src={Linkedin} alt="linkedin"></Image>
        </a>
        <a href="https://www.instagram.com/2centsstudios" target="_blank">
          <Image className="w-24 h-24" src={Instagram} alt="instagram"></Image>
        </a>
        <a href="https://www.youtube.com/@diskualified" target="_blank">
          <Image className="w-24 h-24" src={Youtube} alt="youtube"></Image>
        </a>
      </div>
      <div>
        <p className="flex justify-center gap-2">
          Email:
          <a href="mailto:twopercentprod@gmail.com">twopercentprod@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
