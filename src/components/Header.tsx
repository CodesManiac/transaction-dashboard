import React, { useEffect, useRef, useState } from "react";
import { Arrow, Close, Dropdown, Hamburger } from "../assets/icons";
import { sideBarData } from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (id: any) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavSwitch = () => {
    setNav(!nav);
  };
  const hamburgerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerRef]);
  return (
    <header className="px-6 bg-white text-gray shadow-lg  flex justify-between items-center rounded-lg  py-2 mb-4 sticky">
  
        <div className="bg-orange rounded-lg py-2 px-2 flex justify-between items-center">
          <p className="text-white font-bold text-sm leading-4 w-2/4">
            General Dashboard
          </p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div
          onClick={handleNavSwitch}
          className="block md:hidden cursor-pointer"
        >
          <img src={Hamburger} alt="hamburger" />
        </div>
        <ul
          ref={hamburgerRef}
          className={
            nav
              ? "fixed flex flex-col right-0 top-0 w-3/5 h-full overflow-auto p-4 space-y-2 bg-white rounded-l-2xl ease-in-out duration-500"
              : "ease-in-out duration-500 fixed hidden"
          }
        >
          <div
            className="flex justify-end cursor-pointer"
            onClick={handleNavSwitch}
          >
            {" "}
            <img src={Close} alt="close" />
          </div>
          <div>
            {sideBarData.map((main) => (
              <Link to={main.route} key={main?.id}>
                {main?.children ? (
                  <>
                    <div
                      onClick={() => toggleDropdown(main.id)}
                      className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                        main.route === selectedRoute
                          ? "border-l-4 border-l-orange"
                          : ""
                      } flex gap-8 cursor-pointer p-4 items-center ${
                        main.route === selectedRoute
                          ? "bg-hoverOrange text-grey"
                          : ""
                      }`}
                    >
                      <img src={main.icon} alt={main.title} />
                      <span className="text-gray text-[14px]">
                        {main.title}
                      </span>
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                    {openDropdown === main?.id && (
                      <div>
                        {main?.children?.map((children) => (
                          <div
                            key={children?.id}
                            onClick={() => setSelectedRoute(children.route)}
                            className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                              children.route === selectedRoute
                                ? "border-l-4 border-l-orange"
                                : ""
                            } flex gap-8 cursor-pointer p-4 items-center ${
                              children.route === selectedRoute
                                ? "bg-hoverOrange text-grey"
                                : ""
                            }`}
                          >
                            <div></div>
                            <a
                              href={children.route}
                              className="text-gray text-[14px]"
                            >
                              {children.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    onClick={() => setSelectedRoute(main.route)}
                    className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                      main.route === selectedRoute
                        ? "border-l-4 border-l-orange"
                        : ""
                    } flex gap-8 cursor-pointer p-4 items-center ${
                      main.route === selectedRoute
                        ? "bg-hoverOrange text-grey"
                        : ""
                    }`}
                  >
                    <img src={main.icon} alt={main.title} />
                    <a href={main.route} className="text-gray text-[14px]">
                      {main.title}
                    </a>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </ul>
      
    </header>
  );
};

export default Header;
