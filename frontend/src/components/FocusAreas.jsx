import React from 'react';
import { Building2, TrendingUp, Briefcase } from 'lucide-react';

const FocusAreas = () => {
  const areas = [
    {
      icon: Building2,
      title: "Real Estate Development",
      description: "Building and managing high-value property assets.",
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e"
    },
    {
      icon: TrendingUp,
      title: "Strategic Investments",
      description: "Investing in scalable businesses and emerging opportunities.",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4"
    },
    {
      icon: Briefcase,
      title: "Business Growth",
      description: "Supporting ventures with capital, strategy, and execution.",
      image: "https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg"
    }
  ];

  return (
    <section id="focus" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 text-center tracking-tight">
          Our Focus Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="group">
                <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
