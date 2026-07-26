import ExtendedContentPage from '@/components/ExtendedContentPage';
import { getExtendedPage } from '@/lib/content';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return <ExtendedContentPage content={getExtendedPage('about')} ctaLabel="Read Our Story" ctaHref="/about/our-story" />;
}

