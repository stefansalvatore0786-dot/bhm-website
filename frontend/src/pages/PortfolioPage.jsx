import React from 'react';
import { Building2, TrendingUp, Briefcase, Target } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'Land and property development projects focused on strategic locations with high growth potential.',
      highlights: [
        'Strategic land acquisition and development',
        'Property asset management',
        'Value-added real estate projects',
        'Long-term asset appreciation focus'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Strategic Investments',
      description: 'Supporting and investing in businesses across multiple sectors with strong growth potential.',
      highlights: [
        'Investment in scalable businesses',
        'Portfolio company support',
        'Strategic capital deployment',
        'Active investment management'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Growth Initiatives',
      description: 'Scaling ventures and partnerships to build a diversified business ecosystem.',
      highlights: [
        'Venture building and scaling',
        'Strategic partnerships',
        'Business development initiatives',
        'Ecosystem expansion'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Portfolio & Projects
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Building value through strategic initiatives across multiple business areas
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Our Business Activities
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            BHM Sunrise Pvt. Ltd. is actively engaged in multiple business areas, each contributing 
            to our strategic vision of building long-term value and creating a diversified business 
            ecosystem. Our portfolio reflects our commitment to excellence, strategic focus, and 
            disciplined execution.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-white p-12 rounded-lg shadow-sm">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg">
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded">
                            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Strategic Approach to Portfolio Development
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-50 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Disciplined Selection</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every project and investment in our portfolio undergoes rigorous evaluation. We assess 
                strategic fit, growth potential, risk profile, and alignment with our core objectives 
                before committing resources. This disciplined approach ensures that our portfolio 
                remains focused, balanced, and positioned for sustainable growth.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Active Management</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We take an active approach to portfolio management. Beyond capital deployment, we 
                provide strategic guidance, operational support, and access to our network and resources. 
                This hands-on involvement ensures that projects and investments achieve their full 
                potential and deliver expected returns.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Long-Term Focus</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our portfolio is built with a long-term perspective. We prioritize sustainable value 
                creation over short-term gains, focusing on projects and investments that have enduring 
                potential. This long-term orientation guides our decision-making and shapes our 
                portfolio strategy.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Continuous Expansion</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                As BHM Sunrise continues to grow, we are continuously evaluating new opportunities and 
                expanding our portfolio. We remain committed to identifying and pursuing initiatives 
                that align with our strategic vision and contribute to building a diversified, resilient 
                business ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full mb-6">
              <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Building for the Future
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Our portfolio represents the foundation of our growth strategy. Through careful selection, 
              active management, and long-term focus, we are building a collection of assets and 
              businesses that will drive sustainable value creation for years to come.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Interested in exploring partnership opportunities or learning more about our portfolio? 
            We welcome conversations with strategic partners and investors.
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-white text-slate-900 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Get In Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
