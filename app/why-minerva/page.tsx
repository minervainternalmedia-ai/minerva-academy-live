import Link from "next/link";

export default function WhyMinervaPage() {
  const reasons = [
    {
      num: "01.",
      text: "Established in 1955 by Lt. Col. Deol, Minerva Academy is the Premier Academy for SSB Interviews and Written Exam Coaching with over 70 years of experience."
    },
    {
      num: "02.",
      text: "Minerva has an unbeatable track record, with over 35000+ officers trained to success, and over 1000+ top positions in the Indian Armed Forces."
    },
    {
      num: "03.",
      text: "Every fourth officer in the Indian Armed Forces has been a student of Minerva Academy."
    },
    {
      num: "04.",
      text: "Highly qualified and experienced faculty at Minerva adopts a practical, systematic and pin-point approach."
    },
    {
      num: "05.",
      text: "The Minerva Academy secure campus provides unmatched infrastructure, spread over 10 acres of lush green environment."
    },
    {
      num: "06.",
      text: "On campus hostel with security, 24 hour power backup & hot water geysers in all washrooms."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-minerva-blue">
      
      {/* Page Header */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase">
              Unmatched Excellence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
            Why Minerva <span className="italic text-minerva-accent">Academy</span>
          </h1>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Unmatched Excellence</span>
            <h2 className="text-4xl font-serif font-medium text-minerva-blue">
              Why Minerva Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                <div className="text-minerva-accent font-sans font-bold text-xl mb-4">
                  {reason.num}
                </div>
                <p className="font-sans font-light text-gray-700 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-minerva-primary text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-medium text-minerva-white mb-6">Join the Legacy of Success</h2>
          <Link href="/contact" className="inline-block bg-minerva-accent text-minerva-white px-8 py-4 text-xs font-sans font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-md">
            Enroll Today
          </Link>
        </div>
      </section>

    </main>
  );
}