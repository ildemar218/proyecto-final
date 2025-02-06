import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductosIndex from "./components/ProductosIndex"
import ProductForm from "./components/ProductForm"
import HeaderApp from "./components/Layout/HeaderAPP"
import NavbarApp from "./components/Layout/NabarApp"
import FooterApp from "./components/Layout/FooterApp"
import CategoriaForm from "./components/CategoriaForm";

function App() {

  return (
    <>
    <HeaderApp/>
    <NavbarApp/>

      <div className='bg-zinc-800 h-screen text-white 
                      flex  items-center justify-center'>
        <div className='bg-gray-950 p-4 w-2/5 rounded-lg'>
          <h1 className='text-center font-bold text-6xl my-2 '>  Productos</h1>
          
         <ProductForm/>
          <ProductosIndex/>
          
        </div>
        
      </div>
      <FooterApp/>
    </>
  )
}
export default App
