import ContactSection from '@/components/ContactSection';
import ExtendedContentPage from '@/components/ExtendedContentPage';
import { getExtendedPage } from '@/lib/content';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <ExtendedContentPage content={getExtendedPage('contact')} />
      <ContactSection eyebrow={null} className="pt-0 md:pt-0" />
    </>
  );
}
