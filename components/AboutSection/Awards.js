import React, { useEffect } from "react";
import Image from "next/image";
import style from "../../public/components/awards-about.module.scss";

import sjcb from "../../public/static/images/school/sjcb_logo.png";
import pup from "../../public/static/images/school/pup_logo.png";

const AwardsSection = () => {
  const achievements = [
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
    function duplicateItems() {
      const scroller = document.querySelector(`.${style.scrollerInner}`);
      if (scroller && scroller.children.length <= achievements.length) {
        // Ensure duplication only happens once
        const scrollerContent = Array.from(scroller.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scroller.appendChild(duplicatedItem);
        });
      }
    }

    if (typeof window !== "undefined") {
      duplicateItems();
    }
  }, []);

  return (
    <div className={style.awardCont}>
      <h2 className={style.awardHeader}>ACHIEVEMENTS</h2>
      <div className={style.scrollerWrapper}>
        <div className={style.scrollerInner}>
          {achievements.map((achievement, index) => (
            <div key={index} className={style.timelineItem}>
              <div className={style.timelineContent}>
                <div className={style.imageSection}>
                  <Image
                    src={achievement.image}
                    alt={`${achievement.title} image`}
                    width={90}
                    height={90}
                  />
                </div>
                <div className={style.textSection}>
                  <h3>{achievement.title}</h3>
                  <h4>{achievement.details}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
