import { useEffect, useState } from 'react';
import { getCategorias, deleteCategoria, getCategoria, updateCategoria } from '../api/apiCategoria';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function CategoriaIndex() {
  const [categorias, setCategorias] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editCategoria, setEditCategoria] = useState<any>(null);
  const [editFormOpen, setEditFormOpen] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const res = await getCategorias();
        const data = await res.json();
        setCategorias(data);
      } catch (err) {
        console.error("Error en la petición:", err);
        setError("Hubo un problema al cargar las categorias.");
      }
    };
    fetchCategorias();
  }, []);

  const handleEdit = async (id: string) => {
    try {
      const res = await getCategoria(id);
      const data = await res.json();
      setEditCategoria(data);
      setEditFormOpen(true);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Hubo un problema al cargar la categoria.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCategoria(id);
      setCategorias(categorias.filter((categoria: any) => categoria._id !== id));
    } catch (error) {
      console.error("Error en la petición:", error);
      setError("Hubo un problema al eliminar la categoria.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditCategoria({ ...editCategoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateCategoria(editCategoria._id, editCategoria);
      setCategorias(categorias.map((categoria: any) => (categoria._id === editCategoria._id ? editCategoria : categoria)));
      setEditFormOpen(false);
      setEditCategoria(null);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Hubo un problema al actualizar la categoria.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-emerald-400 mb-8">
          Lista de Categorías
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          📚 Explora nuestras categorías y encuentra lo que buscas.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categorias.map((categoria) => (
            <div
              key={categoria._id}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300"
            >
              {/* Título y descripción */}
              <h3 className="text-2xl font-semibold text-white mb-2">{categoria.nombre}</h3>
              <p className="text-gray-400 text-sm mb-4">{categoria.descripcion}</p>

              {/* Botones de acción */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(categoria._id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition duration-300"
                >
                  <PencilIcon className="h-5 w-5" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(categoria._id)}
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
            <h1 className="text-center font-bold text-2xl ">Editar Categoría</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                value={editCategoria.nombre}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Nombre de la Categoría"
                onChange={handleChange}
              />
              <textarea
                name="descripcion"
                value={editCategoria.descripcion}
                rows={3}
                className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Descripción de la Categoría"
                onChange={handleChange}
              />
              <button type="submit" className="mt-4 bg-indigo-500 text-white px-3 py-2 rounded w-full text-sm">
                Actualizar Categoría
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

export default CategoriaIndex;