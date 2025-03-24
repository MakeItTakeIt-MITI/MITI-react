import Footer from "../../components/common/Footer.tsx";
import { Navbar } from "../../components/navigation/Navbar.tsx";

// import FirstArticle from "../../features/hosting-guide/components/FirstArticle.tsx";
import SecondArticle from "../../features/hosting-guide/components/SecondArticle.tsx";
import ThirdArticle from "../../features/hosting-guide/components/ThirdArticle.tsx";
import FourthArticle from "../../features/hosting-guide/components/FourthArticle.tsx";
import FirstCarousel from "../../features/hosting-guide/components/FirstCarousel.tsx";
import SecondCarousel from "../../features/hosting-guide/components/SecondCarousel.tsx";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* <FirstArticle /> */}
        <FirstCarousel />
        <SecondCarousel />
        {/* <SecondArticle />퍄 */}
        <ThirdArticle />
        <FourthArticle />
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
