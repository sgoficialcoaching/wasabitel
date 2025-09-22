import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Clientes Satisfechos',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Años de Experiencia',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Soporte Técnico',
      color: 'text-orange-600'
    },
    {
      icon: MapPin,
      number: '100%',
      label: 'Cobertura Nacional',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Números que nos <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Respaldan</span>
          </h3>
          <p className="text-gray-600 text-lg">La confianza de miles de clientes nos avala</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;