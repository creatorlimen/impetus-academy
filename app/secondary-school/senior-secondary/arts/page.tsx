import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/api';

export const metadata = { title: 'Arts Pathway' };

export default function ArtsPathwayPage() {
  return <CurriculumDetailPage content={getCurriculumPage('arts')} />;
}


