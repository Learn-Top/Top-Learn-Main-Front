import { HiLogin } from "react-icons/hi";
import { Link } from "react-router";

export const GoToApp = () => {
  return (
    <Link
      to={"/"}
      className="font-Bakh bg-primary/70 flex items-center gap-2 rounded-3xl px-5 py-4 text-xs sm:text-sm"
    >
      <HiLogin size={20} />
      ورود به اپلیکیشن
    </Link>
  );
};
