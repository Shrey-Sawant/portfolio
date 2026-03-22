import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import CardAnimation from "./components/CardAnimation.jsx";
import Work from "./components/Work.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage.jsx";
import Footer from "./components/Footer.jsx";

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
