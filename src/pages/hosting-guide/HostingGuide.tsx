import Footer from "../../components/common/Footer.tsx";
import { Navbar } from "../../components/navigation/Navbar.tsx";

import FourthArticle from "../../features/hosting-guide/components/FourthArticle.tsx";
import FirstCarousel from "../../features/hosting-guide/components/FirstCarousel.tsx";
import SecondCarousel from "../../features/hosting-guide/components/SecondCarousel.tsx";
import ThirdCarousel from "../../features/hosting-guide/components/ThirdCarousel.tsx";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        <FirstCarousel />
        <SecondCarousel />
        <ThirdCarousel />
        <FourthArticle />
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
