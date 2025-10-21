import type React from "react";
import { Link } from "react-router";

export interface IHeaderMenu {
  title: string;
  link: string;
}

export const HeaderLink: React.FC<IHeaderMenu> = ({ link, title }) => {
  return (
    <Link className="text-top-learn-primary font-Peyda font-bold" to={link}>
      {title}
    </Link>
  );
};
