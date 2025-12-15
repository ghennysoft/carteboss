"use client"

import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

const About = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Header */}
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="fauna-assets/about/lines.svg" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8 text-blue-950">Qui sommes-nous</h1>
            <p className="text-2xl text-black font-medium mb-10">
              <b>BOSS</b> est une entreprise qui fournit des cartes de visite virtuel
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-4xl lg:text-6xl">Notre vision</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt asperiores pariatur, fuga dolores cumque iure doloremque dolorem voluptate adipisci cupiditate exercitationem ex quos suscipit reiciendis beatae natus molestiae veritatis.  
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-4xl lg:text-6xl">Notre mission</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt asperiores pariatur, fuga dolores cumque iure doloremque dolorem voluptate adipisci cupiditate exercitationem ex quos suscipit reiciendis beatae natus molestiae veritatis.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-6">Notre équipe</h1>
              {/* <p className="text-lg text-gray-700">Notre philosophie est simple – fourni des carte pro et accessible.</p> */}
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block" src="fauna-assets/career/team-members-photos.png" alt="Our team members" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;