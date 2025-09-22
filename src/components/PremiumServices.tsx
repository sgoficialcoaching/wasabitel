import React from 'react';
import { Satellite, Globe, Shield } from 'lucide-react';

const PremiumServices: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-sm font-bold mb-4">
            <Satellite className="w-4 h-4 mr-2" />
            Servicios Premium
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">Internet por Satélite</span> - Conectividad Rural
          </h3>
          <p className="text-gray-600 text-lg">Conectividad de alta velocidad donde otros no llegan</p>
        </div>

        <div className="bg-gradient-to-r from-teal-600 via-green-500 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Internet por Satélite Rural</h3>
            <p className="text-xl mb-8 opacity-90">Conectividad de alta velocidad donde otros no llegan</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Satellite className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">COBERTURA COMPLETA</span>
                <span className="text-sm opacity-80">Llega donde la fibra no puede</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Globe className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">200 MBPS</span>
                <span className="text-sm opacity-80">Velocidad garantizada</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">INSTALACIÓN INCLUIDA</span>
                <span className="text-sm opacity-80">Sin costes adicionales</span>
              </div>
            </div>
            
            <button className="bg-white text-teal-600 hover:text-orange-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;