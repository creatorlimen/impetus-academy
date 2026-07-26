import type { AdmissionsStep } from './types';

export const admissionsSteps: AdmissionsStep[] = [
  {
    title: 'Speak with the admissions team',
    description: 'Tell us the school division and class you are considering, and we will help you begin with the right information.',
  },
  {
    title: 'Request the application form',
    description: 'The admissions team will share the current application form and explain how to complete it.',
  },
  {
    title: 'Submit the application',
    description: 'Return the completed form to the school’s Admin Office together with the documents requested for your child’s entry stage.',
  },
  {
    title: 'Arrange the entry assessment',
    description: 'Applicants complete an entry assessment. Contact the Admin Office for available dates and appointment guidance.',
  },
  {
    title: 'Receive the result',
    description: 'The school shares the assessment result with the parent or guardian by SMS, WhatsApp, or email.',
  },
  {
    title: 'Complete acceptance',
    description: 'Successful applicants receive a provisional admission letter, followed by the current acceptance requirements.',
  },
  {
    title: 'Prepare for resumption',
    description: 'The admissions team will guide your family through the current documents, payment information, uniforms, books, and other resumption needs.',
  },
];

export function getAdmissionsSteps() {
  return admissionsSteps;
}
