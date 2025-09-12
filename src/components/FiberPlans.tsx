import React from 'react';
import { Check, Tv } from 'lucide-react';

interface FiberPlansProps {
  onContactClick: (service?: string) => void;
}

const FiberPlans: React.FC<FiberPlansProps> = ({ onContactClick }) => {
  const plans = [
    {
      name: '600M',
      price: '24,95€',
      speed: '600M',
      serviceId: 'fibra-600',
      features: [
        'Fibra hasta 600 Mb',
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
      name: '1000M',
      price: '32,95€',
      speed: '1000M',
      serviceId: 'fibra-1000',
      features: [
        'Fibra hasta 1000 Mb',
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

  const tvPlans = [
    {
      name: 'TV Básica',
      price: '30€',
      serviceId: 'tv-basica',
      features: [
        'Canales básicos nacionales',
        'Grabación en la nube',
        'Acceso desde móvil',
        'Calidad HD'
      ],
      color: 'purple'
    },
    {
      name: 'TV Inicial',
      price: '50€',
      serviceId: 'tv-inicial',
      features: [
        'Más de 100 canales',
        'Canales temáticos',
        'Grabación en la nube',
        'Acceso multidispositivo'
      ],
      color: 'purple'
    },
    {
      name: 'TV Premium',
      price: '60€',
      serviceId: 'tv-premium',
      features: [
        'Canales premium incluidos',
        'Deportes y películas',
        'Series exclusivas',
        'Calidad 4K disponible'
      ],
      color: 'purple'
    },
    {
      name: 'TV Premium Plus',
      price: '90€',
      serviceId: 'tv-premium-plus',
      features: [
        'Todos los canales premium',
        'Deportes en exclusiva',
        'Estrenos cinematográficos',
        'Contenido internacional'
      ],
      color: 'purple',
      gradient: true
    },
    {
      name: 'TV Total',
      price: '90€',
      serviceId: 'tv-total',
      features: [
        'Paquete completo de canales',
        'Todas las plataformas incluidas',
        'Contenido bajo demanda',
        'Experiencia premium total'
      ],
      color: 'purple',
      gradient: true
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

        {/* Main Plans - Fibra MásOrange */}
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

        {/* Fibra Movistar Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fibra Movistar</h3>
            <p className="text-gray-600">Mismas velocidades, mismos precios con tecnología Movistar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">600M</h3>
                  <div className="text-4xl font-bold mb-1">24,95€</div>
                  <div className="text-sm opacity-90">mes</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Fibra hasta 600 Mb</span>
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
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Soporte técnico</span>
                  </div>
                </div>
                
                <button onClick={() => onContactClick('fibra-600-movistar')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Contratar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-700 text-white p-6">
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
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Soporte técnico</span>
                  </div>
                </div>
                
                <button onClick={() => onContactClick('fibra-1000-movistar')} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition-colors">
                  Contratar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MásMedia TV Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              <span className="text-purple-600">MásMedia TV</span> - Paquetes de Televisión
            </h3>
            <p className="text-gray-600">Disfruta del mejor contenido televisivo con nuestros paquetes premium</p>
          </div>
          
          {/* First row - 3 plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tvPlans.slice(0, 3).map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-purple-600 text-white p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-6 h-6" />
                    </div>
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
                  
                  <button onClick={() => onContactClick(plan.serviceId)} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Contratar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 premium plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tvPlans.slice(3, 5).map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden ring-2 ring-purple-500">
                <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 text-sm font-medium">
                  Paquete Premium
                </div>
                <div className={`${plan.gradient ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-purple-700'} text-white p-6 pt-12`}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-6 h-6" />
                    </div>
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
                  
                  <button onClick={() => onContactClick(plan.serviceId)} className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 rounded-lg font-medium transition-colors">
                    Contratar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiberPlans;