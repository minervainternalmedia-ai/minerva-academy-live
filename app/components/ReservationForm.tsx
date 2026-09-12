"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    dob: "",
    state: "",
    course: "SSB Interview Training (15 Days)",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message beautifully
    const message = `*New Admission Inquiry*\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*WhatsApp:* ${formData.whatsapp}\n*DOB:* ${formData.dob}\n*State:* ${formData.state}\n*Course Selected:* ${formData.course}`;
    
    // Encode for URL to avoid broken links
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect straight to your WhatsApp Helpline
    window.open(`https://wa.me/918054197300?text=${encodedMessage}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Full Name *</label>
          <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Cadet full name" className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors" />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Email Address *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@domain.com" className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors" />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Phone Number *</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors" />
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">WhatsApp Number *</label>
          <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+91 98765 43210" className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors" />
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Date of Birth (DOB) *</label>
          <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors [color-scheme:dark]" />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Home State *</label>
          <input required type="text" name="state" value={formData.state} onChange={handleChange} placeholder="e.g., Punjab, Haryana..." className="bg-[#0f4a27] text-white placeholder-gray-400 p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors" />
        </div>

      </div>

      {/* Select Course (WITH ALL NEW OPTIONS ADDED) */}
      <div className="flex flex-col">
        <label className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Select Course *</label>
        <select required name="course" value={formData.course} onChange={handleChange} className="bg-[#0f4a27] text-white p-4 outline-none border border-transparent focus:border-minerva-accent transition-colors cursor-pointer appearance-none">
          <option value="SSB Interview Training (15 Days)">SSB Interview Training (15 Days)</option>
          <option value="CPSS / PABT Training (1 Day)">CPSS / PABT Training (1 Day)</option>
          <option value="NDA Written Exam Coaching">NDA Written Exam Coaching</option>
          <option value="CDS - IMA Written Exam (6 Weeks)">CDS - IMA Written Exam (6 Weeks)</option>
          <option value="CDS - OTA Written Exam (6 Weeks)">CDS - OTA Written Exam (6 Weeks)</option>
          <option value="CDS + AFCAT Written Exam (6 Weeks)">CDS + AFCAT Written Exam (6 Weeks)</option>
          <option value="AFCAT Written Exam Coaching">AFCAT Written Exam Coaching</option>
          <option value="ACC Written Exam Coaching">ACC Written Exam Coaching</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-[#ff671f] text-white font-bold tracking-[0.2em] text-xs uppercase py-5 hover:bg-white hover:text-minerva-blue transition-all duration-300 shadow-xl mt-4">
        Proceed to Secure Seat via WhatsApp
      </button>
    </form>
  );
}