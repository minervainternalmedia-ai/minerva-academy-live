import Link from "next/link";

export default function CDSWrittenPage() {
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
              Combined Defence Service Examination
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            CDS, OTA Written <span className="italic text-minerva-accent">Exam Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            UPSC-CDS/OTA (Combined Defence Service Examination/Officers Training Academy) Written Examination Coaching.
          </p>
        </div>
      </section>

      {/* Main Course Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 font-sans text-gray-700 leading-relaxed font-light space-y-6">
          <p className="text-base">
            Minerva Academy is offering coaching for the UPSC-CDS/OTA written examinations. The faculty at Minerva students is highly qualified and vastly experienced in successfully coaching students for written examinations. The standards of excellence followed by Minerva ensure that each student who opts for coaching with us feels confident and well prepared for the exam.
          </p>
          <p className="text-base">
            Not only do we cover the entire syllabus subject by subject as per UPSC, we also prepare our students with mock tests, previous year question papers, and doubt clearing sessions, which are conducted each week to monitor each student's progress. Mock test/weekly test results are also discussed to pin point where the student may be lacking. This ensures that the students know what to expect in the examination, how to approach the examination, manage time efficiently and get the best possible results.
          </p>
          <p className="text-base">
            Experienced and updated faculty teaches students how to handle the examination specifically; they focus on the format and type of questions likely to be asked in the exam. Students can learn many formulae and shortcuts to get quick and accurate answers, while attempting the examination. Apart from this, we provide extensively researched study material which helps students to easily access, organize and systematically approach the vast syllabus.
          </p>
        </div>
      </section>

      {/* Daily Timings & Why Coaching Is A Must */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Operational Details</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">Daily Timings & Necessity of Coaching</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm">
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-4">Daily Timings</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                Classes are held from Monday to Saturday from 8 AM to 5 PM with breaks for morning and afternoon tea and lunch. Sunday is reserved for mock tests and weekly tests, extra classes and doubt clearing sessions.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-accent shadow-sm">
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-4">Why Coaching Is A Must</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                With more than 3,00,000 students sitting for this exam and the number increasing drastically year by year, competition is fierce. Just one mark difference could mean selection or rejection. Minerva Academy gives you the vital competitive edge required to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEES & CHARGES SECTION */}
      <section className="w-full py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Investment in Excellence</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">CDS Coaching Fees & Charges</h2>
            <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-2">W.e.f. 1st January, 2022</p>
          </div>

          <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans mb-12">
            <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
              <div>Term (6 Weeks)</div>
              <div>Charges (INR)</div>
              <div>Notes</div>
            </div>
            <div className="divide-y divide-gray-200 text-sm">
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Tuition Fees</div>
                <div className="font-medium text-minerva-primary">₹15,000</div>
                <div className="text-xs text-gray-600">Comprehensive syllabus coverage</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Mess Charges</div>
                <div className="font-medium text-minerva-primary">₹14,000</div>
                <div className="text-xs text-gray-600">Hygienic meals included</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Hostel Charges</div>
                <div className="font-medium text-minerva-primary">₹6,000</div>
                <div className="text-xs text-gray-600">Secure campus accommodation</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Refundable Security</div>
                <div className="font-medium text-minerva-primary">₹500</div>
                <div className="text-xs text-gray-600">Refundable upon completion</div>
              </div>
              <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold">
                <div>Total Charges</div>
                <div className="text-minerva-primary">₹35,500</div>
                <div className="text-xs text-gray-600 font-normal">Complete package</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section className="w-full py-24 bg-minerva-primary text-minerva-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Register For Admission</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">CDS, OTA Coaching Application and Seat Reservation Form</h2>
          </div>

          <div className="bg-minerva-blue p-8 md:p-12 border-2 border-minerva-accent shadow-2xl">
            <form className="space-y-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Full Name *</label>
                  <input type="text" placeholder="Cadet full name" className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Email Address *</label>
                  <input type="email" placeholder="email@domain.com" className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">WhatsApp Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Date of Birth (DOB) *</label>
                  <input type="date" className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Home State *</label>
                  <input type="text" placeholder="e.g., Punjab, Haryana..." className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-minerva-accent" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Select Course *</label>
                <select className="w-full bg-minerva-primary border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-minerva-accent">
                  <option>CDS Written Exam Coaching</option>
                  <option>OTA Written Exam Coaching</option>
                </select>
              </div>

              <button type="button" className="w-full bg-minerva-accent text-minerva-white font-bold tracking-[0.2em] text-xs uppercase py-4 hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-md">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}