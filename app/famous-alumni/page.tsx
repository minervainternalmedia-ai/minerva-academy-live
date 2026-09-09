import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

export default async function FamousAlumni() {
  // Fetch all alumni from Sanity
  const alumni = await client.fetch(`*[_type == "famousAlumni"]`);

  return (
    <main className="min-h-screen bg-[#F4F5F7] flex flex-col pb-32 font-sans">
      
      {/* 1. ELITE HERITAGE HEADER (Clean Deep Green) */}
      <section className="w-full bg-[#092B16] pt-28 pb-20 px-6 relative overflow-hidden shadow-md">
        {/* Very subtle dot pattern, NOT a massive wheel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            <div className="w-12 h-1 bg-[#FF9933]"></div>
            <div className="w-12 h-1 bg-[#FFFFFF]"></div>
            <div className="w-12 h-1 bg-[#138808]"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            Hall of <span className="text-[#D4AF37] italic font-light">Fame</span>
          </h1>
          <p className="text-gray-300 tracking-[0.2em] uppercase text-xs md:text-sm font-medium">
            Honouring the legendary officers of Minerva Academy
          </p>
        </div>
      </section>

      {/* 2. CLASSIC MOTTO SECTION */}
      <section className="w-full max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-[#092B16] leading-relaxed mb-6 font-medium">
          "The safety, honour and welfare of your country come first, always and every time."
        </h2>
        <h3 className="text-lg md:text-xl font-serif italic text-[#D4AF37] mb-8">
          "Nation First, Then Best Grades."
        </h3>
        <div className="w-24 h-[1px] bg-gray-300 mx-auto"></div>
      </section>

      {/* 3. ULTRA-PREMIUM ALUMNI GRID */}
      <section className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {alumni && alumni.length > 0 ? (
            alumni.map((person: any) => (
              <div 
                key={person._id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                
                {/* Image Section - Crystal Clear, NO dark gradients */}
                <div className="relative h-[400px] w-full bg-gray-100 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                    style={{ 
                      backgroundImage: person.image 
                        ? `url('${urlFor(person.image).url()}')` 
                        : `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop')` 
                    }}
                  ></div>
                </div>

                {/* Text Content Box (Clean White Background) */}
                <div className="p-8 flex flex-col flex-grow bg-white relative">
                  
                  {/* Subtle Tricolor border sitting between image and text */}
                  <div className="absolute top-0 left-0 w-full h-1 flex">
                    <div className="h-full flex-1 bg-[#FF9933]"></div>
                    <div className="h-full flex-1 bg-[#FFFFFF]"></div>
                    <div className="h-full flex-1 bg-[#138808]"></div>
                  </div>

                  {person.batch && (
                    <span className="text-[#138808] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">
                      {person.batch}
                    </span>
                  )}
                  
                  <h3 className="text-3xl font-serif text-[#092B16] mb-2 font-bold">
                    {person.name}
                  </h3>
                  
                  {person.achievement && (
                    <span className="text-[#FF671F] text-[11px] tracking-widest uppercase font-bold mb-5 block">
                      {person.achievement}
                    </span>
                  )}

                  <div className="w-12 h-[2px] bg-gray-200 mb-5"></div>
                  
                  {person.description && (
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {person.description}
                    </p>
                  )}
                  
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 tracking-widest uppercase text-sm">Awaiting Alumni Records</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}