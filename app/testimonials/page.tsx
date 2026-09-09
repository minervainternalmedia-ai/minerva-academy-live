import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Cadet Vikram S.",
      achievement: "Cleared NDA & SSB Interview",
      quote: "Minerva Academy didn't just teach me the syllabus; it instilled the officer-like qualities I needed. The 10-acre campus and the exact replica of the SSB obstacle course gave me the absolute confidence I needed on the real testing ground.",
    },
    {
      name: "Cadet Priya R.",
      achievement: "Cleared AFCAT & AFSB",
      quote: "The faculty's dedication is unmatched. The mock interviews, CPSS training, and GTO tasks were identical to what I faced at the AFSB. The separate girls' hostel was safe, comfortable, and allowed me to focus entirely on my goal.",
    },
    {
      name: "Havildar Amit K.",
      achievement: "Cleared ACC Written Exam",
      quote: "Joining the ACC batch at Minerva was the turning point in my career. The specialized coaching for serving soldiers, the library resources, and the rigorous mock tests made an incredibly vast syllabus manageable.",
    },
    {
      name: "Cadet Rohan D.",
      achievement: "Cleared CDS / OTA",
      quote: "The discipline, the routine, the motivation—everything at Minerva is geared towards one singular goal: the uniform. The hostel facilities and mess are excellent, providing a true home away from home while you prepare.",
    },
    {
      name: "Cadet Anjali M.",
      achievement: "Cleared SSB Interview",
      quote: "The psychological testing preparation and personal interview guidance were eye-opening. The assessors at Minerva pinpointed my weaknesses and helped me turn them into strengths. I owe my recommendation to them.",
    },
    {
      name: "Cadet Manish T.",
      achievement: "Cleared NDA Written Exam",
      quote: "With over 300+ hours of classroom instruction and meticulous doubt-clearing sessions, the faculty ensured my fundamentals were rock solid. The weekly tests kept me on my toes and perfectly simulated the UPSC exam pressure.",
    }
  ];

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
              Success Stories
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Cadet <span className="italic text-minerva-accent">Testimonials</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear directly from the brave men and women who transformed their dreams into reality at India's oldest and largest Armed Forces Preparatory Institute.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Voices of Victory</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">
              What Our Alumni Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 shadow-sm border-t-4 border-minerva-primary hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
                
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg className="w-16 h-16 text-minerva-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10 mb-8">
                  <p className="font-sans font-light text-gray-700 text-sm leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="relative z-10 border-t border-gray-200 pt-4 mt-auto">
                  <h4 className="font-serif font-bold text-minerva-blue text-lg">{testimonial.name}</h4>
                  <span className="block text-xs font-sans text-minerva-accent tracking-widest uppercase mt-1">
                    {testimonial.achievement}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-minerva-primary text-center border-t-4 border-minerva-accent">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-minerva-white mb-6">Ready to Write Your Own Success Story?</h2>
          <p className="font-sans font-light text-gray-300 mb-8">
            Join the ranks of over 35,000 successful officers. Begin your journey with the undisputed leaders in defense coaching today.
          </p>
          <Link href="/contact" className="inline-block bg-minerva-accent text-minerva-white px-8 py-4 text-xs font-sans font-bold tracking-widest uppercase hover:bg-minerva-white hover:text-minerva-blue transition-all duration-300 shadow-md">
            Enroll Now
          </Link>
        </div>
      </section>

    </main>
  );
}