import LeadershipDetailPage from '@/components/LeadershipDetailPage';
import { getLeadershipPage } from '@/lib/api';

export const metadata = { title: 'Founder' };

export default function FounderPage() {
  return <LeadershipDetailPage content={getLeadershipPage('founder')} />;
}


