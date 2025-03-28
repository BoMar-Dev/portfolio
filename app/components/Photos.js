import Image from "next/image";

import img1 from "../../public/assets/img/favorites/randi1.JPG";
import img2 from "../../public/assets/img/favorites/randi2.jpg";
import img3 from "../../public/assets/img/favorites/randi3.jpg";
import img4 from "../../public/assets/img/favorites/randi4.jpg";
import img5 from "../../public/assets/img/favorites/tove1.jpg";
import img6 from "../../public/assets/img/favorites/tove2.jpg";
import img7 from "../../public/assets/img/favorites/tove3.jpg";
import img8 from "../../public/assets/img/favorites/tove4.jpg";
import img9 from "../../public/assets/img/favorites/tove5.jpg";
import img10 from "../../public/assets/img/favorites/cham.jpg";
import img11 from "../../public/assets/img/favorites/cape.jpg";
import img12 from "../../public/assets/img/favorites/alve.jpg";
import img13 from "../../public/assets/img/favorites/nz.jpg";
import img14 from "../../public/assets/img/favorites/nz2.jpg";
import img15 from "../../public/assets/img/favorites/run1.jpg";
import img16 from "../../public/assets/img/favorites/run2.jpg";
import img17 from "../../public/assets/img/favorites/surf.jpg";
import img18 from "../../public/assets/img/favorites/surf1.jpg";
import img19 from "../../public/assets/img/favorites/surf2.jpg";
import img20 from "../../public/assets/img/favorites/surf3.jpg";
import img21 from "../../public/assets/img/favorites/vallsund.jpg";
import img22 from "../../public/assets/img/favorites/cykel.jpg";
import img23 from "../../public/assets/img/favorites/paak.jpg";
import img24 from "../../public/assets/img/favorites/japan1.jpg";
import img25 from "../../public/assets/img/favorites/japan2.jpg";
import img26 from "../../public/assets/img/favorites/japan3.jpg";
import img27 from "../../public/assets/img/favorites/japan4.jpg";
import img28 from "../../public/assets/img/favorites/nz4.jpg";

// Create an array of all images
const photos = [
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
  img13,
  img14,

  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  ,
];

const Photos = () => {
  return (
    <>
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="xl:rounded-md"
        />
      ))}
    </>
  );
};
export default Photos;
