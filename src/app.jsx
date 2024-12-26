import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Videogame from "./components/Video-Juego/Videogame"
import Gestalt from "./components/Video-Juego/Gestalt";
import Usability from "./components/Video-Juego/Usability";
import Design from "./components/Video-Juego/Design";
import Proyecto from "./components/Proyecto";
import GestaltProyect from "./components/Proyecto/GestaltProyect";
import UsabilidadProyecto from "./components/Proyecto/UsabilidadProyecto";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="proyecto" element={<Proyecto />} />
        <Route path="proyecto/gestalt" element={<GestaltProyect />} />
        <Route path="proyecto/diseno" element={<UsabilidadProyecto />} />
        <Route path="video-juego" element={<Videogame />} />
        <Route path="video-juego/gestalt" element={<Gestalt />} />
        <Route path="video-juego/diseno" element={<Design />} />
        <Route path="nosotros" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
