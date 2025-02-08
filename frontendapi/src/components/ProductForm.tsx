import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createProducto } from "../api/apiProducto";
import { getCategorias } from "../api/apiCategoria"; // Importa la función para obtener categorías

function ProductForm() {
    const [Product, setProduct] = useState({
        id: "",
        titulo: '',
        descripcion: '',
        categoria: '',
        plataforma: '',
        precio: 0,
        disponible: false,
        estado: '',
        comprador: '',
        imagenes: '',
        fechaLanzamiento: ''
    });

    const [categorias, setCategorias] = useState<any[]>([]); // Estado para las categorías
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // Estado para el mensaje de éxito

    useEffect(() => {
        const fetchCategorias = async () => {
            const res = await getCategorias();
            const data = await res.json();
            setCategorias(data);
        };
        fetchCategorias();
    }, []);

    const Change = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setProduct({ ...Product, [e.target.name]: e.target.value });
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(Product);
        const res = await createProducto(Product);
        const data = await res.json();
        console.log(data);
        setSuccessMessage("Producto guardado exitosamente!");
        setTimeout(() => setSuccessMessage(null), 3000); // Ocultar el mensaje después de 3 segundos
    }

    return (
        <div>
            <form onSubmit={submitForm} action="">
                <input type="text" name="titulo"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Título del Producto"
                    onChange={Change}
                />

                <textarea name="descripcion" rows={3} id=""
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Descripción del Producto" onChange={Change}>
                </textarea>

                <select name="categoria"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    onChange={Change}
                >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((categoria) => (
                        <option key={categoria._id} value={categoria._id}>
                            {categoria.nombre}
                        </option>
                    ))}
                </select>

                <input type="text" name="plataforma"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Plataforma del Producto"
                    onChange={Change}
                />

                <input type="number" name="precio"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Precio del Producto"
                    onChange={Change}
                />

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input type="checkbox" name="disponible" className="h-5 w-5 text-indigo-600"
                        onChange={() => setProduct({ ...Product, disponible: !Product.disponible })}
                    />
                    <span>Disponible</span>
                </label>

                <input type="text" name="estado"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Estado del Producto"
                    onChange={Change}
                />

                <input type="text" name="comprador"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Comprador del Producto"
                    onChange={Change}
                />

                <input type="text" name="imagenes"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Imágenes del Producto"
                    onChange={Change}
                />

                <input type="date" name="fechaLanzamiento"
                    className="border-2 border-grey-700 p-2
                    rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Fecha de Lanzamiento"
                    onChange={Change}
                />

                <button className="bg-indigo-500 px-3 block py-2 w-full">Guardar</button>
            </form>
            {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        </div>
    )
}
export default ProductForm;
