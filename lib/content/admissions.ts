import type { AdmissionsStep } from './types';

export const admissionsSteps: AdmissionsStep[] = [
  { title: 'Admission standard', description: 'The admissions process is intended to identify pupils and students who meet the school\'s academic expectations and are ready to thrive at Impetus Integrated Learning Academy.', publicationStatus: 'safe' },
  { title: 'Application form', description: 'Families are expected to obtain, complete, and submit the application form through the school\'s approved process.', publicationStatus: 'confirmation-needed' },
  { title: 'Application fee', description: 'An application fee may apply, but the exact public amount should be confirmed before publication.', publicationStatus: 'confirmation-needed' },
  { title: 'Admin submission', description: 'Completed application forms are submitted to the Admin office of the school.', publicationStatus: 'safe' },
  { title: 'Entry examination', description: 'The Impetus Integrated Learning Academy Entry Examination is described as a prerequisite for applicants, with dates listed on the school calendar and confirmations through the Admin hotline.', publicationStatus: 'safe' },
  { title: 'Result notification', description: 'Results are sent to the applicant\'s parent via SMS, WhatsApp, or email.', publicationStatus: 'safe' },
  { title: 'Provisional admission', description: 'Successful applicants are offered provisional admission and the admission letter is picked up in the Admin Office.', publicationStatus: 'safe' },
  { title: 'Acceptance and payment', description: 'Acceptance letters are signed by parents or guardians and the admitted student. Final payment wording should be confirmed before publication.', publicationStatus: 'confirmation-needed' },
  { title: 'Documents after acceptance', description: 'Several supporting documents may be required after acceptance, but the final public list should be confirmed before the website requests them.', publicationStatus: 'confirmation-needed' },
  { title: 'Bank details', description: 'Payment account information is not published here and requires explicit approval before production use.', publicationStatus: 'hidden-pending-approval' },
];


export function getAdmissionsSteps() {
  return admissionsSteps;
}
