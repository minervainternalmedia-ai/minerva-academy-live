import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

export default async function OurPledge() {
  // Fetch the pledge data from Sanity
  const pledgeData = await client.fetch(`*[_type == "ourPledge"][0]`);

  return (
    <main className="min-h-screen bg-[#F4F5F7] flex flex-col pb-24 font-sans">
      
      {/* 1. ELITE HERITAGE HEADER (Matching our other pages) */}
      <section className="w-full bg-[#092B16] pt-28 pb-20 px-6 relative overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-1 mb-6">
            <div className="w-10 h-1 bg-[#FF9933]"></div>
            <div className="w-10 h-1 bg-[#FFFFFF]"></div>
            <div className="w-10 h-1 bg-[#138808]"></div>
          </div>
          <span className="text-[#D4AF37] font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            The Minerva Code
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">
            Our <span className="text-[#D4AF37] italic font-light">Pledge</span>
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. SIDE-BY-SIDE CONTENT SECTION */}
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-20 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Silhouette Image Container */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#138808]/10 to-transparent rounded-full blur-2xl"></div>
          
          {pledgeData?.backgroundImage ? (
            <img 
              src={urlFor(pledgeData.backgroundImage).url()} 
              alt="Minerva Academy Pledge" 
              className="w-full h-auto max-h-[600px] object-contain drop-shadow-xl relative z-10"
            />
          ) : (
            <div className="w-full aspect-square bg-white border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl shadow-inner">
              <span className="text-gray-400 font-sans tracking-widest uppercase text-xs">Upload Silhouette Image in Sanity</span>
            </div>
          )}
        </div>

        {/* Right Side: Text Box with Heritage Styling */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100 relative">
          
          {/* Subtle Tricolor Top Border on the Card */}
          <div className="absolute top-0 left-0 w-full h-1.5 flex rounded-t-2xl overflow-hidden">
            <div className="h-full flex-1 bg-[#FF9933]"></div>
            <div className="h-full flex-1 bg-[#FFFFFF]"></div>
            <div className="h-full flex-1 bg-[#138808]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-[#092B16] mb-6 font-bold leading-tight">
            {pledgeData?.heading || "Our Commitment to the Nation"}
          </h2>
          
          <div className="w-12 h-[2px] bg-[#FF671F] mb-6"></div>

          {pledgeData?.pledgeText ? (
            <p className="text-gray-700 font-sans text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
              {pledgeData.pledgeText}
            </p>
          ) : (
            <p className="text-gray-700 font-sans text-base md:text-lg font-light leading-relaxed">
              We will be offering all wards of our defence forces heroes (men and women of the Indian armed forces who have either been martyred or disabled in any theatre of encounter / war) a full scholarship including boarding and lodging for any of the courses offered at Minerva Academy. We pledge to provide them with the finest training available for entry into the armed forces, by the best, most experienced and highly qualified faculty at Minerva. We pledge to help them emulate their noble parents, or go even further by becoming commissioned officers in the Indian Armed Forces.
            </p>
          )}

          {pledgeData?.signature && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <span className="text-[#092B16] font-serif italic text-lg md:text-xl font-medium block">
                {pledgeData.signature}
              </span>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}