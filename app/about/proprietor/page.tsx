import LeadershipDetailPage from '@/components/LeadershipDetailPage';
import { getLeadershipPage } from '@/lib/api';

export const metadata = { title: 'Proprietor' };

export default function ProprietorPage() {
  return <LeadershipDetailPage content={getLeadershipPage('proprietor')} />;
}


