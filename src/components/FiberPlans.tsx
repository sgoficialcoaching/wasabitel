import React from 'react';
import { Check } from 'lucide-react';

interface FiberPlansProps {
  onContactClick: (service?: string) => void;
}

const FiberPlans: React.FC<FiberPlansProps> = ({ onContactClick }) => {
  const plans = [
    {
      name: '100M',
      price: '24,95€',
      speed: '100M',
      serviceId: 'fibra-100',
      features: [
        'Fibra hasta 100 Mb',
        'Instalación gratuita',
        'Router WiFi incluido', 
        'Llamadas nacionales ilimitadas',
        'Soporte técnico'
      ],
      buttonText: 'Contratar Ahora',
      popular: false,
      color: 'teal',
      badge: 'Fibra Más Orange'
    },
    {
      name: '300M',
      price: '32,95€',
      speed: '300M',
      serviceId: 'fibra-300',
      features: [
        'Fibra hasta 300 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas', 
        'Soporte técnico'
      ],
      buttonText: 'Contratar Ahora',
      popular: true,
      color: 'orange',
      badge: 'Fibra Más Orange'
    }
  ];

  const additionalPlans = [
    {
      name: '1000M',
      price: '9,95€',
      speed: '1000M',
      serviceId: 'fibra-1000',
      features: [
        'Fibra hasta 1000 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas'
      ],
      color: 'teal'
    },
    {
      name: '600M',
      price: '7,95€',
      speed: '600M',
      serviceId: 'fibra-600',
      features: [
        'Fibra hasta 600 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas'
      ],
      color: 'orange'
    },
    {
      name: '300M',
      price: '10,95€',
      speed: '300M',
      serviceId: 'fibra-300-alt',
      features: [
        'Fibra hasta 300 Mb',
        'Instalación gratuita',
        'Router WiFi incluido',
        'Llamadas nacionales ilimitadas'
      ],
      color: 'orange'
    }
  ];

  return (
    <section id="fibra" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes de <span className="text-orange-500">Fibra Óptica</span>
          </h2>
          <p className="text-xl text-gray-600">
            Velocidad, estabilidad y el mejor precio garantizado del mercado
          </p>
          <div className="mt-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ✓ Promoción Fibra Más Orange - Descuento 5€
            </span>
          </div>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                  Más Popular
                </div>
              )}
              
              <div className={`${plan.color === 'teal' ? 'bg-teal-600' : 'bg-orange-500'} text-white p-6 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <div className="text-sm opacity-90">mes</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={() => onContactClick(plan.serviceId)} className={`w-full ${plan.color === 'teal' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-orange-500 hover:bg-orange-600'} text-white py-3 rounded-lg font-medium transition-colors`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fibra Movistar Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Fibra Movistar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-teal-600 text-white p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">300M</h3>
                  <div className="text-4xl font-bold mb-1">24,95€</div>
                  <div className="text-sm opacity-90">mes</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Fibra hasta 300 Mb</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Instalación gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Router WiFi incluido</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Llamadas nacionales ilimitadas</span>
                  </div>
                </div>
                <button onClick={() => onContactClick('fibra-300-movistar')} className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Contratar Ahora
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-orange-500 text-white p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">1000M</h3>
                  <div className="text-4xl font-bold mb-1">32,95€</div>
                  <div className="text-sm opacity-90">mes</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Fibra hasta 1000 Mb</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Instalación gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Router WiFi incluido</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Llamadas nacionales ilimitadas</span>
                  </div>
                </div>
                <button onClick={() => onContactClick('fibra-1000-movistar')} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Contratar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${plan.color === 'teal' ? 'bg-teal-600' : 'bg-orange-500'} text-white p-4 text-center`}>
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <div className="text-2xl font-bold mt-1">{plan.price}</div>
                <div className="text-sm opacity-90">mes</div>
              </div>
              
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={() => onContactClick(plan.serviceId)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Contratar
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