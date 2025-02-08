import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosIndex from "./components/ProductosIndex";
import HeaderApp from "./components/Layout/HeaderAPP";
import NavbarApp from "./components/Layout/NabarApp";
import FooterApp from "./components/Layout/FooterApp";
import CategoriaIndex from "./components/CategoriaIndex";
import Contacto from './components/pages/contacto';
import Inicio from './components/pages/inicio';
import QuienesSomos from './components/pages/QuienesSomos';
import UsuarioIndex from './components/UsuarioIndex';

function App() {
  return (
    <Router>
      <HeaderApp />
      <NavbarApp />

          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<ProductosIndex />} />
            <Route path="/categorias" element={<CategoriaIndex />} />
            <Route path="/usuarios" element={<UsuarioIndex />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/QuienesSomos" element={<QuienesSomos />} />
          </Routes>

      
      
      <FooterApp />
    </Router>
  );
}

export default App;
