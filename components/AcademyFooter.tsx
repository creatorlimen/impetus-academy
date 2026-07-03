import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { getSiteSettings } from '@/lib/api';

export default function AcademyFooter() {
  const settings = getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[3.5rem] bg-primary-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,160,82,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/48">{settings.tagline}</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[3.25rem]">
              One academy, two carefully held learning journeys.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-100/72 md:text-lg">
              {settings.name} provides an outstanding learning environment rooted in integrity, academic excellence, character, practical skills, and thoughtful use of technology.
            </p>
          </div>

          <div className="dark-panel rounded-[2rem] p-6 sm:p-7 lg:max-w-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/46">Admissions Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/76">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                {settings.address}
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                {settings.phones.join(' / ')}
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                {settings.email}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 font-display text-2xl font-semibold italic text-accent-300">
                I
              </div>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/48">{settings.shortName}</p>
                <p className="text-lg font-semibold tracking-[-0.04em] text-white">{settings.name}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-100/66">
              Built from supplied school content. Unconfirmed facts remain marked for confirmation rather than converted into public claims.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/48">Primary School</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {[
                { href: '/primary-school', label: 'Primary Overview' },
                { href: '/primary-school/kindergarten', label: 'Kindergarten' },
                { href: '/primary-school/elementary', label: 'Elementary/Primary' },
                { href: '/primary-school/admissions', label: 'Primary Admissions' },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/48">Secondary School</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {[
                { href: '/secondary-school', label: 'Secondary Overview' },
                { href: '/secondary-school/junior-secondary', label: 'Junior Secondary' },
                { href: '/secondary-school/senior-secondary', label: 'Senior Secondary' },
                { href: '/secondary-school/admissions', label: 'Secondary Admissions' },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/48">General</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {[
                { href: '/about', label: 'About' },
                { href: '/academics', label: 'Academics' },
                { href: '/admissions', label: 'Admissions' },
                { href: '/life-at-impetus', label: 'Life at Impetus' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/44">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-400 align-middle shadow-[0_0_0_0.3rem_rgba(74,222,128,0.12)] animate-pulse" />
            Staging build in progress
          </p>
          <p>© {year} {settings.shortName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



