"use client"

import { useState, useEffect } from 'react';

const About = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Fermer le menu mobile quand on redimensionne la fenêtre
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Jeu 04 decembre 2025, 08H00
        </p>
      </div>

      {/* Header */}
      <section className="overflow-hidden">
        <nav className="mx-4 py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a href="index.html" className="inline-block">
                <img className="h-8" src="images/logo.svg" alt="Logo" />
              </a>
              
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-4 lg:mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About us</a>
                </li>
                <li className="mr-4 lg:mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a>
                </li>
                <li className="mr-4 lg:mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact us</a>
                </li>
                <li>
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a>
                </li>
              </ul>

              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <div className="hidden md:block">
                    <a href="login.html" className="inline-flex py-2.5 px-4 mr-3 lg:mr-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
                      Login
                    </a>
                    <a href="contact.html" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-white border border-teal-900 hover:border-black bg-teal-900 hover:bg-black rounded-full transition duration-200">
                      Get in touch
                    </a>
                  </div>
                </div>
                
                <button 
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="md:hidden text-teal-900 hover:text-teal-800"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.19995 23.2H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.19995 16H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.19995 8.79999H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50`}>
          <div 
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 bg-violet-900 opacity-20"
          ></div>
          <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between">
              <a href="#!" className="inline-block">
                <img className="h-8" src="fauna-assets/logos/sign-logo-flow.svg" alt="Logo" />
              </a>
              <div className="flex items-center">
                <a href="#!" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
                  Login
                </a>
                <button 
                  onClick={() => setMobileNavOpen(false)}
                  className="ml-6"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="pt-20 pb-12 mb-auto">
              <ul className="flex-col">
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About us</a>
                </li>
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a>
                </li>
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact us</a>
                </li>
                <li>
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <a href="#!" className="inline-flex items-center text-lg font-medium text-teal-900">
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28 8.8L16 17.2L4 8.8" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="ml-2">Newsletter</span>
              </a>
              <div className="flex items-center">
                <a href="#!" className="inline-block mr-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_282_7847)">
                      <path d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z" fill="#022C22"/>
                    </g>
                  </svg>
                </a>
                <a href="#!" className="inline-block mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#!" className="inline-block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="fauna-assets/about/lines.svg" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8">About us</h1>
            <p className="text-2xl text-black font-medium mb-10">
              At Flora&Fauna, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
            </p>
            <a href="#!" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-6xl">About us</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-10">
                  At Flora&Fauna, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
                </p>
                <a href="#!" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300">
                  Read more
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="flex overflow-x-hidden">
            <div className="w-1/3 lg:w-1/5 -ml-32 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-3xl" src="fauna-assets/about/about-image1.png" alt="About Flora&Fauna" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-3xl" src="fauna-assets/about/about-image2.png" alt="Green energy solutions" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-2xl" src="fauna-assets/about/about-image3.png" alt="Sustainable energy" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-2xl" src="fauna-assets/about/about-image4.png" alt="Renewable power" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-2xl" src="fauna-assets/about/about-image5.png" alt="Eco-friendly technology" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-2xl" src="fauna-assets/about/about-image1.png" alt="About Flora&Fauna" />
            </div>
            <div className="w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-2xl" src="fauna-assets/about/about-image2.png" alt="Green energy solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-6">Join our team</h1>
              <p className="text-lg text-gray-700">Our philosophy is simple – make the world a greener place.</p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block" src="fauna-assets/career/team-members-photos.png" alt="Our team members" />
            </div>
          </div>

          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <h3 className="text-3xl font-medium">Open positions</h3>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="sm:flex">
                <div className="relative inline-block w-full max-w-xs mb-4 sm:mb-0 sm:mr-4 bg-white rounded-full">
                  <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <select className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative">
                    <option value="1">All departments</option>
                    <option value="2">Sales</option>
                    <option value="3">Marketing</option>
                  </select>
                </div>
                <div className="relative inline-block w-full max-w-xs bg-white rounded-full">
                  <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <select className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative">
                    <option value="1">All locations</option>
                    <option value="2">USA</option>
                    <option value="3">Europe</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Research and Development Jobs */}
          <div className="mb-16">
            <span className="block font-medium text-gray-600 mb-6">Research and Development (R&D)</span>
            
            {/* Job 1 */}
            <div className="py-6 px-8 mb-4 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row md:justify-between items-start">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl font-medium mb-3">Renewable Energy Researcher</h4>
                  <div className="inline-flex mr-8 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">San Francisco, US</span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Full-Time</span>
                  </div>
                </div>
                <a href="#!" className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100">
                  <span className="mr-1 font-medium">Apply</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Job 2 */}
            <div className="py-6 px-8 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row md:justify-between items-start">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl font-medium mb-3">Materials Scientist</h4>
                  <div className="inline-flex mr-8 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">San Francisco, US</span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Full-Time</span>
                  </div>
                </div>
                <a href="#!" className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100">
                  <span className="mr-1 font-medium">Apply</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Engineering Jobs */}
          <div>
            <span className="block font-medium text-gray-600 mb-6">Engineering</span>
            
            {/* Job 1 */}
            <div className="py-6 px-8 mb-4 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row md:justify-between items-start">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl font-medium mb-3">Renewable Energy Engineer</h4>
                  <div className="inline-flex mr-8 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">San Francisco, US</span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Full-Time</span>
                  </div>
                </div>
                <a href="#!" className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100">
                  <span className="mr-1 font-medium">Apply</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Job 2 */}
            <div className="py-6 px-8 mb-4 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row md:justify-between items-start">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl font-medium mb-3">Solar Engineer</h4>
                  <div className="inline-flex mr-8 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">San Francisco, US</span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Full-Time</span>
                  </div>
                </div>
                <a href="#!" className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100">
                  <span className="mr-1 font-medium">Apply</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Job 3 */}
            <div className="py-6 px-8 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row md:justify-between items-start">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl font-medium mb-3">Wind Energy Engineer</h4>
                  <div className="inline-flex mr-8 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">San Francisco, US</span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Full-Time</span>
                  </div>
                </div>
                <a href="#!" className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100">
                  <span className="mr-1 font-medium">Apply</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div>
        <section>
          <div className="p-4">
            <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                    <div className="max-w-md xl:max-w-none">
                      <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">
                        Learn Frontend Web Development
                      </h1>
                      <p className="text-lg text-white opacity-80">
                        Visit www.pixelrocket.store and learn how to become a frontend web developer
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-4 lg:text-right">
                    <a href="#!" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <section className="relative py-12 lg:py-24 bg-orange-50 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="fauna-assets/footer/waves-lines-left-bottom.png" alt=""/>
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap mb-16 -mx-4">
            <div className="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0">
              <a className="inline-block mb-4" href="#!">
                <img src="images/logo.svg" alt="Logo"/>
              </a>
            </div>
            
            <div className="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="flex flex-wrap -mx-4">
                <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 className="mb-6 font-bold">Platform</h3>
                  <ul>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Solutions</a>
                    </li>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">How it works</a>
                    </li>
                    <li>
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Pricing</a>
                    </li>
                  </ul>
                </div>
                
                <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 className="mb-6 font-bold">Resources</h3>
                  <ul>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Blog</a>
                    </li>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Help Center</a>
                    </li>
                    <li>
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Support</a>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full xs:w-1/3 px-4">
                  <h3 className="mb-6 font-bold">Company</h3>
                  <ul>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">About</a>
                    </li>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Our Mission</a>
                    </li>
                    <li className="mb-4">
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Careers</a>
                    </li>
                    <li>
                      <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-5/12 lg:w-4/12 px-4">
              <div className="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
                <h5 className="text-xl font-medium text-white mb-4">Your Source for Green Energy Updates</h5>
                <p className="text-sm text-white opacity-80 leading-normal mb-10">
                  Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.
                </p>
                <div className="flex flex-col">
                  <input type="email" className="h-12 w-full px-4 py-1 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" placeholder="Your e-mail..."/>
                  <a href="#!" className="h-12 inline-flex mt-3 py-1 px-5 items-center justify-center font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap -mb-3 justify-between">
            <div className="flex items-center mb-3">
              <a href="#!" className="inline-block mr-4 text-black hover:text-lime-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_230_4832)">
                    <path d="M11.5481 19.9999V10.8776H14.6088L15.068 7.32147H11.5481V5.05138C11.5481 4.02211 11.8327 3.32067 13.3104 3.32067L15.1919 3.3199V0.139138C14.8665 0.0968538 13.7496 -9.15527e-05 12.4496 -9.15527e-05C9.735 -9.15527e-05 7.87654 1.65687 7.87654 4.69918V7.32147H4.80652V10.8776H7.87654V19.9999H11.5481Z" fill="currentColor"/>
                  </g>
                </svg>
              </a>
              
              <a href="#!" className="inline-block mr-4 text-black hover:text-lime-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
              
              <a href="#!" className="inline-block text-black hover:text-lime-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            
            <div className="text-center">
              Created by{' '}
              <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="https://www.pixelrocket.store" target="_blank" rel="noopener noreferrer">
                Pixelrocket
              </a>
              {' '}• Distributed by{' '}
              <a className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="https://www.ThemeWagon.store" target="_blank" rel="noopener noreferrer">
                ThemeWagon
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mb-3">© 2024 Flow. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;