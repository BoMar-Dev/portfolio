"use client";
import Image from "next/image";

// LOGO
import Insta from "../../public/assets/img/instagram.svg";
import Linked from "../../public/assets/img/linkedin.svg";

const Social = () => {
  return (
    <div className="mr-5 flex flex-col space-y-4">
      <div className="">
        <Image src={Insta} alt="logo-instagram" width={30} height="auto" />
      </div>
      <div className="ml-1">
        <Image src={Linked} alt="logo-linkedin" width={30} height="auto" />
      </div>
    </div>
  );
};
export default Social;
