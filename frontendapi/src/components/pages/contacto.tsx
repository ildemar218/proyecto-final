import { useState } from "react";
import {  PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Contactanos() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">Contáctanos</h2>
        
        <p className="text-center text-gray-300 mb-6">
          ¿Tienes alguna duda o sugerencia? ¡Escríbenos y te responderemos lo antes posible!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3">
            
            <p>correo@ejemplo.com</p>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-6 w-6 text-blue-400" />
            <p>+57 300 123 4567</p>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <MapPinIcon className="h-6 w-6 text-blue-400" />
            <p>Buenaventura, Colombia</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Tu Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={form.mensaje}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold py-3 rounded-lg"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactanos;
