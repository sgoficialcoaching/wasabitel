import React from 'react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Promotional Bar */}
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-orange-500 text-white py-4 px-4 text-center relative overflow-hidden gradient-shift">
        <div className="absolute inset-0 bg-black/10 particles-bg"></div>
        <div className="relative z-10 flex items-center justify-center space-x-2 text-sm font-bold bounce-in">
          <span className="animate-pulse">🔥</span>
          <span>PROMOCIONES EXCLUSIVAS SOLO PARA CLIENTES WASABITEL</span>
          <span className="animate-pulse">🔥</span>
          <span className="hidden sm:inline ml-4 bg-white/20 px-3 py-1 rounded-full text-xs pulse-glow">
            ¡APROVECHA AHORA!
          </span>
        </div>
      </div>
      
      <header className="bg-white shadow-2xl border-b-4 border-gradient-to-r from-green-500 to-orange-500 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-orange-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1 relative z-10">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/Etna_Sans_Serif__1_-removebg-preview.png" 
                alt="WasabiTel Logo"
                className="w-48 h-48 object-contain float-animation hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('fibra')} className="text-gray-700 hover:text-green-600 font-bold transition-all duration-300 hover:scale-110 relative group btn-premium focus-premium">
              Fibra
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 group-hover:w-full transition-all duration-500 neon-teal"></span>
            </button>
            <button onClick={() => scrollToSection('movil')} className="text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:scale-110 relative group btn-premium focus-premium">
              Móvil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500 group-hover:w-full transition-all duration-500 neon-orange"></span>
            </button>
            <button onClick={() => scrollToSection('seguridad')} className="text-gray-700 hover:text-red-600 font-bold transition-all duration-300 hover:scale-110 relative group btn-premium focus-premium">
              Seguridad
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
            </button>
            <button onClick={() => scrollToSection('empresa')} className="text-gray-700 hover:text-teal-600 font-bold transition-all duration-300 hover:scale-110 relative group btn-premium focus-premium">
              Empresa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:scale-110 relative group btn-premium focus-premium">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500"></span>
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('login')} className="text-gray-700 hover:text-teal-600 font-bold transition-all duration-300 hover:scale-105 btn-premium focus-premium">Iniciar Sesión</button>
            <button onClick={() => onContactClick()} className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl btn-premium pulse-glow focus-premium shimmer-effect">
              Contratar Ahora
            </button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;