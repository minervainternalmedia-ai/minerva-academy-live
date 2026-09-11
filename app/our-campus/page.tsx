import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface OurCampusData {
  heroTitle?: string;
  heroDescription?: string;
  sidePhotoGrid?: any[];
  campusGallery?: any[];
}

// BULLETPROOF IMAGE FETCHER
function getSafeImageUrl(imageRef: any, fallbackUrl: string) {
  if (!imageRef || !imageRef.asset) return fallbackUrl;
  try {
    return urlFor(imageRef).url();
  } catch (error) {
    return fallbackUrl;
  }
}

export default async function OurCampusPage() {
  // Fetch dynamic content from Sanity
  const data: OurCampusData | null = await client.fetch(`*[_type == "ourCampusPage"][0]`);

  const heroTitle = data?.heroTitle || "Our Historic Campus";
  const heroDescription = data?.heroDescription || "A lush green, pollution-free, 10-acre SSB-like environment offering unmatched infrastructure for comprehensive defense training.";

  // Safe Grid Photos
  const sidePhotos = data?.sidePhotoGrid || [];
  const side1 = getSafeImageUrl(sidePhotos[0], "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop");
  const side2 = getSafeImageUrl(sidePhotos[1], "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop");
  const side3 = getSafeImageUrl(sidePhotos[2], "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop");
  const side4 = getSafeImageUrl(sidePhotos[3], "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop");

  // Bottom Gallery
  const campusGallery = data?.campusGallery || [];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-minerva-blue">
      
      {/* 1. Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Life at Minerva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            {heroTitle}
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Photo Grid */}
      <section className="w-full py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Premium Editorial Text */}
          <div className="lg:w-7/12 font-sans">
            
            {/* Heading 1: Campus Overview */}
            <div className="mb-12">
              <span className="text-minerva-accent tracking-[0.2em] font-sans text-[10px] font-bold uppercase mb-2 block">
                The Academy Grounds
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue mb-4">
                Life at Minerva Academy – Campus, Boarding &amp; Sports Infrastructure
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                Occupying 10 lush green acres in Daon, Mohali (10 km from Chandigarh Sector 17), Minerva Academy provides a disciplined, distraction-free environment that builds the physical stamina, mental toughness, and camaraderie demanded of military officers.
              </p>
            </div>

            {/* Heading 2: Hostels */}
            <div className="mb-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue mb-4">
                Secure On-Campus Accommodation &amp; Hostels
              </h2>
              
              <div className="bg-gray-50 p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl text-minerva-blue mb-2 font-medium">Vikram Batra Boys Hostel</h3>
                <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                  Clean, ventilated boarding facilities equipped with 24-hour power backup, hot water geysers, and complete security. Inaugurated by Vishal Batra, twin brother of PVC Capt. Vikram Batra.
                </p>
              </div>

              <div className="bg-minerva-blue text-white p-8 border-l-4 border-minerva-accent shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl mb-2 font-medium flex items-center gap-3">
                  <span className="bg-minerva-accent w-2 h-2 rounded-full"></span>
                  Dedicated Girls Hostel
                </h3>
                <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed">
                  A completely separate, secure on-campus residential facility supervised 24/7 by a resident lady warden.
                </p>
              </div>
            </div>

            {/* Heading 3: Sports Infrastructure */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue mb-4">
                Physical Fitness &amp; Sports Ground Infrastructure
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-light mb-6">
                Because Services Selection Boards place heavy emphasis on physical stamina and endurance, daily sports are integrated into our routine:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Full-sized football field and cricket practice nets",
                  "Regulation basketball and volleyball courts",
                  "Swimming pool and modern gymnasium",
                  "On-campus medical and physiotherapy clinic",
                  "Specialized obstacle course grounds matching actual SSB testing dimensions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-minerva-primary/10 flex items-center justify-center text-minerva-primary mt-0.5 mr-4">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base text-gray-800 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Sticky 2x2 Photo Grid */}
          <div className="lg:w-5/12">
            <div className="sticky top-24">
              <div className="mb-6">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Visual Tour</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Campus Glimpses</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300 border border-gray-100" style={{ backgroundImage: `url('${side1}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300 border border-gray-100" style={{ backgroundImage: `url('${side2}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300 border border-gray-100" style={{ backgroundImage: `url('${side3}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300 border border-gray-100" style={{ backgroundImage: `url('${side4}')` }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC CAMPUS GALLERY GRID */}
      {campusGallery.length > 0 && (
        <section className="w-full py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Full Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
                Explore The Grounds
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {campusGallery.map((img, idx) => {
                const imgUrl = getSafeImageUrl(img, "");
                if (!imgUrl) return null;
                return (
                  <div 
                    key={idx} 
                    className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden shadow-sm group cursor-pointer"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${imgUrl}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-minerva-blue/0 group-hover:bg-minerva-blue/20 transition-colors duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}