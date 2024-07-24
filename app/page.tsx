import Image from "next/image";
import bkgrd from "@/public/imgs/animecoin1.jpg";

export default function Home() {
  return (
    <>
      <div className="relative p-0 m-0 flex h-100">
        <Image
          src={bkgrd}
          alt="landing background"
          sizes="100vw"
          className="w-full h-auto brightness-50"
        ></Image>
        <h1 className="text-white text-[58px] leading-[64px] absolute top-1/2 sm:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Two Cents Studios
        </h1>
      </div>
      <div className="flex flex-col items-center m-24 gap-10">
        <h1 className="flex items-center justify-center">Our Mission</h1>
        <p className="flex justify-start">
          At Two Cents, we are here to entertain you and explore new
          possibilities with you. Through innovation, collaboration, and
          inspiration from the growth of representation in media, we are
          committed to bringing untold narratives to life in film, music, and
          written works.
        </p>
      </div>
    </>
  );
}
