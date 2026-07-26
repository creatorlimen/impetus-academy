import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/content';

export const metadata = { title: 'Science Pathway' };

export default function SciencePathwayPage() {
  return <CurriculumDetailPage content={getCurriculumPage('science')} />;
}


