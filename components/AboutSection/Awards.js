import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import style from "../../public/components/awards-about.module.scss";
import sjcb from "../../public/static/images/school/sjcb_logo.png";
import pup from "../../public/static/images/school/pup_logo.png";

const AwardsSection = () => {
  const controls = useAnimation();
  const [items, setItems] = useState([]);
  const achievements = [
    {
      details: "4th Year 1st Semester (2024-2025)",
      title: "President’s Lister",
      image: pup,
    },
    {
      details: "3RD Year 2nd Semester (2023-2024)",
      title: "Dean’s Lister",
      image: pup,
    },
    {
      details: "3RD Year 1st Semester (2023-2024)",
      title: "Dean’s Lister",
      image: pup,
    },
    {
      details: "2ND Year 2nd Semester (2022-2023)",
      title: "Dean’s Lister",
      image: pup,
    },
    {
      details: "2ND Year 1st Semester (2022-2023)",
      title: "President’s Lister",
      image: pup,
    },
    {
      details: "1ST Year 2nd Semester (2021-2022)",
      title: "President’s Lister",
      image: pup,
    },
    {
      details: "1ST Year 1st Semester (2021-2022)",
      title: "President’s Lister",
      image: pup,
    },
    {
      details: "Grade 12 2nd Semester (2020-2021)",
      title: "With High Honors",
      image: sjcb,
    },
    {
      details: "Grade 12 1st Semester (2020-2021)",
      title: "With Honors",
      image: sjcb,
    },
    {
      details: "Grade 11 2nd Semester (2019-2020)",
      title: "With Honors",
      image: sjcb,
    },
    {
      details: "Grade 11 1st Semester (2019-2020)",
      title: "With Honors",
      image: sjcb,
    },
  ];

  useEffect(() => {
    setItems([...achievements, ...achievements]);
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 120,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className={style.awardCont}>
      <motion.h2
        className={style.awardHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        My Achievements
      </motion.h2>

      <div className={style.scrollerWrapper}>
        <motion.div
          className={style.scrollerInner}
          animate={controls}
          initial={{ x: 0 }}
        >
          {items.map((achievement, index) => (
            <div key={index} className={style.timelineItem}>
              <div className={style.timelineContent}>
                <div className={style.imageSection}>
                  <Image
                    src={achievement.image}
                    alt={`${achievement.title} image`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className={style.textSection}>
                  <h3>{achievement.title}</h3>
                  <h4>{achievement.details}</h4>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsSection;
