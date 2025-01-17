import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Organied = () => {
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
    <div className="container max-w-full px-4 mx-auto">
      <div className="mt-[40px]">
        <h2 className="text-xl font-bold text-[#222222]">Organized by</h2>
        <hr className="border-t-4 border-[#5b5757] my-4" />
      </div>
      <div>
        <Slider {...settings}>
          <Link>
            <img
              src={""}
              alt="Image 1"
              style={{ width: "100%", height: "500px" }}
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Organied;
