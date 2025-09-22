import React from 'react';
import { Check, Wifi } from 'lucide-react';

interface FiberPlansProps {
  onContactClick: (service?: string) => void;
}

const FiberPlans: React.FC<FiberPlansProps> = ({ onContactClick }) => {
  const fiberPlans = [
    {
      name: '600M',
      price: '24,95€',
      features: [
        'Fibra hasta 600 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas',
        'Soporte técnico'
      ],
      serviceId: 'fibra-600-movistar',
      color: 'blue'
    },
    {
      name: '1000M',
      price: '32,95€',
      features: [
        'Fibra hasta 1000 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas',
        'Soporte técnico'
      ],
      serviceId: 'fibra-1000-movistar',
      color: 'blue'
    }
  ];

  return (
    <section id="fibra" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold mb-4">
            <Wifi className="w-4 h-4 mr-2" />
            Tecnología Movistar
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Fibra</span> - Planes de Internet
          </h3>
          <p className="text-gray-600 text-lg">Conectividad ultrarrápida para tu hogar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fiberPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ring-1 ring-gray-200">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2 relative z-10">{plan.price}</div>
                <div className="text-lg opacity-90 font-medium relative z-10">/mes</div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => onContactClick(plan.serviceId)} 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contratar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiberPlans;