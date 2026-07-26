import type { LeadershipPageContent } from './types';

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
        body: 'Mashood Tajudeen Olaide Adetela brings an education and technology background to his role as founder of the school. His profile highlights Educational Management experience, a decade as a Technology Merchant, and a belief that education should celebrate each child\'s unique talents.',
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
        body: 'Eniola Adetela brings heartfelt passion to her role at Impetus Integrated Learning Academy, with a background in Physics Education and 15 years of dedicated service to children\'s learning.',
      },
      {
        title: 'Background and expertise',
        body: 'Her profile lists Bachelor\'s and Master\'s degrees in Physics Education, along with experience in curriculum development, instructional design, and strategic planning.',
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


export function getLeadershipPage(slug: 'founder' | 'proprietor') {
  return leadershipPages[slug];
}
