import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { navbarMenuData } from "../../Utils/navbarMenuData";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/tuit_slide_four.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container max-w-full px-4 mx-auto pt-4">
      <div className="flex  justify-between items-center bg-[#1CAF07] text-[#FFFFF7] font-semibold text-[14px]">
        <ul className="hidden lg:flex relative justify-around w-full">
          {navbarMenuData.map((item, index) => (
            <li
              key={item.id}
              className={`py-2 pr-10 max-[1200px]:pr-5  ${
                index !== navbarMenuData.length - 1
                  ? "border-r-2 border-[#FFFFF7]"
                  : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto p-2 float-end font-bold text-[30px] text-[#FFF] rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobil menyu */}
      {isMenuOpen && (
        <ul className="w-[300px] absolute right-[17px] z-50 flex flex-col bg-[#1CAF07] text-[#FFFFF7] font-semibold text-[14px] max-md:text-xs mt-2">
          {navbarMenuData.map((item) => (
            <li key={item.id} className="py-2 px-4 border-b-2 border-[#FFFFF7]">
              {item.text}
            </li>
          ))}
        </ul>
      )}
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={Image1}
              alt="Image 1"
              className="w-full h-[500px] object-cover max-lg:h-[400px] max-md:h-[300px]"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-[500px] object-cover max-lg:h-[400px] max-md:h-[300px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NavbarMenu;
