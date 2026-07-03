export type SchoolDivision = 'primary' | 'secondary';

export interface SiteSettings {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  phones: string[];
  email: string;
  openingHours: string;
  dropOffPickupNote: string;
  uncertainFacts: string[];
}

export interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
}

export interface DivisionContent {
  id: SchoolDivision;
  label: string;
  eyebrow: string;
  headline: string;
  summary: string;
  href: string;
  admissionsHref: string;
  stages: string[];
  accent: string;
}

export interface LearningStage {
  title: string;
  slug: string;
  division: SchoolDivision;
  href: string;
  summary: string;
  sourceNote?: string;
}

export interface CurriculumFocus {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  categories: string[];
}

export interface Testimonial {
  quote: string;
  attribution: string;
  division: 'general' | SchoolDivision;
}

export interface PageBrief {
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  confirmationNeeded?: string[];
}

export const siteSettings: SiteSettings = {
  name: 'Impetus Integrated Learning Academy',
  shortName: 'Impetus Academy',
  tagline: 'Excellence Through Education',
  address: '73 Bola Ahmed Tinubu Street, formerly Agbado Ijaye Road, Ijaye, Lagos.',
  phones: ['07057553716', '08060672505'],
  email: 'info@impetusacademy.ng',
  openingHours: 'Monday-Friday: 8:00 a.m.-4:00 p.m.',
  dropOffPickupNote: 'Source copy mentions child drop-off at 7:00 a.m.-7:30 a.m. and pickup at 3:00 p.m.-3:30 p.m.; confirm before publishing globally.',
  uncertainFacts: [
    'Founder public name and title: source shows Olaide Adetela M.T. and media label Mr. Tella.',
    'Proprietor public name, title, credentials, and portrait require confirmation.',
    'Public label for Elementary, Primary, or Elementary/Primary requires confirmation.',
    'Fees, bank details, boarding status, application fee, social links, and privacy policy copy require confirmation.',
    'Image consent and Primary/Secondary image classification require confirmation.',
  ],
};

export const navigation: NavigationItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about', label: 'Academy Overview' },
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/founder', label: 'Founder' },
      { href: '/about/proprietor', label: 'Proprietor' },
    ],
  },
  {
    href: '/primary-school',
    label: 'Primary School',
    children: [
      { href: '/primary-school', label: 'Primary Overview' },
      { href: '/primary-school/kindergarten', label: 'Kindergarten' },
      { href: '/primary-school/elementary', label: 'Elementary/Primary' },
      { href: '/primary-school/admissions', label: 'Primary Admissions' },
    ],
  },
  {
    href: '/secondary-school',
    label: 'Secondary School',
    children: [
      { href: '/secondary-school', label: 'Secondary Overview' },
      { href: '/secondary-school/junior-secondary', label: 'Junior Secondary' },
      { href: '/secondary-school/senior-secondary', label: 'Senior Secondary' },
      { href: '/secondary-school/senior-secondary/science', label: 'Science' },
      { href: '/secondary-school/senior-secondary/arts', label: 'Arts' },
      { href: '/secondary-school/senior-secondary/commercial', label: 'Commercial' },
      { href: '/secondary-school/admissions', label: 'Secondary Admissions' },
    ],
  },
  { href: '/admissions', label: 'Admissions' },
  { href: '/life-at-impetus', label: 'Life at Impetus' },
  { href: '/contact', label: 'Contact' },
];

export const schoolDivisions: DivisionContent[] = [
  {
    id: 'primary',
    label: 'Primary School',
    eyebrow: 'Kindergarten and Elementary/Primary',
    headline: 'Building Strong Foundations',
    summary: 'Kindergarten and Elementary/Primary education for confident, curious learners.',
    href: '/primary-school',
    admissionsHref: '/primary-school/admissions',
    stages: ['Kindergarten', 'Elementary/Primary'],
    accent: 'school-green',
  },
  {
    id: 'secondary',
    label: 'Secondary School',
    eyebrow: 'Junior and Senior Secondary',
    headline: 'Preparing Learners for the Future',
    summary: 'Junior and Senior Secondary education with Science, Arts, and Commercial pathways.',
    href: '/secondary-school',
    admissionsHref: '/secondary-school/admissions',
    stages: ['Junior Secondary', 'Senior Secondary', 'Science', 'Arts', 'Commercial'],
    accent: 'school-sky',
  },
];

export const learningStages: LearningStage[] = [
  {
    title: 'Kindergarten',
    slug: 'kindergarten',
    division: 'primary',
    href: '/primary-school/kindergarten',
    summary: 'A play-aware early learning stage focused on holistic development, social-emotional growth, and foundational learning.',
  },
  {
    title: 'Elementary/Primary',
    slug: 'elementary',
    division: 'primary',
    href: '/primary-school/elementary',
    summary: 'Primary learning that strengthens literacy, numeracy, creativity, confidence, character, and digital awareness.',
    sourceNote: 'Confirm final public label: Elementary, Primary, or Elementary/Primary.',
  },
  {
    title: 'Junior Secondary',
    slug: 'junior-secondary',
    division: 'secondary',
    href: '/secondary-school/junior-secondary',
    summary: 'A bridge into deeper academic, practical, and technology-enabled learning across core subject areas.',
  },
  {
    title: 'Senior Secondary',
    slug: 'senior-secondary',
    division: 'secondary',
    href: '/secondary-school/senior-secondary',
    summary: 'Senior learning organised around Science, Arts, and Commercial pathways for future study and work readiness.',
  },
];

export const curriculumFocus: CurriculumFocus[] = [
  {
    title: 'Reading/Writing',
    description: 'The school provides comprehensive instruction in reading comprehension, vocabulary, grammar, writing, and research skills. Students develop written and oral communication through debates, discussions, and academic writing exercises.',
  },
  {
    title: 'Math/Science',
    description: 'The academy integrates technology into hands-on learning experiences. Students engage in practical laboratory work and scientific inquiry, covering subjects from basic arithmetic to advanced calculus and physical sciences.',
  },
  {
    title: 'Art',
    description: 'Students explore visual and performing arts, including drawing, painting, sculpture, music, dance, and theater, encouraging creative expression through exhibitions and performances.',
  },
  {
    title: 'Critical Thinking',
    description: 'The curriculum develops analytical reasoning and problem-solving abilities through real-world applications, helping students tackle complex problems and make informed decisions.',
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Technology-integrated learning',
    description: 'Information and Communication Technology is deployed for effective teaching and learning, with source copy noting smart boards, robotics kits, coding tools, and multimedia resources.',
  },
  {
    title: 'Individualised attention',
    description: 'The school recognises different strengths, interests, and learning styles, with educators providing personalised attention through class-size and tracking practices described in the source copy.',
  },
  {
    title: 'Activity-based teaching',
    description: 'Lessons use diagrams, audio-visual resources, practical examples, assessment exercises, assignment review, periodic tests, and feedback to parents.',
  },
  {
    title: 'Academic and vocational integration',
    description: 'The academy blends academic knowledge with vocational education training so learners develop both conceptual understanding and practical competence.',
  },
  {
    title: 'Communication and critical thinking',
    description: 'Students build written, oral, analytical, problem-solving, and decision-making skills for work, civic life, and future learning.',
  },
  {
    title: 'Collaborative school community',
    description: 'Regular parent-teacher interactions, workshops, and school events support open communication among students, parents, and staff.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is Impetus Integrated Learning Academy (IILA)?',
    answer: 'Impetus Integrated Learning Academy is an educational institution focused on high-quality education while integrating advanced technology into the learning process.',
    categories: ['general'],
  },
  {
    question: 'How does IILA ensure effective teaching and learning?',
    answer: 'The school uses an activity-based teaching system with visual aids, diagrams, audio-visual resources, practical examples, regular assessments, assignments, and periodic tests.',
    categories: ['general', 'academics'],
  },
  {
    question: 'What benefits does IILA offer its students?',
    answer: 'Source copy highlights technology integration, individualised attention, extracurricular activities, collaborative community, and holistic development.',
    categories: ['general'],
  },
  {
    question: 'What can parents expect from IILA?',
    answer: 'Parents can expect a collaborative educational journey with regular feedback about their child\'s progress, attendance, and test results.',
    categories: ['general', 'admissions'],
  },
  {
    question: 'How can I enroll my child in Impetus Integrated Learning Academy?',
    answer: 'Parents should contact the admissions office through the school contact details to begin an admissions enquiry. This website presents enquiry pathways and does not imply automatic admission.',
    categories: ['admissions'],
  },
  {
    question: 'What sets IILA apart from other educational institutions?',
    answer: 'The source copy describes a blend of technology integration and vocational education training, combining academic knowledge with practical skills.',
    categories: ['general', 'academics'],
  },
  {
    question: 'What is the school\'s teaching methodology?',
    answer: 'IILA emphasises a collaborative teaching methodology involving students, parents, and educators, with technology used to enhance engagement and problem-solving.',
    categories: ['academics'],
  },
  {
    question: 'How does IILA prepare students for the future?',
    answer: 'The academy blends academic excellence, practical skills, critical thinking, communication, teamwork, and technology-enabled learning.',
    categories: ['general', 'academics'],
  },
  {
    question: 'How does IILA nurture a sense of community among students, parents, and staff?',
    answer: 'The school fosters community through parent-teacher interactions, workshops, school events, open communication, and active involvement.',
    categories: ['general'],
  },
  {
    question: 'What is the ultimate goal of IILA?',
    answer: 'The stated goal is to provide holistic and technology-integrated education that prepares students for the challenges and opportunities of the modern world.',
    categories: ['general'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'I am incredibly impressed with the educational experience my child is receiving at Impetus Academy. The school\'s innovative approach to integrating technology into the curriculum has truly transformed the way my child learns.',
    attribution: 'Parent testimonial',
    division: 'general',
  },
  {
    quote: 'As a parent, I couldn\'t be happier with my decision to enroll my child at Impetus Academy. The school\'s focus on individualized attention has made a noticeable difference in my child\'s enthusiasm for learning.',
    attribution: 'Parent testimonial',
    division: 'general',
  },
  {
    quote: 'Impetus has exceeded my expectations in every way. The dedication of the teachers and staff to nurturing my child\'s potential is heartwarming.',
    attribution: 'Parent testimonial',
    division: 'general',
  },
];

export const pageBriefs: Record<string, PageBrief> = {
  about: {
    title: 'Learning with purpose at every stage.',
    eyebrow: 'Academy Overview',
    summary: 'Impetus Integrated Learning Academy provides a supportive environment rooted in integrity, academic excellence, character, practical skills, and technology-enabled learning.',
    body: [
      'The academy follows a comprehensive educational approach that combines technology with traditional curriculum to create a blended learning environment.',
      'Its approach helps learners understand deeply, communicate confidently, think critically, and apply what they learn.',
    ],
  },
  story: {
    title: 'From a small beginning to one academy with two journeys.',
    eyebrow: 'Our Story',
    summary: 'The school began as an offshoot of Impetus Tutorial College and has grown into an academy serving both Primary and Secondary learners.',
    body: [
      'The source copy states that the school commenced operation on 10 September 2018 with three students, seven full-time academic staff, three part-time teaching staff, and two support staff.',
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
      'The source message reflects on a journey that began in 2018 with three students and a dedicated team of educators.',
      'It describes a vision to bridge traditional education and the evolving digital landscape, helping students discover strengths and talents through technology integration and vocational training.',
    ],
    confirmationNeeded: ['Confirm founder name, title, credentials, preferred spelling, and portrait.'],
  },
  proprietor: {
    title: 'Proprietor profile.',
    eyebrow: 'Leadership',
    summary: 'The proprietor page will preserve supplied profile copy while waiting for final confirmation of public name, title, credentials, and portrait.',
    body: ['Source profile copy should be migrated in the next detailed content pass and checked for factual certainty before final publication.'],
    confirmationNeeded: ['Confirm proprietor name, title, credentials, portrait, and any claims that need trimming.'],
  },
};

export function getSiteSettings() {
  return siteSettings;
}

export function getNavigation() {
  return navigation;
}

export function getSchoolDivisions() {
  return schoolDivisions;
}

export function getLearningStages() {
  return learningStages;
}

export function getCurriculumFocus() {
  return curriculumFocus;
}

export function getBenefits() {
  return benefits;
}

export function getFaqs(category?: string) {
  if (!category) return faqs;
  return faqs.filter((faq) => faq.categories.includes(category));
}

export function getTestimonials() {
  return testimonials;
}

export function getPageBrief(slug: keyof typeof pageBriefs) {
  return pageBriefs[slug];
}


export interface ContentSection {
  title: string;
  body?: string;
  items?: string[];
}

export interface CurriculumPageContent {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  division: SchoolDivision;
  sourceUrl: string;
  sections: ContentSection[];
  confirmationNeeded?: string[];
}

export interface LeadershipPageContent {
  slug: 'founder' | 'proprietor';
  eyebrow: string;
  title: string;
  name: string;
  role: string;
  summary: string;
  sections: ContentSection[];
  confirmationNeeded: string[];
}

export interface AdmissionsStep {
  title: string;
  description: string;
  publicationStatus?: 'safe' | 'confirmation-needed' | 'hidden-pending-approval';
}

export const curriculumPages: Record<string, CurriculumPageContent> = {
  kindergarten: {
    slug: 'kindergarten',
    title: 'Kindergarten Curriculum',
    eyebrow: 'Primary School',
    summary: 'A holistic early-years framework built around play-based learning, social-emotional development, and foundational academic skills.',
    division: 'primary',
    sourceUrl: 'https://impetusacademy.ng/kindergarten-curriculum/',
    sections: [
      {
        title: 'Language and literacy development',
        items: [
          'Phonics and phonological awareness through letter sounds and recognition.',
          'Vocabulary building through books, storytelling, and word games.',
          'Listening and speaking through conversations and presentations.',
          'Emergent reading through sight words, basic comprehension, and storytelling.',
          'Emergent writing through fine motor development, letter formation, and basic writing exercises.',
        ],
      },
      {
        title: 'Mathematics',
        items: [
          'Number recognition, counting, and basic number concepts.',
          'Patterns, sequencing, measurement, comparison, shapes, spatial awareness, and hands-on problem solving.',
        ],
      },
      {
        title: 'Discovery and development',
        items: [
          'Science and discovery across life sciences, physical sciences, earth and space, and nature exploration.',
          'Social studies and cultural awareness through family, community, holidays, traditions, map skills, and environmental awareness.',
          'Creative arts, physical development, social-emotional development, and play-based exploration.',
        ],
      },
    ],
    confirmationNeeded: ['Do not add age ranges or class labels until confirmed.'],
  },
  elementary: {
    slug: 'elementary',
    title: 'Elementary/Primary Curriculum',
    eyebrow: 'Primary School',
    summary: 'A well-rounded primary framework across language, mathematics, science, social studies, arts, physical education, technology, and optional foreign language.',
    division: 'primary',
    sourceUrl: 'https://impetusacademy.ng/elementary-curriculum/',
    sections: [
      {
        title: 'Core academic development',
        items: [
          'Language Arts: reading comprehension, vocabulary, grammar, writing, spelling, research skills, and oral communication.',
          'Mathematics: number sense, operations, geometry, measurement, data analysis, probability, and problem solving.',
          'Science: life science, physical science, earth and space science, scientific method, experiments, and environmental awareness.',
          'Social Studies: history, geography, civics, government, culture, diversity, economics, and financial literacy.',
        ],
      },
      {
        title: 'Whole-child learning',
        items: [
          'Arts and Humanities through visual arts, performing arts, literature, creative writing, and cultural studies.',
          'Physical Education and Health through motor skills, team sports, fitness, nutrition, hygiene, safety, and social-emotional learning.',
          'Technology and Digital Literacy through keyboarding, word processing, internet use, digital citizenship, and coding activities.',
        ],
      },
    ],
    confirmationNeeded: ['Confirm final public label: Elementary, Primary, or Elementary/Primary.'],
  },
  'junior-secondary': {
    slug: 'junior-secondary',
    title: 'Junior Secondary Curriculum',
    eyebrow: 'Secondary School',
    summary: 'A balanced junior secondary framework across language, mathematics, science, social studies, arts, technology, vocational skills, and personal development.',
    division: 'secondary',
    sourceUrl: 'https://impetusacademy.ng/jss-curriculum/',
    sections: [
      {
        title: 'Core subjects',
        items: [
          'English Language: grammar, composition, comprehension, literature, oral communication, and vocabulary building.',
          'Mathematics: arithmetic, algebra, geometry, measurement, statistics, probability, and problem solving.',
          'Science: basic science, biology, chemistry, physics, environmental science, and scientific inquiry.',
          'Social Studies: history, geography, civics, culture, economics, financial literacy, and current affairs.',
        ],
      },
      {
        title: 'Creative, practical, and personal development',
        items: [
          'Arts and Humanities, Technology and Digital Literacy, Physical Education and Health, Vocational and Life Skills, Foreign Language, and Personal Development.',
          'The source copy also describes regular assessment through quizzes, tests, projects, presentations, practical exams, and peer assessment.',
        ],
      },
    ],
  },
  science: {
    slug: 'science',
    title: 'Senior Secondary Science Pathway',
    eyebrow: 'Senior Secondary',
    summary: 'A science stream framework covering mathematics, physics, chemistry, biology, applied science, computer science, and research skills.',
    division: 'secondary',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-science/',
    sections: [
      {
        title: 'Core science subjects',
        items: [
          'Mathematics: algebra, geometry, trigonometry, calculus, statistics, probability, and mathematical modelling.',
          'Physics: mechanics, thermodynamics, electromagnetism, waves, optics, and modern physics.',
          'Chemistry: atomic structure, chemical bonding, stoichiometry, thermochemistry, equilibrium, acids and bases, and organic chemistry.',
          'Biology: cell biology, genetics, evolution, ecology, and human anatomy and physiology.',
        ],
      },
      {
        title: 'Applied and advanced study',
        items: [
          'Applied physics, applied chemistry, biotechnology, environmental science, computer science, research skills, scientific writing, English Language, ethics, and physical education.',
          'Regular assessments include laboratory reports, research projects, presentations, exams, and practical evaluations.',
        ],
      },
    ],
  },
  arts: {
    slug: 'arts',
    title: 'Senior Secondary Arts Pathway',
    eyebrow: 'Senior Secondary',
    summary: 'An arts stream framework across visual arts, performing arts, artistic specialisations, art history, cultural studies, technology, portfolio development, and communication.',
    division: 'secondary',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-art/',
    sections: [
      {
        title: 'Core art disciplines',
        items: [
          'Visual Arts: drawing, sketching, painting, sculpture, printmaking, art history, and criticism.',
          'Performing Arts: music, dance, theater, film, and media arts.',
          'Fine arts, graphic design, performing arts specialisations, art history, and cultural studies.',
        ],
      },
      {
        title: 'Creative practice and professional development',
        items: [
          'Digital art and technology, multimedia production, art exhibitions, showcasing, portfolio development, and art entrepreneurship.',
          'Additional subjects include English Language, art and media ethics, and art business and marketing.',
        ],
      },
    ],
    confirmationNeeded: ['Source page uses Art. Public navigation currently uses Arts pending client confirmation.'],
  },
  commercial: {
    slug: 'commercial',
    title: 'Senior Secondary Commercial Pathway',
    eyebrow: 'Senior Secondary',
    summary: 'A commercial stream framework focused on business, financial literacy, communication, office management, entrepreneurship, retail, commercial law, and business mathematics.',
    division: 'secondary',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-commercial/',
    sections: [
      {
        title: 'Core business subjects',
        items: [
          'Business Studies: introduction to business, marketing, accounting, economics, and business ethics.',
          'Financial Literacy: personal finance, banking and financial institutions, financial planning, stock market, and investments.',
          'Business Communication: written communication, oral communication, negotiation, conflict resolution, and persuasive communication.',
        ],
      },
      {
        title: 'Commercial skills and applied subjects',
        items: [
          'Office management, entrepreneurship, retail management, commercial law, business mathematics, business case studies, computer skills, and digital marketing.',
          'Additional subjects include English Language, optional foreign language, ethics, and moral education.',
        ],
      },
    ],
  },
};

export const leadershipPages: Record<'founder' | 'proprietor', LeadershipPageContent> = {
  founder: {
    slug: 'founder',
    eyebrow: 'Founder',
    title: 'Meet Our Founder',
    name: 'Mashood Tajudeen Olaide Adetela',
    role: 'Founder',
    summary: 'The supplied profile presents the founder as an education and technology leader whose work centres on personalised learning, innovation, and the discovery of each child\'s potential.',
    sections: [
      {
        title: 'Profile summary',
        body: 'Mashood Tajudeen Olaide Adetela brings expertise to his role as founder of the school. The source copy describes a background in Educational Management and a decade of experience as a Technology Merchant, with a belief that education should celebrate each child\'s unique talents.',
      },
      {
        title: 'Founder message',
        body: 'The founder message reflects on the journey from 2018, when the school began with three students and a dedicated team of educators, into a growing community committed to excellence, innovation, technology integration, vocational training, and holistic education.',
      },
      {
        title: 'Educational focus',
        items: [
          'Bridge traditional education with the evolving digital landscape.',
          'Nurture each student\'s strengths and talents.',
          'Prepare learners through technology integration and vocational training.',
          'Develop confident, well-rounded lifelong learners.',
        ],
      },
    ],
    confirmationNeeded: ['Confirm exact preferred public name, title, credentials, and portrait. Source also shows Olaide Adetela M.T. and media label Mr. Tella.'],
  },
  proprietor: {
    slug: 'proprietor',
    eyebrow: 'Proprietor',
    title: 'Meet Our Proprietor',
    name: 'Eniola Adetela',
    role: 'Proprietor / Co-proprietor',
    summary: 'The supplied profile presents Eniola Adetela as a proprietor with a Physics Education background and long service in children\'s learning.',
    sections: [
      {
        title: 'Profile summary',
        body: 'Eniola Adetela brings heartfelt passion to her role at Impetus Integrated Learning Academy. The source copy describes a rich background in Physics Education and 15 years of dedicated service to children\'s learning.',
      },
      {
        title: 'Background and expertise',
        body: 'The source profile states that Eniola holds Bachelor\'s and Master\'s degrees in Physics Education and has experience in curriculum development, instructional design, and strategic planning.',
      },
      {
        title: 'Educational philosophy',
        items: [
          'Student-centred education that fosters a love for learning.',
          'Personalised instruction, project-based learning, and real-world applications.',
          'Collaboration, communication, and problem-solving as essential tools for learning and life.',
          'A supportive school culture where teachers, students, and parents collaborate.',
        ],
      },
    ],
    confirmationNeeded: ['Confirm exact title: Proprietor or Co-proprietor.', 'Confirm credentials, preferred public biography, and portrait.'],
  },
};

export const admissionsSteps: AdmissionsStep[] = [
  { title: 'Admission standard', description: 'The source admissions copy says the process selects pupils/students who meet minimum academic standards and show qualities needed for success at Impetus Integrated Learning Academy.', publicationStatus: 'safe' },
  { title: 'Application form', description: 'Source copy says families pay for or purchase application forms online or at the school premises, then fill and submit the form.', publicationStatus: 'confirmation-needed' },
  { title: 'Application fee', description: 'Source copy lists an application fee of N5,000. This should remain confirmation-needed before publication.', publicationStatus: 'confirmation-needed' },
  { title: 'Admin submission', description: 'Completed application forms are submitted to the Admin office of the school.', publicationStatus: 'safe' },
  { title: 'Entry examination', description: 'The Impetus Integrated Learning Academy Entry Examination is described as a prerequisite for applicants, with dates listed on the school calendar and confirmations through the Admin hotline.', publicationStatus: 'safe' },
  { title: 'Result notification', description: 'The source says results are sent to the applicant\'s parent via SMS, WhatsApp, or email.', publicationStatus: 'safe' },
  { title: 'Provisional admission', description: 'Successful applicants are offered provisional admission and the admission letter is picked up in the Admin Office.', publicationStatus: 'safe' },
  { title: 'Acceptance and payment', description: 'Acceptance letters are signed by parents/guardians and the admitted student. Fee payment references exist in source copy but final public wording needs confirmation.', publicationStatus: 'confirmation-needed' },
  { title: 'Documents after acceptance', description: 'The source lists passport photograph, birth certificate copy, parent/guardian ID, medical report, teacher recommendations, school reports/transcripts, and evidence of application payment. Public form should not request these documents.', publicationStatus: 'confirmation-needed' },
  { title: 'Bank details', description: 'Bank account information exists in the source export but is intentionally hidden pending explicit approval.', publicationStatus: 'hidden-pending-approval' },
];

export function getCurriculumPage(slug: keyof typeof curriculumPages) {
  return curriculumPages[slug];
}

export function getLeadershipPage(slug: 'founder' | 'proprietor') {
  return leadershipPages[slug];
}

export function getAdmissionsSteps() {
  return admissionsSteps;
}


export interface SourceCoverageItem {
  sourcePage: string;
  sourceUrl: string;
  sourceSections: string[];
  destinations: string[];
  status: 'migrated' | 'partially-migrated' | 'centralized' | 'pending-assets' | 'confirmation-needed';
  notes: string;
}

export const sourceCoverage: SourceCoverageItem[] = [
  {
    sourcePage: 'Home',
    sourceUrl: 'https://impetusacademy.ng/',
    sourceSections: ['Header', 'Features', 'About', 'Vision/Mission', 'Location/Hours', 'Curriculum', 'Founder message', 'Methodology', 'Testimonials', 'FAQ'],
    destinations: ['/', '/about', '/about/founder', '/academics', '/life-at-impetus', '/contact'],
    status: 'partially-migrated',
    notes: 'Core homepage copy, methodology, vision/mission, testimonials, and FAQ are migrated or centralized. Image-backed sections still need approved school assets.',
  },
  {
    sourcePage: 'Brief History',
    sourceUrl: 'https://impetusacademy.ng/brief-history/',
    sourceSections: ['History narrative', 'Vision/Mission', 'IILA approach', 'Activity-based learning', 'Program summaries'],
    destinations: ['/about/our-story', '/about', '/academics', '/primary-school', '/secondary-school'],
    status: 'partially-migrated',
    notes: 'Founding facts and primary-arm establishment are preserved. Exact historical naming and some phrasing require confirmation.',
  },
  {
    sourcePage: 'Admissions',
    sourceUrl: 'https://impetusacademy.ng/admissions/',
    sourceSections: ['Onboarding process', 'Fees', 'Application steps', 'Documents', 'Bank details', 'Tuition/payment'],
    destinations: ['/admissions', '/primary-school/admissions', '/secondary-school/admissions', '/confirmation-needed'],
    status: 'confirmation-needed',
    notes: 'Process is migrated. Application fee, boarding, bank details, payment instructions, and document requirements are intentionally marked or hidden pending approval.',
  },
  {
    sourcePage: 'Academic',
    sourceUrl: 'https://impetusacademy.ng/academic/',
    sourceSections: ['Curriculum focus', 'Programs'],
    destinations: ['/academics', '/primary-school/kindergarten', '/primary-school/elementary', '/secondary-school/junior-secondary', '/secondary-school/senior-secondary'],
    status: 'migrated',
    notes: 'Repeated curriculum focus is centralized. Program summaries are routed into stage/pathway pages.',
  },
  {
    sourcePage: 'Gallery',
    sourceUrl: 'https://impetusacademy.ng/gallery/',
    sourceSections: ['Gallery framing', 'CTA', 'Curriculum', 'FAQ', 'Testimonials'],
    destinations: ['/gallery', '/life-at-impetus'],
    status: 'pending-assets',
    notes: 'Gallery route exists with consent/classification policy. Real gallery requires approved school imagery and metadata.',
  },
  {
    sourcePage: 'Contact',
    sourceUrl: 'https://impetusacademy.ng/contact/',
    sourceSections: ['Contact details', 'Opening hours', 'Form fields', 'FAQ', 'Testimonials'],
    destinations: ['/contact', '/admissions', 'global footer'],
    status: 'partially-migrated',
    notes: 'Contact details and form shape are migrated. Backend submission and privacy consent remain pending.',
  },
  {
    sourcePage: 'Founder\'s Profile',
    sourceUrl: 'https://impetusacademy.ng/founders-profile/',
    sourceSections: ['Profile intro', 'Story', 'Founder message', 'Vision/Mission'],
    destinations: ['/about/founder', '/'],
    status: 'confirmation-needed',
    notes: 'Profile content is migrated. Exact public name/title, credentials, and portrait need confirmation.',
  },
  {
    sourcePage: 'Proprietor\'s Profile',
    sourceUrl: 'https://impetusacademy.ng/proprietors-profile/',
    sourceSections: ['Profile intro', 'Story', 'Background/expertise', 'Educational philosophy', 'Leadership/impact'],
    destinations: ['/about/proprietor'],
    status: 'confirmation-needed',
    notes: 'Profile content is migrated. Exact title, credentials, portrait, and preferred biography require confirmation.',
  },
  {
    sourcePage: 'Kindergarten Curriculum',
    sourceUrl: 'https://impetusacademy.ng/kindergarten-curriculum/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/primary-school/kindergarten', '/academics'],
    status: 'migrated',
    notes: 'Curriculum groups are migrated without adding age ranges.',
  },
  {
    sourcePage: 'Elementary Curriculum',
    sourceUrl: 'https://impetusacademy.ng/elementary-curriculum/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/primary-school/elementary', '/academics'],
    status: 'confirmation-needed',
    notes: 'Curriculum groups are migrated. Public label Elementary/Primary needs confirmation.',
  },
  {
    sourcePage: 'JSS Curriculum',
    sourceUrl: 'https://impetusacademy.ng/jss-curriculum/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/secondary-school/junior-secondary', '/academics'],
    status: 'migrated',
    notes: 'Curriculum groups are migrated and linked from Secondary and Academics.',
  },
  {
    sourcePage: 'SSS Curriculum-Science',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-science/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/secondary-school/senior-secondary/science', '/academics'],
    status: 'migrated',
    notes: 'Science pathway content is migrated into grouped curriculum sections.',
  },
  {
    sourcePage: 'SSS Curriculum-Art',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-art/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/secondary-school/senior-secondary/arts', '/academics'],
    status: 'confirmation-needed',
    notes: 'Arts pathway content is migrated. Source says Art; public label currently uses Arts pending confirmation.',
  },
  {
    sourcePage: 'SSS Curriculum-Commercial',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-commercial/',
    sourceSections: ['Programs', 'Curriculum focus', 'FAQ', 'Testimonials'],
    destinations: ['/secondary-school/senior-secondary/commercial', '/academics'],
    status: 'migrated',
    notes: 'Commercial pathway content is migrated into grouped curriculum sections.',
  },
  {
    sourcePage: 'Shared FAQ and Testimonials',
    sourceUrl: 'Repeated across source pages',
    sourceSections: ['10 FAQ items', '3 testimonials'],
    destinations: ['centralized data in lib/api.ts', '/', '/academics', '/admissions'],
    status: 'centralized',
    notes: 'FAQ and testimonials are stored once and rendered selectively. Testimonials remain general because division attribution is unverified.',
  },
];

export interface PageSectionSet {
  heroTitle: string;
  eyebrow: string;
  summary: string;
  sections: ContentSection[];
  confirmationNeeded?: string[];
}

export const extendedPages: Record<string, PageSectionSet> = {
  about: {
    eyebrow: 'Academy Overview',
    heroTitle: 'A warm, technology-enabled academy with two equal journeys.',
    summary: 'Impetus Integrated Learning Academy combines academic excellence, integrity, character, practical skills, and technology-enabled learning across Primary and Secondary education.',
    sections: [
      {
        title: 'What the academy does',
        body: 'The source copy describes an outstanding learning environment rooted in integrity, academic excellence, and strong moral values. Information and Communication Technology is deployed for effective teaching and learning, with an emphasis on helping students stand out wherever they find themselves.',
      },
      {
        title: 'Educational approach',
        body: 'The academy follows a comprehensive approach that combines technology with traditional curriculum in a blended learning environment, particularly across mathematics, science, and art.',
      },
      {
        title: 'Vision and mission',
        items: [
          'Vision: To promote a balanced use of technology that motivates scholars to develop deeper conceptual understanding, ask meaningful questions, and cultivate transferable skills.',
          'Mission: To help society build essential skills that translate meaningfully into work and civic life.',
        ],
      },
    ],
  },
  story: {
    eyebrow: 'Our Story',
    heroTitle: 'From three students to a growing academy community.',
    summary: 'The school history is preserved from the supplied source copy, with uncertain naming and phrasing marked for confirmation.',
    sections: [
      {
        title: 'Beginning',
        body: 'The source copy states that the school began as an offshoot of Impetus Tutorial College, Charity Road, New Oko-Oba Area of Lagos, and commenced operation on 10 September 2018.',
      },
      {
        title: 'Early growth',
        body: 'At inception, the school had three students, seven full-time academic staff, three part-time teaching staff, and two support staff. The second and third terms grew to eight students and thirteen staff, and the population reached one hundred students in three academic years.',
      },
      {
        title: 'Primary arm',
        body: 'The source copy says the primary arm was established in September 2023 to cater for well-rounded primary education and to support future leaders through academic excellence and character development.',
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
    confirmationNeeded: ['Confirm exact official name at inception.', 'Confirm how to present Impetus College as a historical name.', 'Review source phrasing around moral values and moral sanctity before final publication.'],
  },
  life: {
    eyebrow: 'Life at Impetus',
    heroTitle: 'Learning beyond the classroom, pending approved imagery.',
    summary: 'The school-life page is shaped around the supplied methodology, gallery invitation, practical learning, technology, extracurriculars, and community copy.',
    sections: [
      {
        title: 'Activity-based learning',
        body: 'The source copy says Impetus strictly adopts an activity-based system for lessons, using diagrams, audio-visual resources, and practical examples so teachers and scholars participate effectively in the learning process.',
      },
      {
        title: 'Extracurricular development',
        body: 'The methodology copy describes extracurricular activities including sports, arts, music, and clubs, giving students opportunities to explore interests and develop well-rounded personalities.',
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
          'Do not label a photograph Primary or Secondary unless the source metadata or client confirms it.',
        ],
      },
    ],
    confirmationNeeded: ['Approved Life at Impetus images with consent are required.', 'Image categories and division classification require confirmation.'],
  },
  gallery: {
    eyebrow: 'Gallery',
    heroTitle: 'A school photo archive prepared for approved assets.',
    summary: 'The route is ready for a consent-aware gallery once school images and metadata are supplied.',
    sections: [
      {
        title: 'Current gallery disposition',
        body: 'The source Gallery page contains general gallery framing plus repeated curriculum, FAQ, and testimonial blocks. In this build, repeated FAQ and testimonial copy is centralized and the gallery page is reserved for real photo records.',
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
    summary: 'Contact details are drawn from the supplied source copy and should be confirmed before launch.',
    sections: [
      {
        title: 'Published contact details from source',
        items: [
          'Address: 73 Bola Ahmed Tinubu Street, formerly Agbado Ijaye Road, Ijaye, Lagos.',
          'Phone: 07057553716.',
          'Secondary phone: 08060672505.',
          'Email: info@impetusacademy.ng.',
          'Opening hours: Monday-Friday, 8:00 a.m.-4:00 p.m.',
        ],
      },
      {
        title: 'Form fields from source',
        items: ['Parent name', 'Parent phone', 'Parent email address', 'Child name', 'Child birthdate', 'Interested in'],
      },
    ],
    confirmationNeeded: ['Confirm final contact details and opening hours.', 'Confirm drop-off and pickup times before publishing globally.', 'Privacy policy and backend submission handling are needed before real form submission.'],
  },
};

export function getSourceCoverage() {
  return sourceCoverage;
}

export function getExtendedPage(slug: keyof typeof extendedPages) {
  return extendedPages[slug];
}

