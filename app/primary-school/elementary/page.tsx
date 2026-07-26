import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/content';

export const metadata = { title: 'Elementary/Primary' };

export default function ElementaryPage() {
  return <CurriculumDetailPage content={getCurriculumPage('elementary')} />;
}


