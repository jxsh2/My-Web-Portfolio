import { Container, Header, Divider, Grid, Segment } from "semantic-ui-react";
import style from "../../public/components/hobby-about.module.scss";
import Image from "next/image";
//images
import coding from "../../public/static/images/hobby/coding.png";
import design from "../../public/static/images/hobby/design.png";
import fitness from "../../public/static/images/hobby/fitness.png";
import food from "../../public/static/images/hobby/food.png";
import gaming from "../../public/static/images/hobby/gaming.png";
import music from "../../public/static/images/hobby/music.png";
import movie from "../../public/static/images/hobby/movie.png";
import nature from "../../public/static/images/hobby/nature.png";
import photography from "../../public/static/images/hobby/photography.png";
import tech from "../../public/static/images/hobby/tech.png";
import volleyball from "../../public/static/images/hobby/volleyball.png";
import travel from "../../public/static/images/hobby/travel.png";

const HobbiesSection = () => {
  const interests = [
    { title: "Coding", image: coding },
    { title: "Design", image: design },
    { title: "Fitness", image: fitness },
    { title: "Food", image: food },
    { title: "Gaming", image: gaming },
    { title: "Movies", image: movie },
    { title: "Music", image: music },
    { title: "Nature", image: nature },
    { title: "Photography", image: photography },
    { title: "Sports", image: volleyball },
    { title: "Technology", image: tech },
    { title: "Travel", image: travel },
  ];

  return (
    <section className={style.hobbieCont}>
      <div className="wrapper">
        <div className={style.titleCont}>
          <h2>Interests</h2>
          <Divider className={style.divider} />
        </div>
        <Grid doubling columns={4} className={style.gridCont}>
          {interests.map((interest, index) => (
            <Grid.Column key={index} className={style.gridCol}>
              <div className={style.interestCont}>
                <Image
                  src={interest.image}
                  alt={interest.title}
                  width={30}
                  height={30}
                />
                <h6>{interest.title}</h6>
              </div>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default HobbiesSection;
