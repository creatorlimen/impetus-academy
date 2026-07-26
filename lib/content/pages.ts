import type {
  PageBrief,
  PageSectionSet,
} from './types';

export const pageBriefs: Record<string, PageBrief> = {
  about: {
    title: 'Learning with purpose at every stage.',
    eyebrow: 'Academy Overview',
    summary: 'Impetus Integrated Learning Academy provides a supportive environment rooted in integrity, academic excellence, character, practical skills, and technology-enabled learning.',
    body: [
      'The academy combines strong classroom teaching with thoughtful use of technology, creating a learning environment that feels both grounded and forward-looking.',
      'Learners are guided to understand deeply, communicate confidently, think critically, and apply what they learn.',
    ],
  },
  story: {
    title: 'From a small beginning to one academy with two journeys.',
    eyebrow: 'Our Story',
    summary: 'The school began as an offshoot of Impetus Tutorial College and has grown into an academy serving both Primary and Secondary learners.',
    body: [
      'The school commenced operation on 10 September 2018 with three students, seven full-time academic staff, three part-time teaching staff, and two support staff.',
      'The second and third terms improved to eight students and thirteen staff, and the population reached one hundred students in three academic years.',
      'The primary arm was established in September 2023 to cater for well-rounded primary education.',
    ],
    confirmationNeeded: ['Confirm exact official name at inception and preferred handling of Impetus College as historical naming.'],
  },
  founder: {
    title: 'From the desk of our founder.',
    eyebrow: 'Founder',
    summary: 'The founder message frames Impetus as a community built around excellence, innovation, technology integration, vocational training, and holistic education.',
    body: [
      'The founder message reflects on a journey that began in 2018 with three students and a dedicated team of educators.',
      'The message points to a vision of bridging strong traditional education with the digital landscape, helping students discover their strengths through technology integration and vocational training.',
    ],
    confirmationNeeded: ['Confirm founder name, title, credentials, preferred spelling, and portrait.'],
  },
  proprietor: {
    title: 'Proprietor profile.',
    eyebrow: 'Leadership',
    summary: 'The proprietor page introduces the school\'s leadership while keeping final name, title, credentials, and portrait details marked for confirmation.',
    body: ['The profile should be completed in the next detailed content pass once the preferred public biography is confirmed.'],
    confirmationNeeded: ['Confirm proprietor name, title, credentials, portrait, and any claims that need trimming.'],
  },
};


export const extendedPages: Record<string, PageSectionSet> = {
  about: {
    eyebrow: 'Academy Overview',
    heroTitle: 'A warm, technology-enabled academy with two equal journeys.',
    summary: 'Impetus Integrated Learning Academy combines academic excellence, integrity, character, practical skills, and technology-enabled learning across Primary and Secondary education.',
    sections: [
      {
        title: 'What the academy does',
        body: 'Impetus presents a learning environment rooted in integrity, academic excellence, and strong moral values. Technology supports teaching and learning, while the wider school culture encourages students to stand with confidence wherever they find themselves.',
      },
      {
        title: 'Educational approach',
        body: 'The academy blends strong classroom teaching with thoughtful technology use, especially across mathematics, science, art, and practical learning.',
      },
      {
        title: 'Vision and mission',
        items: [
          'Vision: To promote a balanced use of technology that motivates scholars to develop deeper conceptual understanding, ask meaningful questions, and cultivate transferable skills.',
          'Mission: To help learners build essential skills that translate meaningfully into school, life, and the future.',
        ],
      },
    ],
  },
  story: {
    eyebrow: 'Our Story',
    heroTitle: 'From three students to a growing academy community.',
    summary: 'The school story is presented with care, while a few naming details remain marked for confirmation.',
    sections: [
      {
        title: 'Beginning',
        body: 'The school began as an offshoot of Impetus Tutorial College, Charity Road, New Oko-Oba Area of Lagos, and commenced operation on 10 September 2018.',
      },
      {
        title: 'Early growth',
        body: 'At inception, the school had three students, seven full-time academic staff, three part-time teaching staff, and two support staff. The second and third terms grew to eight students and thirteen staff, and the population reached one hundred students in three academic years.',
      },
      {
        title: 'Primary arm',
        body: 'The primary arm was established in September 2023 to provide well-rounded primary education shaped by academic excellence and character development.',
      },
      {
        title: 'Teaching approach',
        items: [
          'Activity-based lessons with diagrams, audio-visual materials, and practical examples.',
          'Assessment and evaluation exercises at the end of classes.',
          'Assignment checks, revision, periodic tests, and feedback to parents.',
          'Integration of technology into mathematics, science, art, and the wider curriculum.',
        ],
      },
    ],
    confirmationNeeded: ['Confirm exact official name at inception.', 'Confirm how to present Impetus College as a historical name.', 'Review final wording around moral values before publication.'],
  },
  life: {
    eyebrow: 'Life at Impetus',
    heroTitle: 'Learning beyond the classroom, pending approved imagery.',
    summary: 'Life at Impetus is shaped by practical learning, technology-supported teaching, extracurricular opportunities, and a connected school community.',
    sections: [
      {
        title: 'Activity-based learning',
        body: 'Impetus uses an activity-based lesson system with diagrams, audio-visual resources, and practical examples so teachers and learners can participate actively in the learning process.',
      },
      {
        title: 'Extracurricular development',
        body: 'Extracurricular activities include sports, arts, music, and clubs, giving students opportunities to explore interests and develop well-rounded personalities.',
      },
      {
        title: 'Community rhythm',
        body: 'The school fosters regular parent-teacher interactions, workshops, and school events to support open communication and active involvement among students, parents, and staff.',
      },
      {
        title: 'Asset policy',
        items: [
          'Use approved school images only.',
          'Do not use Iru-VI civic imagery as Impetus production imagery.',
          'Do not label a photograph Primary or Secondary unless image metadata or the school team confirms it.',
        ],
      },
    ],
    confirmationNeeded: ['Approved Life at Impetus images with consent are required.', 'Image categories and division classification require confirmation.'],
  },
  gallery: {
    eyebrow: 'Gallery',
    heroTitle: 'A school photo archive prepared for approved assets.',
    summary: 'The gallery is prepared for approved school images with clear captions, consent, and category details.',
    sections: [
      {
        title: 'Current gallery disposition',
        body: 'The gallery page is reserved for real school photo records. Repeated curriculum, FAQ, and testimonial content now lives elsewhere so this page can focus on approved images.',
      },
      {
        title: 'Metadata required',
        items: [
          'Image title or caption.',
          'Alt text describing visible content.',
          'Division classification: Primary, Secondary, or General, only where confirmed.',
          'Category such as classroom learning, technology, arts, sports, vocational activity, or events.',
          'Consent confirmation for website use.',
        ],
      },
    ],
    confirmationNeeded: ['Approved school gallery images are required before this page becomes production-complete.'],
  },
  contact: {
    eyebrow: 'Contact',
    heroTitle: 'Reach Impetus Academy with the right enquiry.',
    summary: 'Use the school contact details for admissions enquiries, visits, and general communication.',
    sections: [
      {
        title: 'Published contact details',
        items: [
          'Address: 73 Bola Ahmed Tinubu Street, formerly Agbado Ijaye Road, Ijaye, Lagos.',
          'Phone: 07057553716.',
          'Secondary phone: 08060672505.',
          'Email: info@impetusacademy.ng.',
          'Opening hours: Monday-Friday, 8:00 a.m.-4:00 p.m.',
        ],
      },
      {
        title: 'Enquiry form fields',
        items: ['Parent name', 'Parent phone', 'Parent email address', 'Child name', 'Child birthdate', 'Interested in'],
      },
    ],
    confirmationNeeded: ['Confirm final contact details and opening hours.', 'Confirm drop-off and pickup times before publishing globally.', 'Privacy policy and backend submission handling are needed before real form submission.'],
  },
};


export function getPageBrief(slug: keyof typeof pageBriefs) {
  return pageBriefs[slug];
}

export function getExtendedPage(slug: keyof typeof extendedPages) {
  return extendedPages[slug];
}
