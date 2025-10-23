import type { ICategory } from "@/types/category";
import type React from "react";
import { Link } from "react-router";

export const Category: React.FC<ICategory> = ({ id, title, image }) => {
  return (
    <Link
      to={`category/${id}`}
      className="flex flex-col items-center gap-3 p-4 transition-all hover:shadow-xl"
    >
      <img
        src={image}
        loading="lazy"
        alt="category-image"
        className="size-30 overflow-hidden rounded-full"
      />

      <h3 className="text-center">{title}</h3>
    </Link>
  );
};
