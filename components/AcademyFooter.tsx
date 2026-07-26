import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { getDivisionFooterNavigation, getGeneralFooterNavigation, getSiteSettings } from '@/lib/content';

export default function AcademyFooter() {
  const settings = getSiteSettings();
  const year = 2026;
  const primaryNavigation = getDivisionFooterNavigation('primary');
  const secondaryNavigation = getDivisionFooterNavigation('secondary');
  const generalNavigation = getGeneralFooterNavigation();

  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[3.5rem] bg-primary-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,117,18,0.18),transparent_30%),linear-gradient(180deg,rgba(56,175,224,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">{settings.tagline}</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl lg:text-[3.25rem]">
              A school community where children can learn, grow, and belong.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-100/72 md:text-lg">
              {settings.name} brings together strong teaching, good character, practical skills, and technology that helps students understand and create.
            </p>
          </div>

          <div className="dark-panel rounded-[2rem] p-6 sm:p-7 lg:max-w-sm">
            <p className="font-label text-[0.65rem] uppercase tracking-[0.14em] text-white/46">Admissions Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/76">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {settings.address}
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {settings.phones.join(' / ')}
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {settings.email}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-[1.75rem] bg-white p-4 shadow-[0_18px_48px_rgba(5,44,69,0.2)]">
              <Image
                src="/brand/impetus-academy-logo.png"
                alt={settings.name}
                width={1195}
                height={673}
                className="h-auto w-full max-w-[260px]"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-100/66">
              A welcoming school community for Primary and Secondary students, with room to build character, confidence, knowledge, and practical skills.
            </p>
          </div>

          <div>
            <h3 className="font-label text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/48">Primary School</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {primaryNavigation.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/48">Secondary School</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {secondaryNavigation.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/48">General</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {generalNavigation.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/52">Primary and Secondary education in Ijaye, Lagos.</p>
          <p>© {year} {settings.shortName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

