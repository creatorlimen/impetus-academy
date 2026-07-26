import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/content';

export const metadata = { title: 'Junior Secondary' };

export default function JuniorSecondaryPage() {
  return <CurriculumDetailPage content={getCurriculumPage('junior-secondary')} />;
}


