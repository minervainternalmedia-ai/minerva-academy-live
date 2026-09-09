import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

export default async function Home() {
  // Fetch all homepage sections concurrently from Sanity
  const hero = await client.fetch(`*[_type == "homeHero"][0]`);
  const stats = await client.fetch(`*[_type == "homeStats"][0]`);
  const courses = await client.fetch(`*[_type == "homeCourse"]`);
  
  // NEW FETCH: Looks for Famous Alumni where the "Roll of Honour" toggle is ON
  const rollOfHonour = await client.fetch(`*[_type == "famousAlumni" && isRollOfHonour == true]`);

  // Fallback defaults for Hero
  const subheading = hero?.subheading || "Established 1955";
  const titleMain = hero?.titleMain || "A Legacy of";
  const titleHighlight = hero?.titleHighlight || "Courage & Excellence";
  const description = hero?.description || "India's premier institution for Armed Forces preparation. Building leaders, shaping destinies, and creating history for over seven decades.";
  const bgImageUrl = hero?.backgroundImage ? urlFor(hero.backgroundImage).url() : "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";

  return (
    <main className="min-h-screen flex flex-col">
      
      {/* 1. PREMIUM HERO SECTION (Dynamic from Sanity) */}
      <section 
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-minerva-blue/85 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue to-transparent z-0"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-minerva-accent opacity-70"></div>
            <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs md:text-sm font-medium uppercase">
              {subheading}
            </span>
            <div className="h-[1px] w-12 bg-minerva-accent opacity-70"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-minerva-white mb-8 leading-[1.1] tracking-tight">
            {titleMain} <br/> <span className="italic font-light text-minerva-accent">{titleHighlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl font-sans text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link href="/why-minerva" className="bg-minerva-primary text-minerva-white px-10 py-4 text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase hover:bg-minerva-white hover:text-minerva-primary transition-all duration-500 border border-minerva-primary">
              Explore Courses
            </Link>
            <Link href="/about" className="bg-transparent text-minerva-white px-10 py-4 text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase hover:bg-minerva-white hover:text-minerva-blue transition-all duration-500 border border-gray-400">
              Our History
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS & LEGACY SECTION (Dynamic from Sanity) */}
      <section className="w-full py-24 bg-minerva-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-200 pb-20">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-6xl font-serif font-medium text-minerva-primary mb-3">{stats?.yearEstablished || "1955"}</span>
              <span className="text-xs font-sans font-bold text-minerva-blue tracking-[0.2em] uppercase">Year Established</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-6xl font-serif font-medium text-minerva-primary mb-3">{stats?.yearsOfLegacy || "70+"}</span>
              <span className="text-xs font-sans font-bold text-minerva-blue tracking-[0.2em] uppercase">Years of Legacy</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-6xl font-serif font-medium text-minerva-primary mb-3">{stats?.selectionsCount || "35000+"}</span>
              <span className="text-xs font-sans font-bold text-minerva-blue tracking-[0.2em] uppercase">Selections</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-6xl font-serif font-medium text-minerva-primary mb-3">{stats?.ranking || "#1"}</span>
              <span className="text-xs font-sans font-bold text-minerva-blue tracking-[0.2em] uppercase">In India</span>
            </div>
          </div>

          <div className="pt-20 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-minerva-blue mb-6 leading-tight">
                {stats?.storyTitle || "Shaping the Future of the Armed Forces."}
              </h2>
              <p className="text-lg font-sans text-gray-600 leading-relaxed mb-8 font-light whitespace-pre-line">
                {stats?.storyDescription || "Founded by Lt. Col. Deol, Minerva Academy is not just a coaching center—it is an institution of discipline, leadership, and unwavering dedication. For over seven decades, we have been the premier training ground for India's finest officers."}
              </p>
              <Link href="/about" className="inline-flex items-center text-minerva-primary font-sans font-bold tracking-[0.2em] uppercase text-xs hover:text-minerva-blue transition-colors group">
                Read Our Complete Story 
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-[450px] w-full bg-gray-100 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000" 
                style={{ backgroundImage: `url('${stats?.storyImage ? urlFor(stats.storyImage).url() : "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"}')` }}
              ></div>
              <div className="absolute inset-0 border-[12px] border-minerva-white z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP COURSES SECTION (Dynamic from Sanity) */}
      <section className="w-full py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase mb-4 block">
                Training Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-minerva-blue">
                Our Flagship <span className="italic text-minerva-primary">Courses</span>
              </h2>
            </div>
            <Link href="/contact" className="mt-6 md:mt-0 border-b border-minerva-primary text-minerva-primary font-sans font-semibold tracking-widest text-xs pb-1 hover:text-minerva-blue hover:border-minerva-blue transition-colors uppercase">
              View All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses && courses.length > 0 ? (
              courses.map((course: any) => (
                <div key={course._id} className="group relative h-[420px] overflow-hidden bg-minerva-blue cursor-pointer shadow-lg">
                  <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-30 transition-opacity duration-700" style={{ backgroundImage: `url('${course.image ? urlFor(course.image).url() : "https://images.unsplash.com/photo-1595054224741-995a32b6db76?q=80&w=2070&auto=format&fit=crop"}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue via-minerva-blue/60 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="bg-minerva-accent text-minerva-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 self-start mb-4">{course.category}</span>
                    <h3 className="text-3xl font-serif font-medium text-minerva-white mb-2">{course.title}</h3>
                    <div className="h-0 overflow-hidden group-hover:h-24 transition-all duration-500 ease-in-out">
                      <p className="text-gray-300 font-sans text-sm font-light leading-relaxed pt-2">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-6 text-minerva-white font-sans text-xs tracking-widest uppercase font-semibold flex items-center group-hover:text-minerva-accent transition-colors">
                      Discover More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No courses published yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* 4. ELITE NATIONAL PRIDE ROLL OF HONOUR (Dynamic from Sanity) */}
      <section className="relative w-full py-32 bg-minerva-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 border border-minerva-accent/40 px-6 py-2 mb-6 bg-minerva-blue/40">
              <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
              <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase ml-2">
                Roll of Honour & National Pride
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-minerva-white mb-6 leading-tight">
              Guardians of the <span className="italic text-minerva-accent">Nation</span>
            </h2>
            <p className="text-gray-200 font-sans font-light text-base md:text-lg leading-relaxed">
              Honouring the legendary officers, commanders, and national heroes whose extraordinary journeys began at Minerva Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rollOfHonour && rollOfHonour.length > 0 ? (
              rollOfHonour.map((hero: any) => (
                <div key={hero._id} className="bg-minerva-blue border border-gray-700 overflow-hidden group hover:border-minerva-accent transition-all duration-500 flex flex-col shadow-2xl relative">
                  <div className="grid grid-cols-3 h-1.5 w-full">
                    <div className="bg-[#FF671F]"></div>
                    <div className="bg-white"></div>
                    <div className="bg-[#138808]"></div>
                  </div>
                  <div className="h-80 w-full bg-cover bg-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url('${hero.image ? urlFor(hero.image).url() : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"}')` }}></div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-minerva-accent font-sans text-[11px] tracking-[0.3em] uppercase font-bold mb-2">
                      {hero.batch}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-minerva-white mb-3">
                      {hero.name}
                    </h3>
                    <p className="text-gray-300 font-sans font-light text-sm leading-relaxed mb-6">
                      {hero.description}
                    </p>
                    <div className="mt-auto border-t border-gray-700/80 pt-4 flex justify-between items-center text-xs font-sans tracking-widest text-minerva-accent uppercase font-semibold">
                      <span>Verified Legend</span>
                      <span>{hero.achievement}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-300 text-center col-span-3">No legends added yet.</p>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}