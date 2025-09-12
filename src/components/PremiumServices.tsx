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
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-orange-500 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-center space-x-2 text-sm font-bold">
          <span className="animate-pulse">🔥</span>
          <span>PROMOCIONES EXCLUSIVAS SOLO PARA CLIENTES WASABITEL</span>
          <span className="animate-pulse">🔥</span>
          <span className="hidden sm:inline ml-4 bg-white/20 px-3 py-1 rounded-full text-xs">
            ¡APROVECHA AHORA!
          </span>
        </div>
      </div>
      
      <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-green-500 to-orange-500">
      {/* Promotional Bar */}
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-orange-500 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-center space-x-2 text-sm font-bold">
          <span className="animate-pulse">🔥</span>
          <span>PROMOCIONES EXCLUSIVAS SOLO PARA CLIENTES WASABITEL</span>
          <span className="animate-pulse">🔥</span>
          <span className="hidden sm:inline ml-4 bg-white/20 px-3 py-1 rounded-full text-xs">
            ¡APROVECHA AHORA!
          </span>
        </div>
      </div>
      
      <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-green-500 to-orange-500">
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
            <button onClick={() => scrollToSection('fibra')} className="text-gray-700 hover:text-green-600 font-bold transition-all duration-300 hover:scale-105 relative group">
              Fibra
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('movil')} className="text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:scale-105 relative group">
              Móvil
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('seguridad')} className="text-gray-700 hover:text-red-600 font-bold transition-all duration-300 hover:scale-110 relative group">
              Seguridad
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('empresa')} className="text-gray-700 hover:text-teal-600 font-bold transition-all duration-300 hover:scale-110 relative group">
            <h3 className="text-4xl font-bold mb-6 relative z-10">Internet por Satélite Rural</h3>
            <p className="text-xl mb-8 opacity-90 relative z-10">Conectividad de alta velocidad donde otros no llegan</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Satellite className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">COBERTURA COMPLETA</span>
                <span className="text-sm opacity-80">Llega donde la fibra no puede</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              <div className="flex flex-col items-center space-y-3 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Globe className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">200 MBPS</span>
                <span className="text-sm opacity-80">Velocidad garantizada</span>
          <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center space-y-3 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">INSTALACIÓN INCLUIDA</span>
                <span className="text-sm opacity-80">Sin costes adicionales</span>
            </button>
          </div>
            <button className="bg-white text-teal-600 hover:text-orange-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10">
              Consultar Disponibilidad
            </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
        <div className="bg-gradient-to-r from-teal-600 via-green-500 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>