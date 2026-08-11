import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import LearningMotif from '@/components/LearningMotif';
import {
  getDivisionFooterNavigation,
  getGeneralFooterNavigation,
  getSiteSettings,
} from '@/lib/content';

export default function AcademyFooter() {
  const settings = getSiteSettings();
  const year = 2026;
  const primaryNavigation = getDivisionFooterNavigation('primary');
  const secondaryNavigation = getDivisionFooterNavigation('secondary');
  const generalNavigation = getGeneralFooterNavigation();

  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[3.5rem] bg-primary-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(232,117,18,0.24),transparent_26%),radial-gradient(circle_at_90%_34%,rgba(101,75,199,0.34),transparent_30%)]" />
      <LearningMotif
        variant="community"
        className="absolute -right-14 -top-16 h-96 w-96 text-primary-300 opacity-10"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-accent-300">
              {settings.tagline}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.015em] text-white sm:text-4xl lg:text-[3.25rem]">
              A school community where children can learn, grow, and belong.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {settings.name} brings together strong teaching, good character, practical skills, and technology that helps students understand and create.
            </p>
          </div>

          <div className="warm-panel rounded-[2rem] p-6 text-primary-950 sm:p-7 lg:max-w-sm">
            <p className="font-label text-[0.65rem] uppercase tracking-[0.14em] text-accent-700">
              Admissions contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-primary-950/76">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                {settings.address}
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                {settings.phones.join(' / ')}
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                {settings.email}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-[1.75rem] bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
              <Image
                src="/brand/impetus-academy-logo.png"
                alt={settings.name}
                width={1195}
                height={673}
                className="h-auto w-full max-w-[260px]"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/66">
              A welcoming school community for Primary and Secondary students, with room to build character, confidence, knowledge, and practical skills.
            </p>
          </div>

          <FooterNavigation title="Primary School" links={primaryNavigation} />
          <FooterNavigation title="Secondary School" links={secondaryNavigation} />
          <FooterNavigation title="General" links={generalNavigation} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-8 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <p>Primary and Secondary education in Ijaye, Lagos.</p>
          <p>© {year} {settings.shortName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterNavigationProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

function FooterNavigation({ title, links }: FooterNavigationProps) {
  return (
    <div>
      <h3 className="font-label text-[0.68rem] font-medium uppercase tracking-[0.14em] text-accent-300">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-accent-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}