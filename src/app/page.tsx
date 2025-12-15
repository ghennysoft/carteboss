"use client"

import Footer from '../components/footer';
import NavBar from '../components/navbar';
import { useState, ReactNode } from 'react';

interface AccordionProps {
  title: string,
  children: ReactNode,
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = 3;

  // Gestionnaire pour le carousel
  const nextSlide = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  // Composant Accordion pour la FAQ
  const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl"
      >
        <div>
          <div className="pr-5">
            <h5 className="text-lg font-medium">{title}</h5>
          </div>
          <div 
            className={`overflow-hidden pr-5 duration-500 ${isOpen ? 'h-auto mt-4' : 'h-0'}`}
          >
            <p className="text-gray-700">{children}</p>
          </div>
        </div>
        <span className="shrink-0">
          {!isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="" className='cursor-pointer'>
              <path d="M12 5.69995V18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="" className='cursor-pointer'>
              <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
    );
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Header */}
      <NavBar />
      
      <div className="relative pt-10 md:pt-14">
        <div className="container mx-auto px-4 relative grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="max-w-lg xl:max-w-xl mx-auto text-center lg:text-left">
            <h1 className="font-heading text-5xl font-bold xs:text-7xl xl:text-7xl text-blue-950 tracking-tight mb-8">
              Soyez professionnel avec une carte de visite numérique
            </h1>
            <p className="max-w-md xl:max-w-none text-lg opacity-80 mb-10">
              Partagez vos informations professionnelles instantanément avec un simple code QR. Moderne, écologique et toujours à jour. 
            </p>
            {/* <a href="#!" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200">
              See our solutions
            </a> */}
          </div>
          <img src="/img-banner.png" className='w-full lg:-mt-10' alt="banner img" />
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 -mx-4 gap-5">
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">500+</h5>
                <span className="text-base lg:text-lg text-gray-700">Utilisateurs</span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold mb-10 sm:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">800+</h5>
                <span className="text-base lg:text-lg text-gray-700">Cartes business partagées</span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">1,500+</h5>
                <span className="text-base lg:text-lg text-gray-700">Clients heureux</span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">15%</h5>
                <span className="text-base lg:text-lg text-gray-700">Reduction Carbone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="p-4 pb-10 bg-white">
        <div className="lg:pt-16 lg:pb-24 lg:px-5 xs:px-8 xl:px-12 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="">
              <h1 className="font-heading text-4xl sm:text-6xl mb-24 text-center mt-10">Pourquoi s&apos;en procurer ?</h1>
              <div className="flex flex-wrap -mx-4">
                {/* EV Charging */}
                <div className="w-full sm:w-1/2 px-4 mb-16 text-center">
                  <div className='flex flex-col items-center bg-amber-100 p-10 rounded-xl'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
                      <circle cx="16" cy="16" r="4" fill="#022C22"/>
                      <circle cx="24" cy="32" r="4" fill="#022C22"/>
                      <circle cx="32" cy="16" r="4" fill="#022C22"/>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Partage instantané</h5>
                      <p className="mb-6">Un simple scan et toutes vos informations sont partagées en une seconde. Plus besoin de chercher vos cartes papier.</p>
                      {/* <a href="#!" className="inline-block text-lg font-medium hover:text-teal-700">Read more</a> */}
                    </div>
                  </div>
                </div>

                {/* Solar Energy */}
                <div className="w-full sm:w-1/2 px-4 mb-16 text-center">
                  <div className='flex flex-col items-center bg-fuchsia-100 p-10 rounded-xl'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
                      <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"/>
                      <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"/>
                      <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"/>
                      <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"/>
                      <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"/>
                      <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"/>
                      <rect x="26.1213" y="27.5355" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5355)" fill="#022C22"/>
                      <rect x="11.9792" y="13.3934" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3934)" fill="#022C22"/>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Toujours à jour</h5>
                      <p className="mb-6">Modifiez vos informations à tout moment. Tous ceux qui ont votre carte verront automatiquement les mises à jour.</p>
                      {/* <a href="#!" className="inline-block text-lg font-medium hover:text-teal-700">Read more</a> */}
                    </div>
                  </div>
                </div>

                {/* Wind Energy */}
                <div className="w-full sm:w-1/2 px-4 mb-16 sm:mb-0 text-center">
                  <div className='flex flex-col items-center bg-gray-200 p-10 rounded-xl'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
                      <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"/>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Sécurisé et privé</h5>
                      <p className="mb-6">Vos données sont protégées et vous contrôlez exactement ce que vous partagez avec chaque contact.</p>
                      {/* <a href="#!" className="inline-block text-lg font-medium hover:text-teal-700">Read more</a> */}
                    </div>
                  </div>
                </div>

                {/* Hydropower */}
                <div className="w-full sm:w-1/2 px-4 text-center">
                  <div className='flex flex-col items-center bg-green-100 p-10 rounded-xl'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
                      <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"/>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Écologique</h5>
                      <p className="mb-6">Zéro papier, zéro déchet. Une solution moderne et responsable pour votre networking professionnel.</p>
                      {/* <a href="#!" className="inline-block text-lg font-medium hover:text-teal-700">Read more</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
              Faites comme les autres, procurez-vous déjà votre carte
            </h1>
            {/* <a href="#!" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200">
              Souscrire
            </a> */}
          </div>
          
          <div className="flex justify-center overflow-x-hidden">
            <div className="w-full lg:w-2/3 px-2 md:px-4">
              <img className="block w-full h-full object-cover rounded-sm" src="/follow-us.webp" alt="Follow" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl mb-6">FAQ</h1>
            <p className="text-gray-700">Questions fréquement posées.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion title="Qui sommes-nous ?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus molestias illo adipisci dolorum quae culpa voluptatum ipsum odio quasi error officiis ab hic, sit nesciunt modi saepe dolorem animi.
            </Accordion>
            
            <Accordion title="Comment souscrire ?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus molestias illo adipisci dolorum quae culpa voluptatum ipsum odio quasi error officiis ab hic, sit nesciunt modi saepe dolorem animi.
            </Accordion>
            
            <Accordion title="Combien de temps dure la souscription ?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus molestias illo adipisci dolorum quae culpa voluptatum ipsum odio quasi error officiis ab hic, sit nesciunt modi saepe dolorem animi.
            </Accordion>
            
            <Accordion title="Comment mettre à jour mes informations ?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus molestias illo adipisci dolorum quae culpa voluptatum ipsum odio quasi error officiis ab hic, sit nesciunt modi saepe dolorem animi.
            </Accordion>
            
            <div className="sm:flex py-10 px-5 sm:px-10 bg-orange-50 rounded-2xl">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#1Ea2fa"/>
                  <path d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z" fill="#022C22"/>
                  <path d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z" fill="#022C22"/>
                  <path d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z" fill="#022C22"/>
                  <path d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z" fill="#022C22"/>
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-medium mb-4">Vous avez toujours des questions ?</h5>
                <p className="text-gray-700">
                  <span>Pour assistance, allez sur la page </span>
                  <a href="/contact" className="inline-block text-black font-medium underline">Nous contacter</a>
                  <span> ou appellez notre service client au </span>
                  <span className="text-black font-medium">(243) xxx xxx xxx.</span>
                  <span> Notre équipe est prêt à vous accompagner.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
                <div 
                  className="flex -mx-4 transition-transform duration-500"
                  style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                >
                  <Image className="block shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" width={60} height={60} alt="Testimonial"/>
                  <Image className="block shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" width={60} height={60} alt="Testimonial"/>
                  <Image className="block shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" width={60} height={60} alt="Testimonial"/>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 px-4">
              <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
                <div 
                  className="flex -mx-4 transition-transform duration-500"
                  style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                >
                  <div className="shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      "Flow transformed my energy use. Efficient, green tech, outstanding service!"
                    </h4>
                    <span className="block text-xl font-medium">Jenny Wilson</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Solar energy service</span>
                  </div>
                  
                  <div className="shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      "Efficient, green tech, outstanding service"
                    </h4>
                    <span className="block text-xl font-medium">John Jones</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">CEO Solar Company</span>
                  </div>
                  
                  <div className="shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      "Flow transformed my energy use, efficient, green tech, outstanding service."
                    </h4>
                    <span className="block text-xl font-medium">James Harrison</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Developer</span>
                  </div>
                </div>
                
                <div>
                  <button 
                    onClick={prevSlide}
                    className="inline-block mr-4 text-gray-700 hover:blue-950"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="">
                      <path d="M24.4 16H7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="inline-block text-gray-700 hover:blue-950"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="">
                      <path d="M7.59998 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};