

function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-emerald-400 mb-8">
          Equipo de Desarrollo de Rorato Game
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Conoce a los talentosos miembros detrás de nuestro proyecto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300">
            <img src="src/img/i.jpeg" alt="Ildemar" className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Ildemar molano castillo</h2>
            <p className="text-gray-400 text-sm mb-4">
              Desarrollador Frontend con 5 años de experiencia en React y TypeScript.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300">
            <img src="/src/img/D.jpeg" alt="Dario" className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Dario Restrepo Lndazury</h2>
            <p className="text-gray-400 text-sm mb-4">
              Desarrolladora Backend experta en Node.js y bases de datos SQL.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300">
            <img src="/path/to/carlos-garcia.jpg" alt=" " className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Malcom Jesid Riascos Figueroa</h2>
            <p className="text-gray-400 text-sm mb-4">
              Diseñador UX/UI con un enfoque en la creación de experiencias de usuario intuitivas.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center transition transform hover:scale-105 duration-300">
            <img src="/path/to/ana-martinez.jpg" alt=" " className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Jeffry Valencia bejarano</h2>
            <p className="text-gray-400 text-sm mb-4">
              Gerente de Proyecto con una sólida experiencia en la gestión de equipos ágiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;