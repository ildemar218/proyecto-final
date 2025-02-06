import { useEffect,useState } from "react"
import {  getProductos,deleteProducto } from "../api/apiProducto"
import { PencilIcon,TrashIcon } from "@heroicons/react/24/solid"


function ProductosIndex() {
  const [productos, setProductos] = useState([])
  const [error,setError] = useState(null)
 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos()
        const data = await response.json()
        setProductos(data)
      } catch (err) {
        console.error("error en la peticion",)
      }
    }
    fetchProductos()
    
  },[]);

  const handleEdit = (id:number) => {
    console.log(`Editar actividad con ID: ${id}`);

     };

  const handleDelete = async (id:number) => {
    try {
      const response = await deleteProducto(id)
      const data = await response.json()
      console.log(data)
      setProductos(productos.filter((producto:any) => producto.id !== id))
    } catch (error) {
      console.error("Error en la petición")
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default ProductosIndex
