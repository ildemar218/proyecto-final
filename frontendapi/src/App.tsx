import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosIndex from "./components/ProductosIndex";
import HeaderApp from "./components/Layout/HeaderAPP";
import NavbarApp from "./components/Layout/NabarApp";
import FooterApp from "./components/Layout/FooterApp";
import CategoriaIndex from "./components/CategoriaIndex";
import UsuarioForm from './components/UsuarioForm';
import Contacto from './components/pages/contacto';
import Inicio from './components/pages/inicio';

function App() {
  return (
    <Router>
      <HeaderApp />
      <NavbarApp />

          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<ProductosIndex />} />
            <Route path="/categorias" element={<CategoriaIndex />} />
            <Route path="/usuarios" element={<UsuarioForm />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>

      
      
      <FooterApp />
    </Router>
  );
}

export default App;
