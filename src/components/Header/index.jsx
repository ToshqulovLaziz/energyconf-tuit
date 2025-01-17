import { Link } from "react-router-dom";
import { headerTopNavbarData } from "../../Utils/headerTopNavbarData";
import Logo from "../../assets/ihci_logo_original.png";
import TatuLogo from "../../assets/TATU_logotip.png";
const Header = () => {
  return (
    <header>
      <div className="bg-[#F5F7F9]">
        <div className="container max-w-full px-4 mx-auto">
          <ul className="flex gap-2">
            {headerTopNavbarData.map((item, index) => (
              <li key={item.id} className="py-2 flex items-center relative">
                <Link
                  className={`text-[14px] text-[#696767] pr-2 ${
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
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <Link>
                <img src={Logo} alt="IHCI Logo" width={150} />
              </Link>
              <p className="text-[16px]">
                <span className="text-[#787474]">
                  The 14th International Conference on Intelligent Human
                  Computer Interaction (IHCI-2022)
                </span>{" "}
                <br /> October 20th-22nd, 2022.{" "}
                <span className="text-[#5331dc]">Hybrid Event: In-person and Virtual</span> <br />{" "}
                Tashkent, Uzbekistan
              </p>
            </div>
            <div>
              <img src={TatuLogo} alt="TatuLogo" width={100} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
