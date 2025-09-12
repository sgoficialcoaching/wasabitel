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
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/Etna_Sans_Serif__1_-removebg-preview.png" 
                alt="WasabiTel Logo"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('fibra')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Fibra</button>
            <button onClick={() => scrollToSection('movil')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Móvil</button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('seguridad')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Seguridad</button>
            <button onClick={() => scrollToSection('empresa')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Empresa</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Contacto</button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('login')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Iniciar Sesión</button>
            <button onClick={() => onContactClick()} className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Contratar Ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;