import Slider from "react-slick";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // 🔥 useLocation qo'shildi
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { navbarMenuData } from "../../Utils/navbarMenuData";
import Image1 from "../../assets/video_2.jpg";
import Image2 from "../../assets/tuit_slide_four.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const location = useLocation(); // 🔥 Hozirgi sahifa manzilini olish
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
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="container max-w-full px-4 mx-auto pt-4">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-[#1CAF07] text-[#FFFFF7] font-semibold text-[14px]">
        <ul className="hidden lg:flex relative justify-around w-full">
          {navbarMenuData.map((item, index) => (
            <li
              key={item.id}
              className={`py-2 pr-10 max-2xl:pr-5 tracking-[1.1px] relative ${
                index !== navbarMenuData.length - 1
                  ? "border-r-2 border-[#FFFFF7]"
                  : ""
              } group`}
            >
              <Link
                to={item.link}
                className="dropdown-toggle"
                onClick={() => toggleDropdown(item.id)}
              >
                {item.text}
              </Link>
              {item.selected && activeDropdown === item.id && (
                <ul className="absolute left-[-40px] mt-[2px] top-full w-[150px] bg-[#1CAF07] text-[#FFFFF7] shadow-md z-10">
                  {item.selected.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-2 px-4 border-b-2 border-[#FFFFF7] hover:bg-[#1A9E06] text-xs"
                    >
                      <Link to={subItem.link} className="block">
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden ml-auto p-2 float-end font-bold text-[30px] text-[#FFF] rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="w-[300px] absolute right-[17px] z-50 flex flex-col bg-[#1CAF07] text-[#FFFFF7] font-semibold text-[14px] max-md:text-xs mt-2">
          {navbarMenuData.map((item) => (
            <li key={item.id} className="py-2 px-4 border-b-2 border-[#FFFFF7]">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(item.id)}
              >
                <span>{item.text}</span>
                {item.selected && (
                  <span className="ml-2">
                    {activeDropdown === item.id ? "-" : "+"}
                  </span>
                )}
              </div>
              {item.selected && activeDropdown === item.id && (
                <ul className="mt-2">
                  {item.selected.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-1 px-4 border-b border-[#FFFFF7] hover:bg-[#1A9E06]"
                    >
                      <Link to={subItem.link} className="block">
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* 🔥 Slider faqat "/" sahifasida ko'rinadi */}
      {location.pathname === "/" && (
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
      )}
    </div>
  );
};

export default NavbarMenu;
