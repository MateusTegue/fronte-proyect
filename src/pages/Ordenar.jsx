import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cutitLogo from '../assets/cutit-logo.png';
import UserIcon from "../components/UserIcon";
import background from '../assets/background-ordenar.png';

export default function Ordenar() {
  const [nombre, setNombre] = useState('Sierra circular');
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/pedido', {
        nombre,
        tipo: 'sierra',
        cantidad: parseInt(cantidad),
      });

      if (res.data.success) {
        setMensaje('✅ Pedido realizado correctamente');
        setCantidad(1);
      } else {
        setMensaje('❌ Error al realizar el pedido');
      }
    } catch (err) {
      console.error(err);
      setMensaje('❌ Error de conexión al servidor');
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-white"
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
            <button className="bg-[#FF6A00] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">LOGISTICA</button>
          </Link>
          <Link to="/ordenar">
            <button className="bg-[#CC5500] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">ORDENAR PEDIDOS</button>
          </Link>
          <Link to="/development">
            <button className="bg-[#FF6A00] hover:brightness-110 text-white px-6 py-2 rounded-full shadow font-bold">DEVELOPMENT</button>
          </Link>
        </div>

        {/* User icon */}
<UserIcon />
      </header>

      {/* Formulario */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-[#B22222] rounded-xl p-8 md:p-12 max-w-xl mx-auto grid gap-8"
        >
          <div/>
            <h2 className="text-2xl font-bold mb-4">Tipo de sierra</h2>
            <select
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 rounded bg-[#FF6A00] text-white mb-6"
            >
              <option>Sierra circular</option>
              <option>Sierra angular</option>
              <option>Sierra de cinta</option>
              <option>Sierra caladora</option>
            </select>

            <h2 className="text-2xl font-bold mb-2">Cantidad</h2>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-full p-2 mb-6 rounded bg-[#FF6A00] text-white placeholder-white"
              placeholder="Cantidad"
              min="1"
              required
            />

<div className="mt-8">
  <button
    onClick={handleSubmit}
    className="bg-[#FF6A00] text-white font-bold px-6 py-2 rounded-full shadow hover:brightness-110"
  >
    ORDENAR PEDIDOS
  </button>

  {mensaje && (
    <p className="text-sm mt-4 flex items-center gap-2">
      <span>✅</span> {mensaje}
    </p>
  )}
</div>

          {/* Info */}
          <div className="flex flex-col items-center justify-center text-center">
            <img src={cutitLogo} alt="Cutit Logo" className="h-28 mb-4" />
            <p className="text-sm leading-relaxed max-w-sm">
              Se recuerda que antes de realizar un pedido se debe llenar toda la información requerida en su perfil,
              de tal manera podemos extraer esa información para hacer llegar el pedido de manera más eficiente
              sin llenar tanta información en este formulario.
            </p>
          </div>
        </form>
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