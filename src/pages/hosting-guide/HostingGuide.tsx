import Footer from "../../components/common/Footer.tsx";
import { Navbar } from "../../components/navigation/Navbar.tsx";

// import FirstArticle from "../../features/hosting-guide/components/FirstArticle.tsx";
import FourthArticle from "../../features/hosting-guide/components/FourthArticle.tsx";
import FirstCarousel from "../../features/hosting-guide/components/FirstCarousel.tsx";
import SecondCarousel from "../../features/hosting-guide/components/SecondCarousel.tsx";
import ThirdCarousel from "../../features/hosting-guide/components/ThirdCarousel.tsx";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* <FirstArticle /> */}
        <FirstCarousel />
        <SecondCarousel />
        <ThirdCarousel />
        {/* <SecondArticle />퍄 */}
        {/* <ThirdArticle /> */}
        <FourthArticle />
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
