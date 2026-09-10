import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function NoticeTicker() {
  return (
    <div className="w-full bg-[#1e2330] py-2 px-6 flex justify-between items-center text-xs font-sans">
      
      {/* Left Side: Dispatch Badge & Announcement */}
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="bg-[#FF671F] text-white px-3 py-1 font-bold tracking-[0.2em] text-[10px] shrink-0">
          DISPATCH
        </span>
        <span className="text-gray-300 uppercase tracking-widest truncate">
          New SSB Course starts on every 1st and 16th of every month. Admissions open for NDA, CDS and AFCAT
        </span>
      </div>
      
      {/* Right Side: Contact Number & Social Icons */}
      <div className="hidden md:flex items-center gap-6 text-[#FF671F] font-bold tracking-widest shrink-0 ml-4">
        <a 
          href="tel:+918054197300" 
          className="flex items-center gap-2 hover:underline"
        >
          <span>CONTACT: +91 8054197300</span>
        </a>

        {/* Social Media Links (Facebook, Instagram, YouTube) */}
        <div className="flex items-center gap-3 text-gray-300">
          <a 
            href="https://www.facebook.com/MinervaAcademy" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:text-[#FF671F] transition-colors"
          >
            <FaFacebookF size={14} />
          </a>
          <a 
            href="https://www.instagram.com/minervapunjabfc" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:text-[#FF671F] transition-colors"
          >
            <FaInstagram size={14} />
          </a>
          <a 
            href="https://www.youtube.com/@minervaacademyfootballclub" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube"
            className="hover:text-[#FF671F] transition-colors"
          >
            <FaYoutube size={14} />
          </a>
        </div>
      </div>
      
    </div>
  );
}