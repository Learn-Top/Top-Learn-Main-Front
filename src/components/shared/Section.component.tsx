import type React from "react";
import { H2 } from "./H2.component";

interface ISection {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISection> = ({ title, children }) => {
  return (
    <section className="container space-y-8 py-20">
      <H2 title={title} />

      {children}
    </section>
  );
};
