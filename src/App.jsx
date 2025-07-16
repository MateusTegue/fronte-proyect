import cutitLogo from './assets/cutit-logo.png';
import UserIcon from './components/UserIcon';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E1E1E] text-white">

      {/* Header horizontal, ancho completo */}
<header className="bg-[#B22222] w-full px-10 py-4 flex items-center justify-between">
  {/* Logo izquierda */}
  <div className="flex-shrink-0">
    <img src={cutitLogo} alt="Cutit Logo" className="h-14 w-auto" />
  </div>

  {/* Botones centrados */}
  <div className="absolute left-1/2 -translate-x-1/2 flex gap-16">
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
  <button className="bg-[#FF6A00] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">
    DEVELOPMENT
  </button>
</Link>
  </div>

  {/* Ícono de usuario derecha */}
    <UserIcon />
</header>

        <main
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/background.png')" }}
      ></main>

      {/* Footer fijo y extendido */}
      <footer className="bg-[#B22222] w-full px-10 py-6 text-sm text-white">
        <div className="leading-6 text-center">
          <p>Cutit Technologies GmbH</p>
          <p>Industriestraße 12, 42897 Remscheid, Alemania</p>
          <p>+49 2191 5893 770</p>
          <p>info@cutit-tech.de</p>
        </div>
      </footer>
    </div>
  );
}
