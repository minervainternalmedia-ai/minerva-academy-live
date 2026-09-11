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

// Helper to convert YouTube / Shorts links to portrait embed format
function getPortraitEmbedUrl(url: string) {
  if (!url) return "";
  
  let videoId = "";
  if (url.includes("shorts/")) {
    videoId = url.split("shorts/")[1]?.split("?")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1]?.split("&")[0];
  } else if (url.includes("embed/")) {
    return url;
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1` : url;
}

export default async function TestimonialsPage() {
  // Fetch dynamic testimonials from Sanity
  const testimonials: TestimonialItem[] = await client.fetch(
    `*[_type == "testimonial"] | order(order asc)`
  );

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-white">
      
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
          
          <p className="text-gray-300 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Watch inspiring video success stories from our cadets who achieved their dream of becoming officers in the Indian Armed Forces.
          </p>
        </div>
      </section>

      {/* 2. EXCLUSIVE PORTRAIT VIDEO GRID SECTION */}
      <section className="w-full py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-minerva-accent font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Elite Cadet Interviews
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
              Successful Officers on Camera
            </h2>
            <p className="text-sm font-sans text-gray-400 mt-3 max-w-xl mx-auto font-light">
              Direct video testimonials managed right from your backend dashboard.
            </p>
          </div>

          {testimonials.length === 0 ? (
            <div className="text-center py-20 bg-gray-800 border border-gray-700">
              <p className="text-gray-400 text-sm">No video testimonials found. Add links in your Sanity Studio dashboard!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((item) => {
                const embedUrl = getPortraitEmbedUrl(item.videoUrl || "");
                return (
                  <div 
                    key={item._id} 
                    className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col group hover:border-minerva-accent transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Portrait Video Frame (9:16 vertical aspect ratio) */}
                    <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={item.studentName}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 text-xs text-center p-4">
                          No video link provided in backend
                        </div>
                      )}
                    </div>

                    {/* Cadet Details Footer */}
                    <div className="p-5 bg-[#1f2937] border-t border-gray-800 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-minerva-accent text-[10px] font-sans font-bold tracking-widest uppercase block mb-1">
                          {item.courseTaken || "SSB & Written Selections"}
                        </span>
                        <h3 className="text-base font-serif font-medium text-white">{item.studentName}</h3>
                        {item.quote && (
                          <p className="text-gray-300 text-xs font-light mt-2 line-clamp-2">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. CALL TO ACTION BANNER */}
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