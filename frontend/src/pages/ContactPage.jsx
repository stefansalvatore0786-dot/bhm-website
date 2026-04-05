import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get in touch with our team for inquiries, partnerships, or more information
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                Whether you're interested in learning more about our business, exploring partnership 
                opportunities, or have any inquiries, we'd love to hear from you. Our team is ready 
                to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                    <a href="mailto:contact@bhmsunrise.com" className="text-lg text-slate-600 hover:text-slate-900 transition-colors">
                      contact@bhmsunrise.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:+917355252601" className="block text-lg text-slate-600 hover:text-slate-900 transition-colors">
                        +91 7355252601
                      </a>
                      <a href="tel:+917398187786" className="block text-lg text-slate-600 hover:text-slate-900 transition-colors">
                        +91 7398187786
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                    <p className="text-lg text-slate-600">
                      Fatehpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-slate-50 p-10 rounded-lg">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h4>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-medium"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Looking Forward to Connecting
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            At BHM Sunrise Pvt. Ltd., we value every inquiry and conversation. Whether you're a potential 
            partner, investor, or simply interested in learning more about our business, we're here to help. 
            Reach out to us, and let's explore opportunities together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
