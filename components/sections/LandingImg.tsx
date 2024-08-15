"use client";

import { motion } from "framer-motion";

export default function LandingImg() {
  const landingScroll = [{ text: "CAT OF THE MONTH" }, { text: "AUGUST 2024" }];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateX: 20, rotateY: 20, rotateZ: 25 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
      }}
      className="bg-[url('/cats/goober1.jpg')] bg-cover bg-center bg-no-repeat rounded w-full h-full flex flex-col justify-end overflow-clip"
    >
      <div className=" bg-green-800/50 shadow-fg backdrop-blur flex gap-16 py-8 px-16">
        <div className="flex gap-16 animate-scroll">
          {Array.from({ length: 10 }).map((_, index) =>
            landingScroll.map((item, itemIndex) => (
              <p className="text-white text-body whitespace-nowrap">
                {item.text}
              </p>
            )),
          )}
        </div>
      </div>
    </motion.div>
  );
}
