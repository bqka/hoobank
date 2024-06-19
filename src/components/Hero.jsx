import React from "react";

import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center bg-discount-gradient rounded-[10px] px-4 py-[6px] mb-2">
          <img src={discount} alt="discount" className="size-[32px]" />
          <p className={`ml-2 ${styles.paragraph} `}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white ss:text-[71px] ss:leading-[100px] text-[52px] leading-[75px] font-poppins font-semibold">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white ss:text-[71px] text-[52px] ss:leading-[100px] leading-[75px] font-poppins font-semibold">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="billing" className="size-full relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="absolute z-[1] size-[60%] white__gradient translate-x-[-65%] scale-[0.4]" />
    </section>
  );
};

export default Hero;
