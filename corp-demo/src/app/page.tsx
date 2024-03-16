import Image from "next/image"; //built-in Image library does the image resizing/compression at run time for different resolutions.

export default function Home() {
  return (
    <>
      <div>
        Home Page!
        <div className="absolute -z-10 inset-0">
          <Image
            src="/images/home.jpg"
            alt="Car factory"
            fill
            style={{ objectFit: `cover` }}
          />
        </div>
      </div>
    </>
  );
}
