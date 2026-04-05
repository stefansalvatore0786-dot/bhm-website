import React from 'react';
import { DollarSign, TrendingUp, Building2, Target } from 'lucide-react';

const CompanyOverviewPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Company Overview
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Strong foundation, strategic vision, sustainable growth
          </p>
        </div>
      </section>

      {/* Financial Strength */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Financial Strength
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              BHM Sunrise Pvt. Ltd. is backed by strong capitalization and financial stability, 
              providing a solid foundation for strategic growth and long-term value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <DollarSign className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">
                ₹5,00,00,000
              </div>
              <div className="text-slate-600 font-medium mb-2">
                Authorized Capital
              </div>
              <div className="text-sm text-slate-500">
                (5 Crore)
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">
                ₹5,00,00,000
              </div>
              <div className="text-slate-600 font-medium mb-2">
                Paid-up Capital
              </div>
              <div className="text-sm text-slate-500">
                (5 Crore - Fully Paid)
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">
                2023
              </div>
              <div className="text-slate-600 font-medium mb-2">
                Year of Incorporation
              </div>
              <div className="text-sm text-slate-500">
                Established
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-100 border-l-4 border-slate-900 p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Financial Positioning:</strong> With fully paid-up capital 
                of ₹5 Crore, BHM Sunrise Pvt. Ltd. demonstrates strong financial commitment and stability. 
                This capital foundation enables us to pursue strategic investments, undertake significant 
                projects, and support the growth of our business ventures with confidence and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
            Our Business Model
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Operations</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                BHM Sunrise operates through a multi-pronged business model that combines real estate 
                development, strategic investments, and business growth initiatives. This diversified 
                approach allows us to leverage opportunities across different sectors while managing 
                risk through portfolio diversification.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Real Estate Development</h4>
                <p className="text-slate-600 leading-relaxed">
                  We identify, acquire, develop, and manage high-value property assets. Our focus is on 
                  strategic locations with strong growth potential, ensuring long-term asset appreciation 
                  and sustainable returns.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Strategic Investments</h4>
                <p className="text-slate-600 leading-relaxed">
                  We invest in scalable businesses and emerging opportunities across multiple sectors. 
                  Our investment approach combines financial capital with strategic guidance and 
                  operational support.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Business Development</h4>
                <p className="text-slate-600 leading-relaxed">
                  We support and scale ventures through capital, strategy, and execution. Our business 
                  development arm focuses on creating and nurturing businesses with strong growth 
                  potential.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Value Creation Approach</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our business model is designed to create value at multiple levels. We generate returns 
                through asset appreciation, operational improvements, strategic positioning, and scaling 
                of successful ventures. Each business decision is evaluated based on its potential for 
                long-term value creation, strategic fit, and alignment with our growth objectives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Partnership & Collaboration</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in the power of strategic partnerships. BHM Sunrise actively collaborates 
                with industry experts, business partners, and stakeholders to enhance our capabilities, 
                expand our reach, and create synergies that drive mutual success. Our network within the 
                BHM Group provides additional resources and expertise that strengthen our business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-6 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0">
              <Target className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Growth Strategy & Future Plans
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our growth strategy is built on disciplined expansion, strategic market selection, 
                and systematic scaling of our operations.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Expansion</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are focused on expanding our presence in strategic markets with strong growth potential. 
                Our approach involves careful market analysis, strategic entry planning, and systematic 
                execution. We prioritize markets where our capital, expertise, and network can create 
                significant competitive advantages.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Portfolio Diversification</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Building a diversified portfolio of businesses and assets is central to our growth strategy. 
                We are actively pursuing opportunities in real estate, strategic investments, and business 
                ventures that align with our core competencies and strategic vision. Diversification allows 
                us to manage risk while maximizing opportunities for value creation.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Operational Scaling</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                As we grow, we are building the organizational capabilities, systems, and processes necessary 
                to scale our operations efficiently. This includes strengthening our leadership team, enhancing 
                our operational infrastructure, and implementing best practices that support sustainable growth.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Partnerships & Alliances</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are actively building strategic partnerships and alliances that enhance our market position, 
                expand our capabilities, and create new opportunities for growth. These partnerships span across 
                real estate development, investment opportunities, technology integration, and business development.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Long-Term Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our long-term vision is to build BHM Sunrise into a recognized leader in real estate development 
                and strategic investments. We aim to create a diversified business ecosystem that generates 
                sustainable value, contributes to economic development, and establishes a lasting legacy. Every 
                decision we make today is guided by this long-term perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            BHM Sunrise Pvt. Ltd. is committed to building a business that creates lasting value for all 
            stakeholders. With strong financial foundations, a clear strategic vision, and unwavering 
            commitment to excellence, we are positioned for sustainable long-term growth and success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverviewPage;
