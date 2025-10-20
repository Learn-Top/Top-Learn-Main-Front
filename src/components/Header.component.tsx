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
  return (
    <header className="container flex items-center justify-between py-6">
      <div className="flex items-center gap-10">
        <h1 className="font-Bakh text-secondary text-3xl font-extrabold">
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
