import React from 'react';
import { BarChart3, Zap, Headphones, Shield } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Cobertura Nacional',
      description: 'Red de fibra óptica que llega a más del 95% del territorio nacional con la mejor calidad de señal.',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Velocidad Garantizada',
      description: 'Velocidades simétricas reales sin limitaciones de tráfico ni restricciones horarias.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Soporte Premium',
      description: 'Atención personalizada 24/7 con técnicos especializados y tiempo de respuesta garantizado.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Seguridad Avanzada',
      description: 'Protección integral con firewall, antivirus y sistemas de seguridad de última generación.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="empresa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="text-teal-600">Wasabi</span><span className="text-orange-500">Tel</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 15 años de experiencia nos avalan como la mejor opción en telecomunicaciones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;