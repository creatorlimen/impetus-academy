import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/api';

export const metadata = { title: 'Junior Secondary' };

export default function JuniorSecondaryPage() {
  return <CurriculumDetailPage content={getCurriculumPage('junior-secondary')} />;
}


