import Link from "next/link";

export default function SSBTrainingPage() {
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
              Flagship 15-Day Program
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            SSB Interview <span className="italic text-minerva-accent">Training</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Minerva Academy offers a comprehensive 15-day SSB interview training course, designed to transform candidates into confident officers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
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
                <li className="flex items-center"><span className="text-minerva-accent font-bold mr-3">✓</span> Full Access to Obstacle Courses & Mess Facilities</li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-minerva-blue text-minerva-white p-8 border-2 border-minerva-accent shadow-xl">
              <h3 className="text-2xl font-serif font-medium mb-4">Batch Schedule</h3>
              <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-6">
                New batches commence regularly. Candidates are advised to register in advance to secure their slot at the historic Mohali campus.
              </p>
              <Link href="/contact" className="block text-center bg-minerva-accent text-minerva-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-colors">
                Enquire About Next Batch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Table Section */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Structured Timeline</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">15-Day Course Curriculum</h2>
          </div>

          <div className="bg-white shadow-lg border border-gray-200 overflow-hidden font-sans">
            <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
              <div>Phase / Days</div>
              <div className="col-span-2">Training Modules</div>
            </div>
            <div className="divide-y divide-gray-200 text-sm">
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-minerva-primary">Days 1 - 3</div>
                <div className="col-span-2 text-gray-700">Intelligence Tests, PPDT, and Screening Test Mastery</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-minerva-primary">Days 4 - 8</div>
                <div className="col-span-2 text-gray-700">Psychological Testing (TAT, WAT, SRT, SD) & Evaluation</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-minerva-primary">Days 9 - 12</div>
                <div className="col-span-2 text-gray-700">GTO Outdoor Tasks, Progressive Group Tasks, Command Tasks & Snake Race</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-minerva-primary">Days 13 - 15</div>
                <div className="col-span-2 text-gray-700">Personal Interviews, Conference Technique & Individual Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES & CHARGES SECTION */}
      <section className="w-full py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Investment in Excellence</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">SSB Coaching Fees & Charges</h2>
            <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.E.F. 1st February, 2026</p>
          </div>

          <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans mb-12">
            <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
              <div>Term (15 Days)</div>
              <div>Charges (INR)</div>
              <div>Notes</div>
            </div>
            <div className="divide-y divide-gray-200 text-sm">
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Tuition Fees <br/><span className="text-xs text-gray-500 font-normal">(Inclusive of Service Tax)</span></div>
                <div className="font-medium text-minerva-primary">₹18,000</div>
                <div className="text-xs text-gray-600">Candidates joining for lesser days will be charged full amount. Mess & hostel charges apply on actual day basis.</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Mess Charges</div>
                <div className="font-medium text-minerva-primary">₹9,000</div>
                <div className="text-xs text-gray-600">Full term mess charges</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Refundable Security</div>
                <div className="font-medium text-minerva-primary">₹500</div>
                <div className="text-xs text-gray-600">Fully refundable upon completion</div>
              </div>
              <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold">
                <div>Total Charges</div>
                <div className="text-minerva-primary">₹27,500</div>
                <div className="text-xs text-gray-600 font-normal">Inclusive of all applicable taxes</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-minerva-accent text-xs font-sans text-gray-700 space-y-2">
            <p className="font-bold uppercase tracking-wider text-minerva-blue mb-2">Important Notes:</p>
            <p>• Mess Charges includes breakfast, lunch, dinner, mid-morning and afternoon tea (On No Profit No Loss Basis).</p>
            <p>• Coaching Fee paid by wards of Ex-Servicemen belonging to Punjab & Haryana up to the rank of JCO is partially reimbursable.</p>
            <p>• Fees can be paid at the time of joining either in cash or through Demand Draft in favour of Lt. Col. Deol's Minerva Academy payable at Chandigarh.</p>
          </div>
        </div>
      </section>

      {/* DAILY NON ACADEMIC ROUTINE */}
      <section className="w-full py-20 bg-minerva-primary text-minerva-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Discipline & Timings</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">Daily Non Academic Routine</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 font-sans text-sm bg-minerva-blue p-8 border border-gray-700 shadow-xl">
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

            <div className="font-sans text-sm text-gray-200 font-light space-y-4 leading-relaxed">
              <p>
                Out-station candidates are advised to report to Campus Admissions Office by the evening of the day before the term starts.
              </p>
              <p>
                Local or nearby candidates who want to join as day scholars are advised to report at Campus Admissions Office by 8 AM on the first day of the term.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}