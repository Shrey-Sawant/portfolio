import Sidebar from "../Nav/Sidebar";
import vid from "../../assets/hero.mp4";
import { useEffect, useRef } from "react";

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 1;

      video.play();
    }
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between items-center py-10 mt-20 md:py-0"
    >
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute -top-14 w-full h-full object-cover z-0 outline-none focus:outline-none pointer-events-none"
          src={vid}
        />

        <div className="absolute top-0 left-0 w-full h-full z-10"></div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center tracking-wider font-light text-center px-4">
          <span className="text-xl">Hi, i'm Shrey</span>

          <h1 className="text-5xl md:text-[80px] leading-tight mt-7 mb-20 md:mb-40">
            Full-stack Developer <br />
            Product Engineer
          </h1>

          <span className="text-xl">scroll down</span>
        </div>
      </div>
      <p className="hidden md:flex text-2xl font-extralight writing-vertical justify-center pr-10">
        Shrey Sawant
      </p>
    </div>
  );
};

export default Main;
