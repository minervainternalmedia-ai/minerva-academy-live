import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

interface TestimonialItem {
  _id: string;
  studentName: string;
  courseTaken: string;
  quote: string;
  videoUrl?: string;
}

// Helper to convert YouTube watch links to embed links safely
function getEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("embed")) return url;
  
  // Handle standard watch?v= or short youtu.be links
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1]?.split("&")[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default async function TestimonialsPage() {
  // Fetch dynamic testimonials from Sanity
  const testimonials: TestimonialItem[] = await client.fetch(
    `*[_type == "testimonial"] | order(order asc)`
  );

  // Separate video testimonials from regular quotes if they have a video link
  const videoTestimonials = testimonials.filter((t) => t.videoUrl && t.videoUrl.trim() !== "");
  const textTestimonials = testimonials.filter((t) => !t.videoUrl || t.videoUrl.trim() === "");

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-minerva-blue">
      
      {/* 1. Ultra-Classy Header Banner */}
      <section className="relative w-full py-28 bg-minerva-primary text-minerva-white overflow-hidden border-b-4 border-minerva-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
              Voices of Victory
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Alumni Success <span className="italic text-minerva-accent">Stories</span>
          </h1>
          
          <p className="text-gray-200 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear directly from the proud officers and cadets who transformed their dreams into reality at India&apos;s oldest and largest Armed Forces Preparatory Institute.
          </p>
        </div>
      </section>

      {/* 2. CINEMATIC VIDEO TESTIMONIALS SECTION (Dynamic from Sanity) */}
      {videoTestimonials.length > 0 && (
        <section className="w-full py-24 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Video Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
                Cadets Speak on Camera
              </h2>
              <p className="text-sm font-sans text-gray-500 mt-3 max-w-xl mx-auto font-light">
                Watch unedited video stories from our successful candidates detailing their journey through Minerva Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTestimonials.map((item) => {
                const embedUrl = getEmbedUrl(item.videoUrl || "");
                return (
                  <div key={item._id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800 flex flex-col group hover:border-minerva-accent transition-all duration-300">
                    <div className="relative w-full aspect-video bg-black">
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={item.studentName}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 text-xs">Video unavailable</div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow bg-[#1a202c]">
                      <div>
                        <span className="text-minerva-accent text-[11px] font-sans font-bold tracking-widest uppercase block mb-1">
                          {item.courseTaken}
                        </span>
                        <h3 className="text-lg font-serif font-medium text-white mb-2">{item.studentName}</h3>
                        <p className="text-gray-300 text-xs font-light leading-relaxed line-clamp-3">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. LUXURY WRITTEN TESTIMONIALS GRID */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Written Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-minerva-blue">
              What Our Alumni Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((item) => (
              <div 
                key={item._id} 
                className="bg-white p-8 rounded-none border border-gray-200 shadow-sm hover:shadow-xl hover:border-minerva-accent transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-minerva-primary group-hover:bg-minerva-accent transition-colors"></div>
                
                <div className="space-y-4">
                  <span className="text-4xl font-serif text-minerva-accent block leading-none">&ldquo;</span>
                  <p className="text-gray-700 font-sans font-light text-sm leading-relaxed -mt-4">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-medium text-minerva-blue text-base">{item.studentName}</h3>
                    <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-minerva-accent block mt-0.5">
                      {item.courseTaken}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-minerva-primary/10 flex items-center justify-center text-minerva-primary font-serif font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="w-full py-20 bg-minerva-primary text-minerva-white border-t border-minerva-accent/30 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.4em] uppercase block">
            Your Journey Starts Here
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-gray-300 font-sans font-light text-base max-w-2xl mx-auto leading-relaxed">
            Join the ranks of over 35,000 successful officers. Begin your journey with the undisputed leaders in defense coaching today.
          </p>
          <div className="pt-4">
            <Link 
              href="/admissions" 
              className="inline-block bg-minerva-accent text-white font-sans font-bold tracking-[0.2em] text-xs uppercase px-10 py-4 hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-lg"
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}