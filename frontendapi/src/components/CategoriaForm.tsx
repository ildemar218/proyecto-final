import { ChangeEvent, FormEvent, useState } from "react";
import { createCategoria } from "../api/apiCategoria";

function CategoriaForm() {
  const [categoria, setCategoria] = useState({
    id: "",
    nombre: "",
    descripcion: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(categoria);

    try {
      const res = await createCategoria(categoria);
      const data = await res.json();
      console.log(data);

      // Limpiar el formulario después del envío exitoso
      setCategoria({ id: "", nombre: "", descripcion: "" });
    } catch (error) {
      console.error("Error al crear la categoría", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={categoria.nombre} // Se enlaza el estado
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Nombre de la Categoría"
          onChange={handleChange}
        />

        <textarea
          name="descripcion"
          rows={3}
          value={categoria.descripcion} // Se enlaza el estado
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Descripción de la Categoría"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-emerald-900 text-white px-3 py-2 rounded w-full text-sm"
        >
          Crear Categoría
        </button>
      </form>
    </div>
  );
}

export default CategoriaForm;
