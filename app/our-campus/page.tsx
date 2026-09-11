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

  // EXACT TEXT FALLBACKS AS REQUESTED
  const heroTitle = data?.heroTitle || "Our Campus";
  const heroDescription = data?.heroDescription || "A lush green, pollution-free, 10-acre SSB-like environment offering unmatched infrastructure for comprehensive defense training.";
  
  const overviewP1 = data?.overviewP1 || "The Minerva Academy has its own vast 10 Acre campus with unrivalled infrastructure in terms of state-of-the-art auditorium, electronic apparatus for PABT, Specifically designed obstacle course (that cannot be matched by any other academy) and separate designated grounds for command task, group task, snake race etc.";
  const overviewP2 = data?.overviewP2 || "Judicious candidates always prefer to be coached by specialists. Exhaustive coaching cannot be conducted without proper equipment and necessary facilities of vast grounds and trees for outdoor exercises. Minerva is the only Academy possessing these facilities. For indoor classes, our Lecture Hall has seating capacity of over 100 candidates. Indoor academic sessions are well supported by Modern Audio Visual Technological aids like LCD Projector, High Powered P.A. Equipments, and captive power source like Generator in case of electricity failure.";
  const overviewP3 = data?.overviewP3 || "";

  const facilitiesList = data?.facilitiesList?.length ? data.facilitiesList : [
    "Auditorium", "Classrooms", "Vast Grounds for Outdoor Training", "Obstacle courses",
    "Hostel", "Mess", "Library", "Gymnasium", "Swimming Pool", "Physiotherapy & Medical Clinic",
    "Football Grounds", "Cricket Nets", "Table Tennis", "Volley Ball", "Basket Ball Court", "Canteen"
  ];

  const boardingText = data?.boardingText || "Minerva offers excellent on-campus hostel facilities and a large mess with a modern clean kitchen serving palatable meals, to make the boarding and lodging of trainees a very comfortable experience.";
  const hostelText = data?.hostelText || "We have separate on campus hostel accommodation for girls. Prior registration is a must for girls as hostel space is limited.";

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

      {/* 2. Main Content & Photo Grid (Properly Spaced) */}
      <section className="w-full py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Main Text */}
          <div className="lg:w-7/12 font-sans text-gray-700 leading-relaxed font-light space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
              Unrivalled Infrastructure
            </h2>
            <p className="text-base md:text-lg">{overviewP1}</p>
            <p className="text-base md:text-lg">{overviewP2}</p>
            {overviewP3 && <p className="text-base md:text-lg">{overviewP3}</p>}
            
            {/* Boarding and Lodging Block */}
            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 p-8 border-l-4 border-minerva-primary shadow-sm">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">{boardingText}</p>
              </div>

              <div className="bg-minerva-blue text-white p-8 border-l-4 border-minerva-accent shadow-sm">
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">{hostelText}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Photo Grid */}
          <div className="lg:w-5/12">
            <div className="sticky top-24">
              <div className="mb-6">
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

      {/* 3. Facilities Grid (Full Width to Prevent Squishing) */}
      <section className="w-full py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-3">
              Elite Amenities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
              Facilities at Minerva Academy
            </h2>
            <p className="text-gray-500 font-sans mt-4 text-sm max-w-xl mx-auto">
              The self-sustained CCTV secure campus of Minerva Academy houses:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesList.map((facility, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 border border-gray-200 shadow-sm hover:border-minerva-primary hover:shadow-md transition-all">
                <span className="text-minerva-primary font-serif font-bold text-2xl w-8 text-center opacity-80">
                  {idx + 1}
                </span>
                <span className="text-sm font-sans font-medium text-gray-800 tracking-wide">
                  {facility}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC CAMPUS GALLERY GRID */}
      {campusGallery.length > 0 && (
        <section className="w-full py-24 bg-white">
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