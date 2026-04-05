import React from 'react';
import { Target, Eye, Heart, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About BHM Sunrise
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Building a legacy of sustainable growth and value creation
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
            Our Story
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              BHM Sunrise Pvt. Ltd. was established in 2023 with a clear vision: to build long-term value 
              through real estate development, strategic investments, and scalable business ventures. From 
              our inception, we have been committed to creating a diversified business ecosystem that 
              drives sustainable growth and generates lasting value.
            </p>
            
            <p>
              With a strong capital foundation of ₹5 Crore (fully paid-up), we entered the market with 
              the financial strength and strategic vision necessary to pursue ambitious growth objectives. 
              Our approach is rooted in disciplined investment, careful market analysis, and a commitment 
              to excellence in every venture we undertake.
            </p>
            
            <p>
              BHM Sunrise is focused on building a legacy that extends beyond immediate returns. We believe 
              in creating sustainable businesses, supporting emerging ventures, and contributing to the 
              economic development of the regions where we operate. Our participation in business forums, 
              MSME events, and industry platforms reflects our commitment to being active contributors to 
              the broader business community.
            </p>

            <p>
              As part of the BHM Group, we leverage collective experience, resources, and network to 
              identify and capitalize on strategic opportunities across multiple sectors. Our journey is 
              marked by steady progress, strategic partnerships, and a growing portfolio of ventures that 
              align with our long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-12 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To build a diversified ecosystem of businesses focused on long-term value creation, 
                innovation, and scalable growth. We aim to become a recognized leader in real estate 
                development and strategic investments, known for our commitment to excellence, 
                sustainability, and positive impact.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-12 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To create sustainable value through strategic investments in real estate, business 
                development, and emerging ventures. We are committed to disciplined capital deployment, 
                operational excellence, and building partnerships that drive mutual growth and long-term 
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Growth Philosophy
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At BHM Sunrise, we believe in sustainable, strategic growth. Our philosophy is built 
                  on several core principles that guide our decision-making and business development:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Long-Term Value Creation</h4>
                    <p>
                      We prioritize investments and initiatives that generate sustainable value over 
                      time. Short-term gains are never pursued at the expense of long-term stability 
                      and growth potential.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Disciplined Capital Deployment</h4>
                    <p>
                      Every investment decision is backed by thorough analysis, market research, and 
                      strategic alignment with our core objectives. We maintain financial discipline 
                      while pursuing growth opportunities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Diversification & Risk Management</h4>
                    <p>
                      By building a diversified portfolio across real estate, investments, and business 
                      ventures, we manage risk while maximizing opportunities for growth and value 
                      creation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Strategic Partnerships</h4>
                    <p>
                      We believe in the power of collaboration. Through strategic partnerships and 
                      alliances, we enhance our capabilities, expand our reach, and create synergies 
                      that benefit all stakeholders.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Operational Excellence</h4>
                    <p>
                      Excellence in execution is fundamental to our success. We are committed to 
                      operational efficiency, continuous improvement, and delivering on our commitments 
                      with precision and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Expansion */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Long-Term Expansion Mindset
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              BHM Sunrise is built on a foundation of long-term thinking. We are not focused on 
              quick wins or short-term profits. Instead, our strategy is designed to build enduring 
              value, establish strong market positions, and create a legacy that extends across 
              generations.
            </p>
            
            <p>
              Our expansion strategy involves careful market selection, strategic entry into high-potential 
              sectors, and systematic scaling of our operations. We are committed to growing our portfolio 
              of businesses while maintaining the quality, integrity, and excellence that define the 
              BHM Sunrise brand.
            </p>

            <p>
              As we continue to grow, we remain focused on our core values: integrity, excellence, 
              sustainability, and stakeholder value. These principles guide every decision we make 
              and every venture we pursue, ensuring that our growth is not just substantial, but 
              also responsible and sustainable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
