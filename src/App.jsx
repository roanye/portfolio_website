import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Arith } from "./pages/projects/Arith";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";


function App() {

  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <NavBar /> {/* Always visible */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects/arith" element={<Arith />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
