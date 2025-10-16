import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./features/common/components/ScrollToTop.tsx";
import Footer from "./features/common/components/Footer.tsx";
import Header from "./features/header/Header.tsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
