import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Building2, TrendingUp, Briefcase, ArrowRight, Users, Award, Target } from 'lucide-react';

const HomePage = () => {
  const stats = [
    {
      icon: Building2,
      value: '₹5 Crore',
      label: 'Authorized Capital'
    },
    {
      icon: Target,
      value: '2023',
      label: 'Year of Incorporation'
    },
    {
      icon: Briefcase,
      value: 'Multiple',
      label: 'Business Ventures'
    },
    {
      icon: Award,
      value: 'Growing',
      label: 'Industry Recognition'
    }
  ];

  const focusAreas = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'Building and managing high-value property assets with strategic focus on long-term growth and value creation.',
      link: '/focus-areas'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Investments',
      description: 'Investing in scalable businesses and emerging opportunities across multiple sectors for sustainable growth.',
      link: '/focus-areas'
    },
    {
      icon: Briefcase,
      title: 'Business Growth',
      description: 'Supporting ventures with capital, strategy, and execution to build a diversified business ecosystem.',
      link: '/focus-areas'
    }
  ];

  const leaders = [
    {
      name: 'Aslam Sher Khan',
      role: 'Managing Director',
      description: 'Leading strategic growth and operational excellence across all business verticals.'
    },
    {
      name: 'Shaila Parveen',
      role: 'Director',
      description: 'Holds full signing authority and oversees governance and compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/kuzgs11h_IMG_3953.jpeg"
            alt="BHM Sunrise Leadership"
            className="w-full h-full object-cover object-center"
            style={{ 
              imageRendering: '-webkit-optimize-contrast',
              objectPosition: 'center 30%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            BHM Sunrise<br />Private Limited
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Building Trust. Delivering Excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/company-overview">
              <Button 
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base font-medium shadow-lg"
              >
                Explore Company
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-base font-medium"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Company Snapshot
            </h2>
            <p className="text-lg text-slate-600">
              Strong foundation, strategic vision, sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-slate-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth & Statistics */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Committed to Long-Term Growth
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                BHM Sunrise Pvt. Ltd. is building a diversified business portfolio with a focus on 
                sustainable growth, strategic expansion, and value creation across multiple sectors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With a strong capital foundation of ₹5 Crore and strategic vision, we are expanding 
                into real estate, investments, and scalable ventures to build lasting legacy.
              </p>
              <Link to="/company-overview">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  View Company Overview
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-slate-900 mb-2">₹5 Cr</div>
                <div className="text-slate-600">Strong Capital Base</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-slate-900 mb-2">2023</div>
                <div className="text-slate-600">Established</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-slate-900 mb-2">Multi</div>
                <div className="text-slate-600">Sector Focus</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-slate-900 mb-2">3+</div>
                <div className="text-slate-600">Active Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            About BHM Sunrise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            BHM Sunrise Pvt. Ltd. is focused on building long-term value through real estate, 
            investments, and scalable business ventures. The company aims to expand across 
            multiple sectors and create a strong business ecosystem.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            With active participation in business and MSME events, growing industry recognition, 
            and a commitment to excellence, we are building a legacy of sustainable growth and 
            diversified business success.
          </p>
          <Link to="/about">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              Read More About Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Focus Areas Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Focus Areas
            </h2>
            <p className="text-lg text-slate-600">
              Building value across multiple business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-lg mb-6">
                    <Icon className="w-7 h-7 text-slate-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <Link to={area.link} className="text-slate-900 font-medium hover:underline inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/focus-areas">
              <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                View All Focus Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Leadership
            </h2>
            <p className="text-lg text-slate-600">
              Guiding strategic growth and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-slate-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-slate-600 font-medium mb-4">
                  {leader.role}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/leadership">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Meet Our Leadership Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            BHM Sunrise Pvt. Ltd. has been recognized for its presence and contribution in business 
            and community initiatives, with multiple awards at MSME Conclaves and regional platforms.
          </p>
          <Link to="/awards">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900">
              View All Awards
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
