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
      await updateCategoria(editCategoria);
      setCategorias(categorias.map((categoria: any) => (categoria._id === editCategoria._id ? editCategoria : categoria)));
      setEditFormOpen(false);
      setEditCategoria(null);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Hubo un problema al actualizar la categoria.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Categorias</h2>

      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Descripción</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria: any) => (
            <tr key={categoria._id} className="text-center">
              <td className="border border-gray-300 p-2">{categoria.nombre}</td>
              <td className="border border-gray-300 p-2">{categoria.descripcion}</td>
              <td className="border border-gray-300 p-2 flex justify-center gap-4">
                <button onClick={() => handleEdit(categoria._id)} className="text-blue-500">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button onClick={() => handleDelete(categoria._id)} className="text-red-500">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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