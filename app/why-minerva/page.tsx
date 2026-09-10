import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0; // Ensures the page updates immediately when you change Sanity backend

export default async function WhyMinervaPage() {
  // Fetch Expert Faculty from Sanity Backend
  const faculty = await client.fetch(`*[_type == "expertFaculty"] | order(order asc)`);

  // Static 13 Points from Brochure
  const points = [
    {
      num: "01",
      text: "Established in 1955 by Lt. Col. Deol, Minerva Academy is the Premier Academy for SSB Interviews and Written Exam Coaching with over 60 years of experience."
    },
    {
      num: "02",
      text: "Minerva has an unbeatable track record, with over 40000+ officers trained to success, and over 1000+ top positions in the Indian Armed forces."
    },
    {
      num: "03",
      text: "Every fourth officer in the Indian Armed forces has been a student of Minerva Academy."
    },
    {
      num: "04",
      text: "Highly qualified and experienced faculty at Minerva adopts a practical, systematic and fun filled approach towards training."
    },
    {
      num: "05",
      text: "The Minerva Academy secure campus provides unmatched infrastructure, spread over 10 acres in lush green, pollution free, SSB like environment."
    },
    {
      num: "06",
      text: "On campus hostel with security, 24 hour power backup & hot water. Geyser in all washrooms."
    },
    {
      num: "07",
      text: "On campus Mess serves nutritious and palatable meals. Breakfast, Morning Tea, Lunch, Afternoon Tea, Dinner are served with utmost care towards hygiene."
    },
    {
      num: "08",
      text: "Minerva guarantees 10 days (100 hrs) of training for SSB Interviews and over 300+ hours of coaching for written exam coaching."
    },
    {
      num: "09",
      text: "Param Vir Chakra - Captain Vikram Batra (Kargil Hero) & Param Vir Charka - Flying Officer Nirmal Jit Singh Sekhon (IAF's First and Only PVC awardee) are among the famous alumni of Minerva Academy."
    },
    {
      num: "10",
      text: "Only Minerva Academy offers facilities like Gymnasium, Swimming Pool, Medical and Physiotherapy Clinic, Football grounds, Basketball court, Obstacle course, Cricket nets and much more."
    },
    {
      num: "11",
      text: "Minerva is a unique and life changing experience that completely transforms a person during the training period."
    },
    {
      num: "12",
      text: "Minerva guarantees comprehensive preparation covering psychological tests, GTO tasks, and personal interviews by seasoned assessors."
    },
    {
      num: "13",
      text: "Our location is easily accessible and well connected by Rail, Road and by Air."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* HEADER HERO */}
      <section className="bg-minerva-blue text-minerva-white py-20 text-center px-6">
        <span className="text-minerva-accent tracking-[0.4em] font-sans text-xs font-bold uppercase mb-4 block">
          Unmatched Excellence
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
          Why Minerva <span className="italic text-minerva-accent">Academy</span>
        </h1>
        <p className="text-gray-300 font-sans text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Discover what makes Minerva Academy India's undisputed leader in SSB interview and written exam preparation since 1955.
        </p>
      </section>

      {/* 13 POINTS GRID SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <div 
              key={index} 
              className="bg-minerva-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-minerva-primary transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-minerva-primary mb-4 block">
                  {item.num}.
                </span>
                <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR EXPERT FACULTY SECTION (Dynamic from Sanity) */}
      <section className="py-24 bg-minerva-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-minerva-accent tracking-[0.3em] font-sans text-xs font-bold uppercase mb-3 block">
              Mentorship & Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-minerva-blue">
              Our Expert <span className="italic text-minerva-primary">Faculty</span>
            </h2>
            <p className="text-gray-600 font-sans font-light mt-4 text-base">
              Trained under veterans, leaders, and professional educators dedicated to transforming aspirants into officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty && faculty.length > 0 ? (
              faculty.map((fac: any) => (
                <div key={fac._id} className="bg-gray-50 border border-gray-200 overflow-hidden shadow-md group">
                  <div 
                    className="h-72 w-full bg-cover bg-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                    style={{ backgroundImage: `url('${fac.image ? urlFor(fac.image).url() : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}')` }}
                  ></div>
                  <div className="p-8">
                    <span className="text-minerva-accent font-sans text-[11px] tracking-[0.3em] uppercase font-bold mb-1 block">
                      {fac.role}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-minerva-blue mb-3">{fac.name}</h3>
                    <p className="text-gray-600 font-sans text-sm font-light leading-relaxed">{fac.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3 py-10">Faculty profiles are currently being updated.</p>
            )}
          </div>
        </div>
      </section>

      {/* JOIN THE LEGACY BANNER */}
      <section className="bg-minerva-primary py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-minerva-white mb-6">
            Join the Legacy of Success
          </h2>
          <p className="text-gray-200 font-sans text-base mb-8 font-light">
            Take the first step towards your uniform. Enroll today and train with India's most trusted armed forces preparatory institution.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-minerva-accent text-minerva-white px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-minerva-blue transition-all shadow-xl"
          >
            Enroll Today
          </Link>
        </div>
      </section>

    </main>
  );
}