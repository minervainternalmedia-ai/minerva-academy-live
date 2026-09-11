"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  // Fetch the dynamic logo from Sanity on load
  useEffect(() => {
    client
      .fetch(`*[_type == "siteSettings"][0]{ logo }`)
      .then((data) => {
        if (data?.logo) {
          setLogoUrl(urlFor(data.logo).url());
        }
      })
      .catch((err) => console.error("Error fetching logo from Sanity:", err));
  }, []);

  return (
    <nav className="w-full bg-minerva-primary border-b border-minerva-accent/30 sticky top-0 z-[100] shadow-lg">
      
      {/* Camouflage Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Area (Dynamic from Sanity with Fallback) */}
        <div className="flex flex-col relative z-50">
          <Link className="leading-none flex items-center" href="/">
            {logoUrl ? (
              <img src={logoUrl} alt="Minerva Academy Logo" className="h-12 w-auto object-contain max-h-12" />
            ) : (
              <span className="font-serif font-bold text-2xl text-minerva-white">
                MINERVA
              </span>
            )}
          </Link>
          {!logoUrl && (
            <span className="font-sans text-xs tracking-[0.3em] text-minerva-accent mt-1">
              ACADEMY (EST. 1955)
            </span>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 items-center font-sans text-xs font-semibold tracking-wider uppercase text-gray-200">
          
          <Link className="hover:text-minerva-accent transition-colors" href="/">Home</Link>

          {/* About Us Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer">
              About Us ▾
            </button>
            <div className="absolute top-full left-0 w-56 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/about">About The Founder</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/why-minerva">Why Minerva Academy</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/famous-alumni">Famous Alumni</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/our-pledge">Our Pledge</Link>
            </div>
          </div>

          {/* SSB */}
          <div className="relative group py-2">
            <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer">
              SSB Interview ▾
            </button>
            <div className="absolute top-full left-0 w-60 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/ssb-interview-training">SSB Interview Training</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/cpss-pabt-training">CPSS / PABT Training</Link>
            </div>
          </div>

          {/* Written Exams */}
          <div className="relative group py-2">
            <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer">
              Written Exams ▾
            </button>
            <div className="absolute top-full left-0 w-60 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/nda-written-exam">NDA Written Exam</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/cds-ota-exam">CDS / OTA Written Exam</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/afcat-written-exam">AFCAT Written Exam</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/acc-written-exam">ACC Written Exam</Link>
            </div>
          </div>

          {/* Life at Minerva */}
          <div className="relative group py-2">
            <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer">
              Life at Minerva ▾
            </button>
            <div className="absolute top-full left-0 w-56 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/our-campus">Our Campus</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/hostel-and-mess">Hostel & Mess</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/sports-facilities">Sports Facilities</Link>
              
              {/* HIDDEN FOR NOW - UNCOMMENT LATER
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/photo-gallery">Photo Gallery</Link>
              */}
            </div>
          </div>

          {/* Success Stories */}
          <div className="relative group py-2">
            <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer">
              Success Stories ▾
            </button>
            <div className="absolute top-full left-0 w-48 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/testimonials">Testimonials</Link>
              <Link className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors" href="/selections">Selections</Link>
            </div>
          </div>

          <Link className="hover:text-minerva-accent transition-colors" href="/contact">Contact Us</Link>

        </div>
        
        {/* Desktop Admissions Button */}
        <div className="hidden lg:block relative z-50">
           <Link 
             className="bg-minerva-accent text-minerva-white px-5 py-2.5 text-xs font-sans font-bold tracking-widest uppercase hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-md inline-block cursor-pointer" 
             href="/contact"
           >
             Admissions
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-minerva-white p-2 relative z-50 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl flex flex-col py-4 px-6 font-sans text-xs font-semibold tracking-wider uppercase text-gray-200 space-y-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/ssb-interview-training" onClick={() => setIsMobileMenuOpen(false)}>SSB Interview</Link>
          <Link href="/nda-written-exam" onClick={() => setIsMobileMenuOpen(false)}>Written Exams</Link>
          <Link href="/our-campus" onClick={() => setIsMobileMenuOpen(false)}>Life at Minerva</Link>
          <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>Success Stories</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          
          <div className="pt-4 border-t border-gray-700">
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-minerva-accent text-minerva-white px-5 py-3 text-center block w-full hover:bg-white hover:text-minerva-blue transition-all duration-300"
            >
              Admissions
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}