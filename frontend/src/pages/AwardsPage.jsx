import React, { useState } from 'react';
import { Award, X, ZoomIn } from 'lucide-react';

const AwardsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'Kavi Sammelan Recognition',
      event: 'Dainik Jagran Presents',
      year: '2024',
      date: '9 October 2024',
      location: 'Fatehpur',
      image: 'https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/dw7fcye6_IMG_3868.jpeg',
      sponsor: 'Main Sponsor'
    },
    {
      id: 2,
      title: 'Cyber Journalist Association Award',
      event: 'National Press Day',
      year: '2024',
      date: '16 November 2024',
      image: 'https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/685r0n6n_IMG_3861.jpeg',
      organization: 'Cyber Journalist Association (Punjab)'
    },
    {
      id: 3,
      title: 'MSME Conclave Award',
      event: 'Bharat Samachar Presents',
      year: '2024',
      image: 'https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/3c5auf8t_IMG_3860.jpeg',
      presenter: 'Bharat Samachar'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Recognized for excellence and contribution in business and community initiatives
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xl text-slate-600 leading-relaxed">
            BHM Sunrise Pvt. Ltd. has been recognized for its presence and contribution in business 
            and community initiatives. The company has received recognition at events such as MSME 
            Conclave and other regional platforms, reflecting its growing credibility and engagement.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-square bg-slate-100 overflow-hidden cursor-pointer"
                     onClick={() => setSelectedImage(award)}>
                  <img 
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                    style={{ 
                      imageRendering: '-webkit-optimize-contrast',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white rounded-full p-4 shadow-lg">
                        <ZoomIn className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-slate-600 mb-2 font-medium">
                    {award.event}
                  </p>
                  {award.date && (
                    <p className="text-sm text-slate-500 mb-1">
                      {award.date}
                    </p>
                  )}
                  {award.location && (
                    <p className="text-sm text-slate-500 mb-1">
                      Location: {award.location}
                    </p>
                  )}
                  {award.presenter && (
                    <p className="text-sm text-slate-500">
                      Presented by: {award.presenter}
                    </p>
                  )}
                  {award.organization && (
                    <p className="text-sm text-slate-500">
                      {award.organization}
                    </p>
                  )}
                  {award.sponsor && (
                    <p className="text-sm text-amber-600 font-medium mt-2">
                      {award.sponsor}
                    </p>
                  )}
                  <p className="text-sm text-slate-700 font-bold mt-3">
                    Year: {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600">
              More awards and recognitions will be added as we continue to grow and contribute to the business community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full mb-6">
              <Award className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Recognition & Credibility
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              The recognition and awards received by BHM Sunrise Pvt. Ltd. reflect our commitment to 
              excellence, innovation, and contributing positively to the business community. Each award 
              represents not just an achievement, but a validation of our strategic approach and 
              operational execution.
            </p>

            <p>
              Our active participation in MSME events, business forums, and industry platforms demonstrates 
              our commitment to being engaged members of the business community. These platforms provide 
              opportunities for networking, knowledge sharing, and building partnerships that contribute 
              to our growth and success.
            </p>

            <p>
              As we continue to expand our operations and pursue our strategic objectives, we remain 
              committed to maintaining the highest standards of business conduct, operational excellence, 
              and contribution to the broader business ecosystem.
            </p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors z-50 shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-slate-900" />
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-auto">
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                imageRendering: 'crisp-edges',
                maxHeight: '85vh', 
                objectFit: 'contain' 
              }}
            />
            <div className="mt-8 text-center text-white bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-3">{selectedImage.title}</h3>
              <p className="text-xl text-gray-200 mb-2">{selectedImage.event}</p>
              {selectedImage.date && (
                <p className="text-lg text-gray-300 mb-2">{selectedImage.date}</p>
              )}
              {selectedImage.presenter && (
                <p className="text-gray-300">Presented by: {selectedImage.presenter}</p>
              )}
              {selectedImage.organization && (
                <p className="text-gray-300">{selectedImage.organization}</p>
              )}
              <p className="text-amber-400 font-bold mt-2">Year: {selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsPage;
