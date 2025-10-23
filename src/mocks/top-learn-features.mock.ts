import type { IFeature } from "@/components/Feature.component";

import FeatureImage1 from "../assets/imgs/features-1.png";
import FeatureImage2 from "../assets/imgs/features-2.png";
import FeatureImage3 from "../assets/imgs/features-3.png";

export const topLearnFeatures: IFeature[] = [
  {
    title: "پروفایل اختصاصی برای اساتید",
    description:
      "اساتید می‌توانند پروفایل شخصی خود را بسازند، دوره‌های آموزشی بارگذاری کنند و توانایی‌هایشان را به زبان‌آموزان معرفی کنند. این امکان باعث می‌شود هر استاد برند شخصی خود را داشته باشد.",
    icon: FeatureImage1,
  },
  {
    title: "بازخورد و نظر دانش‌آموزان",
    description:
      "دانش‌آموزان می‌توانند به دوره‌ها امتیاز دهند و نظرشان را درباره کیفیت تدریس اساتید ثبت کنند. این بازخوردها باعث شفافیت بیشتر و ارتقای کیفیت آموزش‌ها می‌شود.",
    icon: FeatureImage2,
  },
  {
    title: "یادگیری متناسب با نیاز شما",
    description:
      "برنامه‌های آموزشی تاپ‌لرن طوری طراحی شده‌اند که دانشجویان بتوانند مطابق سطح و زمان آزاد خودشان مسیر یادگیری را انتخاب کنند و بدون محدودیت، به اهداف آموزشی‌شان برسند.",
    icon: FeatureImage3,
  },
];
