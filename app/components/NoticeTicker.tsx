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
      
      {/* Right Side: Contact Number (Hidden on very small mobile screens to save space) */}
      <div className="hidden md:flex items-center text-[#FF671F] font-bold tracking-widest shrink-0 ml-4">
        <span>CONTACT: +91 93569 02334</span>
      </div>
      
    </div>
  );
}