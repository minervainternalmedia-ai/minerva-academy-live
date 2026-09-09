// app/data/cms.ts

export const siteData = {
  // ==========================================
  // 1. GLOBAL SITE SETTINGS (Used on every page)
  // ==========================================
  global: {
    brandName: "Minerva Academy",
    established: "Est. 1955",
    motto: "Nation First, Then Best Grades.",
    noticeTickerText: "ADMISSIONS OPEN FOR NEXT BATCH. LIMITED SEATS AVAILABLE.",
    contact: {
      ssbHelpline: "+91-9356902334",
      writtenHelpline: "+91-8054197300",
      whatsapp: "918054197300",
      email: "info@minervaacademy.com",
      address: "Minerva Academy, NH-21, VPO Daon, Mohali, Punjab - 140301, India"
    },
    socialMedia: {
      youtube: "https://www.youtube.com/@minervaacademy",
      instagram: "https://www.instagram.com/minervaacademy",
      facebook: "https://www.facebook.com/MinervaAcademy"
    }
  },

  // ==========================================
  // 2. PAGE CONTENT: HOME
  // ==========================================
  home: {
    hero: {
      tagline: "The Minerva Legacy",
      headingLine1: "India's Premier",
      headingLine2: "Armed Forces Institute",
      description: "Over 35,000+ officers forged in courage, discipline, and honor since 1955.",
      buttonText: "Apply For Admission",
      backgroundImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop"
    },
    stats: [
      { number: "1955", label: "Year Established" },
      { number: "35,000+", label: "Successful Selections" },
      { number: "10", label: "Acres of Campus" }
    ]
  },

  // ==========================================
  // 3. PAGE CONTENT: OUR PLEDGE
  // ==========================================
  pledge: {
    hero: {
      badge: "The Minerva Code",
      heading: "Our Pledge",
      backgroundImage: "https://images.unsplash.com/photo-1507676184212-d0330a156520?q=80&w=1920&auto=format&fit=crop"
    },
    mainQuote: "We pledge to instill courage, discipline, and the highest standards of integrity in every candidate who walks through our gates. We are dedicated to forging leaders of character who will serve the nation with honor, duty, and unparalleled excellence.",
    pillars: [
      {
        title: "Duty",
        description: "To perform our tasks with absolute dedication, putting the needs of the nation and the academy above our own."
      },
      {
        title: "Honor",
        description: "To uphold the truth, maintain a spotless character, and exhibit moral courage in the face of adversity."
      },
      {
        title: "Country",
        description: "To remain eternally loyal to the Republic of India, safeguarding its sovereignty and legacy at all costs."
      }
    ]
  },

  // ==========================================
  // 4. PAGE CONTENT: SSB INTERVIEW TRAINING
  // ==========================================
  ssbTraining: {
    hero: {
      badge: "Flagship Program",
      heading: "SSB Interview Training",
      description: "India's oldest and most trusted coaching for the Services Selection Board. 15 Days of exhaustive preparation.",
      backgroundImage: "https://images.unsplash.com/photo-1579389083046-d3ce19b88228?q=80&w=1920&auto=format&fit=crop"
    },
    overview: {
      title: "The Minerva SSB Advantage",
      subheading: "New batches start every 1st, 11th, and 21st of the month.",
      paragraphs: [
        "Minerva Academy provides 15 Days / 100 hours of exhaustive coaching for the SSB interview. Our scientifically designed curriculum covers all three techniques of testing: Psychological Tests, GTO Tasks, and Personal Interview.",
        "With over 70 years of experience, our former SSB assessors and expert faculty guide you to approach the tests with absolute confidence and authenticity."
      ]
    },
    highlights: {
      title: "Course Highlights",
      points: [
        "Full 15-Day Term: 100+ hours of rigorous coaching.",
        "Exact SSB Replica: Full-scale GTO outdoor obstacle course.",
        "Mock Interviews: Conducted by former SSB Presidents.",
        "Psychological Testing: TAT, WAT, SRT, and SD evaluations.",
        "Screening Test (OIR & PPDT): Extensive daily practice."
      ]
    }
  },

  // ==========================================
  // 5. PAGE CONTENT: ABOUT THE FOUNDERS
  // ==========================================
  founders: {
    hero: {
      badge: "Our Heritage",
      heading: "About The Founders",
      backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
    },
    profiles: [
      {
        name: "Mrs. J. Deol, M.A.(psych) B.T",
        role: "Founder Principal",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
        bio: "An alumna of Lady Maclagan College and Govt. College of Lahore, Mrs. J. Deol established the academy in August 1955 in Shimla. The institution was subsequently relocated to Jalandhar Cantt, then to Sector 3 and Sector 15 in Chandigarh, before settling in its current location in Daon."
      },
      {
        name: "Lt. Col. I. S. Deol, M.A.",
        role: "Founder Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        bio: "Holding an M.A. in History from Govt College, Lahore, Col. Deol was an accomplished sportsman of his era. He cleared the S.S.B. on his initial attempt in 1944, gaining an emergency commission in the British Indian Army. During WWII, he served in the Middle East Sector (Iraq)."
      }
    ]
  }
};