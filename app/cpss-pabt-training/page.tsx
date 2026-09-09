import Link from "next/link";

export default function CPSSPage() {
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
              Computerised Pilot Selection System
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            CPSS & <span className="italic text-minerva-accent">PABT Training</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Essential testing for all flying duties in the Indian Air Force, Army, Navy, and Coast Guard. Candidates get only one chance in a lifetime.
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 font-sans text-gray-700 leading-relaxed font-light space-y-6">
          <p className="text-base">
            <strong className="text-minerva-blue font-semibold uppercase text-xs tracking-wider block mb-2">Crucial Screening for Flying Branches:</strong>
            All candidates for flying duties are put through the PABT and CPSS test. All NDA, CDSE candidates who have given I.A.F. as their first or second preference are called for this test. The test is used to screen pilots for all flying branches of IAF, Army, Navy and the Coast Guard.
          </p>
          <p className="text-base">
            Our candidates have maintained 100% success rate in their tests. This test can only be given once. Computerised Pilot Selection System Test, also known as CPSS test, is now in full effect along with the well known PABT test to select the best candidates for Indian Air Force flying branch that was in use for decades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="bg-gray-50 p-6 border-l-4 border-minerva-primary shadow-sm">
              <h3 className="font-serif font-medium text-lg text-minerva-blue mb-2">CPSS + PABT Training at Minerva</h3>
              <p className="text-xs text-gray-600">Training for CPSS at Minerva Academy will prepare the candidate for the CPSS experience at AFSB with practice on similar test games, controls and cockpit experience.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-minerva-primary shadow-sm">
              <h3 className="font-serif font-medium text-lg text-minerva-blue mb-2">What is CPSS?</h3>
              <p className="text-xs text-gray-600">It is an intelligent tool for pilot aptitude testing in consonance with advanced IAF aircrafts like Su-30 and Tejas, developed by DRDO and Defence Research boards.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-minerva-primary shadow-sm">
              <h3 className="font-serif font-medium text-lg text-minerva-blue mb-2">Only One Chance</h3>
              <p className="text-xs text-gray-600">The candidate will get only one chance to clear the CPSS, PABT test. Once failed, the test cannot be taken again and the candidate can never be eligible for flying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEES TABLE SECTION */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Investment</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">CPSS / PABT Training Fees</h2>
            <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mt-1">W.e.f. 1st January, 2026</p>
          </div>

          <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
            <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
              <div>Training Type</div>
              <div>Charges (Rs/INR)</div>
              <div>Notes</div>
            </div>
            <div className="divide-y divide-gray-200 text-sm">
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">CPSS / PABT Training (1 Day)</div>
                <div className="font-medium text-minerva-primary">₹4,000</div>
                <div className="text-xs text-gray-600">Inclusive of simulator session</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-gray-50">
                <div className="font-semibold text-gray-800">Combined Package (With Mess & Stay)</div>
                <div className="font-medium text-minerva-primary">₹5,000</div>
                <div className="text-xs text-gray-600">Includes 1 day training + lodging</div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-medium">CPSS/PABT Coaching Application and Seat Reservation Form</h2>
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
                  <option>CPSS / PABT Training (1 Day)</option>
                  <option>CPSS / PABT with Mess & Stay</option>
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