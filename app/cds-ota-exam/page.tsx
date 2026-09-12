import Link from "next/link";
import ReservationForm from "@/app/components/ReservationForm";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface CDSData {
  heroTitle?: string;
  heroDescription?: string;
  overviewParagraph1?: string;
  overviewParagraph2?: string;
  overviewParagraph3?: string;
  operationalDetails?: {
    dailyTimingsText?: string;
    whyCoachingText?: string;
  };
  feeStructure?: {
    tuition?: string;
    mess?: string;
    hostel?: string;
    security?: string;
    total?: string;
  };
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

export default async function CDSOtaPage() {
  // Fetch dynamic data from Sanity
  const data: CDSData | null = await client.fetch(`*[_type == "cdsOtaPage"][0]`);

  // Fallbacks: If Sanity is empty, use default values
  const heroTitle = data?.heroTitle || "CDS, OTA Written Exam Coaching";
  const heroDescription = data?.heroDescription || "UPSC-CDS/OTA (Combined Defence Service Examination/Officers Training Academy) Written Examination Coaching.";
  
  const p1 = data?.overviewParagraph1 || "Minerva Academy is offering coaching for the UPSC-CDS/OTA written examinations. The faculty at Minerva is highly qualified and vastly experienced in successfully coaching students for written examinations. The standards of excellence followed by Minerva ensure that each student who opts for coaching with us feels confident and well prepared for the exam.";
  const p2 = data?.overviewParagraph2 || "Not only do we cover the entire syllabus subject by subject as per UPSC, we also prepare our students with mock tests, previous year question papers, and doubt clearing sessions, which are conducted each week to monitor each student's progress. Mock test/weekly test results are also discussed to pin point where the student may be lacking. This ensures that the students know what to expect in the examination, how to approach the examination, manage time efficiently and get the best possible results.";
  const p3 = data?.overviewParagraph3 || "Experienced and updated faculty teaches students how to handle the examination specifically; they focus on the format and type of questions likely to be asked in the exam. Students can learn many formulae and shortcuts to get quick and accurate answers, while attempting the examination. Apart from this, we provide extensively researched study material which helps students to easily access, organize and systematically approach the vast syllabus.";

  const timingsText = data?.operationalDetails?.dailyTimingsText || "Classes are held from Monday to Saturday from 8 AM to 5 PM with breaks for morning and afternoon tea and lunch. Sunday is reserved for mock tests and weekly tests, extra classes and doubt clearing sessions.";
  const coachingText = data?.operationalDetails?.whyCoachingText || "With more than 3,00,000 students sitting for this exam and the number increasing drastically year by year, competition is fierce. Just one mark difference could mean selection or rejection. Minerva Academy gives you the vital competitive edge required to succeed.";

  // 100% Safe Photo Grid Fallbacks
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
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Combined Defence Service Examination
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            {heroTitle.replace("Exam Coaching", "")} <span className="italic text-minerva-accent">Exam Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Side Photo Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Overview, Timings & Fees */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Overview Text */}
            <div className="font-sans text-gray-700 leading-relaxed font-light space-y-6">
              <p className="text-base">{p1}</p>
              <p className="text-base">{p2}</p>
              <p className="text-base">{p3}</p>
            </div>

            {/* Daily Timings & Why Coaching Is A Must */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Operational Details</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Daily Timings &amp; Necessity of Coaching</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif font-medium text-minerva-blue mb-4">Daily Timings</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {timingsText}
                  </p>
                </div>
                <div className="bg-white p-6 border-l-4 border-minerva-accent shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif font-medium text-minerva-blue mb-4">Why Coaching Is A Must</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {coachingText}
                  </p>
                </div>
              </div>
            </div>

            {/* FEES & CHARGES SECTION WITH 3 COURSE OPTIONS */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Investment in Excellence</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">CDS Coaching Fees &amp; Charges</h2>
                <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.e.f. 1st January, 2026</p>
              </div>

              <div className="space-y-10">
                
                {/* 1. CDS - IMA */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-minerva-primary mb-3 uppercase tracking-widest">1. CDS - IMA (6 Weeks Course)</h3>
                  <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-minerva-primary text-white text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-medium w-1/3">Fee Component</th>
                          <th className="px-6 py-4 font-medium w-1/4">Charges (INR)</th>
                          <th className="px-6 py-4 font-medium w-auto">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Tuition Fees</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹15,000</td>
                          <td className="px-6 py-4 font-light text-xs">Comprehensive syllabus coverage</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Mess Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹14,000</td>
                          <td className="px-6 py-4 font-light text-xs">Hygienic meals included</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Hostel Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹6,000</td>
                          <td className="px-6 py-4 font-light text-xs">Secure campus accommodation</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Refundable Security</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹500</td>
                          <td className="px-6 py-4 font-light text-xs">Refundable upon completion</td>
                        </tr>
                        <tr className="bg-minerva-accent/10 hover:bg-minerva-accent/20 transition-colors">
                          <td className="px-6 py-5 font-bold text-minerva-blue">Total Charges</td>
                          <td className="px-6 py-5 font-bold text-minerva-primary text-lg">₹35,500</td>
                          <td className="px-6 py-5 font-light text-xs">Complete package</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 2. CDS - OTA */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-minerva-primary mb-3 uppercase tracking-widest">2. CDS - OTA (6 Weeks Course)</h3>
                  <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-minerva-primary text-white text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-medium w-1/3">Fee Component</th>
                          <th className="px-6 py-4 font-medium w-1/4">Charges (INR)</th>
                          <th className="px-6 py-4 font-medium w-auto">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Tuition Fees</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹13,000</td>
                          <td className="px-6 py-4 font-light text-xs">Comprehensive syllabus coverage</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Mess Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹14,000</td>
                          <td className="px-6 py-4 font-light text-xs">Hygienic meals included</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Hostel Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹6,000</td>
                          <td className="px-6 py-4 font-light text-xs">Secure campus accommodation</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Refundable Security</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹500</td>
                          <td className="px-6 py-4 font-light text-xs">Refundable upon completion</td>
                        </tr>
                        <tr className="bg-minerva-accent/10 hover:bg-minerva-accent/20 transition-colors">
                          <td className="px-6 py-5 font-bold text-minerva-blue">Total Charges</td>
                          <td className="px-6 py-5 font-bold text-minerva-primary text-lg">₹33,500</td>
                          <td className="px-6 py-5 font-light text-xs">Complete package</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. CDS + AFCAT */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-minerva-primary mb-3 uppercase tracking-widest">3. CDS + AFCAT (6 Weeks Course)</h3>
                  <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-minerva-primary text-white text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-medium w-1/3">Fee Component</th>
                          <th className="px-6 py-4 font-medium w-1/4">Charges (INR)</th>
                          <th className="px-6 py-4 font-medium w-auto">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Tuition Fees</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹16,000</td>
                          <td className="px-6 py-4 font-light text-xs">Comprehensive syllabus coverage</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Mess Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹14,000</td>
                          <td className="px-6 py-4 font-light text-xs">Hygienic meals included</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Hostel Charges</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹6,000</td>
                          <td className="px-6 py-4 font-light text-xs">Secure campus accommodation</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-minerva-blue">Refundable Security</td>
                          <td className="px-6 py-4 font-bold text-gray-800">₹500</td>
                          <td className="px-6 py-4 font-light text-xs">Refundable upon completion</td>
                        </tr>
                        <tr className="bg-minerva-accent/10 hover:bg-minerva-accent/20 transition-colors">
                          <td className="px-6 py-5 font-bold text-minerva-blue">Total Charges</td>
                          <td className="px-6 py-5 font-bold text-minerva-primary text-lg">₹36,500</td>
                          <td className="px-6 py-5 font-light text-xs">Complete package</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Side Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6 text-center md:text-left">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Glimpses of Training</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Campus Life &amp; Activities</h3>
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
              CDS, OTA Coaching Application and Seat Reservation Form
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