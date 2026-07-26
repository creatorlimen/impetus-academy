import type { PageSectionSet } from './types';

export const extendedPages: Record<string, PageSectionSet> = {
  about: {
    eyebrow: 'About Impetus',
    heroTitle: 'Education that helps every child grow with confidence.',
    summary: 'Impetus Academy serves Primary and Secondary students in a school community built on strong teaching, character, creativity, practical skills, and responsible use of technology.',
    sections: [
      {
        title: 'Who we are',
        body: 'Impetus Integrated Learning Academy is a Primary and Secondary school in Ijaye, Lagos. We want every student to feel known, supported, and challenged to do their best work.',
      },
      {
        title: 'How students learn',
        body: 'Lessons combine clear teaching, guided practice, visual and digital resources, practical examples, assignments, revision, assessment, and feedback. Students are encouraged to participate, ask questions, and apply what they learn.',
      },
      {
        title: 'Our vision and mission',
        items: [
          'Vision: To promote a balanced use of technology that motivates scholars to understand ideas deeply, ask meaningful questions, and develop skills they can adapt throughout life.',
          'Mission: To help learners build knowledge, character, confidence, and practical abilities that serve them in school and beyond.',
        ],
      },
    ],
    aside: {
      eyebrow: 'One school community',
      title: 'Growing from Primary to Secondary',
      body: 'Children can build their early foundations at Impetus and continue into deeper Junior and Senior Secondary study within the same supportive school community.',
      ctaLabel: 'Explore our schools',
      ctaHref: '/academics',
    },
  },
  story: {
    eyebrow: 'Our Story',
    heroTitle: 'A small beginning. A growing school community.',
    summary: 'Impetus began in 2018 with three students and a committed team of educators. Since then, the school has continued to grow in size, purpose, and the range of learning it offers.',
    sections: [
      {
        title: 'Where we began',
        body: 'The school grew from Impetus Tutorial College on Charity Road in the New Oko-Oba area of Lagos and began operation on 10 September 2018.',
      },
      {
        title: 'Our early growth',
        body: 'At the beginning, Impetus had three students, seven full-time academic staff, three part-time teachers, and two support staff. Enrolment grew to eight students during the first session, and the school reached one hundred students within three academic years.',
      },
      {
        title: 'The Primary School',
        body: 'In September 2023, Impetus established its Primary arm to give younger children strong academic foundations alongside character development, creativity, and practical learning.',
      },
      {
        title: 'How we continue to grow',
        items: [
          'Activity-based lessons supported by diagrams, multimedia resources, and practical examples.',
          'Assignments, revision, assessment, and feedback that help students make steady progress.',
          'Academic learning connected with technology and practical skills.',
          'Open communication among students, families, teachers, and school leaders.',
        ],
      },
    ],
    aside: {
      eyebrow: 'Since 2018',
      title: 'Built one learner at a time',
      body: 'The school’s growth reflects the trust of families and the work of educators committed to helping children learn with confidence and purpose.',
      ctaLabel: 'Meet our founder',
      ctaHref: '/about/founder',
    },
  },
  life: {
    eyebrow: 'Life at Impetus',
    heroTitle: 'Learning, creativity, and community beyond the classroom.',
    summary: 'School life at Impetus gives students opportunities to practise new skills, explore their interests, work with others, and take an active part in their community.',
    sections: [
      {
        title: 'Learning through activity',
        body: 'Lessons use diagrams, multimedia resources, guided exercises, and practical examples so students can participate actively and connect ideas with experience.',
      },
      {
        title: 'Interests and talents',
        body: 'Sports, arts, music, clubs, and other activities give students space to discover new interests, practise teamwork, and develop confidence outside regular lessons.',
      },
      {
        title: 'Families and school life',
        body: 'Parent-teacher conversations, workshops, and school events help families stay connected with their child’s progress and the wider life of the academy.',
      },
    ],
    aside: {
      eyebrow: 'Everyday school life',
      title: 'Room to learn and belong',
      body: 'From classroom discussion to creative work and shared events, students are encouraged to contribute, form friendships, and grow as members of the school community.',
      ctaLabel: 'Contact the school',
      ctaHref: '/contact',
    },
  },
  gallery: {
    eyebrow: 'Gallery',
    heroTitle: 'Moments from life at Impetus.',
    summary: 'Classroom discovery, creative work, sports, celebrations, and time together all form part of the Impetus experience.',
    sections: [
      {
        title: 'Learning in action',
        body: 'We look forward to sharing more approved photographs of students learning, creating, collaborating, and taking part in school activities.',
      },
      {
        title: 'Visit the academy',
        body: 'Families who would like to experience the school environment can contact the admissions team to ask about a visit.',
      },
    ],
    aside: {
      eyebrow: 'Come and meet us',
      title: 'See the school for yourself',
      body: 'A school visit gives your family an opportunity to ask questions, meet the team, and learn more about Primary or Secondary admission.',
      ctaLabel: 'Plan an enquiry',
      ctaHref: '/contact',
    },
  },
  contact: {
    eyebrow: 'Contact',
    heroTitle: 'We would be glad to hear from you.',
    summary: 'Contact Impetus Academy with questions about admissions, school visits, Primary or Secondary education, or everyday school matters.',
    sections: [
      {
        title: 'Visit or call',
        items: [
          'Address: 73 Bola Ahmed Tinubu Street, formerly Agbado Ijaye Road, Ijaye, Lagos.',
          'Phone: 07057553716.',
          'Secondary phone: 08060672505.',
          'Email: info@impetusacademy.ng.',
          'Opening hours: Monday-Friday, 8:00 a.m.-4:00 p.m.',
        ],
      },
      {
        title: 'Admissions enquiries',
        body: 'Tell us the school division and class you are considering. The admissions team can share the current application form, assessment dates, requirements, and next steps.',
      },
    ],
    aside: {
      eyebrow: 'Planning a visit?',
      title: 'Start with a conversation',
      body: 'Call or send an enquiry before visiting so the school team can help you choose a suitable time and connect you with the right person.',
    },
  },
};

export function getExtendedPage(slug: keyof typeof extendedPages) {
  return extendedPages[slug];
}
