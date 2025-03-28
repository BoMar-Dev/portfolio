import Image from "next/image";

import img1 from "../../public/assets/img/tools/html.svg";
import img2 from "../../public/assets/img/tools/css.svg";
import img3 from "../../public/assets/img/tools/javascript.svg";
import img4 from "../../public/assets/img/tools/react.svg";
import img5 from "../../public/assets/img/tools/tw.svg";
import img6 from "../../public/assets/img/tools/figma.svg";
import img7 from "../../public/assets/img/tools/node.svg";
import img8 from "../../public/assets/img/tools/express.svg";
import img9 from "../../public/assets/img/tools/mongo.svg";
import img10 from "../../public/assets/img/tools/gh.svg";
import img11 from "../../public/assets/img/tools/lr.svg";
import img12 from "../../public/assets/img/tools/wf.svg";

const icons = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Tools = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon}
          alt={`Photo ${index + 1}`}
          className="w-10 lg:w-12 xl:w-16"
        />
      ))}
    </>
  );
};
export default Tools;
