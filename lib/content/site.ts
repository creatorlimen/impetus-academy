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
    headline: 'Strong foundations for growing minds',
    summary: 'A caring Primary School where children strengthen literacy, numeracy, creativity, confidence, and character.',
    href: '/primary-school',
    admissionsHref: '/primary-school/admissions',
    stages: ['Kindergarten', 'Elementary/Primary'],
    accent: 'school-green',
  },
  {
    id: 'secondary',
    label: 'Secondary School',
    eyebrow: 'Junior and Senior Secondary',
    headline: 'Knowledge, confidence, and preparation for the future',
    summary: 'Junior and Senior Secondary learning that deepens subject knowledge, practical skills, independence, and critical thinking.',
    href: '/secondary-school',
    admissionsHref: '/secondary-school/admissions',
    stages: ['Junior Secondary', 'Senior Secondary', 'Science', 'Arts', 'Commercial'],
    accent: 'school-sky',
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Technology that supports good teaching',
    description: 'Teachers use appropriate digital and multimedia resources to explain ideas, encourage participation, and make lessons more engaging.',
  },
  {
    title: 'Attention to every learner',
    description: 'Teachers pay attention to each child’s strengths, interests, progress, and areas where more support is needed.',
  },
  {
    title: 'Learning through activity',
    description: 'Lessons include diagrams, practical examples, guided exercises, assignments, revision, tests, and regular feedback.',
  },
  {
    title: 'Academic and practical skills',
    description: 'Students develop strong subject knowledge alongside practical abilities that help them apply what they learn.',
  },
  {
    title: 'Communication and problem-solving',
    description: 'Classroom activities help students express their ideas, ask questions, reason through problems, and make informed decisions.',
  },
  {
    title: 'A connected school community',
    description: 'Parent-teacher conversations, workshops, and school events help families and staff work together in support of each learner.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is Impetus Integrated Learning Academy?',
    answer: 'Impetus Academy is a Primary and Secondary school in Ijaye, Lagos. The school combines strong classroom teaching with practical learning, character development, and appropriate use of technology.',
    categories: ['general'],
  },
  {
    question: 'How does Impetus support effective teaching and learning?',
    answer: 'Lessons include visual aids, diagrams, multimedia resources, practical examples, guided exercises, assignments, revision, and regular assessments.',
    categories: ['general', 'academics'],
  },
  {
    question: 'What can students expect at Impetus?',
    answer: 'Students learn in a supportive environment that values academic progress, creativity, practical skills, communication, confidence, and character.',
    categories: ['general'],
  },
  {
    question: 'What can parents expect from the school?',
    answer: 'Parents can expect communication about their child’s attendance, progress, and assessment, together with opportunities to engage with teachers and the wider school community.',
    categories: ['general', 'admissions'],
  },
  {
    question: 'How do I apply for admission?',
    answer: 'Contact the admissions team to request the current application form, assessment dates, document requirements, and next steps for your child.',
    categories: ['admissions'],
  },
  {
    question: 'What makes learning at Impetus distinctive?',
    answer: 'The school brings together academic study, practical skills, technology-supported teaching, and opportunities for students to think, create, communicate, and solve problems.',
    categories: ['general', 'academics'],
  },
  {
    question: 'What teaching approach does the school use?',
    answer: 'Teachers use activity-based lessons and encourage students to participate, ask questions, practise new skills, and connect classroom ideas with practical examples.',
    categories: ['academics'],
  },
  {
    question: 'How does Impetus prepare students for the future?',
    answer: 'Students build subject knowledge alongside communication, teamwork, critical thinking, digital awareness, and practical skills that support further study and everyday life.',
    categories: ['general', 'academics'],
  },
  {
    question: 'How are families involved in school life?',
    answer: 'Parent-teacher conversations, workshops, school events, and regular communication give families opportunities to take an active part in their child’s education.',
    categories: ['general'],
  },
  {
    question: 'What is the school working to achieve?',
    answer: 'Impetus aims to help students become knowledgeable, confident, responsible, and ready to keep learning as they move through school and into the future.',
    categories: ['general'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'I am incredibly impressed with the educational experience my child is receiving at Impetus Academy. The school’s approach to integrating technology into the curriculum has truly transformed the way my child learns.',
    attribution: 'Parent testimonial',
    division: 'general',
  },
  {
    quote: 'The school’s focus on individual attention has made a noticeable difference in my child’s enthusiasm for learning.',
    attribution: 'Parent testimonial',
    division: 'general',
  },
  {
    quote: 'The dedication of the teachers and staff to nurturing my child’s potential is heartwarming.',
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
