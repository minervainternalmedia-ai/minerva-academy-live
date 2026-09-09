import Link from "next/link";

export default function AFCATWrittenPage() {
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
              Air Force Common Admission Test
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            AFCAT Written Exam <span className="italic text-minerva-accent">Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Specialized 6-week intensive preparation for recruitment into the esteemed branches of the Indian Air Force.
          </p>
        </div>
      </section>

      {/* Introduction & Overview */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 font-sans text-gray-700 leading-relaxed font-light space-y-6">
          <p className="text-base font-semibold text-minerva-blue">
            For direct inquiries, please contact our admissions command at +91-8054197300.
          </p>
          <p className="text-base">
            Minerva Academy delivers elite coaching for the AFCAT written examinations, guided by a highly qualified and deeply experienced faculty. Our rigorous standards ensure that every cadet who trains with us develops absolute confidence and mastery over the examination format.
          </p>
          <p className="text-base">
            Beyond comprehensive, subject-by-subject syllabus coverage, we emphasize rigorous practice. Weekly mock tests, analysis of previous years' question papers, and dedicated doubt-clearing sessions allow us to monitor and elevate each student's trajectory. Our expertly designed study materials and strategic shortcuts enable candidates to maximize their speed and accuracy on exam day.
          </p>
        </div>
      </section>

      {/* Why Choose Minerva (The 11 Points) */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">The Minerva Advantage</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">Why Choose Us For AFCAT Preparation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-sm text-gray-700">
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">1. Historic Legacy</strong>
              Established in 1955, we are India's oldest armed forces preparatory institute with unparalleled success over decades.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">2. Proven Track Record</strong>
              Historically, a significant percentage of officers in the Indian Armed Forces are Minerva alumni.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">3. Unmatched Infrastructure</strong>
              A lush 10-acre pollution-free campus with modern, air-conditioned classrooms and full SSB-like facilities.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">4. Expert Faculty</strong>
              Training is imparted by full-time, permanent subject-matter experts, ensuring consistent and dedicated mentorship.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">5. Fully Equipped Library & Study Rooms</strong>
              Access to thousands of relevant books and dedicated, quiet reading rooms open till late hours for self-study.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">6. Motivation & Discipline</strong>
              A strict adherence to the Honour Code, complemented by motivational lectures and movies to build officer-like qualities.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">7. Physical Fitness Integration</strong>
              Access to sports grounds, obstacle courses, and courts to ensure candidates maintain the stamina required for the SSB.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">8. Dedicated Girls Hostel</strong>
              Separate, secure on-campus accommodation available exclusively for female AFCAT aspirants.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
              <strong className="text-minerva-blue block mb-2">9. Exam-Specific Focus</strong>
              Tailored curriculum specifically designed for the AFCAT pattern, differing from NDA or CDS preparations.
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive 6-Week Course & Timings */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Course Structure</span>
              <h2 className="text-3xl font-serif font-medium text-minerva-blue mb-6">Comprehensive 6-Week Module</h2>
              <div className="space-y-4 font-sans text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  Our exhaustive 6-week curriculum is broken down into independent weekly modules. New batches commence every Monday, requiring cadets to arrive and report on Sunday.
                </p>
                <p>
                  <strong className="font-semibold text-minerva-blue">What's Included:</strong> Over 150 classroom sessions and 300+ study hours covering the complete syllabus. Students receive an extensive study kit with 11+ books, practice sets, and reference notes.
                </p>
                <p>
                  <strong className="font-semibold text-minerva-blue">Testing & Revision:</strong> More than 100 worksheets, weekly mock exams, past paper breakdowns, and dedicated current affairs updates ensure total exam readiness.
                </p>
              </div>
            </div>

            <div className="bg-minerva-blue text-minerva-white p-10 shadow-xl border-l-4 border-minerva-accent">
              <h3 className="text-2xl font-serif font-medium mb-6">Daily Timings & Necessity</h3>
              <ul className="space-y-4 font-sans text-sm font-light">
                <li className="border-b border-gray-600 pb-3">
                  <strong className="block text-minerva-accent mb-1 uppercase tracking-wider text-xs">Schedule</strong>
                  Classes run Monday to Saturday, 8:00 AM to 5:00 PM (with designated breaks). Sundays are reserved for major mock tests and targeted doubt-clearing.
                </li>
                <li className="pb-2">
                  <strong className="block text-minerva-accent mb-1 uppercase tracking-wider text-xs">Why Coaching is Critical</strong>
                  With over 300,000 candidates appearing for limited vacancies, the competition is fierce. A single mark dictates selection. Expert guidance, structured study materials, and peer motivation are essential to securing that critical edge.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* About AFCAT Exam Information */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Examination Details</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">Understanding the AFCAT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm text-gray-700">
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-minerva-blue mb-2 text-base">What is the AFCAT?</h4>
              <p className="font-light">The Air Force Common Admission Test is conducted bi-annually (February and August) to select officers for all IAF branches (Flying, Technical, and Ground Duty). Applications are exclusively online.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-minerva-blue mb-2 text-base">Eligibility & Pattern</h4>
              <p className="font-light">Graduation is the minimum qualification (specific criteria vary by branch). The exam lasts 2 hours and features 100 objective questions. Correct answers award 3 marks, while 1 mark is deducted for incorrect answers.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gray-100 md:col-span-2">
              <h4 className="font-bold text-minerva-blue mb-2 text-base">Syllabus Covered</h4>
              <p className="font-light leading-relaxed">
                <strong>General Awareness:</strong> History, Geography, Civics, Politics, Current Affairs, Defence, Art, etc.<br/>
                <strong>Verbal Ability (English):</strong> Comprehension, Error Detection, Vocabulary, Synonyms/Antonyms.<br/>
                <strong>Numerical Ability:</strong> Fractions, Simplification, Average, Profit/Loss, Percentage, Ratio, Simple Interest.<br/>
                <strong>Reasoning & Aptitude:</strong> Verbal Skills, Spatial Ability, Logical and Non-verbal reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joining Instructions & Fees */}
      <section className="w-full py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-medium text-minerva-blue mb-6">AFCAT Coaching Fees & Charges</h3>
              <p className="text-xs font-sans text-gray-500 tracking-wider uppercase mb-6">W.e.f. 1st January, 2022</p>
              
              <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans">
                <div className="grid grid-cols-3 bg-minerva-primary text-minerva-white p-4 text-xs font-bold tracking-widest uppercase">
                  <div>Term (6 Weeks)</div>
                  <div>Charges (INR)</div>
                  <div>Note</div>
                </div>
                <div className="divide-y divide-gray-200 text-sm">
                  <div className="grid grid-cols-3 p-4">
                    <div className="font-semibold text-gray-800">Tuition Fees</div>
                    <div className="font-medium text-minerva-primary">₹15,000</div>
                    <div className="text-xs text-gray-600">Full course curriculum</div>
                  </div>
                  <div className="grid grid-cols-3 p-4">
                    <div className="font-semibold text-gray-800">Mess Charges</div>
                    <div className="font-medium text-minerva-primary">₹14,000</div>
                    <div className="text-xs text-gray-600">Meals included</div>
                  </div>
                  <div className="grid grid-cols-3 p-4">
                    <div className="font-semibold text-gray-800">Hostel Charges</div>
                    <div className="font-medium text-minerva-primary">₹6,000</div>
                    <div className="text-xs text-gray-600">On-campus living</div>
                  </div>
                  <div className="grid grid-cols-3 p-4">
                    <div className="font-semibold text-gray-800">Refundable Security</div>
                    <div className="font-medium text-minerva-primary">₹500</div>
                    <div className="text-xs text-gray-600">Refundable post-course</div>
                  </div>
                  <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold">
                    <div>Total Package</div>
                    <div className="text-minerva-primary">₹35,500</div>
                    <div className="text-xs text-gray-600 font-normal">-</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 font-sans text-sm text-gray-700 bg-gray-50 p-8 border-t-4 border-minerva-accent">
              <h4 className="font-bold text-minerva-blue text-lg mb-2">When to Join & What to Bring</h4>
              <p className="font-light">
                <strong>When to Join:</strong> We run year-round batches. It is advised to join a few months prior to the exam. Seats are limited and allotted on a first-come, first-served basis.
              </p>
              <p className="font-light">
                <strong>For Class:</strong> No books are required; study materials are provided. Bring personal notebooks and stationery.
              </p>
              <p className="font-light">
                <strong>For Hostel:</strong> Beds, mattresses, and lockers are provided. Cadets must bring their own bed sheets (2), pillow, pillow covers, and thick blankets for winter.
              </p>
              <p className="font-light">
                <strong>Personal Items:</strong> Dress smartly for class. Bring sports shoes, toiletries, and avoid carrying excessive cash or valuables.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-medium">AFCAT Written Exam Coaching Application</h2>
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
                  <option>AFCAT Written Exam Coaching (6 Weeks)</option>
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