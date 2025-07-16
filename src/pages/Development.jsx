import { useEffect, useState } from 'react';
import axios from 'axios';
import cutitLogo from '../assets/cutit-logo.png';
import userIcon from '../assets/user-icon.png';
import background from '../assets/background-development.png';
import { Link } from 'react-router-dom';

export default function Development() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/pedido')
      .then(res => setPedidos(res.data))
      .catch(err => console.error("Error al cargar pedidos:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-white"
         style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Header */}
      <header className="bg-[#B22222] w-full px-10 py-4 flex items-center justify-between relative">
        <Link to="/" className="flex-shrink-0">
          <img src={cutitLogo} alt="Cutit Logo" className="h-14 w-auto cursor-pointer" />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
          <Link to="/logistica">
            <button className="bg-[#FF6A00] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">
              LOGISTICA
            </button>
          </Link>
          <Link to="/ordenar">
            <button className="bg-[#FF6A00] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">
              ORDENAR PEDIDOS
            </button>
          </Link>
          <Link to="/development">
            <button className="bg-[#CC5500] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">
              DEVELOPMENT
            </button>
          </Link>
        </div>

        <img src={userIcon} alt="User Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
      </header>

      {/* Contenido */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="bg-[#B22222] rounded-xl p-8 md:p-12 max-w-xl mx-auto grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Requisiciones</h2>

            {/* Lista de pedidos */}
            <label className="block w-full h-[300px] bg-white rounded-xl p-4 text-black shadow-inner border border-gray-300 overflow-y-auto">
              {pedidos.length === 0 ? (
                <p className="text-sm text-gray-500">No hay pedidos registrados.</p>
              ) : (
                <ul className="space-y-2">
  {pedidos.map((p) => (
    <li key={p.id} className="text-sm">
      <span className="font-bold">Pedido #{p.id}</span>: {p.Producto?.nombre || 'Sin producto'} x{p.cantidad}
    </li>
  ))}
</ul>
              )}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <img src={cutitLogo} alt="Cutit Logo" className="h-28 mb-4" />
            <p className="text-sm leading-relaxed max-w-sm">
              En esta sección podrás visualizar las requisiciones activas, en espera o completadas según el flujo de trabajo asignado a tu perfil de usuario. Esta vista será alimentada con datos en tiempo real.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#B22222] w-full px-10 py-6 text-sm text-white text-center">
        <p>Cutit Technologies GmbH</p>
        <p>Industriestraße 12, 42897 Remscheid, Alemania</p>
        <p>+49 2191 5893 770</p>
        <p>info@cutit-tech.de</p>
      </footer>
    </div>
  );
}