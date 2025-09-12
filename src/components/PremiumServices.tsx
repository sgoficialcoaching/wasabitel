import React from 'react';
import { Satellite, Globe, Shield } from 'lucide-react';

interface PremiumServicesProps {
  onContactClick: (service?: string) => void;
}

const PremiumServices: React.FC<PremiumServicesProps> = ({ onContactClick }) => {
  const services = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Soporte 24/7',
      serviceId: 'soporte-247',
      description: 'Atención técnica especializada disponible las 24 horas del día, los 365 días del año para resolver cualquier incidencia.',
      price: 'INCLUIDO',
      buttonText: 'Más Información',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Internet Satélite',
      serviceId: 'internet-satelite',
      description: 'Conexión por satélite de alta velocidad para zonas rurales y de difícil acceso con cobertura nacional.',
      price: '45€/mes',
      buttonText: 'Contratar Ahora',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      buttonColor: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Instalación Premium',
      serviceId: 'instalacion-premium',
      description: 'Servicio de instalación profesional con garantía extendida y configuración personalizada de todos los equipos.',
      price: 'GRATUITO',
      buttonText: 'Ver Detalles',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios <span className="text-gray-600">Premium</span>
          </h2>
          <p className="text-xl text-gray-600">
            Servicios adicionales para mejorar tu experiencia de conectividad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${service.iconColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {service.price}
              </div>
              <button onClick={() => onContactClick(service.serviceId)} className={`w-full ${service.buttonColor} text-white py-3 rounded-lg font-medium transition-colors`}>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Satellite Internet Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Internet por Satélite Rural</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <Satellite className="w-6 h-6" />
                <span className="font-medium">COBERTURA COMPLETA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-6 h-6" />
                <span className="font-medium">100% COBERTURA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-medium">INSTALACIÓN INCLUIDA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;