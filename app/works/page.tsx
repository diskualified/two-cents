import React from "react";
import Image, { StaticImageData } from "next/image";
import BabarThumbnail from "@/public/imgs/babar-thumbnail_orig.jpeg";
import FlipbookThumbnail from "@/public/imgs/flipbook-thumbnail.png";
import GraphicsThumbnail from "@/public/imgs/graphics-anim.png";
import StopmotionThumbnail from "@/public/imgs/stopmotion.png";
import ReclaimThumbnail from "@/public/imgs/reclaiming.png";
import AEThumbnail from "@/public/imgs/aftereffects.png";

const WorksPage = () => {
  const youtubeLinks = [
    "https://youtu.be/C2pKbgTAfNE",
    "https://www.youtube.com/watch?app=desktop&v=iOUXVBuy8aY&ab_channel=dub%21d",
    "https://youtube.com/shorts/CzXOUhV9NPk",
    "https://www.youtube.com/watch?v=Njt4nnne8qw&ab_channel=iDub%21d",
    "https://youtu.be/sc1RU1vgdAs",
    "https://youtu.be/vdvrhsillbc",
  ];
  const thumbnails: StaticImageData[] = [
    BabarThumbnail,
    FlipbookThumbnail,
    GraphicsThumbnail,
    StopmotionThumbnail,
    ReclaimThumbnail,
    AEThumbnail,
  ];

  const titles = [
    "Meet Babar: A Blender Animation",
    "Flip-Book Animation",
    "Water Simulation SPH - computer graphics",
    "Stop-Motion Name Animation w/ Lentils and Rice",
    "Reclaiming: A Walk Down Memory Lane (Final Project)",
    "Animation based on Bosch's The Garden of Earthly Delights",
  ];

  return (
    <div className="flex flex-col items-center justify-center m-12 gap-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {youtubeLinks.map((link, index) => (
          <div key={index} className="relative w-auto h-100">
            <a href={link} target="_blank">
              <Image
                src={thumbnails[index]}
                alt="thumbnail"
                className="object-cover h-60 rounded shadow-lg hover:scale-105 duration-500"
              />
            </a>
            <p className="pt-4">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
    /* <div className="flex flex-row box-border px-96">
        {youtubeLinks.map((link, index) => (
          <div className="mx-2 flex-grow basis-0 hover:basis-6/12 duration-500">
            <a href={link} target="_blank">
              <Image
                className="w-100 h-96 object-cover"
                src={thumbnails[index]}
                alt="thumbnail"
              ></Image>
            </a>
          </div>
        ))}
      </div> */
  );
};

export default WorksPage;
