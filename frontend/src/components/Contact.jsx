import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@bhmsunrise.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7355252601, +91 8896405786"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Fatehpur, Uttar Pradesh, India"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center tracking-tight">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm">
                  <Icon className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {info.label}
                </p>
                <p className="text-lg text-slate-900">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
