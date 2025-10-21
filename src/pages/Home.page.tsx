import { Features } from "@/components/Features.component";
import { Header } from "@/components/Header.component";
import { HomeTopPattern } from "@/components/HomeTopPattern.component";
import { Introduction } from "@/components/Introduction.component";

export const Home = () => {
  return (
    <div className="min-h-dvh">
      <HomeTopPattern />
      <Header />
      <Introduction />
      <Features />
    </div>
  );
};
