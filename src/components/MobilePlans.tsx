import React from 'react';
import { Smartphone } from 'lucide-react';

interface MobilePlansProps {
  onContactClick: (service?: string) => void;
}

const MobilePlans: React.FC<MobilePlansProps> = ({ onContactClick }) => {
  const topPlans = [
    {
      gb: '30GB',
      price: '6,95€',
      serviceId: 'movil-30gb',
      bgColor: 'bg-teal-500',
      textColor: 'text-white'
    },
    {
      gb: '60GB', 
      price: '7,95€',
      serviceId: 'movil-60gb',
      bgColor: 'bg-teal-600',
      textColor: 'text-white'
    },
    {
      gb: '80GB',
      price: '9,95€',
      serviceId: 'movil-80gb',
      bgColor: 'bg-orange-500',
      textColor: 'text-white'
    },
    {
      gb: '120GB',
      price: '10,95€',
      serviceId: 'movil-120gb',
      bgColor: 'bg-orange-600',
      textColor: 'text-white'
    }
  ];

  const bottomPlans = [
    {
      gb: '200GB',
      price: '14,95€',
      serviceId: 'movil-200gb',
      bgColor: 'bg-gradient-to-br from-teal-500 to-orange-500',
      textColor: 'text-white'
    },
    {
      gb: '300GB',
      price: '19,95€',
      serviceId: 'movil-300gb',
      bgColor: 'bg-teal-600',
      textColor: 'text-white'
    },
    {
      gb: '400GB',
      price: '24,95€',
      serviceId: 'movil-400gb',
      bgColor: 'bg-gradient-to-br from-teal-600 to-orange-600',
      textColor: 'text-white'
    }
  ];

  const features = [
    'Sin compromiso de permanencia',
    'GB acumulables mes a mes',
    'Cobertura 5G incluida',
    'Llamadas ilimitadas'
  ];

  return (
    <section id="movil" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes <span className="text-orange-500">Móvil</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Flexibilidad total con la mejor cobertura nacional
          </p>
          
          {/* Tags */}
          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">GB acumulables</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Cobertura 5G</span>
            </div>
          </div>
        </div>

        {/* Top Row - 4 plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${plan.bgColor} ${plan.textColor} p-6 text-center relative`}>
                <div className="absolute top-4 right-4">
                  <Smartphone className="w-5 h-5 opacity-75" />
                </div>
                <div className="text-2xl font-bold mb-1">{plan.gb}</div>
                <div className="text-sm opacity-90">Datos móviles</div>
                <div className="text-3xl font-bold mt-4">{plan.price}</div>
                <div className="text-sm opacity-90">/mes</div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button onClick={() => onContactClick(plan.serviceId)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Contratar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${plan.bgColor} ${plan.textColor} p-6 text-center relative`}>
                <div className="absolute top-4 right-4">
                  <Smartphone className="w-5 h-5 opacity-75" />
                </div>
                <div className="text-2xl font-bold mb-1">{plan.gb}</div>
                <div className="text-sm opacity-90">Datos móviles</div>
                <div className="text-3xl font-bold mt-4">{plan.price}</div>
                <div className="text-sm opacity-90">/mes</div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button onClick={() => onContactClick(plan.serviceId)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
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

export default MobilePlans;