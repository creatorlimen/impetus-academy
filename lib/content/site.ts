import type {
  Benefit,
  DivisionContent,
  FaqItem,
  SiteSettings,
  Testimonial,
} from './types';

export const siteSettings: SiteSettings = {
  name: 'Impetus Integrated Learning Academy',
  shortName: 'Impetus Academy',
  tagline: 'Excellence Through Education',
  address: '73 Bola Ahmed Tinubu Street, formerly Agbado Ijaye Road, Ijaye, Lagos.',
  phones: ['07057553716', '08060672505'],
  email: 'info@impetusacademy.ng',
  openingHours: 'Monday-Friday: 8:00 a.m.-4:00 p.m.',
  dropOffPickupNote: 'Drop-off and pickup times should be confirmed with the school before they are published across the site.',
  uncertainFacts: [
    'Founder public name and title need final confirmation before publication.',
    'Proprietor public name, title, credentials, and portrait require confirmation.',
    'Public label for Elementary, Primary, or Elementary/Primary requires confirmation.',
    'Fees, bank details, boarding status, application fee, social links, and privacy policy copy require confirmation.',
    'Image consent and Primary/Secondary image classification require confirmation.',
  ],
};

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

export const benefits: Benefit[] = [
  {
    title: 'Technology-integrated learning',
    description: 'Technology is used to make lessons clearer and more engaging, with tools such as smart boards, robotics kits, coding resources, and multimedia support.',
  },
  {
    title: 'Individualised attention',
    description: 'The school recognises that children learn differently, so teachers pay attention to individual strengths, interests, progress, and learning needs.',
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
    description: 'Students build written, oral, analytical, problem-solving, and decision-making skills they can carry into school, life, and future study.',
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
    answer: 'Families are drawn to the school\'s mix of technology-supported learning, individual attention, extracurricular opportunities, community, and whole-child development.',
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
    answer: 'Impetus pairs academic learning with practical skills, technology-supported teaching, and vocational awareness.',
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

export function getSiteSettings() {
  return siteSettings;
}

export function getSchoolDivisions() {
  return schoolDivisions;
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
