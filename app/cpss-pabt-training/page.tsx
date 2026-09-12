import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ReservationForm from "@/app/components/ReservationForm";

export const revalidate = 0;

interface CPSSData {
  heroTitle?: string;
  heroDescription?: string;
  overviewParagraph1?: string;
  overviewParagraph2?: string;
  infoCards?: {
    card1Title?: string;
    card1Text?: string;
    card2Title?: string;
    card2Text?: string;
    card3Title?: string;
    card3Text?: string;
  };
  feeStructure?: {
    trainingFee?: string;
    combinedFee?: string;
  };
  sidePhotoGrid?: any[];
}

// BULLETPROOF IMAGE FETCHER: Prevents the website from crashing if Sanity images are empty
function getSafeImageUrl(imageRef: any, fallbackUrl: string) {
  if (!imageRef || !imageRef.asset) return fallbackUrl;
  try {
    return urlFor(imageRef).url();
  } catch (error) {
    return fallbackUrl;
  }
}

export default async function CPSSPage() {
  // Fetch dynamic data from Sanity
  const data: CPSSData | null = await client.fetch(`*[_type == "cpssPabtPage"][0]`);

  // Fallbacks: If Sanity is empty, use default values
  const heroTitle = data?.heroTitle || "CPSS & PABT Training";
  const heroDescription = data?.heroDescription || "Essential testing for all flying duties in the Indian Air Force, Army, Navy, and Coast Guard. Candidates get only one chance in a lifetime.";
  
  const p1 = data?.overviewParagraph1 || "All candidates for flying duties are put through the PABT and CPSS test. All NDA, CDSE candidates who have given I.A.F. as their first or second preference are called for this test. This test is used to screen pilots for all flying branches of IAF, Army, Navy and the Coast Guard.";
  const p2 = data?.overviewParagraph2 || "Our candidates have maintained 100% success rate in these tests. This test can only be given once. Computerized Pilot Selection System Test, also known as CPSS test, is now in full effect along with the well known PABT test to select the best candidates for Indian Air Force flying branch that was in use for decades.";

  const card1Title = data?.infoCards?.card1Title || "CPSS + PABT Training at Minerva";
  const card1Text = data?.infoCards?.card1Text || "Training for CPSS at Minerva Academy will prepare the candidate for the CPSS experience at AFSB with absolute confidence, focus, and correct approach.";
  
  const card2Title = data?.infoCards?.card2Title || "What is CPSS?";
  const card2Text = data?.infoCards?.card2Text || "It is an intelligent tool kit and aptitude testing to replace PABT, developed by DRDO and the Defense Institute of Psychological Research.";
  
  const card3Title = data?.infoCards?.card3Title || "Only One Chance";
  const card3Text = data?.infoCards?.card3Text || "The candidate will get only one chance in CPSS test. If failed, the test cannot be taken again and the candidate can never be eligible for flying.";

  const trainingFee = data?.feeStructure?.trainingFee || "4,000";
  const combinedFee = data?.feeStructure?.combinedFee || "5,000";

  // 100% Safe Photo Grid Fallbacks (Will NEVER crash the server)
  const photos = data?.sidePhotoGrid || [];
  const photo1 = getSafeImageUrl(photos[0], "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop");
  const photo2 = getSafeImageUrl(photos[1], "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop");
  const photo3 = getSafeImageUrl(photos[2], "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop");
  const photo4 = getSafeImageUrl(photos[3], "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop");

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-minerva-blue">
      
      {/* 1. Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            {heroTitle.replace("Training", "")} <span className="italic text-minerva-accent">Training</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Side Photo Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Text, Cards, and Fees */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Intro Text */}
            <div>
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Crucial Screening for Flying Branches
              </span>
              <div className="text-gray-700 font-sans font-light text-sm md:text-base leading-relaxed space-y-4">
                <p>{p1}</p>
                <p>{p2}</p>
              </div>
            </div>

            {/* 3 Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg text-minerva-blue mb-3 font-medium">{card1Title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{card1Text}</p>
              </div>
              <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg text-minerva-blue mb-3 font-medium">{card2Title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{card2Text}</p>
              </div>
              <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg text-minerva-blue mb-3 font-medium">{card3Title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{card3Text}</p>
              </div>
            </div>

            {/* Fees Table */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Investment</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">CPSS / PABT Training Fees</h2>
                <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.E.F. 1st January, 2026</p>
              </div>

              <div className="bg-white shadow-lg border border-gray-200 overflow-hidden font-sans">
                <table className="w-full text-left text-sm">
                  <thead className="bg-minerva-primary text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-medium w-1/3">Training Type</th>
                      <th className="px-6 py-4 font-medium w-1/4">Charges (RS/INR)</th>
                      <th className="px-6 py-4 font-medium w-auto">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-minerva-blue">Minerva Students</td>
                      <td className="px-6 py-5 font-bold text-minerva-primary">₹{trainingFee}</td>
                      <td className="px-6 py-5 font-light text-xs">CPSS / PABT Training</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-5 font-semibold text-minerva-blue">Outsiders</td>
                      <td className="px-6 py-5 font-bold text-minerva-primary">₹{combinedFee}</td>
                      <td className="px-6 py-5 font-light text-xs">Lodging not included (No mess and stay)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Side Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6 text-center md:text-left">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Glimpses of Training</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Simulator &amp; Campus Life</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 md:h-56 bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${photo1}')` }}></div>
                <div className="h-48 md:h-56 bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${photo2}')` }}></div>
                <div className="h-48 md:h-56 bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${photo3}')` }}></div>
                <div className="h-48 md:h-56 bg-gray-200 bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: `url('${photo4}')` }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC WHATSAPP RESERVATION FORM SECTION */}
      <section className="w-full py-24 bg-[#0a4122] text-minerva-white border-t border-[#092B16]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Register For Admission
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-2 leading-tight">
              CPSS/PABT Coaching Application and Seat Reservation Form
            </h2>
          </div>

          <div className="bg-[#2c3144] border border-[#ff671f] p-8 md:p-12 shadow-2xl">
            <ReservationForm />
          </div>
        </div>
      </section>

    </main>
  );
}