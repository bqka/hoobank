import React from "react";
import styles, { layout } from "../styles";

import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section>
      <div className="flex sm:flex-col flex-row flex-1">
        <div
          className={`flex flex-1 sm:flex-row flex-col  sm:${styles.flexCenter} gap-10 sm:text-start text-center`}
        >
          <h2 className={`${styles.heading2} max-w-[470px]`}>
            What people are <br className="sm:block hidden" />
            saying about us
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] justify-center`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex sm:flex-row items-center flex-col flex-1 gap-10 mt-20">
        {feedback.map((feedback, index) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
