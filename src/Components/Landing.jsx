import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "keyframes",
        duration: 1,
        stiffness: 200000,
        damping: 10,
      }}
      className="w w-full h-screen bg-zinc-950  pt-[20vh]"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w w-full h-screen bg-zinc-950  pt-1"
      >
        <div className="textstructure mt-24 ml-20">
          {["we create ", " eye-opening ", " Presentations "].map((Item, i) => {
            return (
              <div key={i} className="MASKER">
                <div className=" w-fit flex overflow-hidden">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "15vw" }}
                      transition={{ ease: [0.76,0,0.24,2], duration: 2 }}
                      className=" w-[15vw] h-10 bg-red-500 relative top-1"
                    ></motion.div>
                  )}
                  <p className="  tracking-tight uppercase leading-14 text-5xl font-semibold">
                    {Item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className=" border-t-[1px] mt-20 ml-5 flex justify-between
      items-center py-3 px-5   "
        >
          {[
            " For Public and Private Companies ",
            " From the first pitch to the last pitch ",
          ].map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
          <div className="start flex items-center ">
            <div className=" p-2 border-2 rounded-full gap-5 bg-zinc-500 font-light text-s capitalize  ">
              Start the project
            </div>
            <div className=" w-8  h-8 flex items-center justify-center border-2 rounded-full ">
              <span className=" rotate-0">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
