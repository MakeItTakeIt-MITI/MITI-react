import Footer from "../../components/common/Footer";
import { Navbar } from "../../components/navigation/Navbar.tsx";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        <article className="w-full h-[800px] m-auto bg-[#262626]"></article>
        <article className="w-full h-[800px] m-auto   bg-[#404040]"></article>
        <article className="w-full h-[800px] m-auto bg-[#262626]"></article>
        <article className="w-full h-[800px] m-auto   bg-[#404040]"></article>
        {/* <article className="w-[1114px] h-[700px]  bg-[#262626]"></article> */}
        {/* <article className="w-[1114px] h-[700px]  bg-[#404040]"></article> */}
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
