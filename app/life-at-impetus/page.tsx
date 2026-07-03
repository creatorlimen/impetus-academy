import ExtendedContentPage from '@/components/ExtendedContentPage';
import { getExtendedPage } from '@/lib/api';

export const metadata = { title: 'Life at Impetus' };

export default function LifeAtImpetusPage() {
  return <ExtendedContentPage content={getExtendedPage('life')} ctaLabel="View Gallery" ctaHref="/gallery" />;
}
