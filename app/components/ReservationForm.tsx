// app/components/ReservationForm.tsx
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
    
    // The WhatsApp Number to receive the leads (Enter with country code, no + sign)
    const targetWhatsAppNumber = "918054197300"; 

    // Formatting the message for WhatsApp
    const message = `*New Reservation Request!*
------------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp}
*DOB:* ${formData.dob}
*State:* ${formData.state}
*Selected Course:* ${formData.course}
------------------------------`;

    // Encode the message to make it URL safe and open WhatsApp
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Full Name *</label>
          <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Cadet full name" className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] placeholder-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Email Address *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@domain.com" className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] placeholder-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Phone Number *</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] placeholder-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">WhatsApp Number *</label>
          <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+91 98765 43210" className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] placeholder-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Date of Birth (DOB) *</label>
          <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] text-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Home State *</label>
          <input required type="text" name="state" value={formData.state} onChange={handleChange} placeholder="e.g., Punjab, Haryana..." className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] placeholder-gray-400" />
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white">Select Course *</label>
        <select name="course" value={formData.course} onChange={handleChange} className="w-full bg-[#0a4122] text-white px-4 py-3 outline-none focus:ring-1 focus:ring-[#ff671f] appearance-none cursor-pointer">
          <option value="SSB Interview Training (15 Days)">SSB Interview Training (15 Days)</option>
          <option value="CPSS / PABT Training (1 Day)">CPSS / PABT Training (1 Day)</option>
          <option value="NDA Written Exam Coaching">NDA Written Exam Coaching</option>
          <option value="CDS / OTA Written Exam Coaching">CDS / OTA Written Exam Coaching</option>
          <option value="AFCAT Written Exam Coaching">AFCAT Written Exam Coaching</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-[#ff671f] text-white font-bold text-xs tracking-[0.2em] uppercase py-4 mt-6 hover:bg-orange-600 transition-colors shadow-lg cursor-pointer">
        Submit Application via WhatsApp
      </button>
    </form>
  );
}