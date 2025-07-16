import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../assets/user-icon.png';

export default function UserIcon() {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    if (user) {
      setShowConfirm(true);
    } else {
      navigate('/login');
    }
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    setShowConfirm(false);
    navigate('/login');
  };

  return (
    <>
      <img
        src={userIcon}
        alt="User Icon"
        onClick={handleClick}
        className="cursor-pointer"
        style={{
          width: '48px',
          height: '48px',
          objectFit: 'contain',
        }}
      />

      {showConfirm && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg p-6 w-80 shadow-lg z-50 text-center border border-gray-300">
          <p className="text-lg font-semibold mb-4">¿Deseas cerrar sesión?</p>
          <div className="flex justify-center gap-6">
            <button
              onClick={confirmLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:brightness-110"
            >
              Sí
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:brightness-95"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}