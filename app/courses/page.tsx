import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

// TypeScript interface to prevent any red line errors in VS Code
interface CoursePage {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  duration: string;
  overview: string;
  keyFeatures: string[];
}

export default async function CoursesPage() {
  // Fetch all detailed course pages from the Sanity Backend
  const courses = await client.fetch(`*[_type == "coursePage"]`);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* HEADER SECTION */}
      <section className="bg-minerva-primary text-minerva-white py-24 text-center px-6 border-b border-gray-700">
        <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase mb-4 block">
          Training Programs
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
          Our <span className="italic text-minerva-accent">Courses</span>
        </h1>
        <p className="text-gray-200 font-sans text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Engineered to cultivate leadership, intellectual command, and the psychological resilience required to conquer the Services Selection Board (SSB).
        </p>
      </section>

      {/* DYNAMIC COURSES GRID (Fetched from Sanity) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {courses && courses.length > 0 ? (
            courses.map((course: CoursePage) => (
              <div 
                key={course._id} 
                className="bg-minerva-blue border border-gray-700 p-8 shadow-xl flex flex-col h-full group hover:border-minerva-accent transition-colors duration-300"
              >
                {/* Course Category / Duration Badge */}
                <span className="text-minerva-accent text-[10px] tracking-[0.2em] font-bold uppercase mb-4 block bg-minerva-primary/50 w-fit px-3 py-1">
                  {course.duration || course.category || "Training Program"}
                </span>
                
                {/* Course Title */}
                <h2 className="text-2xl font-serif text-minerva-white mb-4">
                  {course.title}
                </h2>
                
                {/* Course Overview / Description */}
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-8 flex-grow">
                  {course.overview}
                </p>
                
                {/* Dynamic Checkmarks (Key Features) */}
                {course.keyFeatures && course.keyFeatures.length > 0 && (
                  <ul className="mb-8 space-y-3">
                    {course.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 font-sans text-xs flex items-start gap-3">
                        <span className="text-minerva-accent mt-0.5">✓</span> 
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Discover More Link */}
                <Link 
                  href={course.slug?.current ? `/courses/${course.slug.current}` : "/contact"} 
                  className="mt-auto border-t border-gray-700 pt-5 text-minerva-accent font-sans text-xs tracking-widest uppercase font-semibold group-hover:text-minerva-white transition-colors flex justify-between items-center"
                >
                  Discover More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-gray-500 font-sans text-lg">No courses have been added yet.</p>
              <p className="text-gray-400 font-sans text-sm mt-2">Go to your Sanity Studio and add items to "Training & Courses Pages".</p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}