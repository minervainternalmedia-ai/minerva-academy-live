"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "SSB Interview Training",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `*New Admission Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Course:* ${formData.course}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918054197300?text=${whatsappText}`, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFA] text-minerva-blue selection:bg-minerva-accent selection:text-white">
      
      {/* Cinematic Editorial Hero Banner */}
      <section className="relative w-full pt-36 pb-32 bg-minerva-primary text-minerva-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-minerva-primary/90 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-6 mb-8 opacity-90">
            <div className="w-16 h-[1px] bg-minerva-accent"></div>
            <span className="text-minerva-accent tracking-[0.5em] font-sans text-xs font-bold uppercase">
              Admissions Command
            </span>
            <div className="w-16 h-[1px] bg-minerva-accent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-none mb-8 drop-shadow-2xl">
            Contact <span className="italic text-minerva-accent font-light">Headquarters</span>
          </h1>
          
          <p className="text-gray-300 font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            Begin your journey toward a commissioned career. Connect directly with our admissions command via secure channels.
          </p>
        </div>
      </section>

      {/* Main Luxury Split-Pane Layout */}
      <section className="w-full py-32 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Command Lines (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 md:p-12 border-t-[3px] border-minerva-accent shadow-[0_30px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
                
                {/* Subtle corner frame accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-200"></div>

                <span className="text-minerva-accent font-sans text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
                  Direct Channels
                </span>
                <h2 className="text-3xl font-serif font-medium text-minerva-blue mb-6">
                  Official Helplines
                </h2>
                <p className="font-sans font-light text-gray-500 text-sm leading-relaxed mb-10">
                  Our administrative staff and senior mentors are available to assist aspirants and parents with batch enrollments and hostel facilities.
                </p>

                <div className="space-y-8">
                  {/* SSB Helpline */}
                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-minerva-primary/5 rounded-full flex items-center justify-center text-minerva-primary shrink-0 border border-minerva-accent/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">SSB Interview Wing</h4>
                      <p className="text-minerva-blue font-serif font-bold text-lg">+91 - 9356902334</p>
                    </div>
                  </div>

                  {/* Written Exams Helpline */}
                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-minerva-primary/5 rounded-full flex items-center justify-center text-minerva-primary shrink-0 border border-minerva-accent/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Written Exams (NDA / CDS)</h4>
                      <p className="text-minerva-blue font-serif font-bold text-lg">+91 - 8054197300</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-minerva-primary/5 rounded-full flex items-center justify-center text-minerva-primary shrink-0 border border-minerva-accent/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Official Electronic Mail</h4>
                      <p className="text-minerva-blue font-serif text-base">info@minervaacademy.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-minerva-primary/5 rounded-full flex items-center justify-center text-minerva-primary shrink-0 border border-minerva-accent/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Campus Location</h4>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        Minerva Academy, NH-21, VPO Daon, Mohali, Punjab - 140301, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: High-End WhatsApp Concierge Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 border-t-[3px] border-minerva-primary shadow-[0_30px_60px_rgba(0,0,0,0.06)] relative">
                
                <div className="mb-10">
                  <span className="text-minerva-accent font-sans text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">
                    Priority Dispatch
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-minerva-blue">
                    Direct WhatsApp Inquiry
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Full Name *</label>
                      <input 
                        required 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Candidate Full Name"
                        type="text" 
                        className="w-full bg-[#FDFDFD] border border-gray-200 px-5 py-4 text-minerva-blue text-sm focus:outline-none focus:border-minerva-accent transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Email Address *</label>
                      <input 
                        required 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="candidate@domain.com"
                        type="email" 
                        className="w-full bg-[#FDFDFD] border border-gray-200 px-5 py-4 text-minerva-blue text-sm focus:outline-none focus:border-minerva-accent transition-all duration-300" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Phone Number *</label>
                      <input 
                        required 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        type="tel" 
                        className="w-full bg-[#FDFDFD] border border-gray-200 px-5 py-4 text-minerva-blue text-sm focus:outline-none focus:border-minerva-accent transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Target Course *</label>
                      <select 
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full bg-[#FDFDFD] border border-gray-200 px-5 py-4 text-minerva-blue text-sm focus:outline-none focus:border-minerva-accent transition-all duration-300"
                      >
                        <option>SSB Interview Training</option>
                        <option>NDA Written Exam</option>
                        <option>CDS / OTA Written Exam</option>
                        <option>AFCAT Written Exam</option>
                        <option>ACC Written Exam</option>
                        <option>CPSS / PABT Training</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Your Message / Requirements</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Specify batch preference or hostel requirements..."
                      className="w-full bg-[#FDFDFD] border border-gray-200 px-5 py-4 text-minerva-blue text-sm focus:outline-none focus:border-minerva-accent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#25D366] text-white font-bold tracking-[0.2em] text-xs uppercase py-5 hover:bg-[#1da851] transition-all duration-500 flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Dispatch Secure Inquiry to WhatsApp
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}