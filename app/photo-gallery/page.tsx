import Link from "next/link";

export default function PhotoGalleryPage() {
  const galleryItems = [
    { category: "Infrastructure", title: "Main Academic Block" },
    { category: "Training", title: "SSB Obstacle Course" },
    { category: "Sports", title: "Football & Athletics Ground" },
    { category: "Life at Minerva", title: "Cadet Mess Hall" },
    { category: "Training", title: "Group Testing Officer (GTO) Task" },
    { category: "Infrastructure", title: "State-of-the-Art Auditorium" },
    { category: "Sports", title: "Olympic Size Swimming Pool" },
    { category: "Legacy", title: "Famous Alumni Wall" },
    { category: "Life at Minerva", title: "Vikram Batra Hostel" },
    { category: "Training", title: "Classroom Instruction" },
    { category: "Infrastructure", title: "Library & Reading Room" },
    { category: "Sports", title: "Basketball Court" },
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
              Life at Minerva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Photo <span className="italic text-minerva-accent">Gallery</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A visual journey through our historic 10-acre campus, rigorous training grounds, and the vibrant life of a Minerva cadet.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Aesthetic Filters (Visual Only for Layout) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 font-sans text-xs font-bold tracking-widest uppercase">
            <span className="px-6 py-2 bg-minerva-blue text-white cursor-pointer transition-colors shadow-sm">All Photos</span>
            <span className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-minerva-primary hover:text-white cursor-pointer transition-colors border border-gray-200">Campus</span>
            <span className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-minerva-primary hover:text-white cursor-pointer transition-colors border border-gray-200">Training</span>
            <span className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-minerva-primary hover:text-white cursor-pointer transition-colors border border-gray-200">Sports</span>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative aspect-[4/3] bg-gray-100 overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-minerva-blue/5 group-hover:scale-110 transition-transform duration-700 ease-in-out flex items-center justify-center">
                   <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue/90 via-minerva-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-minerva-accent font-sans text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-minerva-blue mb-6">See Yourself at Minerva?</h2>
          <p className="font-sans font-light text-gray-600 mb-8">
            Join the ranks of over 35,000 successful officers. Begin your journey with the undisputed leaders in defense coaching.
          </p>
          <Link href="/contact" className="inline-block bg-minerva-accent text-minerva-white px-8 py-4 text-xs font-sans font-bold tracking-widest uppercase hover:bg-minerva-primary hover:text-white transition-all duration-300 shadow-md">
            Apply for Admission
          </Link>
        </div>
      </section>

    </main>
  );
}