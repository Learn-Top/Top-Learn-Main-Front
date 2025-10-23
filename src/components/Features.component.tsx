import { topLearnFeatures } from "@/mocks/top-learn-features.mock";
import { Feature } from "./Feature.component";
import { H2 } from "./shared/h2.component";

export const Features = () => {
  return (
    <div className="container py-20">
      <div>
        <H2 title="امکانات تاپ لرن" />

        <div className="mt-8 space-y-10 md:space-y-40">
          {topLearnFeatures.map((el, index) => (
            <Feature key={`feature-${index}`} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
