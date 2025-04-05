/** COMPONENTS */
import MainLayout from "layout/main";
import HeaderSection from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/AboutSection/Info";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

// import HomeComponent from "components/Home";

const Home = (props) => {
  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
  };

  return (
    <MainLayout {...mainLayoutProps}>
      <HeaderSection {...props} />
      <HeroSection {...props} />
      <InfoSection {...props} />
      <ProjectSection {...props} />
      <ContactSection {...props} />
      <FooterSection {...props} />
    </MainLayout>
  );
};

export default Home;
