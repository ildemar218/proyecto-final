import { Link } from "react-router-dom"; // Si estás usando rutas con react-router-dom
import banner from "../../assets/banner.jpg";

function Inicio() {
  return (
    <div className="text-white">
      {/* Sección de la imagen de fondo */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      {/* Sección de bienvenida */}
      <div className="bg-black text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 tracking-wide">Bienvenidos a Rorato Game</h1>
          <p className="text-xl mb-8">
            🎮 Sumérgete en el mundo del gaming, descubre juegos épicos, ediciones exclusivas y vive la mejor experiencia gamer con nosotros.
          </p>
          <Link
            to="/productos"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Ver Juegos
          </Link>
        </div>
      </div>

      {/* Sección de Características */}
      <div className="py-24 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">¿Por qué elegirnos?</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 px-6">
          <div className="bg-gray-800 text-white p-10 rounded-xl shadow-2xl max-w-sm text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">🎮 Catálogo Exclusivo</h3>
            <p>Explora una gran variedad de juegos para todas las plataformas, desde clásicos hasta los lanzamientos más esperados.</p>
          </div>
          <div className="bg-gray-800 text-white p-10 rounded-xl shadow-2xl max-w-sm text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">🔥 Ofertas Especiales</h3>
            <p>Aprovecha precios increíbles, descuentos exclusivos y promociones en juegos, accesorios y más.</p>
          </div>
          <div className="bg-gray-800 text-white p-10 rounded-xl shadow-2xl max-w-sm text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">💬 Atención Gamer</h3>
            <p>Te asesoramos en cada compra y brindamos el mejor soporte para garantizarte una experiencia de juego única.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
