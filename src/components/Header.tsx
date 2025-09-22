import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Etna_Sans_Serif__1_-removebg-preview.png" 
              alt="WasabiTel Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('fibra')} 
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors duration-200 relative group py-2"
            >
              Fibra Óptica
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('movil')} 
              className="text-gray-700 hover:text-orange-600 font-semibold transition-colors duration-200 relative group py-2"
            >
              Móvil 5G
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('seguridad')} 
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200 relative group py-2"
            >
              Seguridad
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 relative group py-2"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>
          
          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium">621 50 83 00</span>
            </div>
            <button 
              onClick={() => onContactClick()} 
              className="bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contratar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('fibra')} 
                className="text-gray-700 hover:text-teal-600 font-semibold text-left py-2"
              >
                Fibra Óptica
              </button>
              <button 
                onClick={() => scrollToSection('movil')} 
                className="text-gray-700 hover:text-orange-600 font-semibold text-left py-2"
              >
                Móvil 5G
              </button>
              <button 
                onClick={() => scrollToSection('seguridad')} 
                className="text-gray-700 hover:text-red-600 font-semibold text-left py-2"
              >
                Seguridad
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-gray-700 hover:text-gray-900 font-semibold text-left py-2"
              >
                Contacto
              </button>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">621 50 83 00</span>
                </div>
                <button 
                  onClick={() => onContactClick()} 
                  className="w-full bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contratar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;