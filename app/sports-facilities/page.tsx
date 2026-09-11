import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface SportsData {
  heroTitle?: string;
  heroDescription?: string;
  quoteText?: string;
  overviewText?: string;
  sidePhotoGrid?: any[];
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

export default async function SportsFacilitiesPage() {
  // Fetch dynamic data from Sanity
  const data: SportsData | null = await client.fetch(`*[_type == "sportsFacilitiesPage"][0]`);

  // Fallbacks
  const heroTitle = data?.heroTitle || "Sports Facilities";
  const heroDescription = data?.heroDescription || "World-class physical training infrastructure designed to forge the endurance, stamina, and agility required for the Indian Armed Forces.";
  const quoteText = data?.quoteText || "Physical fitness is a pre-requisite for SSB and a cornerstone of military leadership.";
  const overviewText = data?.overviewText || "Only Minerva Academy offers a fully equipped ecosystem of sports grounds, courts, and dedicated obstacle courses across our vast 10-acre campus. We actively encourage physical fitness among candidates, ensuring they possess the endurance and stamina required to excel in their SSB interviews and subsequent military training.";

  // Safe Landscape Photo Grid Fallbacks
  const photos = data?.sidePhotoGrid || [];
  const photo1 = getSafeImageUrl(photos[0], "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=800&auto=format&fit=crop");
  const photo2 = getSafeImageUrl(photos[1], "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop");
  const photo3 = getSafeImageUrl(photos[2], "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop");
  const photo4 = getSafeImageUrl(photos[3], "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=800&auto=format&fit=crop");

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
            Sports <span className="italic text-minerva-accent">Facilities</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Sticky Landscape Photo Grid Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Overview & Cards */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Overview Box */}
            <div className="bg-white p-8 border-l-4 border-minerva-accent shadow-sm">
              <p className="text-minerva-blue font-serif italic text-base md:text-lg mb-4 font-medium">
                &ldquo;{quoteText}&rdquo;
              </p>
              <p className="text-gray-700 font-sans font-light text-sm md:text-base leading-relaxed">
                {overviewText}
              </p>
            </div>

            {/* Comprehensive Training Grounds Grid */}
            <div>
              <div className="mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Elite Infrastructure</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Comprehensive Training Grounds</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dedicated Obstacle Course",
                    text: "An unmatched, exact replica of the SSB obstacle course. Candidates practice group tasks, command tasks, and the snake race to build muscle memory and confidence."
                  },
                  {
                    title: "Football & Cricket Grounds",
                    text: "Vast open grounds for football and dedicated cricket nets to foster team spirit, physical agility, and competitive sportsmanship among candidates."
                  },
                  {
                    title: "Professional Courts",
                    text: "Fully equipped outdoor Basketball, Volleyball, and Badminton courts available for evening recreation and intensive cardio training."
                  },
                  {
                    title: "Swimming Pool",
                    text: "A pristine on-campus swimming pool essential for building overall physical stamina, lung capacity, and relaxation after rigorous training."
                  },
                  {
                    title: "Gymnasium & Table Tennis",
                    text: "Modern indoor gymnasium equipped with weights and cardio machines, alongside table tennis setups for indoor physical activity."
                  },
                  {
                    title: "Physiotherapy & Medical Clinic",
                    text: "Immediate on-campus medical and physiotherapy support to ensure that candidates recover safely and swiftly from intensive physical exertion."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-lg text-minerva-blue mb-2 font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Sticky Landscape Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6 text-center md:text-left">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Visual Tour</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Sports &amp; Action Glimpses</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full aspect-video bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.01] transition-transform duration-300" style={{ backgroundImage: `url('${photo1}')` }}></div>
                <div className="w-full aspect-video bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.01] transition-transform duration-300" style={{ backgroundImage: `url('${photo2}')` }}></div>
                <div className="w-full aspect-video bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.01] transition-transform duration-300" style={{ backgroundImage: `url('${photo3}')` }}></div>
                <div className="w-full aspect-video bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.01] transition-transform duration-300" style={{ backgroundImage: `url('${photo4}')` }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}