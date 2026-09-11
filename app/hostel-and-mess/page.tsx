import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface HostelMessData {
  heroTitle?: string;
  heroDescription?: string;
  hostelHeading?: string;
  hostelText1?: string;
  hostelText2?: string;
  hostelNote?: string;
  hostelGallery?: any[];
  messHeading?: string;
  messText1?: string;
  messText2?: string;
  messGallery?: any[];
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

export default async function HostelMessPage() {
  // Fetch dynamic content from Sanity
  const data: HostelMessData | null = await client.fetch(`*[_type == "hostelMessPage"][0]`);

  // Fallbacks if fields are empty in Sanity
  const heroTitle = data?.heroTitle || "Hostel & Mess";
  const heroDescription = data?.heroDescription || "Clean, comfortable accommodation and highly palatable, nutritious meals providing a true home away from home.";

  const hostelHeading = data?.hostelHeading || "Hostel";
  const hostelText1 = data?.hostelText1 || "The Minerva Academy has a very good hostel on the premises providing clean and comfortable accommodation at reasonable cost. Beds and mattresses are provided at the hostel. Candidates planning to stay at the hostel are required to bring their own bedding including pillow.";
  const hostelText2 = data?.hostelText2 || "For summer months (April to October) 2 Bed-Sheets may be sufficient. In winter (November to March) Razais / Quilts or thick blankets are required. 24 hour power backup & hot water. Geyser in all washrooms.";
  const hostelNote = data?.hostelNote || "GIRLS HAVE A SEPARATE ON CAMPUS HOSTEL. A lady warden is present on campus 24 hrs a day for any assistance.";

  const messHeading = data?.messHeading || "MESS";
  const messText1 = data?.messText1 || "The Academy has an excellent mess. Students are served palatable meals which include Breakfast, Mid-Morning Tea, Lunch, Evening Tea and Dinner. Individual tastes are not catered to. The mess is being run on NO PROFIT, NO LOSS BASIS. Charges are fixed in keeping with the prices of provisions and food.";
  const messText2 = data?.messText2 || "";

  // Safe Gallery Images
  const hostelImages = data?.hostelGallery || [];
  const hostelImg = getSafeImageUrl(hostelImages[0], "");

  const messImages = data?.messGallery || [];
  const messImg = getSafeImageUrl(messImages[0], "");

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
              Life at Minerva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Hostel &amp; <span className="italic text-minerva-accent">Mess</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Hostel Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-serif font-medium text-minerva-blue mb-6">{hostelHeading}</h2>
              <div className="space-y-4 font-sans text-sm text-gray-700 font-light leading-relaxed">
                <p>{hostelText1}</p>
                {hostelText2 && <p>{hostelText2}</p>}
                <p className="border-l-4 border-minerva-primary pl-4 py-1 italic bg-gray-50">
                  The new &quot;Vikram Batra Hostel&quot; Inaugurated by his twin brother Vishal Batra on our 60 Anniversary function.
                </p>
                <div className="mt-6 bg-minerva-blue text-minerva-white p-6 shadow-md border-l-4 border-minerva-accent">
                  <p className="font-bold tracking-widest uppercase text-xs mb-2 text-minerva-accent">Secure Campus Facility</p>
                  <p className="font-medium text-sm">
                    {hostelNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Image / Carousel Area */}
            <div 
              className="relative h-[400px] bg-gray-100 border border-gray-200 shadow-lg flex items-center justify-center group overflow-hidden bg-cover bg-center"
              style={hostelImg ? { backgroundImage: `url('${hostelImg}')` } : {}}
            >
              <div className="absolute inset-0 bg-minerva-blue/5 group-hover:bg-minerva-blue/10 transition-colors duration-300"></div>
              
              {!hostelImg && (
                <div className="text-center z-10">
                  <span className="text-minerva-accent mb-2 block">
                    <svg className="w-10 h-10 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <span className="font-serif font-medium text-minerva-blue">Hostel Facility Image Gallery</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Mess Section */}
      <section className="w-full py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image / Carousel Area */}
            <div 
              className="relative h-[450px] bg-white border border-gray-200 shadow-lg flex items-center justify-center group overflow-hidden order-2 lg:order-1 bg-cover bg-center"
              style={messImg ? { backgroundImage: `url('${messImg}')` } : {}}
            >
              <div className="absolute inset-0 bg-minerva-blue/5 group-hover:bg-minerva-blue/10 transition-colors duration-300"></div>
              
              {!messImg && (
                <div className="text-center z-10">
                  <span className="text-minerva-accent mb-2 block">
                    <svg className="w-10 h-10 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <span className="font-serif font-medium text-minerva-blue">Mess &amp; Dining Image Gallery</span>
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-medium text-minerva-blue mb-6 uppercase tracking-wider">{messHeading}</h2>
              <div className="space-y-6 font-sans text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  {messText1}
                </p>
                {messText2 && <p>{messText2}</p>}

                <div className="mt-8">
                  <h3 className="text-lg font-serif font-medium text-minerva-blue mb-4">Mess Timings:</h3>
                  
                  <div className="bg-white border border-gray-200 shadow-sm divide-y divide-gray-100">
                    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-minerva-primary">Breakfast</span>
                      <span className="text-gray-600">6:45am to 7:45am</span>
                    </div>
                    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-minerva-primary">Tea Break</span>
                      <span className="text-gray-600">11am to 11:15am</span>
                    </div>
                    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-minerva-primary">Lunch</span>
                      <span className="text-gray-600">1:00pm to 2:15pm</span>
                    </div>
                    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-minerva-primary">Tea Break</span>
                      <span className="text-gray-600">3:45pm to 4:15pm</span>
                    </div>
                    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors bg-minerva-primary/5">
                      <span className="font-bold text-minerva-primary">Dinner</span>
                      <span className="text-minerva-accent font-semibold">7:30pm to 9:00pm</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}