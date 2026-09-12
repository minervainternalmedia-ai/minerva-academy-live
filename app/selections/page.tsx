import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface SelectionItem {
  _id: string;
  name: string;
  examCleared: string;
  year: string;
  image?: any;
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

export default async function SelectionsPage() {
  // Fetch dynamic selections from Sanity
  const selections: SelectionItem[] = await client.fetch(
    `*[_type == "studentSelection"] | order(_createdAt desc)`
  );

  return (
    <main className="min-h-screen flex flex-col bg-gray-950 text-white">
      
      {/* 1. Ultra-Classy Header Banner */}
      <section className="relative w-full py-28 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Hall of Fame
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Our <span className="italic text-minerva-accent">Selections</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            With over 35,000 successful commissions, every fourth officer in the Indian Armed Forces has walked these historic grounds. Meet our recent stars.
          </p>
        </div>
      </section>

      {/* 2. PREMIUM POSTER / GRAPHIC SHOWCASE GRID */}
      <section className="w-full py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Roll of Honour
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
              Recommended Candidates &amp; Achievers
            </h2>
            <p className="text-sm font-sans text-gray-400 mt-3 max-w-xl mx-auto font-light">
              Official recommendation posters uploaded directly from the backend dashboard.
            </p>
          </div>

          {selections.length === 0 ? (
            <div className="text-center py-20 bg-gray-900 border border-gray-800">
              <p className="text-gray-400 text-sm">No selection posters uploaded yet. Add them in your Sanity Studio dashboard under Student Selections!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selections.map((item) => {
                const posterUrl = getSafeImageUrl(item.image, "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop");
                return (
                  <div 
                    key={item._id} 
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 group hover:border-minerva-accent transition-all duration-300 flex flex-col"
                  >
                    {/* High-Resolution Graphic / Poster Frame */}
                    <div className="relative w-full aspect-[4/5] bg-black overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${posterUrl}')` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <span className="text-minerva-accent text-[11px] font-sans font-bold tracking-widest uppercase block mb-1 bg-black/60 px-2 py-1 w-fit">
                          {item.examCleared || "Recommended"} {item.year ? `• ${item.year}` : ""}
                        </span>
                        <h3 className="text-xl font-serif font-medium text-white">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. CALL TO ACTION BANNER (FIXED LINK TO CONTACT PAGE) */}
      <section className="w-full py-20 bg-minerva-primary text-minerva-white border-t border-minerva-accent/30 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.4em] uppercase block">
            Your Future Awaits
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
            Will Your Photo Be Next?
          </h2>
          <p className="text-gray-300 font-sans font-light text-base max-w-2xl mx-auto leading-relaxed">
            Start your preparation with the undisputed leaders in defense coaching.
          </p>
          <div className="pt-4">
            {/* LINK CHANGED TO /contact */}
            <Link 
              href="/contact" 
              className="inline-block bg-minerva-accent text-white font-sans font-bold tracking-[0.2em] text-xs uppercase px-10 py-4 hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-lg"
            >
              Join Minerva Academy →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}