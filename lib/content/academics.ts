import type {
  CurriculumFocus,
  CurriculumPageContent,
  CurriculumSlug,
  LearningStage,
} from './types';


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


export const curriculumPages: Record<CurriculumSlug, CurriculumPageContent> = {
  kindergarten: {
    slug: 'kindergarten',
    title: 'Kindergarten Curriculum',
    eyebrow: 'Primary School',
    summary: 'A holistic early-years framework built around play-based learning, social-emotional development, and foundational academic skills.',
    division: 'primary',
    href: '/primary-school/kindergarten',
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
    href: '/primary-school/elementary',
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
    href: '/secondary-school/junior-secondary',
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
          'Students are also assessed through quizzes, tests, projects, presentations, practical exams, and peer assessment.',
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
    href: '/secondary-school/senior-secondary/science',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-science/',
    cardTitle: 'Science Pathway',
    cardDescription: 'A senior pathway for learners focusing on science and related subjects.',
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
    href: '/secondary-school/senior-secondary/arts',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-art/',
    cardTitle: 'Arts Pathway',
    cardDescription: 'A senior pathway for learners focusing on arts, languages, humanities, and creative subjects.',
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
    confirmationNeeded: ['Confirm final public pathway label: Art or Arts.'],
  },
  commercial: {
    slug: 'commercial',
    title: 'Senior Secondary Commercial Pathway',
    eyebrow: 'Senior Secondary',
    summary: 'A commercial stream framework focused on business, financial literacy, communication, office management, entrepreneurship, retail, commercial law, and business mathematics.',
    division: 'secondary',
    href: '/secondary-school/senior-secondary/commercial',
    sourceUrl: 'https://impetusacademy.ng/sss-curriculum-commercial/',
    cardTitle: 'Commercial Pathway',
    cardDescription: 'A senior pathway for learners focusing on business, commerce, accounting, and financial literacy.',
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


export function getLearningStages() {
  return learningStages;
}

export function getCurriculumFocus() {
  return curriculumFocus;
}

export function getCurriculumPage(slug: CurriculumSlug) {
  return curriculumPages[slug];
}

const seniorSecondaryPathwaySlugs = ['science', 'arts', 'commercial'] as const;

export function getSeniorSecondaryPathways() {
  return seniorSecondaryPathwaySlugs.map((slug) => {
    const pathway = curriculumPages[slug];
    return {
      title: pathway.cardTitle ?? pathway.title,
      href: pathway.href,
      description: pathway.cardDescription ?? pathway.summary,
    };
  });
}
