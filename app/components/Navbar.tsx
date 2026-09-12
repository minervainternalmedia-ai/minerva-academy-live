"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const toggleDropdown = (menuName: string) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      sublinks: [
        { name: "About The Founder", href: "/about" },
        { name: "Why Minerva Academy", href: "/why-minerva" },
        { name: "Famous Alumni", href: "/famous-alumni" },
        { name: "Our Pledge", href: "/our-pledge" }
      ]
    },
    {
      name: "SSB Interview",
      sublinks: [
        { name: "SSB Interview Training", href: "/ssb-interview-training" },
        { name: "CPSS / PABT Training", href: "/cpss-pabt-training" }
      ]
    },
    {
      name: "Written Exams",
      sublinks: [
        { name: "NDA Written Exam", href: "/nda-written-exam" },
        { name: "CDS / OTA Written Exam", href: "/cds-ota-exam" },
        { name: "AFCAT Written Exam", href: "/afcat-written-exam" },
        { name: "ACC Written Exam", href: "/acc-written-exam" }
      ]
    },
    {
      name: "Life at Minerva",
      sublinks: [
        { name: "Our Campus", href: "/our-campus" },
        { name: "Hostel & Mess", href: "/hostel-and-mess" },
        { name: "Sports Facilities", href: "/sports-facilities" }
      ]
    },
    {
      name: "Success Stories",
      sublinks: [
        { name: "Testimonials", href: "/testimonials" },
        { name: "Selections", href: "/selections" }
      ]
    },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className="w-full bg-minerva-primary border-b border-minerva-accent/30 sticky top-0 z-[100] shadow-lg">
      
      {/* Camouflage Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#283047_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Area (Dynamic from Sanity with Fallback) */}
        <div className="flex flex-col relative z-50">
          <Link className="leading-none flex items-center" href="/" onClick={closeMenu}>
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
          {navItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              {item.sublinks ? (
                <>
                  <button className="hover:text-minerva-accent transition-colors flex items-center gap-1 cursor-pointer uppercase">
                    {item.name} ▾
                  </button>
                  <div className="absolute top-full left-0 w-60 bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
                    {item.sublinks.map((sub) => (
                      <Link key={sub.name} className="px-4 py-2.5 hover:bg-minerva-blue hover:text-minerva-accent transition-colors uppercase" href={sub.href}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link className="hover:text-minerva-accent transition-colors uppercase" href={item.href}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
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

      {/* Mobile Menu Dropdown (ACCORDION INTEGRATED) */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-minerva-primary border-t-2 border-minerva-accent shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col px-6 font-sans text-xs font-semibold tracking-wider uppercase text-gray-200">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-700/50">
              {item.sublinks ? (
                <div className="flex flex-col">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex justify-between items-center py-4 w-full text-left hover:text-minerva-accent transition-colors focus:outline-none"
                  >
                    {item.name}
                    <span className={`transform transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-minerva-accent" : ""}`}>
                      ▼
                    </span>
                  </button>
                  
                  {/* Mobile Sublinks Accordion */}
                  <div 
                    className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.sublinks.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href} 
                        onClick={closeMenu}
                        className="py-2.5 text-gray-400 hover:text-minerva-accent transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-minerva-accent"></span>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  onClick={closeMenu} 
                  className="block py-4 hover:text-minerva-accent transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-6 pb-2">
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="bg-minerva-accent text-minerva-white px-5 py-3 text-center block w-full hover:bg-white hover:text-minerva-blue transition-all duration-300"
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}