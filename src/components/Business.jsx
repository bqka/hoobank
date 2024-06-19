import React from "react";

import styles, { layout } from "../styles";
import Button from "./Button";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] items-center ${index !== features.length - 1 ? "mb-6":"mb-0"} feature-card`}>
    <div className={`size-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="size-[50%] object-contain" />
    </div>
    <div className="flex flex-col ml-4 flex-1">
      <h4 className="font-poppins font-semibold text-white text-[18px]">{title}</h4>
      <p className={`${styles.paragraph} text-[16px] leading-[23px] mb-1`}>{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
