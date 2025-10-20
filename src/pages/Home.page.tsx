import { Header } from "../components/Header.component";
import { HomeTopPattern } from "../components/HomeTopPattern.component";

export const Home = () => {
  return (
    <div className="min-h-dvh">
      <HomeTopPattern />

      <Header />
    </div>
  );
};
