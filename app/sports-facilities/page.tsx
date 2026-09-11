import Link from "next/link";

export default function SportsFacilitiesPage() {
  // Premium fallback images for the sticky right photo grid
  const photo1 = "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop";
  const photo2 = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop";
  const photo3 = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop";
  const photo4 = "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop";

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-minerva-blue">
      
      {/* 1. Sub-page Header Banner */}
      <section className="relative w-full py-24 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Life at Minerva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Sports <span className="italic text-minerva-accent">Facilities</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            World-class physical training infrastructure designed to forge the endurance, stamina, and agility required for the Indian Armed Forces.
          </p>
        </div>
      </section>

      {/* 2. Main Content & Sticky Photo Grid Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Overview & Cards */}
          <div className="lg:w-3/5 space-y-16">
            
            {/* Overview Box */}
            <div className="bg-white p-8 border-l-4 border-minerva-accent shadow-sm">
              <p className="text-minerva-blue font-serif italic text-base md:text-lg mb-4 font-medium">
                &ldquo;Physical fitness is a pre-requisite for SSB and a cornerstone of military leadership.&rdquo;
              </p>
              <p className="text-gray-700 font-sans font-light text-sm md:text-base leading-relaxed">
                Only Minerva Academy offers a fully equipped ecosystem of sports grounds, courts, and dedicated obstacle courses across our vast 10-acre campus. We actively encourage physical fitness among candidates, ensuring they possess the endurance and stamina required to excel in their SSB interviews and subsequent military training.
              </p>
            </div>

            {/* Comprehensive Training Grounds Grid */}
            <div>
              <div className="mb-8">
                <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Elite Infrastructure</span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue">Comprehensive Training Grounds</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dedicated Obstacle Course",
                    text: "An unmatched, exact replica of the SSB obstacle course. Candidates practice group tasks, command tasks, and the snake race to build muscle memory and confidence."
                  },
                  {
                    title: "Football & Cricket Grounds",
                    text: "Vast open grounds for football and dedicated cricket nets to foster team spirit, physical agility, and competitive sportsmanship among candidates."
                  },
                  {
                    title: "Professional Courts",
                    text: "Fully equipped outdoor Basketball, Volleyball, and Badminton courts available for evening recreation and intensive cardio training."
                  },
                  {
                    title: "Swimming Pool",
                    text: "A pristine on-campus swimming pool essential for building overall physical stamina, lung capacity, and relaxation after rigorous training."
                  },
                  {
                    title: "Gymnasium & Table Tennis",
                    text: "Modern indoor gymnasium equipped with weights and cardio machines, alongside table tennis setups for indoor physical activity."
                  },
                  {
                    title: "Physiotherapy & Medical Clinic",
                    text: "Immediate on-campus medical and physiotherapy support to ensure that candidates recover safely and swiftly from intensive physical exertion."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 border-l-4 border-minerva-primary shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-lg text-minerva-blue mb-2 font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Sticky Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6 text-center md:text-left">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Visual Tour</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Sports &amp; Action Glimpses</h3>
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

      {/* 3. Sports & Action Gallery Section */}
      <section className="w-full py-24 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Visual Tour</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">
              Sports &amp; Action Gallery
            </h2>
            <p className="text-sm font-sans text-gray-500 mt-4 max-w-2xl mx-auto">
              Witness our cadets in action across various sports grounds, swimming pool, and obstacle training sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SSB Obstacle Course Training",
              "Football Match in Progress",
              "Basketball Court Activities",
              "Volleyball & Team Sports",
              "Swimming Pool Facility",
              "Indoor Gymnasium"
            ].map((label, index) => (
              <div key={index} className="relative h-64 bg-gray-100 border border-gray-200 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-minerva-blue/5 group-hover:bg-minerva-blue/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-minerva-accent mb-2">
                    <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <span className="font-serif font-medium text-minerva-blue">{label}</span>
                  <span className="font-sans text-xs text-gray-400 mt-2">[ Image Space ]</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}