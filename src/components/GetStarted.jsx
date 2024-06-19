import React from "react";
import styles from "../styles";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`size-[140px] bg-blue-gradient p-[2px] rounded-full ${styles.flexCenter} cursor-pointer`}
    >
      <div
        className={`bg-primary size-full rounded-full flex flex-col ${styles.flexCenter}`}
      >
        <div className={`flex ${styles.flexStart}`}>
          <p className="font-poppins text-[18px] leading-[23px] text-gradient mr-2">
            <span>Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="size-[23px] object-contain"
          />
        </div>
        <p className="font-poppins text-[18px] leading-[23px] text-gradient">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
