import ExtendedContentPage from '@/components/ExtendedContentPage';
import { getExtendedPage } from '@/lib/content';

export const metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return <ExtendedContentPage content={getExtendedPage('gallery')} ctaLabel="Contact the School" ctaHref="/contact" />;
}

