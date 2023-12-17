import { Link } from "react-router-dom";
import NotFound from '../../assets/NotFound.webp'

export default function ErrorComponent() {
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-md shadow-md max-w-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Sección No Existe
        </h1>
        <p className="text-gray-600">
          Lo sentimos, la página que estás buscando no existe. Por favor,
          verifica la URL o regresa a la página de inicio.
        </p>
        <img className="md:w-80 h-72" src={NotFound} alt="Not Found content" />
        <Link to="../">
          <button className="font-bold mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700 ">
            Regresar al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
