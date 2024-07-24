import React from "react";
import Profile from "@/app/components/profile";
import David from "@/public/imgs/david.jpg";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center m-12 gap-12 min-h-screen">
      <h1 className="flex justify-center">About Us</h1>
      <Profile
        image={David}
        bio={
          "My name is David and I am a college graduate driven by how technology can make the world a better place. My hobbies include swimming, songwriting, and playing cards. Thanks for stopping by!"
        }
      ></Profile>
    </div>
  );
};

export default AboutPage;
