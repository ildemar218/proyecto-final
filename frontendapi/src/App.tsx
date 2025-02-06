import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductosIndex from "./components/ProductosIndex";
import HeaderApp from "./components/Layout/HeaderAPP";
import NavbarApp from "./components/Layout/NabarApp";
import FooterApp from "./components/Layout/FooterApp";
import CategoriaIndex from "./components/CategoriaIndex";
import UsuarioForm from './components/UsuarioForm';


function App() {
  return (
    <Router>
      <HeaderApp />
      <NavbarApp />
      <div className='bg-zinc-800 h-screen top-10 text-white flex items-center justify-center'>
        <div className='bg-gray-950 p-4 w-2/5 rounded-lg'>
          <Routes>
            <Route path="/" element={<h1 className='text-center font-bold text-6xl my-2'>Inicio</h1>} />
            <Route path="/productos" element={<ProductosIndex />} />
            <Route path="/categorias" element={<CategoriaIndex />} />
            <Route path="/contacto" element={<UsuarioForm/>} />
          </Routes>
        </div>
      </div>
      <FooterApp />
    </Router>
  );
}

export default App;
