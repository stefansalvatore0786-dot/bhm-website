import React from 'react';
import { User } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Mohd Aslam",
      title: "Director, Strategic Operations"
    },
    {
      name: "Shaila Parveen",
      title: "Director, Administration & Growth"
    }
  ];

  return (
    <section id="leadership" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 text-center tracking-tight">
          Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-16 h-16 text-slate-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-slate-600 text-lg">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
