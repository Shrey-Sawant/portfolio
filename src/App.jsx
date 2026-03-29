import { useEffect } from "react";
import About from "./components/Content/About.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Main from "./components/Content/Main.jsx";
import CardAnimation from "./components/Cards/CardAnimation.jsx";
import Work from "./components/Work/Work.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProjectPage from "./components/Projects/ProjectPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Experience from "./components/Content/Experience.jsx";
import CardAnimation2 from "./components/Cards/CardAnimation2.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen overflow-x-hidden bg-[#e7e7e7]">
              <Navbar />
              <Main />
              <CardAnimation />
              <About />
              <CardAnimation2 />
              <Experience />
              <Work />
              <Footer />
            </div>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <div className="min-h-screen overflow-x-hidden bg-[#e7e7e7]">
              <Navbar />
              <ProjectPage />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
