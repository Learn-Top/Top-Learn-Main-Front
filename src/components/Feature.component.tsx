import type React from "react";

export interface IFeature {
  title: string;
  description: string;
  icon: string;
}

export const Feature: React.FC<IFeature> = ({ title, description, icon }) => {
  return (
    <div className="relative mx-auto flex flex-col items-center rounded-xl bg-yellow-100/50 px-8 py-4 xl:w-2/3">
      <div className="text-top-learn-dark col-span-3 md:w-3/4">
        <h3 className="font-Peyda text-xl font-bold md:text-2xl">{title}</h3>
        <p className="font-Bakh mt-4 md:max-w-100 md:pe-20 md:text-lg lg:max-w-200">
          {description}
        </p>
      </div>

      <div className="inset-y-0 left-0 col-span-1 my-auto size-60 md:absolute">
        <img src={icon} alt="feature-icon" />
      </div>
    </div>
  );
};
