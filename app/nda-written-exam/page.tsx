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
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            NDA Written Exam <span className="italic text-minerva-accent">Coaching</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            UPSC NDA/NA (National Defence Academy / Naval Academy) Written Examination Coaching by veteran faculty and academic experts.
          </p>
        </div>
      </section>

      {/* Main Course Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 font-sans text-gray-700 leading-relaxed font-light space-y-6">
          <p className="text-base">
            Minerva Academy offers coaching for the UPSC NDA/NA written examinations. The faculty at Minerva is highly qualified and vastly experienced in successfully coaching students for NDA examinations. The standards of excellence followed by Minerva ensure that each student who opts for coaching with us feels confident and well prepared for the exam.
          </p>
          <p className="text-base">
            Not only do we cover the entire syllabus subject by subject as per UPSC, we also prepare our students with mock tests, previous year question papers, and doubt clearing sessions, which are conducted each week to monitor each student's progress. Mock test/weekly test results are also discussed to pin point where the student may be lacking. This ensures that the students know what to expect in the examination, how to approach the examination, manage time efficiently and get the best possible results.
          </p>
          <p className="text-base">
            Experienced and updated faculty teaches students how to handle the NDA examination specifically; they focus on the format and type of questions likely to be asked in the exam. Students can learn many formulae and shortcuts to get quick and accurate answers, while attempting the examination. Apart from this, we provide extensively researched study material which helps students to easily access, organize and systematically approach the vast syllabus.
          </p>
        </div>
      </section>

      {/* Why Choose Minerva Academy For NDA Written Exam Coaching */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Institutional Strengths</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">Why Choose Minerva Academy For NDA Written Exam Coaching</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-sm text-gray-700">
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">1.</span> Minerva Academy is India's Oldest and Largest Armed Forces Preparatory Institute. Established in 1955 by Lt. Col. Deol, Minerva Academy has approx. 70 years of experience in successfully coaching candidates to be commissioned into the armed forces.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">2.</span> Every fourth officer in the Indian Armed Forces has been a student of Minerva Academy.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">3.</span> <strong className="text-minerva-blue">Infrastructure:</strong> The Minerva Academy campus provides unmatched infrastructure, spread over 10 acres in lush green, pollution free, SSB like environment with on campus hostel and mess. Our classrooms for written coaching are air conditioned and well supported by modern Audio Visual technological aids and 24 hrs power back.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">4.</span> <strong className="text-minerva-blue">Faculty:</strong> The highly qualified, experienced and updated faculty of the written wing provides students with the right guidance to get best results in the exam. Students are coached by permanent faculty members not part time teachers (working on per class basis) as in many other institutes.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">5.</span> <strong className="text-minerva-blue">Fully equipped Library:</strong> Only Minerva Academy offers the facility of a fully equipped library offering 1000+ relevant and important books pertaining to the syllabus of the examination and competitive exam preparation. Students can issue these books for self study, revision, practice etc.
            </div>
            <div className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm">
              <span className="text-minerva-accent font-bold mr-2">6.</span> <strong className="text-minerva-blue">Study Room / Reading Room:</strong> On campus study/ reading rooms are available to provide students with quiet and peaceful environment, perfect for self study and preparations. These rooms are open daily till late hours.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}