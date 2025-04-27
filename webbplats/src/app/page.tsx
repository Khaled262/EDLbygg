import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover opacity-90"
            poster="/construction-site.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Bygg & Renovering i Skåne
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professionella lösningar för ditt hem eller företag - från mindre reparationsarbeten till stora nybyggnationer
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/offert" 
              className="bg-[#6C9C7D] hover:bg-[#5A8A6A] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Begär Offert
            </Link>
            <Link 
              href="/tjanster" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Våra Tjänster
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Tjänster Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0D1B2A]">
            Våra Expertområden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Snickeri',
                description: 'Skräddarsydda möbler och inredningslösningar i hög kvalité',
              },
              {
                title: 'Badrumsrenovering',
                description: 'Modernisering och funktionsoptimering av badrum',
              },
              {
                title: 'Fastighetsskötsel',
                description: 'Helskötsel av fastigheter och underhållstjänster',
              },
              {
                title: 'Byggprojekt',
                description: 'Totalentreprenad för nybyggnation och tillbyggnad',
              },
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#0D1B2A]">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
