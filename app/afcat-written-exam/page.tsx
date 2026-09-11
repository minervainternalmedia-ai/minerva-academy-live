import Link from "next/link";
import ReservationForm from "@/app/components/ReservationForm";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface AFCATData {
  heroTitle?: string;
  heroDescription?: string;
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

export default async function AFCATWrittenPage() {
  // Fetch dynamic data from Sanity
  const data: AFCATData | null = await client.fetch(`*[_type == "afcatWrittenExam"][0]`);

  // Fallbacks: If Sanity is empty, use default values
  const heroTitle = data?.heroTitle || "AFCAT Written Exam Coaching";
  const heroDescription = data?.heroDescription || "Specialized 6-week intensive preparation for recruitment into the esteemed branches of the Indian Air Force.";

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
              Air Force Common Admission Test
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            {heroTitle.replace("Coaching", "")} <span className="italic text-minerva-accent">Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Side Photo Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Overview, Advantages, Syllabus & Fees */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Introduction & Overview */}
            <div className="font-sans text-gray-700 leading-relaxed font-light space-y-6">
              <p className="text-base font-semibold text-minerva-blue">
                For direct inquiries, please contact our admissions command at +91-8054197300.
              </p>
              <p className="text-base">
                Minerva Academy delivers elite coaching for the AFCAT written examinations, guided by a highly qualified and deeply experienced faculty. Our rigorous standards ensure that every cadet who trains with us develops absolute confidence and mastery over the examination format.
              </p>
              <p className="text-base">
                Beyond comprehensive, subject-by-subject syllabus coverage, we emphasize rigorous practice. Weekly mock tests, analysis of previous years&apos; question papers, and dedicated doubt-clearing sessions allow us to monitor and elevate each student&apos;s trajectory. Our expertly designed study materials and strategic shortcuts enable candidates to maximize their speed and accuracy on exam day.
              </p>
            </div>

            {/* Why Choose Minerva (The 9 Points) */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">The Minerva Advantage</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Why Choose Us For AFCAT Preparation</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm text-gray-700">
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">1. Historic Legacy</strong>
                  <span className="font-light text-[13px]">Established in 1955, we are India&apos;s oldest armed forces preparatory institute with unparalleled success over decades.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">2. Proven Track Record</strong>
                  <span className="font-light text-[13px]">Historically, a significant percentage of officers in the Indian Armed Forces are Minerva alumni.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">3. Unmatched Infrastructure</strong>
                  <span className="font-light text-[13px]">A lush 10-acre pollution-free campus with modern, air-conditioned classrooms and full SSB-like facilities.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">4. Expert Faculty</strong>
                  <span className="font-light text-[13px]">Training is imparted by full-time, permanent subject-matter experts, ensuring consistent and dedicated mentorship.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">5. Fully Equipped Library</strong>
                  <span className="font-light text-[13px]">Access to thousands of relevant books and dedicated, quiet reading rooms open till late hours for self-study.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">6. Motivation &amp; Discipline</strong>
                  <span className="font-light text-[13px]">A strict adherence to the Honour Code, complemented by motivational lectures and movies to build officer-like qualities.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">7. Physical Fitness Integration</strong>
                  <span className="font-light text-[13px]">Access to sports grounds, obstacle courses, and courts to ensure candidates maintain the stamina required for the SSB.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                  <strong className="text-minerva-blue block mb-2">8. Dedicated Girls Hostel</strong>
                  <span className="font-light text-[13px]">Separate, secure on-campus accommodation available exclusively for female AFCAT aspirants.</span>
                </div>
                <div className="bg-white p-5 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                  <strong className="text-minerva-blue block mb-2">9. Exam-Specific Focus</strong>
                  <span className="font-light text-[13px]">Tailored curriculum specifically designed for the AFCAT pattern, differing from NDA or CDS preparations.</span>
                </div>
              </div>
            </div>

            {/* Comprehensive 6-Week Course & Timings */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Course Structure</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Comprehensive 6-Week Module</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 space-y-4 font-sans text-sm text-gray-700 font-light leading-relaxed">
                  <p>Our exhaustive 6-week curriculum is broken down into independent weekly modules. New batches commence every Monday, requiring cadets to arrive and report on Sunday.</p>
                  <p><strong className="font-semibold text-minerva-blue">What&apos;s Included:</strong> Over 150 classroom sessions and 300+ study hours covering the complete syllabus. Students receive an extensive study kit with 11+ books, practice sets, and reference notes.</p>
                  <p><strong className="font-semibold text-minerva-blue">Testing &amp; Revision:</strong> More than 100 worksheets, weekly mock exams, past paper breakdowns, and dedicated current affairs updates ensure total exam readiness.</p>
                </div>
                <div className="md:w-1/2 bg-minerva-blue text-minerva-white p-8 shadow-xl border-l-4 border-minerva-accent">
                  <h3 className="text-xl font-serif font-medium mb-6">Daily Timings &amp; Necessity</h3>
                  <ul className="space-y-4 font-sans text-sm font-light">
                    <li className="border-b border-gray-600 pb-4">
                      <strong className="block text-minerva-accent mb-1 uppercase tracking-wider text-[10px]">Schedule</strong>
                      Classes run Monday to Saturday, 8:00 AM to 5:00 PM (with designated breaks). Sundays are reserved for major mock tests and targeted doubt-clearing.
                    </li>
                    <li>
                      <strong className="block text-minerva-accent mb-1 uppercase tracking-wider text-[10px]">Why Coaching is Critical</strong>
                      With over 300,000 candidates appearing for limited vacancies, the competition is fierce. A single mark dictates selection. Expert guidance, structured study materials, and peer motivation are essential to securing that critical edge.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About AFCAT Exam Information */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Examination Details</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Understanding the AFCAT</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-minerva-blue mb-2 text-[15px] font-serif">What is the AFCAT?</h4>
                  <p className="font-light text-[12px] text-gray-600 leading-relaxed">The Air Force Common Admission Test is conducted bi-annually (February and August) to select officers for all IAF branches (Flying, Technical, and Ground Duty). Applications are exclusively online.</p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-minerva-blue mb-2 text-[15px] font-serif">Eligibility &amp; Pattern</h4>
                  <p className="font-light text-[12px] text-gray-600 leading-relaxed">Graduation is the minimum qualification (specific criteria vary by branch). The exam lasts 2 hours and features 100 objective questions. Correct answers award 3 marks, while 1 mark is deducted for incorrect answers.</p>
                </div>
                <div className="md:col-span-2 bg-white p-5 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-minerva-blue mb-2 text-[15px] font-serif">Syllabus Covered</h4>
                  <div className="font-light text-[12px] text-gray-600 leading-relaxed space-y-2">
                    <p><strong>General Awareness:</strong> History, Geography, Civics, Politics, Current Affairs, Defence, Art, etc.</p>
                    <p><strong>Verbal Ability (English):</strong> Comprehension, Error Detection, Vocabulary, Synonyms/Antonyms.</p>
                    <p><strong>Numerical Ability:</strong> Fractions, Simplification, Average, Profit/Loss, Percentage, Ratio, Simple Interest.</p>
                    <p><strong>Reasoning &amp; Aptitude:</strong> Verbal Skills, Spatial Ability, Logical and Non-verbal reasoning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joining Instructions & Fees */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Investment in Excellence</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">AFCAT Coaching Fees &amp; Charges</h2>
                <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.e.f. 1st January, 2026</p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Fees Table */}
                <div className="w-full md:w-2/3 bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-minerva-primary text-white text-[10px] uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 font-medium w-1/3">Term (6 Weeks)</th>
                        <th className="px-4 py-3 font-medium w-1/4">Charges (INR)</th>
                        <th className="px-4 py-3 font-medium w-auto">Note</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-minerva-blue text-xs">Tuition Fees</td>
                        <td className="px-4 py-3 font-bold text-gray-800 text-xs">₹15,000</td>
                        <td className="px-4 py-3 font-light text-[10px]">Full course curriculum</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-minerva-blue text-xs">Mess Charges</td>
                        <td className="px-4 py-3 font-bold text-gray-800 text-xs">₹14,000</td>
                        <td className="px-4 py-3 font-light text-[10px]">Meals included</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-minerva-blue text-xs">Hostel Charges</td>
                        <td className="px-4 py-3 font-bold text-gray-800 text-xs">₹6,000</td>
                        <td className="px-4 py-3 font-light text-[10px]">On-campus living</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-minerva-blue text-xs">Refundable Security</td>
                        <td className="px-4 py-3 font-bold text-gray-800 text-xs">₹500</td>
                        <td className="px-4 py-3 font-light text-[10px]">Refundable post-course</td>
                      </tr>
                      <tr className="bg-minerva-accent/10">
                        <td className="px-4 py-4 font-bold text-minerva-blue text-xs">Total Package</td>
                        <td className="px-4 py-4 font-bold text-minerva-primary text-sm">₹35,500</td>
                        <td className="px-4 py-4 font-light text-[10px]">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* What to Bring Card */}
                <div className="w-full md:w-1/3 bg-gray-50 p-5 border-l-4 border-minerva-accent text-[11px] font-sans text-gray-700 space-y-3">
                  <h4 className="font-bold uppercase tracking-wider text-minerva-blue">When to Join &amp; What to Bring</h4>
                  <p><strong>When to Join:</strong> We run year-round batches. It is advised to join a few months prior to the exam. Seats are limited and allotted on a first-come, first-served basis.</p>
                  <p><strong>For Class:</strong> No books are required; study materials are provided. Bring personal notebooks and stationery.</p>
                  <p><strong>For Hostel:</strong> Beds, mattresses, and lockers are provided. Cadets must bring their own bed sheets (2), pillow, pillow covers, and thick blankets for winter.</p>
                  <p><strong>Personal Items:</strong> Dress smartly for class. Bring sports shoes, toiletries, and avoid carrying excessive cash or valuables.</p>
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

      {/* DYNAMIC WHATSAPP RESERVATION FORM SECTION */}
      <section className="w-full py-24 bg-[#0a4122] text-minerva-white border-t border-[#092B16]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Register For Admission</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium">AFCAT Written Exam Coaching Application</h2>
          </div>

          <div className="bg-[#2c3144] border border-[#ff671f] p-8 md:p-12 shadow-2xl">
            <ReservationForm />
          </div>
        </div>
      </section>

    </main>
  );
}