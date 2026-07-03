import CurriculumDetailPage from '@/components/CurriculumDetailPage';
import { getCurriculumPage } from '@/lib/api';

export const metadata = { title: 'Commercial Pathway' };

export default function CommercialPathwayPage() {
  return <CurriculumDetailPage content={getCurriculumPage('commercial')} />;
}


