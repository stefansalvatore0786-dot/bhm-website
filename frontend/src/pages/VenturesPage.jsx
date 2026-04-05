import React from 'react';
import { GraduationCap, BookOpen, Cpu } from 'lucide-react';

const VenturesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Ventures
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Supporting emerging ventures across education and technology
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xl text-slate-600 leading-relaxed">
            BHM Sunrise Pvt. Ltd. supports and is connected with emerging ventures across multiple sectors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                House of IHM
              </h2>
              <p className="text-2xl text-slate-600 font-medium mb-8">
                Education and Innovation Ecosystem
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                House of IHM represents our commitment to education and innovation, creating learning opportunities and fostering skill development.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Dedicated to delivering quality education and creating learning environments that foster growth and innovation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Innovation Hub</h3>
                <p className="text-slate-600 leading-relaxed">
                  Providing a platform for students and educators to collaborate and develop innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">EdTech Platform</h3>
                <p className="text-slate-600 leading-relaxed">
                  Skillari is an educational technology platform designed to connect students and educators in meaningful ways.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Connecting Stakeholders</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bridging the gap between students seeking quality education and educators offering valuable knowledge.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <BookOpen className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Skillari
              </h2>
              <p className="text-2xl text-slate-600 font-medium mb-8">
                EdTech Platform Connecting Students and Educators
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                A technology-driven platform that connects students with educators, making quality education more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-lg mb-8">
                <Cpu className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Omnia
              </h2>
              <p className="text-2xl text-slate-600 font-medium mb-8">
                Future-Focused Technology and AI Innovation
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Omnia represents our commitment to technology innovation and artificial intelligence.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technology Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Exploring and implementing innovative technologies that transform industries and create new opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">AI & Future Tech</h3>
                <p className="text-slate-600 leading-relaxed">
                  Developing solutions that leverage AI capabilities to solve real-world problems and improve efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenturesPage;
