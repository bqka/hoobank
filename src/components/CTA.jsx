import React from "react";

import styles from "../styles";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="flex flex-row h-[290px] w-full bg-black-gradient rounded-[20px] items-center justify-around px-10 mt-10">
      <div className="flex flex-col gap-4">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button styles="h-[64px] w-[170px]"/>
    </div>
  );
};

export default CTA;
