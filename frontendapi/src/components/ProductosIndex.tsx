import { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../api/apiProducto";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function ProductosIndex() {
  const [productos, setProductos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos();
        const data = await response.json();
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
      setProductos(productos.filter((producto) => producto._id !== id));
    } catch (error) {
      console.error("Error en la petición:", error);
      setError("Hubo un problema al eliminar el producto.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-emerald-400 mb-8">
          Nuestra Colección de Juegos
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          🎮 Descubre títulos épicos, ediciones exclusivas y las mejores ofertas del mercado.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div
              key={producto._id}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300"
            >
              {/* Imagen del producto */}
              <img
                src={producto.imagenes || "https://via.placeholder.com/200"}
                alt={producto.titulo}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              {/* Título y categoría */}
              <h3 className="text-2xl font-semibold text-white mb-2">{producto.title}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                {producto.categoria}
              </p>
              {/* Precio */}
              <p className="text-xl font-bold text-yellow-400 mb-4">${producto.precio}</p>

              {/* Botones de acción */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(producto._id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition duration-300"
                >
                  <PencilIcon className="h-5 w-5" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(producto._id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition duration-300"
                >
                  <TrashIcon className="h-5 w-5" />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductosIndex;
