import Link from "next/link";
import ReservationForm from "@/app/components/ReservationForm";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

interface ACCData {
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

export default async function ACCWrittenPage() {
  // Fetch dynamic data from Sanity
  const data: ACCData | null = await client.fetch(`*[_type == "accWrittenExam"][0]`);

  // Safe Photo Grid Fallbacks from Sanity
  const photos = data?.sidePhotoGrid || [];
  const photo1 = getSafeImageUrl(photos[0], "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop");
  const photo2 = getSafeImageUrl(photos[1], "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop");
  const photo3 = getSafeImageUrl(photos[2], "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop");
  const photo4 = getSafeImageUrl(photos[3], "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop");

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
              Army Cadet College
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            ACC Written Examination <span className="italic text-minerva-accent">Coaching</span>
          </h1>
        </div>
      </section>

      {/* Main Content & Side Photo Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: All Text and Tables */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Main Course Overview */}
            <div className="font-sans text-gray-700 leading-relaxed font-light space-y-6">
              <p className="text-base font-semibold text-minerva-blue uppercase tracking-wider text-sm">
                Please call us on +91- 8054197300 for inquiries.
              </p>
              <p className="text-base">
                The Minerva Academy offers coaching for the ACC written examinations. The faculty at Minerva is highly qualified and vastly experienced in successfully coaching students for ACC examinations. The standards of excellence followed by Minerva ensure that each student who opts for coaching with us feels confident and well prepared for the exam. 
              </p>
              <p className="text-base">
                Not only do we cover the entire syllabus subject by subject as per notification, we also prepare our students with mock tests, previous year question papers and doubt clearing sessions which are conducted each week to monitor each student&apos;s progress. Mock test/ weekly test results are also discussed to pin point where the student may be lacking. This ensures that the students know what to expect in the examination, how to approach the examination, manage time efficiently and get the best possible results.
              </p>
              <p className="text-base">
                Experienced and updated faculty teaches students how to handle the ACC examination specifically; they focus on the format and type of questions likely to be asked in the exam. Students can learn many formulae and shortcuts to get quick and accurate answers while attempting the examination. Apart from this, we provide extensively researched study material which helps students to easily access, organise and systematically approach the vast syllabus.
              </p>
            </div>

            {/* Why Choose Minerva Academy */}
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-serif font-medium text-minerva-blue uppercase tracking-widest">Why Choose Minerva Academy For ACC Written Exam Coaching:</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm text-gray-700">
                <div className="space-y-6">
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">1</span> <p><strong className="text-minerva-blue">Minerva Academy is India Oldest and Largest Armed forces Preparatory Institute.</strong> Established in 1955 by Lt. Col Deol, Minerva Academy has over 60 years of experience in successfully coaching candidates to be commissioned into the armed forces.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">2</span> <p>Every fourth officer in the Indian Armed forces has been a student of Minerva Academy.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">3</span> <p><strong className="text-minerva-blue">Infrastructure:</strong> The Minerva Academy campus provides unmatched infrastructure, spread over 10 acres in lush green, pollution free, SSB like environment with on campus hostel and mess. Our classrooms for written coaching are air conditioned and well supported by modern Audio Visual technological aids and 24 hrs power back.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">4</span> <p><strong className="text-minerva-blue">Faculty:</strong> The highly qualified, experienced and updated faculty for ACC written coaching provides students with the right guidance to get best results in the exam. Students are coached by permanent faculty members not part-time teachers (working on per class basis) as in many other institutes.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">5</span> <p><strong className="text-minerva-blue">Fully equipped library:</strong> Only Minerva academy offers the facility of a fully equipped library offering 1000+ relevant and important books pertaining to the syllabus of the examination and competitive exam preparation. Students can issue these books for self study, revision, practice etc.</p></div>
                </div>
                <div className="space-y-6">
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">6</span> <p><strong className="text-minerva-blue">Study Room/ Reading Room:</strong> On campus study/ reading rooms are available to provide students with quiet and peaceful environment, perfect for self study and preparations. These rooms are open daily till late hours.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">7</span> <p><strong className="text-minerva-blue">Motivational lectures and movies:</strong> Minerva Academy specializes in motivating the youth towards serving our great nation. Students interact with candidates from all over the country working towards a common goal. Motivational lectures and movies shown, leave the students inspired to do something for the country and become better human beings.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">8</span> <p><strong className="text-minerva-blue">Discipline &amp; Time Management:</strong> Minerva Academy is a Defence preparatory institute with strict rules that all students must abide by. All students are expected to follow the Honour Code and Discipline Code of Conduct of Minerva Academy, failing which they may be expelled without refunds. These guidelines enforced by the academy inculcate good values and discipline in the students. Students also learn the importance and benefits of proper time management. Sundays and other holidays are not observed to maintain continuity and to ensure students can focus on upcoming exam without distractions.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">9</span> <p><strong className="text-minerva-blue">Physical Fitness:</strong> Only Minerva Academy offers a fully equipped Football ground, Basketball court, Volley ball court, Cricket field and badminton court along with dedicated Obstacle course and vast open grounds to encourage physical fitness among candidates as endurance and stamina are a pre-requisite for SSB which is the next step after the exam.</p></div>
                  <div className="flex"><span className="font-bold text-minerva-accent mr-3">10</span> <p><strong className="text-minerva-blue">Exam specific coaching:</strong> Since exam pattern vary for each examination, Minerva Academy offers exam specific coaching.</p></div>
                </div>
              </div>
            </div>

            {/* Comprehensive Course & Timings & Why Coaching */}
            <div className="font-sans text-gray-700 font-light space-y-12">
              <div>
                <h3 className="text-lg font-serif font-medium text-minerva-blue mb-4 uppercase tracking-widest">COMPREHENSIVE 6 WEEKS COURSE:</h3>
                <p className="text-sm leading-relaxed mb-6">
                  The comprehensive 6 weeks course covers all aspects and entire syllabus of the examination. The course is divided into 6 independent modules and a new module begins every Monday. Therefore, students must report for admission on Sunday for term starting on Monday morning. Prior registration is a must for admission. Six weeks course includes:
                </p>
                <div className="space-y-4 text-sm">
                  <p><strong className="text-minerva-blue">1. Exhaustive Classroom preparation:</strong> With 150+ classroom sessions and 300+ study hours covering all aspects and entire syllabus of the examination as prescribed by the UPSC.</p>
                  <p><strong className="text-minerva-blue">2. Comprehensive Study Material:</strong> With 11+ books covering the various subjects, Question banks and practice sets of each subject, ready reference notes for important topics, all extensively researched and prepared after analysis of previous years&apos; exam patterns.</p>
                  <p><strong className="text-minerva-blue">3. Revision and Doubt clearing:</strong> 100+ worksheets and practice sets help students&apos; assess their own progress. Previous years question papers are also covered. Doubt clearing sessions are held to answer all queries of students.</p>
                  <p><strong className="text-minerva-blue">4. Testing:</strong> Weekly practice tests of each subject to prepare students for upcoming competition and provide them with vital self assessment tools. Mock tests are also held to prepare the student for ACC exam.</p>
                  <p><strong className="text-minerva-blue">5. Extensive coverage of current affairs:</strong> Special weekly updates on defence related news, and latest developments, events and people in news. General Knowledge is taken up thoroughly.</p>
                  <p><strong className="text-minerva-blue">6. Subjects covered:</strong> in the ACC written exam coaching include English, General Knowledge &amp; Current Affairs, Mathematics, Physics, Chemistry, Biology, History, Geography, Polity, Economics, Biodiversity etc.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif font-medium text-minerva-blue mb-4 uppercase tracking-widest">Daily Timings:</h3>
                <p className="text-sm leading-relaxed">
                  Classes are held from Monday to Saturday from 8 AM to 5 PM (with breaks for morning and afternoon tea and lunch) Sunday is reserved for mock tests and weekly tests, extra classes and doubt clearing sessions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-medium text-minerva-blue mb-4 uppercase tracking-widest">WHY COACHING IS A MUST FOR ACC WRITTEN EXAMINATION:</h3>
                <p className="text-sm leading-relaxed mb-4">In order to prepare oneself for a competitive exam like ACC, coaching is a must to get the edge above others. In today&apos;s competitive exams like ACC, COACHING IS A MUST BECAUSE:</p>
                <ol className="text-sm space-y-4 list-decimal pl-5">
                  <li>More than 3,00,000 students sit for this exam and the number is increasing drastically year by year. Hence making the exam more and more competitive and <strong className="text-minerva-blue">one mark difference could mean selection or rejection of the candidate</strong>. There are anywhere between 300- 400 seats, so students who are serious, must get the edge above others for which coaching is a must.</li>
                  <li>Students can take advantage of the vast experience of <strong className="text-minerva-blue">subject and examination expert faculty</strong>.</li>
                  <li><strong className="text-minerva-blue">Examination specific and comprehensive study material</strong> of notes, practice sets, assignments and worksheets provides the right material for preparation.</li>
                  <li>Any concept <strong className="text-minerva-blue">doubts can be cleared</strong> right away, thus students can <strong className="text-minerva-blue">build strong fundamentals</strong>.</li>
                  <li>Meeting other candidates who are sitting for the same exam can be a great motivator. Students can exchange knowledge and also have an <strong className="text-minerva-blue">idea of their competition</strong>.</li>
                  <li>Regular mock tests ensure students are <strong className="text-minerva-blue">mentally prepared for exam day</strong> and know exactly how to approach the exam and what to expect.</li>
                  <li>Students are able to <strong className="text-minerva-blue">discipline themselves, develop good concentration</strong> and form a study habit, which is not easy to do with self study.</li>
                </ol>
              </div>
            </div>

            {/* UPGRADED FEES & CHARGES SECTION */}
            <div>
              <div className="mb-8">
                <span className="text-minerva-accent tracking-[0.2em] font-sans text-[10px] font-bold uppercase mb-2 block">
                  INVESTMENT IN EXCELLENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
                  ACC Coaching Fees &amp; Charges
                </h2>
              </div>

              <div className="bg-white shadow-xl border border-gray-200 overflow-hidden font-sans mb-8 rounded-sm">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-minerva-primary text-white p-4 text-xs font-bold tracking-widest uppercase">
                  <div>Term (6 Weeks)</div>
                  <div>Charges (INR)</div>
                  <div className="hidden sm:block">Note</div>
                </div>
                
                {/* Table Body */}
                <div className="divide-y divide-gray-100 text-sm">
                  
                  {/* Tuition */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 p-4 hover:bg-gray-50 transition-colors items-center">
                    <div className="font-semibold text-gray-800">Tuition Fees</div>
                    <div className="font-bold text-gray-900 text-base">₹15,000</div>
                    <div className="hidden sm:block text-gray-500 text-xs">Full course curriculum</div>
                  </div>
                  
                  {/* Mess */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 p-4 hover:bg-gray-50 transition-colors items-center">
                    <div className="font-semibold text-gray-800">Mess Charges</div>
                    <div className="font-bold text-gray-900 text-base">₹14,000</div>
                    <div className="hidden sm:block text-gray-500 text-xs">Meals included</div>
                  </div>
                  
                  {/* Hostel */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 p-4 hover:bg-gray-50 transition-colors items-center">
                    <div className="font-semibold text-gray-800">Hostel Charges</div>
                    <div className="font-bold text-gray-900 text-base">₹6,000</div>
                    <div className="hidden sm:block text-gray-500 text-xs">On-campus living</div>
                  </div>
                  
                  {/* Security */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 p-4 hover:bg-gray-50 transition-colors items-center">
                    <div className="font-semibold text-gray-800">Refundable Security</div>
                    <div className="font-bold text-gray-900 text-base">₹500</div>
                    <div className="hidden sm:block text-gray-500 text-xs">Refundable post-course</div>
                  </div>
                  
                  {/* Total */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 p-5 bg-[#FFF5EE] items-center border-t border-[#FFB28B]">
                    <div className="font-bold text-gray-900">Total Package</div>
                    <div className="font-bold text-minerva-primary text-xl">₹35,500</div>
                    <div className="hidden sm:block text-gray-600 text-xs">-</div>
                  </div>
                </div>
              </div>

              <div className="font-sans text-sm text-gray-700 bg-white p-6 border-l-4 border-minerva-accent shadow-sm mt-8">
                <h4 className="font-bold text-minerva-blue mb-2 uppercase tracking-widest text-xs">Notes</h4>
                <ul className="list-disc pl-5 space-y-2 font-light text-xs">
                  <li>Mess Charges includes breakfast, lunch, dinner, mid- morning and afternoon tea (On No Profit No Loss Basis).</li>
                  <li>Candidate can pay Fees at the time of joining the coaching, either in cash or through Online NEFT Transfer. Card Payment is also accepted.</li>
                  <li>In view of the recent COVID-19, prior registration will be required to make sure that the number of the students in the classrooms does not exceed fifty percent of the benchmark. Kindly register first to enrol in any of the batches.</li>
                </ul>
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

      {/* GREEN JOINING INSTRUCTIONS SECTION */}
      <section className="w-full py-20 bg-minerva-primary text-minerva-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans font-light text-sm leading-relaxed">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">WHEN TO JOIN:</h3>
              <p>Minerva Academy runs year-round batches for ACC examinations as it may be difficult for serving personnel to take leave according to batch dates. We offer the flexibility of joining dates and advise candidates to take coaching as soon as they are able to spare time from their duty. It is advised to take coaching a few months before the exam to ensure enough time is left for practice, revision, and self-study. Seats are limited and available on a first-come-first-served basis.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">FOR ACC GIRLS SEEKING HOSTEL FACILITY:</h3>
              <p>Women can apply for ACC, and an on-campus hostel with 24 hrs lady warden is available for lady candidates. Prior reservation is required for a campus girls hostel. Kindly send us an email with the proposed dates seeking admission to the girls&apos; hostel or call us to confirm availability and reservation for the girls hostel.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">WHAT TO BRING?</h3>
            <p><strong className="font-bold text-white">For Class:</strong> Students are not required to bring any books. All study material is issued to the students upon admission. Students must bring personal registers or note books and stationery like pens, pencils etc. to take notes during class.</p>
            <p><strong className="font-bold text-white">For Hostels:</strong> Lockers are provided for valuables. Beds and mattresses are provided, but students should bring their own bedding i.e. bed sheets (2 Nos.) and Pillow (with pillow covers). For winter months students should bring thick blankets and razai.</p>
            <p><strong className="font-bold text-white">Personal Items:</strong> Students are expected to dress smartly for class, please bring personal clothing accordingly. Students should carry all personal toiletries. Sports shoes are a must. Please avoid bringing expensive personal items or cash. Even though lockers are provided, students are responsible for their own personal belongings.</p>
          </div>

        </div>
      </section>

      {/* ADDITIONAL ACC EXAM DETAILS */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 font-sans text-sm text-gray-700 font-light space-y-8">
          
          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">CRASH COURSES:</h4>
            <p>We offer crash courses close to exam dates. Please call us for crash course term dates.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">CAUTION</h4>
            <p>Coaching should be taken from an Academy of repute. Students would be well advised to check the credentials of the Academy before joining as there are many operators in the market out to make a quick buck. Candidates who want to take up coaching are advised to first check from references or visit any Institute they may be considering and then make their final decisions. Candidates should not to be convinced by clever advertisements and misleading photos published on pamphlets and websites.</p>
          </div>

          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">WHAT IS THE ACC WRITTEN EXAM?</h4>
            <p>ACC stands for Army Cadet College. The ACC Wing trains soldiers from the regular army for commission as Officers in the Indian Army. The ACC feeds into the Indian Military Academy Dehradun. A soldier needs to have 10+2 qualification, age limit is up to 26 years. Education Requirement: 10+2 Training: Four Yrs (Three Years in ACC Wing and one Year at IMA) Degree Remark: Graduate Degree from ACC Wing Age: 26 years Martial Status: Married or Unmarried</p>
          </div>

          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">HOW TO APPLY FOR ACC EXAM?</h4>
            <p>ACC entry scheme is only for serving Indian army soldiers and not available in public domain. One needs to contact the concerned department of his unit to apply for such entries.</p>
          </div>

          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">EXAM PATTERN OF ACC WRITTEN EXAMINATION</h4>
            <p>The ACC examination consists of four tests: Paper 1 – General Mental ability test (GMAT) Paper 2 – Current &amp; General awareness test (CGAT) Paper 3 – Interactive Communicative English (ICE) Paper 4 – Academic Content Test (ACT)</p>
          </div>

          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">SYLLABUS FOR ACC WRITTEN EXAMINATION</h4>
            <p>General Mental ability test (GMAT); Current &amp; General awareness test (CGAT); Interactive Communicative English (ICE); Academic Content Test (ACT): For knowing the detailed syllabus, please check the notification of the examination available from your unit.</p>
          </div>

          <div>
            <h4 className="font-bold text-minerva-blue uppercase tracking-widest mb-2">RESULTS OF ACC EXAMINATION</h4>
            <p>Results of the ACC written exam in 3-4 months after the written exam. The same can be viewed on http://joinindianarmy.nic.in/. Being a competitive exam and there is no fixed cut off percentage for passing. Candidates who perform better are sent the call letters for SSB interviews. The final merit list is prepared after the SSB interviews final result and displayed on the Indian Army website. Joining instructions are sent to students based on vacancies available as per the merit list.</p>
          </div>

        </div>
      </section>

      {/* DYNAMIC WHATSAPP RESERVATION FORM SECTION */}
      <section className="w-full py-24 bg-[#0a4122] text-minerva-white border-t border-[#092B16]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Register For Admission</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium">ACC Written Exam Coaching Application</h2>
          </div>

          <div className="bg-[#2c3144] border border-[#ff671f] p-8 md:p-12 shadow-2xl">
            <ReservationForm />
          </div>
        </div>
      </section>

    </main>
  );
}