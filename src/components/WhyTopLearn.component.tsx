import { points } from "@/mocks/top-learn-points.mock";
import { Section } from "./shared/Section.component";

import WhyTopLearnImage from "@/assets/imgs/why-top-learn.png";

export const WhyTopLearn = () => {
  return (
    <Section title="چرا تاپ‌لرن؟">
      <div className="grid grid-cols-2">
        <ul className="list-disc space-y-4 px-20 xl:px-32">
          {points.map((el) => (
            <li>
              <h3 className="font-Bakh text-lg font-bold">{el.title}</h3>
              <p>{el.desc}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center">
          <img
            src={WhyTopLearnImage}
            className="h-64"
            alt="why-top-learn-img"
          />
        </div>
      </div>
    </Section>
  );
};
