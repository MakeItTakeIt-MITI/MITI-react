import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./features/common/components/ScrollToTop.tsx";
import Navbar from "./features/header/renewal/Navbar.tsx";

function App() {
  return (
    <
      // style={{
      //   backgroundColor: "#171717",
      // }}
    >
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
