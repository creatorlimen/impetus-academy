import type { LeadershipPageContent } from './types';

export const leadershipPages: Record<'founder' | 'proprietor', LeadershipPageContent> = {
  founder: {
    slug: 'founder',
    eyebrow: 'Founder',
    title: 'Meet Our Founder',
    name: 'Mashood Tajudeen Olaide Adetela',
    role: 'Founder',
    summary: 'Mashood Tajudeen Olaide Adetela founded Impetus Academy with a belief that technology, personal attention, and practical learning can help every child discover and develop their strengths.',
    sections: [
      {
        title: 'Education and technology',
        body: 'His background brings together Educational Management and more than a decade of work with educational technology. That experience shaped his interest in helping schools use modern teaching tools with purpose.',
      },
      {
        title: 'Why Impetus began',
        body: 'Impetus began in 2018 with three students and a committed team of educators. The school has grown around a simple conviction: strong teaching, innovation, and practical skills can prepare children to meet a changing world with confidence.',
      },
      {
        title: 'His approach to learning',
        items: [
          'Recognise the individual strengths and interests of every learner.',
          'Use technology to support participation, understanding, and creativity.',
          'Connect academic study with practical and vocational skills.',
          'Help students become confident, responsible, and ready to keep learning.',
        ],
      },
      {
        title: 'A message to families',
        body: 'The founder invites families to share in a school community where children are encouraged to ask questions, explore their abilities, and grow in knowledge and character.',
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
    summary: 'Eniola Adetela brings a background in Physics Education and many years of work with children to her leadership of the Impetus school community.',
    sections: [
      {
        title: 'Experience in education',
        body: 'Her profile reflects fifteen years of service in children’s learning, together with experience in curriculum development, instructional design, and strategic planning.',
      },
      {
        title: 'A student-centred philosophy',
        body: 'She believes children learn best when teaching responds to their strengths, gives them meaningful work to do, and connects classroom ideas with practical experience.',
      },
      {
        title: 'Learning through participation',
        items: [
          'Personal attention that helps students take an active part in learning.',
          'Projects and real-world examples that make ideas easier to understand.',
          'Communication, collaboration, and problem-solving across school life.',
          'A welcoming community where teachers, students, and families work together.',
        ],
      },
      {
        title: 'Leadership and care',
        body: 'Her work supports a school culture where teachers feel encouraged, parents feel heard, and students have room to grow academically, socially, and creatively.',
      },
    ],
    confirmationNeeded: ['Confirm exact title: Proprietor or Co-proprietor.', 'Confirm credentials, preferred public biography, and portrait.'],
  },
};

export function getLeadershipPage(slug: 'founder' | 'proprietor') {
  return leadershipPages[slug];
}
