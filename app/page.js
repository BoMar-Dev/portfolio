import Image from "next/image";

// MY IMAGES
import testImg2 from "../public/assets/img/testM.png";
import ArrowDown from "../public/assets/img/down.png";

//SOCIAL
import Social from "./components/Social";

// COMPONENTS
import Button from "./components/Button";

// PAGE SECTIONS
import About from "./about/page";

export default function Home() {
  return (
    // L A N D I N G
    <main className="flex flex-col">
      <section className="bg-[#201e23] w-full min-h-screen  ">
        {/* Mobile & tablet view - else hidden */}
        <div className="flex flex-col text-center  lg:hidden text-white ">
          <div>
            <h1 className="text-6xl md:text-7xl max-w-100 m-auto font-black mt-20 bg-gradient-to-r from-[#8c8bb0] to-[#f0f2f1] bg-clip-text text-transparent">
              Hi, It's <span className="text-white">me</span> Marcus
            </h1>
            <h2 className="text-xl font-bold bg-gradient-to-r from-[#f0f2f1] to-[#] bg-clip-text text-transparent">
              Taking photos
            </h2>
            <div className="relative w-full  bg-[#201e23]">
              <div className="absolute inset-20 flex items-center justify-center">
                <Button />
              </div>
            </div>
            <div className="h-45 w-[2.5px] bg-amber-50 flex flex-col space-y-2  text-[#f0f2f1] ">
              <p className="p-[10.5px] rotate-90 mt-3 "> Scroll</p>
              <p className="p-[10.5px] rotate-90 "> down </p>
            </div>
          </div>

          <div>
            <Image
              src={testImg2}
              alt="Marcus Taking Photos"
              width="100%"
              height="auto"
              className="w-100%  min-w-[300px] h-auto object-cover  ]"
            />
          </div>
        </div>

        {/* laptop & dekstop view - else hidden */}
        <div className="hidden lg:flex max-w-screen-xl w-full mx-auto px-12 justify-between bg-201E23 py-12 ">
          <div className="   text-[#8c8bb0] mt-10 ">
            <h1 className="text-7xl font-black bg-gradient-to-r from-[#8c8bb0] to-[#f0f2f1] bg-clip-text text-transparent   ">
              Hi, It&apos;s <span className="text-white">me</span> Marcus
            </h1>
            <h2 className="flex items-center text-3xl font-bold text-[#f0f2f1] mt-5 ">
              <div className="w-10 mr-5 h-[2px] bg-white" />
              Taking photos
              <div className="w-10 ml-5 h-[2px] bg-white" />
            </h2>

            <div className="h-45 w-[2.5px] bg-amber-50 flex flex-col space-y-2  text-[#f0f2f1] ">
              <p className="p-[10.5px] rotate-90 mt-3 "> Scroll</p>
              <p className="p-[10.5px] rotate-90 "> down </p>
              <div className="ml-25">
                <Button />
              </div>
            </div>
          </div>

          <div className="flex items-end relative">
            <Social />
            <Image
              src={testImg2}
              alt="Marcus Taking Photos"
              width={700}
              height={400}
              className="w-70%  min-w-[300px] h-auto object-cover  rounded-t-[90px]"
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="bg-blue-400 w-full">
        <About />
      </section>
    </main>
  );
}
