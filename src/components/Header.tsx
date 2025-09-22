import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Exactly like WasabiEnergía */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              {/* Logo background glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-teal-500/30 to-orange-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              {/* Multiple glow layers for depth */}
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-400/20 to-orange-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-300/15 to-orange-300/15 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
              
              {/* Logo container with glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-6 border-2 border-white/30 group-hover:border-teal-400/70 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 shadow-2xl group-hover:shadow-teal-500/25">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-teal-400/0 group-hover:border-teal-400/50 transition-all duration-700 animate-pulse"></div>
                
                <img 
                  src="/Etna_Sans_Serif__1_-removebg-preview.png" 
                  alt="WasabiTel Logo"
                  className="w-32 h-32 object-contain transition-all duration-700 group-hover:drop-shadow-2xl filter group-hover:brightness-125 group-hover:contrast-110 relative z-10"
                />
                
                {/* Animated rotating border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 via-orange-500 to-teal-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin" style={{animationDuration: '3s'}}></div>
                
                {/* Enhanced floating particles effect */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '1.5s'}}></div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-300 rounded-full animate-spin" style={{
                    transformOrigin: '0 0',
                    transform: 'translate(-50%, -50%) rotate(0deg) translateX(50px)',
                    animationDuration: '2s'
                  }}></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-300 rounded-full animate-spin" style={{
                    transformOrigin: '0 0',
                    transform: 'translate(-50%, -50%) rotate(180deg) translateX(50px)',
                    animationDuration: '2s'
                  }}></div>
                </div>
              </div>
              
              {/* Logo text with gradient */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                <div className="text-sm font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-teal-400 bg-clip-text text-transparent whitespace-nowrap animate-pulse">
                  WasabiTel
                </div>
                <div className="absolute inset-0 text-sm font-bold text-white/20 blur-sm">
                  WasabiTel
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation - Exactly like WasabiEnergía style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('fibra')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Fibra Óptica</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('movil')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Móvil 5G</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('seguridad')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Seguridad</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>
          
          {/* CTA Button - Exactly like WasabiEnergía */}
          <div className="hidden lg:block">
            <button 
              onClick={() => onContactClick()} 
              className="relative px-8 py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 group overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contratar Ahora</span>
              </span>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-white hover:text-teal-400 transition-colors duration-300"
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
          <div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => scrollToSection('fibra')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Fibra Óptica</span>
              </button>
              <button 
                onClick={() => scrollToSection('movil')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Móvil 5G</span>
              </button>
              <button 
                onClick={() => scrollToSection('seguridad')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Seguridad</span>
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Contacto</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <button 
                onClick={() => onContactClick()} 
                className="w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                Contratar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </header>
  );
};

export default Header;