import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import SubService from "./pages/SubService";
import SingleProject from "./pages/SingleProject";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/*" element={<SubService />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/*" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="relative min-h-fit ">
      <Router>
        <ScrollToTop />
        <div className="min-h-fit flex flex-col items-center justify-start bg-white pt-6 ">
          <Navbar />
        </div>
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
