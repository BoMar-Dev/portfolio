// ABOUT SECTION

const About = () => {
  return (
    <section className="bg-[#201E23] w-full min-h-screen p-8 flex text-[#8c8bb0]  ">
      <div className="flex flex-col items-center xl:max-w-[1200px] 2xl:max-w-[1200px] md:px-10 mx-auto bg-[#201E23] mb-10">
        <h1 className="text-6xl xl:text-7xl font-black  bg-gradient-to-r from-[#8c8bb0] to-[#f0f2f1] bg-clip-text text-transparent mb-10">
          About
        </h1>
        <div className="flex flex-col justify-between space-y-10 xl:flex-row xl:space-x-12 xl:space-y-0 xl:mt-16 xl:text-xl  ">
          <p>
            <span className="text-3xl font-extrabold text-red-400">Hi!</span> So
            im Marcus, and I live in Duved, just outside Åre. I’m passionate
            about nature—I love spending my time skiing, hiking, and exploring
            new places. Wherever I go, my camera is always by my side, capturing
            the unique moments and experiences that each adventure brings.
          </p>
          <p>
            My love for photography has sparked a creative journey, one that
            naturally evolved into a career as a frontend developer. This
            website is a personal project, built from scratch using Next.js and
            Tailwind, reflecting both my technical skills and my artistic
            passion.
          </p>
          <p>
            The logo in the top left corner is designed to resemble the letters
            “B” and “M”, representing Bosse and Marcus. As for the name
            “Bosse-Marcus”, that’s a story for another time—let’s just say it’s
            a nickname that stuck.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
