import React from 'react';
import { Phone, Menu, X, Shield, Zap, Award, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-orange-600/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="font-medium">Empresa Certificada ISO 27001</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>Instalación Express 24h</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>15+ Años de Experiencia</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="font-bold">621 50 83 00</span>
              </div>
              <button className="bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 px-4 py-1 rounded-full text-xs font-bold transition-all duration-300 transform hover:scale-105">
                Área Cliente
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-2xl backdrop-blur-lg bg-white/95' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src="/Etna_Sans_Serif__1_-removebg-preview.png" 
                  alt="WasabiTel Logo"
                  className="w-20 h-20 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden lg:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  WasabiTel
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Conectamos tu futuro
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('fibra')} 
                  className="flex items-center space-x-1 px-6 py-3 text-gray-700 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:shadow-lg group-hover:scale-105"
                >
                  <span>Fibra Óptica</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('movil')} 
                  className="flex items-center space-x-1 px-6 py-3 text-gray-700 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-xl group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:shadow-lg group-hover:scale-105"
                >
                  <span>Móvil 5G</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('seguridad')} 
                  className="flex items-center space-x-1 px-6 py-3 text-gray-700 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-xl group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-700 group-hover:shadow-lg group-hover:scale-105"
                >
                  <span>Seguridad</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('contacto')} 
                  className="flex items-center space-x-1 px-6 py-3 text-gray-700 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-xl group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-800 group-hover:shadow-lg group-hover:scale-105"
                >
                  <span>Contacto</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </nav>
            
            {/* CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-xl">
                <Phone className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Llama gratis</div>
                  <div className="text-sm font-bold text-gray-900">621 50 83 00</div>
                </div>
              </div>
              
              <button 
                onClick={() => onContactClick()} 
                className="relative px-8 py-3 bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contratar Ahora</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={() => scrollToSection('fibra')} 
                  className="flex items-center justify-between p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 font-semibold text-left rounded-xl transition-all duration-300 group"
                >
                  <span>Fibra Óptica</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                </button>
                <button 
                  onClick={() => scrollToSection('movil')} 
                  className="flex items-center justify-between p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 font-semibold text-left rounded-xl transition-all duration-300 group"
                >
                  <span>Móvil 5G</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                </button>
                <button 
                  onClick={() => scrollToSection('seguridad')} 
                  className="flex items-center justify-between p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 font-semibold text-left rounded-xl transition-all duration-300 group"
                >
                  <span>Seguridad</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')} 
                  className="flex items-center justify-between p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 font-semibold text-left rounded-xl transition-all duration-300 group"
                >
                  <span>Contacto</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl mb-4">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Llama gratis</div>
                    <div className="text-sm font-bold text-gray-900">621 50 83 00</div>
                  </div>
                </div>
                <button 
                  onClick={() => onContactClick()} 
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Contratar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;