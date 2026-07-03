import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/api';

export const metadata = { title: 'Kindergarten' };

export default function KindergartenPage() {
  return <CurriculumDetailPage content={getCurriculumPage('kindergarten')} />;
}


