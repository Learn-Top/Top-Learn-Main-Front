import type React from "react";

interface IH2 {
  title: string;
}

export const H2: React.FC<IH2> = ({ title }) => {
  return (
    <h2 className="font-Peyda text-3xl font-extrabold lg:text-4xl">{title}</h2>
  );
};
