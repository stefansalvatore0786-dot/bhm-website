import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center tracking-tight">
          About BHM Sunrise
        </h2>
        
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>
            BHM Sunrise Pvt Ltd is a growth-focused company engaged in real estate development 
            and strategic investments.
          </p>
          
          <p>
            With a long-term vision, we focus on building valuable assets while supporting 
            emerging ventures through structured capital and guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
