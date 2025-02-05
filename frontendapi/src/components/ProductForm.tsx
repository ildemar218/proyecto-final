import { ChangeEvent, FormEvent, useState } from "react";

function ProductForm() {
    const [ Product, setProduct ] = useState({
        title:"",
        description:"",
        status: false,
    });

    const Change = (
        e:ChangeEvent<HTMLInputElement| HTMLTextAreaElement> 
    ) => {setProduct({... Product, [e.target.name]: e.target.value });     
    };

    const submitForm =(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(Product);
    }
  return (
    <div>
        <form onSubmit={submitForm} action="">
            <input type="text" name="title" 
               className="border-2 border-grey-700 p-2 
               rounded-lg bg-zinc-800 block w-full my-2" 
               placeholder="Title the Product"
               onChange={Change}
            />

            <textarea name="description" rows={3} id="" 
               className="border-2 border-grey-700 p-2 
               rounded-lg bg-zinc-800 block w-full my-2" 
               placeholder="Description the Product" onChange={Change}>
            </textarea>

            <label htmlFor="" className="inline-flex items-center gap-x-2">
                <input type="checkbox" name="status" className="h-5 w-5 text-indigo-600"
                  onChange={() => setProduct({ ... Product, status: !Product.status})}
                  />
                <span>Executed</span>
            </label>

            <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>

        </form>
    </div>
  )
}
export default ProductForm
