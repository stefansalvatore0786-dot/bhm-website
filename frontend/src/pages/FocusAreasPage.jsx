import React from 'react';
import { Building2, TrendingUp, Briefcase, Target } from 'lucide-react';

const FocusAreasPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Focus Areas
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Building value through strategic focus on real estate, investments, and business growth
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Real Estate Development
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Building and managing high-value property assets with strategic focus on long-term growth.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic Approach</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our real estate development strategy focuses on identifying properties in high-growth locations with strong appreciation potential.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Land Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  We specialize in land acquisition and property development with careful planning and quality execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Investment Philosophy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our investment philosophy is rooted in disciplined capital deployment and strategic alignment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Scalable Business Focus</h3>
                <p className="text-slate-600 leading-relaxed">
                  We focus on investing in scalable businesses across multiple sectors including technology and education.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <TrendingUp className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Strategic Investments
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Investing in scalable businesses and emerging opportunities for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <Briefcase className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Business Growth
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Supporting ventures with capital, strategy, and execution to build a diversified ecosystem.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Venture Building</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are actively involved in building and scaling new ventures across various sectors.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic Partnerships</h3>
                <p className="text-slate-600 leading-relaxed">
                  We establish partnerships with entrepreneurs and business leaders to co-create ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusAreasPage;
