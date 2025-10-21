import React from "react";
import { GoToApp } from "./GoToApp.component";
import { HeaderLink, type IHeaderMenu } from "./HeaderLink.component";

const HeaderMenus: IHeaderMenu[] = [
  {
    title: "خانه",
    link: "/",
  },
  {
    title: "وبلاگ",
    link: "/blog",
  },
  {
    title: "درباره ما",
    link: "/about-us",
  },
];

export const Header = () => {
  const [isWindowScrolled, setIsWindowScrolled] = React.useState(false);

  const checkIfWindowScrolled = React.useCallback(() => {
    if (window.scrollY > 0) setIsWindowScrolled(true);
    else setIsWindowScrolled(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", checkIfWindowScrolled);

    return () => window.removeEventListener("scroll", checkIfWindowScrolled);
  }, [checkIfWindowScrolled]);

  return (
    <header
      className={`${isWindowScrolled ? "bg-top-learn-light" : ""} fixed top-0 right-0 left-0 z-20 container flex h-18 items-center justify-between transition-all duration-75 md:h-25`}
    >
      <div className="flex items-center gap-10">
        <h1 className="font-Bakh text-top-learn-secondary text-3xl font-extrabold">
          تاپ لرن
        </h1>

        <div className="hidden items-center gap-4 sm:flex">
          {HeaderMenus.map((el, index) => (
            <HeaderLink key={`header-menu-${index}`} {...el} />
          ))}
        </div>
      </div>

      <GoToApp />
    </header>
  );
};
