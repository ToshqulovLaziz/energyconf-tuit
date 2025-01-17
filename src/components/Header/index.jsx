import { Link } from "react-router-dom";
import { headerTopNavbarData } from "../../Utils/headerTopNavbarData";
import Logo from "../../assets/ihci_logo_original.png";
import Scopus from "../../assets/Scopus.webp";
import TatuLogo from "../../assets/TATU_logotip.png";
const Header = () => {
  return (
    <header>
      <div className="bg-[#F5F7F9] max-md:hidden">
        <div className="container max-w-full px-4 mx-auto">
          <ul className="flex gap-2">
            {headerTopNavbarData.map((item, index) => (
              <li key={item.id} className="py-2 flex items-center relative">
                <Link
                  className={`text-[14px] max-[850px]:text-xs text-[#696767] pr-2 ${
                    index !== headerTopNavbarData.length - 1
                      ? 'after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:h-[10px] after:border-r-2 after:border-[#696767]'
                      : ""
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="container max-w-full px-4 mx-auto">
          <div className="flex justify-between items-center py-2 max-[850px]:flex-col max-[850px]:pt-5">
            <div className="flex items-center gap-3 max-sm:flex-col">
              <Link>
                <img src={Logo} alt="IHCI Logo" className="w-[100px] max-lg:w-[80px] max-sm:w-[100px]" />
              </Link>
              <p className="text-[16px] max-lg:text-xs max-[850px]:text-[14px] max-sm:w-[70%] max-sm:text-center">
                <span className="text-[#787474]">
                  The 14th International Conference on Intelligent Human
                  Computer Interaction (IHCI-2022)
                </span>{" "}
                <br /> October 20th-22nd, 2022.{" "}
                <span className="text-[#5331dc]">
                  Hybrid Event: In-person and Virtual
                </span>{" "}
                <br /> Tashkent, Uzbekistan
              </p>
            </div>
            <div className="flex gap-2 items-center max-[850px]:pt-2 max-[850px]:gap-10">
              <img src={TatuLogo} alt="TatuLogo" className="w-[100px] max-lg:w-[80px]"/>
              <img src={Scopus} alt="Scopus" className="w-[200px]"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
