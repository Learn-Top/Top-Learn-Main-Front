import { Link } from "react-router";
import StudentImage from "../assets/imgs/introduction-student.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { H2 } from "./shared/H2.component";

export const Introduction = () => {
  return (
    <div className="container">
      <div className="flex grid-cols-2 flex-col-reverse items-center md:grid">
        <div className="text-top-learn-dark col-span-2 mt-10 md:col-span-1 md:mt-0">
          <H2 title="با تاپ لرن یادگیری آسونه ;)" />

          <p className="mt-4 mb-8 text-lg lg:text-xl">
            با دوره‌های آنلاین متنوع و اساتید حرفه‌ای، می‌توانید در هر زمان و
            مکان، مهارت‌های جدید بیاموزید و از مسیر یادگیری لذت ببرید.
          </p>

          <Link
            className="bg-top-learn-dark font-Bakh text-top-learn-light inline-flex h-10 items-center gap-2 rounded-xl px-5 transition-all hover:gap-4"
            to="/"
          >
            بزن بریم <IoIosArrowRoundBack size={32} />
          </Link>
        </div>

        <div className="col-span-2 flex justify-center md:col-span-1 md:justify-end">
          <img
            loading="lazy"
            src={StudentImage}
            alt="introduction-student-image"
          />
        </div>
      </div>
    </div>
  );
};
