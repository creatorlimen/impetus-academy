import ExtendedContentPage from '@/components/ExtendedContentPage';
import { getExtendedPage } from '@/lib/api';

export const metadata = { title: 'Our Story' };

export default function OurStoryPage() {
  return <ExtendedContentPage content={getExtendedPage('story')} ctaLabel="Contact the School" ctaHref="/contact" />;
}

