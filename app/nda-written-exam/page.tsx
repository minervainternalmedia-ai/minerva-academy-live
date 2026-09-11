import Link from "next/link";

export default function NDAWrittenPage() {
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
              7-Weeks Comprehensive Program
            </span>
          </div>
          
          {/* Updated Hero Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            NDA Written Examination <span className="italic text-minerva-accent">Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            UPSC NDA/NA (National Defence Academy / Naval Academy) Written Examination Coaching by veteran faculty and academic experts.
          </p>
        </div>
      </section>

      {/* Heading 1: Overview Section */}
      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase mb-4 block">
            Chandigarh Campus
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-minerva-blue mb-8 leading-tight">
            UPSC NDA Written Examination Coaching in Chandigarh
          </h2>
          <p className="text-gray-600 font-sans text-base md:text-lg leading-relaxed font-light">
            The National Defence Academy (NDA) entrance examination conducted by UPSC demands deep conceptual clarity, rigorous speed, and tactical time management. Minerva Academy delivers a targeted 7-week classroom coaching course designed by permanent, full-time subject matter experts.
          </p>
        </div>
      </section>

      {/* Heading 2: Course Structure & Academic Features */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase mb-4 block">
              Curriculum Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-minerva-blue">
              Course Structure & <span className="italic text-minerva-primary">Academic Features</span>
            </h2>
          </div>

          {/* Premium Grid for Academic Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300">
              <span className="text-minerva-accent font-serif text-4xl mb-4 block">01.</span>
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-3">Duration & Batches</h3>
              <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">
                7-Week intensive course; fresh batches commence every Monday.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300">
              <span className="text-minerva-accent font-serif text-4xl mb-4 block">02.</span>
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-3">Mathematics Mastery</h3>
              <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">
                Thorough coverage of Algebra, Trigonometry, Calculus, Vector Algebra, Statistics, and Probability, focusing on shortcut techniques to solve complex problems in seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300">
              <span className="text-minerva-accent font-serif text-4xl mb-4 block">03.</span>
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-3">General Ability Test (GAT)</h3>
              <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">
                Exhaustive coaching across English (grammar, comprehension, vocabulary) and General Knowledge (Physics, Chemistry, General Science, Indian History, Geography, and Current Affairs).
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300">
              <span className="text-minerva-accent font-serif text-4xl mb-4 block">04.</span>
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-3">Weekly UPSC Mock Tests</h3>
              <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">
                Full length, timed mock tests conducted every weekend with real time performance evaluation and weak-area diagnosis.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300">
              <span className="text-minerva-accent font-serif text-4xl mb-4 block">05.</span>
              <h3 className="text-xl font-serif font-medium text-minerva-blue mb-3">Academic Infrastructure</h3>
              <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">
                Air conditioned classrooms with modern audio-visual aids, quiet reading rooms open late, and an on-campus library with over 1,000+ reference books.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Fee Structure & Side Image Section */}
      <section className="w-full py-24 bg-minerva-blue text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Fee Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block">
              Investment in Your Future
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">
              Fee Structure & Payment Mode
            </h2>
            
            <div className="bg-white/10 p-8 md:p-10 border border-white/20 shadow-2xl">
              <ul className="space-y-5 font-sans text-base md:text-lg">
                <li className="flex justify-between border-b border-white/20 pb-3">
                  <span className="font-light">Tuition Fees</span> 
                  <strong className="tracking-wide">Rs 17,000</strong>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-3">
                  <span className="font-light">Hostel Charge</span> 
                  <strong className="tracking-wide">Rs 7,000</strong>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-3">
                  <span className="font-light">Mess Charge</span> 
                  <strong className="tracking-wide">Rs 16,000</strong>
                </li>
                <li className="flex justify-between text-minerva-accent font-bold pt-4 text-2xl md:text-3xl">
                  <span>Total Fees</span> 
                  <span>Rs 40,000</span>
                </li>
                <li className="flex justify-between text-sm text-gray-300 italic pt-2">
                  <span>Security (Refundable)</span> 
                  <span>Rs 500</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[500px] w-full bg-gray-200 overflow-hidden shadow-2xl border-[8px] border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop')` }}
              ></div>
              <div className="absolute bottom-6 left-6 bg-minerva-primary text-white px-4 py-2 font-sans text-[10px] uppercase tracking-widest font-bold shadow-lg">
                Academy Campus & Training
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Minerva Academy For NDA Written Exam Coaching */}
      <section className="w-full py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Institutional Strengths</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-minerva-blue">
              Why Choose Minerva Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans text-sm text-gray-700">
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">1.</span> Minerva Academy is India's Oldest and Largest Armed Forces Preparatory Institute. Established in 1955 by Lt. Col. Deol, Minerva Academy has approx. 70 years of experience in successfully coaching candidates to be commissioned into the armed forces.
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">2.</span> Every fourth officer in the Indian Armed Forces has been a student of Minerva Academy.
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">3.</span> <strong className="text-minerva-blue">Infrastructure:</strong> The Minerva Academy campus provides unmatched infrastructure, spread over 10 acres in lush green, pollution free, SSB like environment with on campus hostel and mess. Our classrooms for written coaching are air conditioned and well supported by modern Audio Visual technological aids and 24 hrs power back.
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">4.</span> <strong className="text-minerva-blue">Faculty:</strong> The highly qualified, experienced and updated faculty of the written wing provides students with the right guidance to get best results in the exam. Students are coached by permanent faculty members not part time teachers (working on per class basis) as in many other institutes.
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">5.</span> <strong className="text-minerva-blue">Fully equipped Library:</strong> Only Minerva Academy offers the facility of a fully equipped library offering 1000+ relevant and important books pertaining to the syllabus of the examination and competitive exam preparation. Students can issue these books for self study, revision, practice etc.
            </div>
            <div className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-minerva-accent font-bold mr-2 text-lg">6.</span> <strong className="text-minerva-blue">Study Room / Reading Room:</strong> On campus study/ reading rooms are available to provide students with quiet and peaceful environment, perfect for self study and preparations. These rooms are open daily till late hours.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}