import { navbarMenuData } from "../../Utils/navbarMenuData";

const NavbarMenu = () => {
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
    </div>
  );
};

export default NavbarMenu;
