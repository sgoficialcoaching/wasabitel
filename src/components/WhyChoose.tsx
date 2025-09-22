import React from 'react';
import { Shield, Zap, HeadphonesIcon, Award } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Máxima Seguridad',
      description: 'Protección avanzada para todos tus datos y comunicaciones',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Velocidad Garantizada',
      description: 'Conexiones ultrarrápidas que nunca te dejarán esperando',
      color: 'text-yellow-600'
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte 24/7',
      description: 'Atención técnica especializada disponible las 24 horas',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Servicios de la más alta calidad con tecnología de vanguardia',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">WasabiTel</span>?
          </h3>
          <p className="text-gray-600 text-lg">Descubre las ventajas que nos hacen únicos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <div className={`w-16 h-16 ${reason.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-8 h-8 ${reason.color}`} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{reason.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Listo para la mejor conexión?</h3>
              <p className="text-xl mb-6 opacity-90">Únete a los miles de clientes satisfechos que ya disfrutan de nuestros servicios</p>
              <button className="bg-white text-teal-600 hover:text-orange-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Ver Todas las Ofertas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;