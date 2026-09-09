import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-minerva-white text-minerva-blue">
      
      {/* Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Rigorous Preparation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Flagship Training <span className="italic text-minerva-accent">Programs</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Engineered to cultivate leadership, intellectual command, and the psychological resilience required to conquer the Services Selection Board (SSB).
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Course 1 */}
            <div className="bg-minerva-blue text-minerva-white p-8 flex flex-col justify-between border-t-4 border-minerva-accent shadow-xl">
              <div>
                <span className="bg-minerva-accent text-minerva-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 inline-block mb-4">
                  10 Days Program
                </span>
                <h3 className="text-3xl font-serif font-medium mb-4">SSB Interview Coaching</h3>
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-6">
                  Our flagship program founded by Lt. Col. Deol. Comprehensive coaching covering psychological tests, GTO outdoor tasks, and personal interviews.
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-xs font-sans text-gray-300 mb-8 border-t border-gray-700 pt-4">
                  <li>✓ Starts every Monday & Thursday</li>
                  <li>✓ Expert Veteran Assessors</li>
                  <li>✓ On-campus Obstacle Course</li>
                </ul>
                <Link href="#" className="block text-center bg-minerva-accent text-minerva-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-colors">
                  Register For Batch
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-minerva-blue text-minerva-white p-8 flex flex-col justify-between border-t-4 border-minerva-accent shadow-xl">
              <div>
                <span className="bg-minerva-accent text-minerva-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 inline-block mb-4">
                  Written Mastery
                </span>
                <h3 className="text-3xl font-serif font-medium mb-4">NDA Written Exam</h3>
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-6">
                  Rigorous academic coaching for Mathematics and General Ability Test (GAT) designed specifically for National Defence Academy aspirants.
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-xs font-sans text-gray-300 mb-8 border-t border-gray-700 pt-4">
                  <li>✓ Comprehensive Study Material</li>
                  <li>✓ Regular Mock Test Series</li>
                  <li>✓ Doubt Clearing Sessions</li>
                </ul>
                <Link href="#" className="block text-center bg-minerva-accent text-minerva-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-colors">
                  Register For Batch
                </Link>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-minerva-blue text-minerva-white p-8 flex flex-col justify-between border-t-4 border-minerva-accent shadow-xl">
              <div>
                <span className="bg-minerva-accent text-minerva-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 inline-block mb-4">
                  Officer Entry
                </span>
                <h3 className="text-3xl font-serif font-medium mb-4">CDS / AFCAT</h3>
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-6">
                  Specialized instruction for Combined Defence Services and Air Force Common Admission Test, guiding graduates toward elite officer commissions.
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-xs font-sans text-gray-300 mb-8 border-t border-gray-700 pt-4">
                  <li>✓ Advanced Quantitative Aptitude</li>
                  <li>✓ English & General Knowledge</li>
                  <li>✓ Past Year Paper Analysis</li>
                </ul>
                <Link href="#" className="block text-center bg-minerva-accent text-minerva-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-colors">
                  Register For Batch
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}