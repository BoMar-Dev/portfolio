import Image from "next/image";
// CODE SECTIONS

// COMPONENT
import Tools from "../components/Tools";

const Code = () => {
  return (
    <section className="bg-[#201E23] w-full min-h-screen p-8 flex text-[#8c8bb0]  ">
      <div className="flex flex-col items-center xl:max-w-[1200px] 2xl:max-w-[1200px] md:px-10 mx-auto bg-[#201E23] mb-10">
        <h1 className="text-6xl xl:text-7xl font-black  bg-gradient-to-r from-[#8c8bb0] to-[#f0f2f1] bg-clip-text text-transparent mb-10">
          {"< Code >"}
        </h1>
        <div className="flex-col xl:flex xl:flex-row justify-between  space-y-10  xl:space-x-12 xl:space-y-10 xl:mt-16 xl:text-xl  ">
          <div>
            <p>
              <span className="text-red-400 text-3xl font-extrabold">I’m </span>{" "}
              a frontend developer with a deep passion for digital innovation. I
              thrive on projects where I get to shape the layout from the ground
              up—and it’s even more rewarding when I have the opportunity to use
              photos I’ve personally taken for a client. I love collaborating
              directly with clients to exchange ideas and spark creativity
            </p>
          </div>
          <div>
            <p>
              I draw inspiration from skiing, surfing and outdoor aktivity in
              general. Even though I’m not a full-stack developer, I have a
              interest in backend, SEO, and understanding how all the digital
              elements work together seamlessly -{" "}
              <span className=" text-[#e2eae6ca]">
                USP : blend of technical passion and a genuine commitment to
                connect with people through clear, engaging communication.
              </span>
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-black text-red-400 mb-10 mt-20 m-auto">
          My favorite tools:
        </h2>
        <div className="grid grid-cols-4 place-items-center gap-7 m-auto">
          <Tools />
        </div>
      </div>
    </section>
  );
};
export default Code;
