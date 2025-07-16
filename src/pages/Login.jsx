import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cutitLogo from '../assets/cutit-logo.png';
import background from '../assets/background-login.png';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/api/login`, {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      console.error(err);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-[#B22222] rounded-2xl px-10 py-10 w-[440px] max-w-full text-center shadow-lg">
        {/* Logo clickable */}
        <Link to="/" className="flex justify-center mb-6">
          <img src={cutitLogo} alt="Cutit Logo" className="h-14 w-auto cursor-pointer" />
        </Link>

        <h2 className="text-2xl font-bold">¡Bienvenido nuevamente!</h2>
        <p className="text-sm mt-1 mb-6">
          Ingrese su correo y contraseña para acceder
        </p>

        <form className="space-y-4 text-left" onSubmit={handleLogin}>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 rounded border border-gray-300 text-black placeholder-gray-400"
              placeholder="Correo electrónico"
            />
          </div>

          <div>
            <label className="text-sm">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 rounded border border-gray-300 text-black placeholder-gray-400"
              placeholder="Contraseña"
            />
          </div>

          {error && <p className="text-red-300 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-2 bg-[#FF6A00] text-white font-bold py-2 rounded hover:brightness-110 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}