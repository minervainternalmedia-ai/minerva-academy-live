import Link from "next/link";

export default function OurCampusPage() {
  // Premium fallback images for the sticky right photo grid
  const photo1 = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop";
  const photo2 = "https://images.unsplash.com/photo-1517649763962-0c623266cf10?q=80&w=600&auto=format&fit=crop";
  const photo3 = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop";
  const photo4 = "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=600&auto=format&fit=crop";

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
              Life at Minerva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Our Historic <span className="italic text-minerva-accent">Campus</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience world-class infrastructure and rigorous military-grade training facilities designed to forge the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Campus Overview & Classy Sticky Photo Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Your Exact Overview Text */}
          <div className="lg:w-3/5 font-sans text-gray-700 leading-relaxed font-light space-y-6">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-2">Infrastructure & Grounds</span>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-minerva-blue mb-6">World-Class Military Training Ecosystem</h2>
            
            <p className="text-base">
              Minerva Academy boasts a sprawling 10-acre campus equipped with unmatched infrastructure, including a state-of-the-art auditorium and specialized electronic PABT apparatus. We provide uniquely crafted obstacle courses and exclusive outdoor grounds dedicated to group tasks, command tasks, and the snake race. 
            </p>
            <p className="text-base">
              Discerning candidates recognize the value of expert mentorship. Thorough training requires expansive outdoor spaces and specialized equipment, which our academy proudly offers. 
            </p>
            <p className="text-base">
              Our indoor lecture halls comfortably accommodate over 100 candidates and are fitted with advanced audio-visual tools, including LCD projectors and premium public address systems. Uninterrupted learning is guaranteed through reliable backup power generators to handle any electrical outages.
            </p>
          </div>

          {/* RIGHT COLUMN: Classy Sticky 2x2 Photo Grid */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              <div className="mb-6">
                <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase block mb-1">Visual Tour</span>
                <h3 className="text-2xl font-serif text-minerva-blue">Campus Glimpses</h3>
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

      {/* Facilities Grid Section */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Self-Sustained Ecosystem</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">
              Facilities at Minerva Academy
            </h2>
            <p className="text-sm font-sans text-gray-500 mt-4">
              Our self-sustained, CCTV-secure campus houses the following amenities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-sm text-gray-800">
            {[
              "Auditorium", "Classrooms", "Vast Grounds for Outdoor Training", "Obstacle courses",
              "Hostel", "Mess", "Library", "Gymnasium", 
              "Swimming Pool", "Physiotherapy & Medical Clinic", "Football Grounds", "Cricket Nets",
              "Table Tennis", "Volley Ball", "Basket Ball Court", "Canteen"
            ].map((facility, index) => (
              <div key={index} className="bg-white p-6 shadow-sm border-l-4 border-minerva-primary flex items-center hover:shadow-md transition-shadow">
                <span className="text-minerva-accent font-bold text-lg mr-4 w-6">{index + 1}</span>
                <span className="font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel & Mess Callout Section */}
      <section className="w-full py-20 bg-minerva-primary text-minerva-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans font-light leading-relaxed">
          <div className="border-l-4 border-minerva-accent pl-6">
            <h3 className="text-2xl font-serif font-medium mb-4 text-white">Boarding & Lodging</h3>
            <p className="text-sm text-gray-200">
              We provide exceptional on-campus lodging alongside a spacious dining hall featuring a spotless, modern kitchen that prepares delicious meals, ensuring a highly comfortable stay for all trainees.
            </p>
          </div>
          <div className="bg-white text-minerva-blue p-8 shadow-xl">
            <h3 className="text-xl font-serif font-medium mb-3">Girls&apos; Hostel Facility</h3>
            <p className="text-sm font-medium text-gray-700">
              Dedicated, separate hostel accommodations are available directly on campus for female candidates. Advance registration is strictly mandatory to secure your placement due to limited capacity.
            </p>
            <Link className="inline-block mt-6 text-xs font-bold tracking-widest uppercase text-minerva-accent hover:text-minerva-blue transition-colors" href="/contact">
              Reserve Accommodation →
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Photo Gallery Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">Visual Tour</span>
            <h2 className="text-3xl font-serif font-medium text-minerva-blue">
              Campus Gallery
            </h2>
            <p className="text-sm font-sans text-gray-500 mt-4 max-w-2xl mx-auto">
              Take a glimpse into the premier facilities, obstacle courses, and training grounds that define the Minerva experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Obstacle Course & Grounds",
              "Modern Air-Conditioned Classrooms",
              "State-of-the-Art Auditorium",
              "Hostel & Accommodation",
              "Campus Mess & Dining",
              "Sports & Physical Training"
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