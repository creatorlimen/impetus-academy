import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/api';

export const metadata = { title: 'Science Pathway' };

export default function SciencePathwayPage() {
  return <CurriculumDetailPage content={getCurriculumPage('science')} />;
}


