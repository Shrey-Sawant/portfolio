import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import CardAnimation from "./components/CardAnimation.jsx";
import Work from "./components/Work.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import CardAnimation2 from "./components/CardAnimation2.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-w-screen bg-[#e7e7e7]">
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
            <>
              {" "}
              <Navbar />
              <ProjectPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
