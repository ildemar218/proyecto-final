import { useEffect, useState } from "react";
import { getProductos, deleteProducto, getProducto, updateProducto } from "../api/apiProducto";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function ProductosIndex() {
  const [productos, setProductos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editProducto, setEditProducto] = useState<any>(null);
  const [editFormOpen, setEditFormOpen] = useState(false);

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

  const handleEdit = async (id: string) => {
    try {
      const res = await getProducto(id);
      const data = await res.json();
      setEditProducto(data);
      setEditFormOpen(true);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Hubo un problema al cargar el producto.");
    }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditProducto({ ...editProducto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProducto(editProducto._id, editProducto);
      setProductos(productos.map((producto) => (producto._id === editProducto._id ? editProducto : producto)));
      setEditFormOpen(false);
      setEditProducto(null);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Hubo un problema al actualizar el producto.");
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
              <h3 className="text-2xl font-semibold text-white mb-2">{producto.titulo}</h3>
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

      {editFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 overflow-auto z-50">
          <div className="bg-zinc-700 p-6 py-8 rounded shadow-lg w-full max-w-[350px] sm:max-w-[400px] h-auto mt-40 my-5">
            <h1 className="text-center font-bold text-2xl ">Editar Producto</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="titulo"
                value={editProducto.titulo}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Título del Producto"
                onChange={handleChange}
              />
              <textarea
                name="descripcion"
                value={editProducto.descripcion}
                rows={3}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Descripción del Producto"
                onChange={handleChange}
              />
              <input
                type="text"
                name="categoria"
                value={editProducto.categoria}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Categoría del Producto"
                onChange={handleChange}
              />
              <input
                type="text"
                name="plataforma"
                value={editProducto.plataforma}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Plataforma del Producto"
                onChange={handleChange}
              />
              <input
                type="number"
                name="precio"
                value={editProducto.precio}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Precio del Producto"
                onChange={handleChange}
              />
              <label htmlFor="" className="inline-flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name="disponible"
                  checked={editProducto.disponible}
                  className="h-5 w-5 text-indigo-600"
                  onChange={() => setEditProducto({ ...editProducto, disponible: !editProducto.disponible })}
                />
                <span>Disponible</span>
              </label>
              <input
                type="text"
                name="estado"
                value={editProducto.estado}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Estado del Producto"
                onChange={handleChange}
              />
              <input
                type="text"
                name="comprador"
                value={editProducto.comprador}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Comprador del Producto"
                onChange={handleChange}
              />
              <input
                type="file"
                name="imagenes"
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Imágenes del Producto"
                onChange={handleChange}
              />
              <input
                type="date"
                name="fechaLanzamiento"
                value={editProducto.fechaLanzamiento}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Fecha de Lanzamiento"
                onChange={handleChange}
              />
              <button type="submit" className="mt-4 bg-indigo-500 text-white px-3 py-2 rounded w-full text-sm">
                Actualizar Producto
              </button>
              <button
                type="button"
                onClick={() => setEditFormOpen(false)}
                className="mt-4 bg-red-500 text-white px-3 py-2 rounded w-full text-sm"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductosIndex;
