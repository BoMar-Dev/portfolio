// GALLERY PHOTO SECTIONS

"use client";
import Image from "next/image";

// COMPONTENT
import Photos from "../components/Photos";

// PHOTOS
import img28 from "../../public/assets/img/favorites/japan5.jpg";

export const Gallery = () => {
  return (
    <section className="bg-[#201E23] w-full min-h-screen p-8 flex text-[#8c8bb0]  ">
      <div className="flex flex-col items-center xl:max-w-[1200px] 2xl:max-w-[1200px] md:px-10 mx-auto bg-[#201E23] mb-10">
        <h1 className="text-6xl font-black  bg-gradient-to-r from-[#8c8bb0] to-[#f0f2f1] bg-clip-text text-transparent mb-10">
          Gallery
        </h1>
        <div className="grid gap-4 lg:grid-cols-3 justify-between space-y-10 xl:space-x-12">
          <Photos />
        </div>

        <div className="mt-10 ">
          <Image src={img28} alt="japan" />
        </div>
      </div>
    </section>
  );
};
export default Gallery;
