import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // ----------------------------------------------------
    // 1. GLOBAL & HOMEPAGE SCHEMAS
    // ----------------------------------------------------
    {
      name: 'siteSettings',
      title: 'Global - Website Settings (Logo)',
      type: 'document',
      fields: [
        { name: 'logo', title: 'Main Website Logo', type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'topBanner',
      title: 'Global - Top Announcement Banner',
      type: 'document',
      fields: [
        { name: 'isActive', title: 'Show Banner?', type: 'boolean', initialValue: true },
        { name: 'dispatchText', title: 'Dispatch Text (e.g., NEW SSB INTERVIEW BATCH STARTS...)', type: 'string' },
        { name: 'helpline', title: 'Helpline Number (e.g., +91 8054197300)', type: 'string' }
      ]
    },
    {
      name: 'homeHero',
      title: 'Home - Hero Section',
      type: 'document',
      fields: [
        { name: 'subheading', title: 'Subheading (e.g., Established 1955)', type: 'string' },
        { name: 'titleMain', title: 'Main Title Line 1', type: 'string' },
        { name: 'titleHighlight', title: 'Highlighted Italic Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'homeStats',
      title: 'Home - Stats & Legacy',
      type: 'document',
      fields: [
        { name: 'yearEstablished', title: 'Year Established (e.g., 1955)', type: 'string' },
        { name: 'yearsOfLegacy', title: 'Years of Legacy (e.g., 70+)', type: 'string' },
        { name: 'selectionsCount', title: 'Selections Count (e.g., 35000+)', type: 'string' },
        { name: 'ranking', title: 'Ranking (e.g., #1)', type: 'string' },
        { name: 'storyTitle', title: 'Story Heading', type: 'string' },
        { name: 'storyDescription', title: 'Story Paragraph', type: 'text' },
        { name: 'storyImage', title: 'Story Feature Image', type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'homeCourse',
      title: 'Home - Flagship Courses',
      type: 'document',
      fields: [
        { name: 'title', title: 'Course Title', type: 'string' },
        { name: 'category', title: 'Category Tag', type: 'string' },
        { name: 'description', title: 'Course Description', type: 'text' },
        { name: 'image', title: 'Course Background Image', type: 'image', options: { hotspot: true } }
      ]
    },

    // ----------------------------------------------------
    // 2. ABOUT US SCHEMAS
    // ----------------------------------------------------
    {
      name: 'founder',
      title: 'About - Academy Founders',
      type: 'document',
      fields: [
        { name: 'name', title: 'Founder Name', type: 'string' },
        { name: 'role', title: 'Role (e.g., Founder Principal)', type: 'string' },
        { name: 'bio', title: 'Biography', type: 'text' },
        { name: 'image', title: 'Portrait Image', type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'whyMinervaFeature',
      title: 'About - Why Minerva',
      type: 'document',
      fields: [
        { name: 'number', title: 'Point Number (e.g., 01, 04)', type: 'string' },
        { name: 'title', title: 'Short Title (Optional)', type: 'string' },
        { name: 'description', title: 'Feature Description', type: 'text' }
      ]
    },
    {
      name: 'expertFaculty',
      title: 'Why Minerva - Expert Faculty',
      type: 'document',
      fields: [
        { name: 'name', title: 'Faculty / Department Name', type: 'string' },
        { name: 'role', title: 'Role / Designation (e.g., SSB & Interview Expert)', type: 'string' },
        { name: 'image', title: 'Faculty Photo', type: 'image', options: { hotspot: true } },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'order', title: 'Display Order (1, 2, 3...)', type: 'number' }
      ]
    },
    {
      name: 'famousAlumni',
      title: 'About - Famous Alumni & Roll of Honour',
      type: 'document',
      fields: [
        { name: 'name', title: 'Alumni Name', type: 'string' },
        { name: 'batch', title: 'Branch & Batch (e.g., Indian Army 1978)', type: 'string' },
        { name: 'achievement', title: 'Major Achievement / Medal', type: 'string' },
        { name: 'description', title: 'Short Biography', type: 'text' },
        { name: 'image', title: 'Alumni Portrait', type: 'image', options: { hotspot: true } },
        { name: 'isRollOfHonour', title: 'Show on Homepage Roll of Honour?', type: 'boolean', initialValue: false }
      ]
    },
    {
      name: 'ourPledge',
      title: 'About - Our Pledge',
      type: 'document',
      fields: [
        { name: 'heading', title: 'Pledge Heading', type: 'string' },
        { name: 'pledgeText', title: 'Main Pledge Content', type: 'text' },
        { name: 'signature', title: 'Signature / Sign-off', type: 'string' },
        { name: 'backgroundImage', title: 'Background / Hero Image', type: 'image', options: { hotspot: true } }
      ]
    },

    // ----------------------------------------------------
    // 3. COURSES & TRAINING SCHEMAS (SSB & Written Exams)
    // ----------------------------------------------------
    {
      name: 'coursePage',
      title: 'Training & Courses Pages',
      type: 'document',
      fields: [
        { name: 'title', title: 'Course Page Title', type: 'string' },
        { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
        { 
          name: 'category', 
          title: 'Menu Category', 
          type: 'string',
          options: { 
            list: [
              'SSB Interview Training', 
              'CPSS / PABT Training', 
              'NDA Written Exam', 
              'CDS / OTA Written Exam', 
              'AFCAT Written Exam', 
              'ACC Written Exam'
            ] 
          } 
        },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
        { name: 'duration', title: 'Course Duration (e.g., 7 Weeks)', type: 'string' },
        { name: 'overview', title: 'Course Overview Description', type: 'text' },
        { name: 'keyFeatures', title: 'Key Features / Highlights', type: 'array', of: [{ type: 'string' }] }
      ]
    },
    // NEW DEDICATED SCHEMA FOR NDA WRITTEN EXAM PAGE
    {
      name: 'ndaWrittenExam',
      title: 'Course Pages - NDA Written',
      type: 'document',
      fields: [
        { name: 'heroTitle', title: 'Hero Title', type: 'string', initialValue: 'NDA Written Exam Coaching' },
        { name: 'heroDescription', title: 'Hero Description', type: 'text' },
        { name: 'durationBadge', title: 'Duration Badge Text', type: 'string', initialValue: '7-Weeks Comprehensive Program' },
        {
          name: 'feeStructure',
          title: 'Fee Structure',
          type: 'object',
          fields: [
            { name: 'tuition', title: 'Tuition Fees (Rs)', type: 'string' },
            { name: 'hostel', title: 'Hostel Charge (Rs)', type: 'string' },
            { name: 'mess', title: 'Mess Charge (Rs)', type: 'string' },
            { name: 'total', title: 'Total Fees (Rs)', type: 'string' },
            { name: 'security', title: 'Security (Refundable)', type: 'string' }
          ]
        },
        { name: 'feeSideImage', title: 'Fee Section Side Image', type: 'image', options: { hotspot: true } }
      ]
    },

    // ----------------------------------------------------
    // 4. LIFE AT MINERVA SCHEMAS
    // ----------------------------------------------------
    {
      name: 'campusFacility',
      title: 'Life at Minerva - Facilities',
      type: 'document',
      fields: [
        { name: 'title', title: 'Facility Title', type: 'string' },
        { 
          name: 'category', 
          title: 'Menu Category', 
          type: 'string',
          options: { list: ['Our Campus', 'Hostel & Mess', 'Sports Facilities'] } 
        },
        { name: 'description', title: 'Facility Description', type: 'text' },
        { name: 'mainImage', title: 'Main Feature Image', type: 'image', options: { hotspot: true } },
        { name: 'gallery', title: 'Facility Image Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }
      ]
    },
    {
      name: 'photoGallery',
      title: 'Life at Minerva - Photo Gallery',
      type: 'document',
      fields: [
        { name: 'title', title: 'Image Title / Caption', type: 'string' },
        { name: 'category', title: 'Category Tag (e.g., Campus, Training, Events)', type: 'string' },
        { name: 'image', title: 'Gallery Image', type: 'image', options: { hotspot: true } }
      ]
    },

    // ----------------------------------------------------
    // 5. SUCCESS STORIES SCHEMAS
    // ----------------------------------------------------
    {
      name: 'testimonial',
      title: 'Success Stories - Testimonials',
      type: 'document',
      fields: [
        { name: 'studentName', title: 'Student Name', type: 'string' },
        { name: 'courseTaken', title: 'Course Taken (e.g., NDA Batch 2023)', type: 'string' },
        { name: 'quote', title: 'Testimonial Quote', type: 'text' },
        { name: 'studentImage', title: 'Student Image', type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'studentSelection',
      title: 'Success Stories - Selections',
      type: 'document',
      fields: [
        { name: 'name', title: 'Student Name', type: 'string' },
        { name: 'examCleared', title: 'Exam Cleared (e.g., CDS, AFCAT)', type: 'string' },
        { name: 'year', title: 'Year of Selection', type: 'string' },
        { name: 'image', title: 'Student Portrait', type: 'image', options: { hotspot: true } }
      ]
    },

    // ----------------------------------------------------
    // 6. CONTACT & ADMISSIONS SCHEMAS
    // ----------------------------------------------------
    {
      name: 'contactPage',
      title: 'Contact Us',
      type: 'document',
      fields: [
        { name: 'title', title: 'Page Title', type: 'string', initialValue: 'Contact Us' },
        { name: 'address', title: 'Campus Address', type: 'text' },
        { name: 'phoneForSSB', title: 'Phone for SSB Interview', type: 'string' },
        { name: 'phoneForWritten', title: 'Phone for Written Exams', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url' }
      ]
    },
    {
      name: 'admissionsPage',
      title: 'Admissions',
      type: 'document',
      fields: [
        { name: 'title', title: 'Page Title', type: 'string', initialValue: 'Admissions & Fees' },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
        { name: 'instructions', title: 'Admission Instructions', type: 'text' },
        { name: 'feeStructure', title: 'Fee Structure Info', type: 'text' }
      ]
    }
  ]
}