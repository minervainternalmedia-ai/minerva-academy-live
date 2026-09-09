import Link from "next/link";

export default function SelectionsPage() {
  const selections = [
    { 
      name: "Lt. Arun Kumar", 
      exam: "NDA 149 Course", 
      quote: "Minerva's rigorous schedule molded me into an officer before I even joined the academy. The environment is pure motivation.", 
      initials: "AK" 
    },
    { 
      name: "Flying Officer Neha Sharma", 
      exam: "AFCAT Entry", 
      quote: "The CPSS training here is unparalleled. I owe my wings to the faculty and the incredible infrastructure they provide.", 
      initials: "NS" 
    },
    { 
      name: "Capt. Vikram Singh", 
      exam: "CDS / IMA Entry", 
      quote: "From the obstacle course to the mock interviews, every day was a step closer to my dream of serving the nation.", 
      initials: "VS" 
    },
    { 
      name: "Lt. Ankit Desai", 
      exam: "ACC Entry", 
      quote: "As a serving soldier, finding the right guidance was tough until I stepped into Minerva. The targeted coaching is brilliant.", 
      initials: "AD" 
    },
    { 
      name: "Sub Lt. Pooja Rao", 
      exam: "Indian Navy - SSC", 
      quote: "The GTO ground here is exactly what you see in the real SSB. It removed all my fear and gave me absolute confidence.", 
      initials: "PR" 
    },
    { 
      name: "Lt. Siddharth M.", 
      exam: "OTA Chennai", 
      quote: "The discipline and time management I learned at the campus helped me clear my SSB in the very first attempt.", 
      initials: "SM" 
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
            Our <span className="italic text-minerva-accent">Selections</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            With over 35,000 successful commissions, every fourth officer in the Indian Armed Forces has walked these historic grounds. Meet our recent stars.
          </p>
        </div>
      </section>

      {/* Selections Grid Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Hall of Fame</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">
              Selected Candidates & Their Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {selections.map((selection, index) => (
              <div key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
                
                {/* Photo Area (Placeholder) */}
                <div className="relative h-64 bg-minerva-primary/10 flex items-center justify-center overflow-hidden border-b-4 border-minerva-accent">
                   {/* In the future, replace this div with an <img src="..." /> tag */}
                   <div className="absolute inset-0 bg-minerva-blue/5 group-hover:scale-105 transition-transform duration-500"></div>
                   <div className="w-24 h-24 rounded-full bg-minerva-blue text-white flex items-center justify-center text-3xl font-serif shadow-lg relative z-10">
                     {selection.initials}
                   </div>
                   <span className="absolute bottom-4 right-4 text-xs font-sans text-gray-500 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">
                     {selection.exam}
                   </span>
                </div>

                {/* Writings & Details Area */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Subtle Quote Icon */}
                  <div className="absolute top-6 left-6 opacity-5">
                    <svg className="w-12 h-12 text-minerva-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-minerva-blue mb-1 relative z-10">{selection.name}</h3>
                  <p className="text-xs font-sans text-minerva-accent font-bold tracking-widest uppercase mb-4 relative z-10">Recommended</p>
                  
                  <p className="font-sans font-light text-gray-600 text-sm leading-relaxed italic relative z-10">
                    "{selection.quote}"
                  </p>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="bg-transparent border border-minerva-blue text-minerva-blue px-8 py-3 text-xs font-sans font-bold tracking-widest uppercase hover:bg-minerva-blue hover:text-white transition-colors">
               Load More Selections
             </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-minerva-primary text-center border-t-4 border-minerva-accent">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-minerva-white mb-6">Will Your Photo Be Next?</h2>
          <p className="font-sans font-light text-gray-300 mb-8">
            Start your preparation with the undisputed leaders.
          </p>
          <Link href="/contact" className="inline-block bg-minerva-accent text-minerva-white px-8 py-4 text-xs font-sans font-bold tracking-widest uppercase hover:bg-minerva-white hover:text-minerva-blue transition-all duration-300 shadow-md">
            Join Minerva Academy
          </Link>
        </div>
      </section>

    </main>
  );
}