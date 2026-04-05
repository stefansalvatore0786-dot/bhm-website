import React from 'react';
import { Users, Target, TrendingUp, Briefcase } from 'lucide-react';

const LeadershipPage = () => {
  const leaders = [
    {
      name: 'Aslam Sher Khan',
      role: 'Managing Director',
      bio: 'Aslam Sher Khan leads BHM Sunrise Pvt. Ltd. as Managing Director, bringing extensive experience in business development, strategic planning, and operational excellence. His leadership focuses on identifying growth opportunities, executing strategic initiatives, and building operational capabilities that drive sustainable business growth.',
      image: 'https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/kuzgs11h_IMG_3953.jpeg',
      responsibilities: [
        'Strategic planning and business development',
        'Operational excellence and execution',
        'Market analysis and opportunity identification',
        'Partnerships and alliance building'
      ]
    },
    {
      name: 'Shaila Parveen',
      role: 'Director',
      bio: 'Shaila Parveen serves as Director of BHM Sunrise Private Limited and holds full signing authority. She plays a key role in governance, compliance, and strategic decision-making, ensuring the company operates with integrity and long-term vision.',
      image: null,
      responsibilities: [
        'Full signing authority',
        'Governance and compliance oversight',
        'Strategic decision-making',
        'Long-term vision and integrity'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Leadership
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Guiding strategic growth and operational excellence
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center tracking-tight">
            Our Leadership Approach
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed text-center mb-16">
            BHM Sunrise is led by experienced directors who bring strategic vision, operational expertise, and commitment to excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Clear strategic direction guides all business decisions.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <Briefcase className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Operational Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Focus on execution excellence and process optimization.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Growth Mindset</h3>
              <p className="text-slate-600 leading-relaxed">
                Continuous focus on identifying opportunities and driving expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {leaders.map((leader, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                {leader.image ? (
                  <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-slate-100 rounded-lg flex items-center justify-center mb-6 border-2 border-slate-300">
                    <Users className="w-32 h-32 text-slate-400" strokeWidth={1} />
                  </div>
                )}
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  {leader.name}
                </h3>
                <p className="text-xl text-slate-600 font-medium mb-6">
                  {leader.role}
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Biography</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {leader.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lg text-slate-600 leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LeadershipPage;
