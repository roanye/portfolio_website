import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Arith } from "./pages/projects/Arith";
import { GTechPortfolio } from "./pages/projects/GTechPortfolio";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Hobbies } from "./pages/Hobbies";
import { Poetry } from "./pages/Poetry";
import { PoetryDetail } from "./pages/PoetryDetail";
import { Music } from "./pages/Music";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {

  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <ScrollToTop />
      <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects/arith" element={<Arith />} />
          <Route path="projects/gtech-portfolio" element={<GTechPortfolio />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="poetry" element={<Poetry />} />
          <Route path="poetry/:slug" element={<PoetryDetail />} />
          <Route path="music" element={<Music />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
