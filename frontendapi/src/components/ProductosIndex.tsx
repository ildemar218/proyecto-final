import { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../api/apiProducto";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function ProductosIndex() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos();
        const data =  await response.json();
        setProductos(data);
      } catch (err) {
        console.error("Error en la petición:", err);
        setError("Hubo un problema al cargar los productos.");
      }
    };
    fetchProductos();
  }, []);

  const handleEdit = (id: string) => {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí puedes redirigir a la página de edición
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProducto(id);
      setProductos(productos.filter((producto: any) => producto._id !== id));
    } catch (error) {
      console.error("Error en la petición:", error);
      setError("Hubo un problema al eliminar el producto.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>

      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Título</th>
            <th className="border border-gray-300 p-2">Precio</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto: any) => (
            <tr key={producto._id} className="text-center">
              <td className="border border-gray-300 p-2">{producto.titulo}</td>
              <td className="border border-gray-300 p-2">${producto.precio}</td>
              <td className="border border-gray-300 p-2 flex justify-center gap-4">
                <button onClick={() => handleEdit(producto._id)} className="text-blue-500">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button onClick={() => handleDelete(producto._id)} className="text-red-500">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosIndex;

