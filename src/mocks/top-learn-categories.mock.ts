import type { ICategory } from "@/types/category";

import programming from "../assets/imgs/categories/programming.webp";
import graphicDesign from "../assets/imgs/categories/graphic-design.webp";
import businessManagement from "../assets/imgs/categories/business-management.png";
import learningLanguage from "../assets/imgs/categories/learning-language.webp";
import finance from "../assets/imgs/categories/finance.jpg";

export const categories: ICategory[] = [
  {
    id: "1",
    title: "برنامه‌نویسی و توسعه",
    description:
      "یادگیری زبان‌های برنامه‌نویسی، فریم‌ورک‌ها و توسعه نرم‌افزارهای مدرن.",
    image: programming,
  },
  {
    id: "2",
    title: "طراحی و گرافیک",
    description:
      "از طراحی رابط کاربری تا فتوشاپ و ایلاستریتور، خلاقیت خود را شکوفا کنید.",
    image: graphicDesign,
  },
  {
    id: "3",
    title: "کسب‌وکار و مدیریت",
    description: "مدیریت، بازاریابی، فروش و کارآفرینی برای رشد حرفه‌ای و شخصی.",
    image: businessManagement,
  },
  {
    id: "4",
    title: "زبان‌های خارجی",
    description:
      "یادگیری زبان‌های انگلیسی، آلمانی، فرانسه و دیگر زبان‌های جهانی.",
    image: learningLanguage,
  },
  {
    id: "5",
    title: "مالی و سرمایه‌گذاری",
    description: "مدیریت مالی، بورس، رمزارزها و اصول سرمایه‌گذاری هوشمندانه.",
    image: finance,
  },
];
