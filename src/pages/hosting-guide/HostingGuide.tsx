import Footer from "../../components/common/Footer.tsx";
import { Navbar } from "../../components/navigation/Navbar.tsx";

// import FirstArticle from "../../features/hosting-guide/components/FirstArticle.tsx";
import SecondArticle from "../../features/hosting-guide/components/SecondArticle.tsx";
import ThirdArticle from "../../features/hosting-guide/components/ThirdArticle.tsx";
import FourthArticle from "../../features/hosting-guide/components/FourthArticle.tsx";
import FirstCarousel from "../../features/hosting-guide/components/FirstCarousel.tsx";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* <FirstArticle /> */}
        <FirstCarousel />
        <SecondArticle />
        <ThirdArticle />
        <FourthArticle />
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
