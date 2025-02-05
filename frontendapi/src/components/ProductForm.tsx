import { ChangeEvent, FormEvent, useState } from "react";
import { createProducto } from "../api/apiProducto"; 

function ProductForm() {
    const [ Product, setProduct ] = useState({
        id: 0,
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

    const Change = (
        e:ChangeEvent<HTMLInputElement| HTMLTextAreaElement> 
    ) => {setProduct({... Product, [e.target.name]: e.target.value });     
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(Product);
        const res = await(createProducto(Product));
        const data = await res.json();
        console.log(data);
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

            <input type="text" name="categoria" 
               className="border-2 border-grey-700 p-2 
               rounded-lg bg-zinc-800 block w-full my-2" 
               placeholder="Categoría del Producto"
               onChange={Change}
            />

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
                  onChange={() => setProduct({ ... Product, disponible: !Product.disponible})}
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

            <input type="file" name="imagenes" 
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
    </div>
  )
}
export default ProductForm
