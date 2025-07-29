import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./features/common/components/ScrollToTop.tsx";
import Navbar from "./features/header/renewal/Navbar.tsx";
import Footer from "./features/common/components/Footer.tsx";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
