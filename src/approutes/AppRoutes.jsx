import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../hooks/useScrollToTop";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notfound/NotFound";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Layout from "../compnents/Loyout/Layout";
import Detalproject from "../pages/projects/detailproject/Detalproject";
function AppRoutes() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Detalproject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default AppRoutes;
