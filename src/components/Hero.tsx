import React from 'react';
import { ArrowRight, Wifi, Smartphone } from 'lucide-react';

interface HeroProps {
  onContactClick: (service?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
            ⭐ Líder en Telecomunicaciones
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Conecta tu <span className="text-teal-600">futuro</span><br />
              con <span className="text-teal-600">WasabiTel</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Descubre la nueva generación de telecomunicaciones con fibra 
              óptica de última generación, planes móviles flexibles y servicios de 
              seguridad integrales. Tu conexión perfecta te espera.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => onContactClick()} className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span>Explorar Tarifas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span>▶</span>
                <span>Ver Demo</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Browser mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto relative">
              {/* Browser dots */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-auto text-xs text-gray-400">wasabitel.es</div>
              </div>
              
              {/* Fibra plan */}
              <div className="bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Fibra 1000M</div>
                      <div className="text-sm text-gray-600">Velocidad simétrica</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">32,95€</div>
                    <div className="text-sm text-gray-500">/mes</div>
                  </div>
                </div>
              </div>
              
              {/* Móvil plan */}
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Móvil 120GB</div>
                      <div className="text-sm text-gray-600">Sin compromiso</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">10,95€</div>
                    <div className="text-sm text-gray-500">/mes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;