import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Videogame from "./components/Video-Juego/Videogame"
import Gestalt from "./components/Video-Juego/Gestalt";
import Usability from "./components/Video-Juego/Usability";
import Design from "./components/Video-Juego/Design";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="proyecto" element={<Features />} />
        <Route path="video-juego" element={<Videogame />} />
        <Route path="video-juego/gestalt" element={<Gestalt />} />
        <Route path="video-juego/usabilidad" element={<Usability />} />
        <Route path="video-juego/diseno" element={<Design />} />
        <Route path="nosotros" element={<Card />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
