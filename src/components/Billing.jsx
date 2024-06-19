import React from "react";

import styles, { layout } from "../styles";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className="size-full relative z-[5]"/>

        <div className="absolute white__gradient z-[3] size-[50%] rounded-full top-0 -left-1/2"/>
        {/* <div className="absolute pink__gradient z-[0] -left-1/2 bottom-0 size-[50%] rounded-full"/> */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 -left-1/2 pink__gradient" />
        <div className="absolute z-[1] size-[70%] rounded-full bottom-0 -left-1/2 white__gradient" />
        <div className="absolute z-[0] size-[20%] -left-1/2 bottom-20 pink__gradient scale-[50%]" />
      </div>

      <div className={`${layout.sectionInfo} ml-10`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="flex flex-row gap-5 sm:mt-10 mt-6">
        <img src={google} alt="google" className="w-[128px] h-[42px] cursor-pointer object-contain"/>
        <img src={apple} alt="apple" className="w-[128px] h-[42px] cursor-pointer object-contain"/>
      </div>
      </div>
    </section>
  );
};

export default Billing;
