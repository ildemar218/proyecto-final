function FooterApp() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la Compañía */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestra Compañía</h3>
            <p className="text-gray-400">Ofrecemos soluciones innovadoras para todos nuestros clientes con el más alto nivel de calidad.</p>
            <p className="mt-4 text-gray-400">Dirección: Avenida 2 Norte # 24 - N - 91, Cali-Colombia</p>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces útiles</h3>
            <ul>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Inicio</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Servicios</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Nosotros</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Contacto</a></li>
            </ul>
          </div>

          {/* Imagen del mapa estático */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
             
              <img
                src="/img/MapaPio.JPG" // Imagen de ejemplo de mapa
                alt="Ubicación de la compañía"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2025 Mi Compañía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

  )
}

export default FooterApp