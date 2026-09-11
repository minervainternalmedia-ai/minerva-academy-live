import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface OurCampusData {
  heroTitle?: string;
  heroDescription?: string;
  overviewP1?: string;
  overviewP2?: string;
  overviewP3?: string;
  sidePhotoGrid?: any[];
  facilitiesList?: string[];
  boardingTitle?: string;
  boardingText?: string;
  hostelTitle?: string;
  hostelText?: string;
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

  // Text Fallbacks
  const heroTitle = data?.heroTitle || "Our Historic Campus";
  const heroDescription = data?.heroDescription || "A lush green, pollution-free, 10-acre SSB-like environment offering unmatched infrastructure for comprehensive defense training.";
  
  const overviewP1 = data?.overviewP1 || "Minerva Academy campus provides unmatched infrastructure, spread over 10 acres in lush green, pollution free, SSB like environment. The academy boasts of a state-of-the-art campus, fully equipped with all modern amenities to provide a comfortable and conducive environment for learning.";
  const overviewP2 = data?.overviewP2 || "Our facilities are designed to cater to both the academic and physical training requirements of defense aspirants, replicating the actual testing environments they will face.";
  const overviewP3 = data?.overviewP3 || "";

  const facilitiesList = data?.facilitiesList || [
    "Fully Equipped Library", "Modern IT Lab", "Spacious Air-Conditioned Classrooms",
    "Dedicated SSB Obstacle Course", "Full-size Football Ground", "Basketball Courts",
    "Volleyball & Badminton Courts", "Hygienic Dining Mess", "On-campus Medical Facility",
    "24/7 Power Backup", "Dedicated Study Rooms", "Swimming Pool"
  ];

  const boardingTitle = data?.boardingTitle || "Boarding & Lodging";
  const boardingText = data?.boardingText || "We offer clean, highly palatable and hygienic boarding and lodging facilities on the campus. Beds and mattresses are provided at the hostel. Candidates are required to bring their own bedding.";
  
  const hostelTitle = data?.hostelTitle || "Girls' Hostel Facility";
  const hostelText = data?.hostelText || "A separate secure on-campus hostel facility is available for female candidates with a dedicated lady warden present 24/7 for assistance and security.";

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

      {/* 2. Main Content & Sticky Photo Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Overview & Facilities */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Overview Text */}
            <div className="font-sans text-gray-700 leading-relaxed font-light space-y-6">
              <h2 className="text-3xl font-serif font-medium text-minerva-blue mb-4">Academy Infrastructure</h2>
              <p className="text-base">{overviewP1}</p>
              {overviewP2 && <p className="text-base">{overviewP2}</p>}
              {overviewP3 && <p className="text-base">{overviewP3}</p>}
            </div>

            {/* Facilities List Grid */}
            <div>
              <h3 className="text-2xl font-serif font-medium text-minerva-blue mb-6">World-Class Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilitiesList.map((facility, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-gray-50 border border-gray-100 shadow-sm hover:border-minerva-accent transition-colors">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-minerva-primary/10 flex items-center justify-center text-minerva-primary mr-3">
                      ✓
                    </span>
                    <span className="text-sm font-sans text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Boarding & Lodging */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border-l-4 border-minerva-primary shadow-sm">
                <h3 className="font-serif text-xl text-minerva-blue mb-3 font-medium">{boardingTitle}</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{boardingText}</p>
              </div>

              <div className="bg-minerva-blue text-white p-8 border-l-4 border-minerva-accent shadow-sm">
                <h3 className="font-serif text-xl mb-3 font-medium flex items-center gap-3">
                  <span className="bg-minerva-accent w-2 h-2 rounded-full"></span>
                  {hostelTitle}
                </h3>
                <p className="text-sm text-gray-200 font-light leading-relaxed">{hostelText}</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Sticky Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6 text-center md:text-left">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Visual Tour</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Campus Glimpses</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${side1}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${side2}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${side3}')` }}></div>
                <div className="w-full aspect-square bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${side4}')` }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC CAMPUS GALLERY GRID */}
      {campusGallery.length > 0 && (
        <section className="w-full py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Full Gallery
              </span>
              <h2 className="text-3xl font-serif font-medium text-minerva-blue">
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