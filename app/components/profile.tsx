import React from "react";
import Image, { StaticImageData } from "next/image";

const Profile = ({ image, bio }: { image: StaticImageData; bio: string }) => {
  return (
    <div className="justify-center px-[10%] flex flex-col lg:flex-row h-1/4 items-center gap-12">
      <div className="flex lg:w-1/2 bg-[#7B3F00] justify-center bg-opacity-50">
        <div className="m-[10%] lg:m-15 flex justify-center bg-white">
          <Image
            className="flex p-4 sm:h-[512px] lg:h-[512px] w-full object-cover"
            src={image}
            alt="profile picture"
          ></Image>
        </div>
      </div>
      <div className="lg:ml-[-10%] lg:p-4 bg-white lg:w-1/2">
        <div className="flex flex-col bg-[#fff0db] p-12 gap-6">
          <h1 className="flex justify-center text-slate-700">A Bit About Me</h1>
          <p className="flex">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
