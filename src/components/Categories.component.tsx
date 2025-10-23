import { categories } from "@/mocks/top-learn-categories.mock";
import { Section } from "./shared/Section.component";
import { Category } from "./Category.component";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const Categories = () => {
  return (
    <Section title="چی می‌خوای یاد بگیری؟">
      <Carousel
        opts={{
          direction: "rtl",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map((el, index) => (
            <CarouselItem
              className="basis-1/2 py-5 sm:basis-1/3 md:basis-1/4"
              key={`category-${index}`}
            >
              <Category {...el} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};
