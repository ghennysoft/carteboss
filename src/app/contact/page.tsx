"use client"

import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // Gestionnaire pour les changements de formulaire
  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Traiter la soumission du formulaire ici
    console.log('Form data:', formData);
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Banner */}
      <NavBar />

      {/* Contact Section */}
      <section className="py-12 lg:py-24 relative overflow-hidden">
        <img 
          className="absolute top-0 left-0 w-full h-full max-h-116 md:max-h-128" 
          src="fauna-assets/contact/waves-bg-lime-half.png" 
          alt="Background waves" 
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-20">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-sm mb-6">Nous contacter</h1>
              {/* <p className="text-lg text-gray-700 mb-16">x
                We are here to help you make a first move to greener choice.
              </p> */}
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-md">
              <div>
                <form onSubmit={handleSubmit}>
                  {/* Full Name Field */}
                  <label htmlFor="fullName" className="block pl-4 mb-1 text-sm font-medium">
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:to-blue-200 shadow rounded-lg"
                    required
                  />
                  
                  {/* Email Field */}
                  <label htmlFor="email" className="block pl-4 mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:to-blue-200 shadow rounded-lg"
                    required
                  />
                  
                  {/* Company Field */}
                  <label htmlFor="company" className="block pl-4 mb-1 text-sm font-medium">
                    <span>Message</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:to-blue-200 shadow rounded-lg"
                  ></textarea>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-gray-900 bord bg-blue-950 hover:bg-orange-300 rounded-l transition duration-200 cursor-pointer"
                  >
                    <span className="mr-2">Soumettre</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="">
                      <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;