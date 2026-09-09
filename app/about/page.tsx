import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Force Next.js to pull the latest published data on every request
export const revalidate = 0;

export default async function AboutFounderPage() {
  // Fetch all founders from the Sanity backend database
  const founders = await client.fetch(`*[_type == "founder"]`);

  return (
    <main className="min-h-screen flex flex-col bg-minerva-white text-minerva-blue">
      
      {/* Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Our Heritage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            About The <span className="italic text-minerva-accent">Founders</span>
          </h1>
        </div>
      </section>

      {/* Profiles Section (Dynamic from Sanity) */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {founders && founders.length > 0 ? (
            founders.map((founder: any, index: number) => {
              // Alternate layout order: even items image on right, odd items image on left
              const isEven = index % 2 === 0;

              return (
                <div key={founder._id || index}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* Text Area */}
                    <div className={`md:col-span-8 ${isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                      <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-primary mb-2">
                        {founder.name}
                      </h2>
                      <h3 className="text-sm font-sans font-bold text-minerva-blue mb-6 uppercase tracking-wider">
                        {founder.role}
                      </h3>
                      <p className="font-sans font-light text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                        {founder.bio}
                      </p>
                    </div>

                    {/* Image Area */}
                    <div className={`md:col-span-4 flex justify-center ${isEven ? 'order-1 md:order-2 md:justify-end' : 'order-1 md:order-1 md:justify-start'}`}>
                      {founder.image ? (
                        <div className="w-48 h-64 bg-gray-100 border border-gray-200 shadow-md relative overflow-hidden">
                          <img 
                            src={urlFor(founder.image).url()} 
                            alt={founder.name} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-48 h-64 bg-gray-100 border border-gray-200 shadow-md flex items-center justify-center">
                          <span className="text-xs text-gray-400 font-sans uppercase tracking-widest">[ Image ]</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Elegant Divider (Show between profiles if not the last one) */}
                  {index < founders.length - 1 && (
                    <div className="flex items-center justify-center mt-16">
                      <div className="h-[1px] w-full bg-minerva-primary/20"></div>
                      <div className="mx-4 text-minerva-primary border border-minerva-primary rounded-full p-1">
                        <div className="w-2 h-2 rounded-full bg-minerva-primary"></div>
                      </div>
                      <div className="h-[1px] w-full bg-minerva-primary/20"></div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-12">No founders published yet. Go to /studio to add profiles.</p>
          )}

        </div>
      </section>

      {/* Legacy Call to Action */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-minerva-blue mb-6">Become a Part of This Historic Legacy</h2>
          <p className="font-sans font-light text-gray-600 mb-8">
            Experience the standard of excellence established over 70 years ago.
          </p>
          <Link className="inline-block bg-minerva-accent text-minerva-white px-8 py-4 text-xs font-sans font-bold tracking-widest uppercase hover:bg-minerva-primary hover:text-white transition-all duration-300 shadow-md" href="/contact">
            Join Minerva Academy
          </Link>
        </div>
      </section>

    </main>
  );
}