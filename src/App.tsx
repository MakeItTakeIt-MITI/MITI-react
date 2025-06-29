import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./features/common/components/ScrollToTop.tsx";
import { Navbar } from "./features/header/Navbar.tsx";

function App() {
  return (
    <main
    // style={{
    //   backgroundColor: "#171717",
    // }}
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
