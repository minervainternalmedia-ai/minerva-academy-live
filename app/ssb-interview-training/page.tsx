import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ReservationForm from "@/app/components/ReservationForm"; // <--- WE IMPORT THE WHATSAPP FORM HERE

export const revalidate = 0;

interface SSBData {
  heroTitle?: string;
  heroDescription?: string;
  durationBadge?: string;
  feeStructure?: {
    tuition?: string;
    mess?: string;
    security?: string;
    total?: string;
  };
  sidePhotoGrid?: any[];
}

export default async function SSBTrainingPage() {
  // Fetch dynamic data from Sanity
  const data: SSBData | null = await client.fetch(`*[_type == "ssbInterviewPage"][0]`);

  // Fallbacks: If Sanity is empty, use default values
  const heroTitle = data?.heroTitle || "SSB Interview";
  const heroDescription =
    data?.heroDescription ||
    "Minerva Academy offers a comprehensive 15-day SSB interview training course, designed to transform candidates into confident officers.";
  const durationBadge = data?.durationBadge || "Flagship 15-Day Program";

  // Fees Fallbacks
  const tuition = data?.feeStructure?.tuition || "18,000";
  const mess = data?.feeStructure?.mess || "9,000";
  const security = data?.feeStructure?.security || "500";
  const total = data?.feeStructure?.total || "27,500";

  // Photo Grid Fallbacks
  const photos = data?.sidePhotoGrid && data.sidePhotoGrid.length >= 4 
    ? data.sidePhotoGrid 
    : null;

  const photo1 = photos ? urlFor(photos[0]).url() : "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop";
  const photo2 = photos ? urlFor(photos[1]).url() : "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop";
  const photo3 = photos ? urlFor(photos[2]).url() : "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop";
  const photo4 = photos ? urlFor(photos[3]).url() : "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop";

  return (
    <main className="min-h-screen flex flex-col bg-minerva-white text-minerva-blue">
      
      {/* 1. Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              {durationBadge}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            {heroTitle} <span className="italic text-minerva-accent">Training</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="w-full py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Rigorous Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue mb-6">
                The Gold Standard in SSB Preparation
              </h2>
              <p className="text-gray-700 font-sans font-light text-base leading-relaxed mb-6">
                Our flagship 15-day intensive training program covers intelligence tests, psychological assessments, group testing officer (GTO) outdoor tasks, and personal interviews conducted by veteran defense assessors.
              </p>
              <ul className="space-y-3 font-sans text-sm text-gray-700 mb-8">
                <li className="flex items-center"><span className="text-minerva-accent font-bold mr-3">✓</span> 15 Days of Immersive Officer Training</li>
                <li className="flex items-center"><span className="text-minerva-accent font-bold mr-3">✓</span> Expert Guidance from Veteran Colonels and Psychologists</li>
                <li className="flex items-center"><span className="text-minerva-accent font-bold mr-3">✓</span> Full Access to Obstacle Courses &amp; Mess Facilities</li>
              </ul>
            </div>
            
            <div className="lg:w-1/3 w-full bg-minerva-blue text-minerva-white p-8 border-l-4 border-minerva-accent shadow-xl">
              <h3 className="text-2xl font-serif font-medium mb-4">Batch Schedule</h3>
              <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-6">
                New batches commence regularly. Candidates are advised to register in advance to secure their slot at the historic Mohali campus.
              </p>
              <Link href="/contact" className="block text-center bg-minerva-accent text-minerva-white py-3 px-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-colors shadow-md">
                Enquire About Next Batch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Combined Tables & Side Photo Grid Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Tables (Curriculum & Fees) */}
          <div className="lg:w-3/5 space-y-20">
            
            {/* Curriculum Table */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Structured Timeline</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">15-Day Course Curriculum</h2>
              </div>

              <div className="bg-white shadow-lg border border-gray-200 overflow-hidden font-sans">
                <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
                  <div>Phase / Days</div>
                  <div className="col-span-2">Training Modules</div>
                </div>
                <div className="divide-y divide-gray-200 text-sm">
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-minerva-primary">Days 1 - 3</div>
                    <div className="col-span-2 text-gray-700">Intelligence Tests, PPDT, and Screening Test Mastery</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-minerva-primary">Days 4 - 8</div>
                    <div className="col-span-2 text-gray-700">Psychological Testing (TAT, WAT, SRT, SD) &amp; Evaluation</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-minerva-primary">Days 9 - 12</div>
                    <div className="col-span-2 text-gray-700">GTO Outdoor Tasks, Progressive Group Tasks, Command Tasks &amp; Snake Race</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-minerva-primary">Days 13 - 15</div>
                    <div className="col-span-2 text-gray-700">Personal Interviews, Conference Technique &amp; Individual Feedback</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Table */}
            <div>
              <div className="text-center md:text-left mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Investment in Excellence</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">SSB Coaching Fees &amp; Charges</h2>
                <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.E.F. 1st February, 2026</p>
              </div>

              <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans mb-8">
                <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
                  <div>Term (15 Days)</div>
                  <div>Charges (INR)</div>
                  <div>Notes</div>
                </div>
                <div className="divide-y divide-gray-200 text-sm">
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-gray-800">Tuition Fees <br/><span className="text-xs text-gray-500 font-normal">(Inclusive of Service Tax)</span></div>
                    <div className="font-medium text-minerva-primary">₹{tuition}</div>
                    <div className="text-xs text-gray-600">Candidates joining for lesser days will be charged full amount. Mess &amp; hostel charges apply on actual day basis.</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-gray-800">Mess Charges</div>
                    <div className="font-medium text-minerva-primary">₹{mess}</div>
                    <div className="text-xs text-gray-600">Full term mess charges</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-gray-800">Refundable Security</div>
                    <div className="font-medium text-minerva-primary">₹{security}</div>
                    <div className="text-xs text-gray-600">Fully refundable upon completion</div>
                  </div>
                  <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold">
                    <div>Total Charges</div>
                    <div className="text-minerva-primary text-lg">₹{total}</div>
                    <div className="text-xs text-gray-600 font-normal mt-1">Inclusive of all applicable taxes</div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gray-50 p-6 border-l-4 border-minerva-accent text-xs font-sans text-gray-700 space-y-3">
                <p className="font-bold uppercase tracking-wider text-minerva-blue">Important Notes:</p>
                <p>• Mess Charges includes breakfast, lunch, dinner, mid-morning and afternoon tea (On No Profit No Loss Basis).</p>
                <p>• Coaching Fee paid by wards of Ex-Servicemen belonging to Punjab &amp; Haryana up to the rank of JCO is partially reimbursable.</p>
                <p>• Fees can be paid at the time of joining either in cash or through Demand Draft in favour of Lt. Col. Deol&apos;s Minerva Academy payable at Chandigarh.</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Side Photo Grid (Dynamic) */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6">
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

      {/* 4. DAILY NON ACADEMIC ROUTINE */}
      <section className="w-full py-24 bg-minerva-primary text-minerva-white border-t-4 border-minerva-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Discipline &amp; Timings</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">Daily Non Academic Routine</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 font-sans text-sm bg-minerva-blue p-8 border border-gray-700 shadow-2xl">
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-300">Breakfast</span>
                <span className="text-minerva-accent font-semibold">6:45 AM to 7:45 AM</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-300">Morning Tea Break</span>
                <span className="text-minerva-accent font-semibold">11:00 AM to 11:15 AM</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-300">Lunch</span>
                <span className="text-minerva-accent font-semibold">1:00 PM to 2:15 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-300">Afternoon Tea Break</span>
                <span className="text-minerva-accent font-semibold">3:45 PM to 4:15 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Dinner</span>
                <span className="text-minerva-accent font-semibold">7:30 PM to 9:00 PM</span>
              </div>
            </div>

            <div className="font-sans text-sm text-gray-200 font-light space-y-6 leading-relaxed">
              <p className="bg-minerva-blue/50 p-4 border-l-2 border-minerva-accent">
                Out-station candidates are advised to report to Campus Admissions Office by the evening of the day before the term starts.
              </p>
              <p className="bg-minerva-blue/50 p-4 border-l-2 border-minerva-accent">
                Local or nearby candidates who want to join as day scholars are advised to report at Campus Admissions Office by 8 AM on the first day of the term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC WHATSAPP RESERVATION FORM SECTION */}
      <section className="w-full py-24 bg-[#0a4122] text-minerva-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-2">
              Reservation Form
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