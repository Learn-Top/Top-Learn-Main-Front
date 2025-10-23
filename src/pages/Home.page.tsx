import { Categories } from "@/components/Categories.component";
import { Features } from "@/components/Features.component";
import { Header } from "@/components/Header.component";
import { HomeTopPattern } from "@/components/HomeTopPattern.component";
import { Introduction } from "@/components/Introduction.component";
import { WhyTopLearn } from "@/components/WhyTopLearn.component";

export const Home = () => {
  return (
    <div className="min-h-dvh pt-10 md:pt-25">
      <HomeTopPattern />
      <Header />
      <Introduction />
      <Features />
      <Categories />
      <WhyTopLearn />
    </div>
  );
};
