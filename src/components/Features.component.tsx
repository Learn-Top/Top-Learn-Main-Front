import { topLearnFeatures } from "@/mocks/top-learn-features.mock";
import { Feature } from "./Feature.component";
import { Section } from "./shared/Section.component";

export const Features = () => {
  return (
    <Section title="امکانات تاپ لرن">
      <div className="mt-8 space-y-10 md:space-y-40">
        {topLearnFeatures.map((el, index) => (
          <Feature key={`feature-${index}`} {...el} />
        ))}
      </div>
    </Section>
  );
};
