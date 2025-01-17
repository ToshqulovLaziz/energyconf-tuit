import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { navbarMenuData } from "../../Utils/navbarMenuData";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/tuit_slide_four.jpg";

const NavbarMenu = () => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className="container max-w-full px-4 mx-auto pt-4">
      <ul className="flex justify-around bg-[#1CAF07] text-[#FFFFF7] font-semibold text-[14px]">
        {navbarMenuData.map((item, index) => (
          <li
            key={item.id}
            className={`py-2 pr-10 ${
              index !== navbarMenuData.length - 1
                ? "border-r-2 border-[#FFFFF7]"
                : ""
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={Image1}
              alt="Image 1"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="Image 2"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NavbarMenu;
