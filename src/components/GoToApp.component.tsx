import { HiLogin } from "react-icons/hi";
import { Link } from "react-router";

export const GoToApp = () => {
  return (
    <Link
      to={"/"}
      className="font-Bakh bg-top-learn-primary/70 flex h-10 items-center gap-2 rounded-3xl px-5 text-xs sm:h-13 sm:text-sm"
    >
      <HiLogin size={20} />
      ورود به اپلیکیشن
    </Link>
  );
};
