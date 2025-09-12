import React from 'react';

const Stats = () => {
  const stats = [
    { number: '50K+', label: 'Clientes Satisfechos', color: 'text-teal-600' },
    { number: '99.9%', label: 'Uptime Garantizado', color: 'text-orange-500' },
    { number: '24/7', label: 'Soporte Técnico', color: 'text-teal-600' },
    { number: '15+', label: 'Años de Experiencia', color: 'text-orange-500' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;