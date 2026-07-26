import LeadershipDetailPage from '@/components/LeadershipDetailPage';
import { getLeadershipPage } from '@/lib/content';

export const metadata = { title: 'Proprietor' };

export default function ProprietorPage() {
  return <LeadershipDetailPage content={getLeadershipPage('proprietor')} />;
}


