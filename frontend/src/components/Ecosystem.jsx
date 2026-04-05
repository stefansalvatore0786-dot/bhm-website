import React from 'react';

const Ecosystem = () => {
  const ventures = [
    {
      name: "House of IHM",
      description: "Education and innovation ecosystem"
    },
    {
      name: "Skillari",
      description: "EdTech platform connecting students and educators"
    },
    {
      name: "Omnia",
      description: "Future-focused technology and AI innovation"
    }
  ];

  return (
    <section id="ecosystem" className="py-32 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
          Our Ventures
        </h2>
        
        <p className="text-lg text-gray-300 text-center mb-20 leading-relaxed max-w-3xl mx-auto">
          BHM Sunrise Pvt Ltd supports and is connected with emerging ventures across 
          education and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:bg-slate-800/70 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">
                {venture.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
