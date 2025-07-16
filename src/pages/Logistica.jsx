import cutitLogo from '../assets/cutit-logo.png'
import UserIcon from "../components/UserIcon";
import background from '../assets/background-logistica.png'
import { Link } from 'react-router-dom'

export default function Logistica() {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <header className="bg-[#B22222] w-full px-10 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={cutitLogo} alt="Cutit Logo" className="h-14 w-auto cursor-pointer" />
        </Link>

        {/* Botones */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
          <Link to="/logistica">
            <button className="bg-[#CC5500] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">
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

        {/* User icon */}
<UserIcon />
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
 <div className="bg-[#B22222] rounded-xl p-8 md:p-10 max-w-xl flex flex-col gap-6">
      
    <div>
      <h2 className="text-2xl font-bold mb-2">Misión</h2>
      <p className="mb-6">
        En CutIT Saws fabricamos sierras de alta calidad alemana, ofreciendo soluciones <br />
        de corte precisas, duraderas y confiables para la industria.
      </p>

      <h2 className="text-2xl font-bold mb-2">Visión</h2>
      <p>
        Ser líderes globales en tecnología de corte, <br />
        reconocidos por nuestra precisión, innovación <br />
        y compromiso con la excelencia.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center text-center">
      <img src={cutitLogo} alt="Cutit Logo" className="h-24 mb-2" />
      <p className="text-sm">“Corta con confianza, corta con CutIT.”</p>
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
  )
}