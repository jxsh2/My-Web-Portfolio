/** COMPONENTS */
import MainLayout from "layout/main";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/AboutSection/Info";
import AwardsSection from "../components/AboutSection/Awards";
import HobbiesSection from "../components/AboutSection/Hobbies";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

// import HomeComponent from "components/Home";

const Home = (props) => {
  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
  };

  return (
    <MainLayout {...mainLayoutProps}>
      {/* <HomeComponent {...props} /> */}
      <HeroSection {...props} />
      <InfoSection {...props} />
      <AwardsSection {...props} />
      <HobbiesSection {...props} />
      <SkillSection {...props} />
      <ProjectSection {...props} />
      <ContactSection {...props} />
    </MainLayout>
  );
};

export default Home;
