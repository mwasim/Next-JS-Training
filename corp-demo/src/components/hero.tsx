import Image from "next/image"; //built-in Image library does the image resizing/compression at run time for different resolutions.
import type { StaticImageData } from "next/image";

interface HeroProps {
  imgPath: string;
  imgAlt: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgPath}
          alt={props.imgAlt}
          title={props.title}
          fill
          style={{ objectFit: `cover` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
