'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { getNavigation, getSiteSettings, type NavigationItem } from '@/lib/content';

function DesktopDropdown({ item, scrolled }: { item: NavigationItem; scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<number | null>(null);
  const triggerClass = scrolled
    ? 'text-primary-700 hover:bg-primary-100/70 hover:text-primary-950'
    : 'text-white/78 hover:bg-white/10 hover:text-white';

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = window.setTimeout(() => setOpen(false), 130);
  };

  return (
    <div className="relative z-[90]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 font-label text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${triggerClass}`}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && item.children && (
        <div className="surface-panel absolute left-0 top-full z-[100] mt-3 w-72 rounded-[1.5rem] p-2 animate-fade-in">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block rounded-[1.1rem] px-4 py-3 text-sm text-muted hover:bg-white hover:text-primary-800"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ item, onNavigate }: { item: NavigationItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-[1.15rem] px-4 py-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary-700 hover:bg-primary-100/60 hover:text-primary-950"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && item.children && (
        <div className="space-y-0.5 pl-4 pt-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="block rounded-[1rem] px-4 py-2.5 text-sm text-muted hover:bg-primary-100/60 hover:text-primary-900"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AcademyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigation = getNavigation();
  const settings = getSiteSettings();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shellClass = scrolled
    ? 'border-primary-100/80 bg-white/92 shadow-[0_18px_55px_rgba(6,77,117,0.12)] backdrop-blur-2xl'
    : 'border-white/14 bg-primary-950/88 shadow-[0_18px_55px_rgba(5,70,108,0.28)] backdrop-blur-xl';
  const linkClass = scrolled
    ? 'text-primary-700 hover:bg-primary-100/70 hover:text-primary-950'
    : 'text-white/78 hover:bg-white/10 hover:text-white';

  return (
    <nav className="fixed inset-x-0 top-0 z-[80] px-4 pt-4 md:px-6 md:pt-6" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-7xl flex-col gap-3">
        <div className={`rounded-[2rem] border transition-all duration-300 ${shellClass}`}>
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <Link href="/" aria-label={`${settings.shortName} home`} className="flex shrink-0 items-center">
              <span className="flex h-14 w-28 items-center justify-center rounded-2xl border border-white/70 bg-white p-1.5 shadow-[0_8px_24px_rgba(5,70,108,0.16)] sm:w-32">
                <Image
                  src="/brand/impetus-academy-logo.png"
                  alt=""
                  width={1195}
                  height={673}
                  priority
                  className="h-full w-full object-contain"
                />
              </span>
            </Link>

            <div className="ml-auto hidden items-center gap-1 xl:flex">
              {navigation.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.href} item={link} scrolled={scrolled} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 font-label text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden items-center gap-2 xl:flex">
              <Link href="/gallery" className={`inline-flex items-center rounded-full px-3 py-2 font-label text-[0.62rem] font-semibold uppercase tracking-[0.1em] ${linkClass}`}>
                Gallery
              </Link>
              <Link href="/admissions" className="button-primary px-4 py-2.5 text-sm">
                Apply Now
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-full p-3 xl:hidden ${scrolled ? 'bg-primary-100/70 text-primary-900' : 'bg-white/10 text-white'}`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="surface-panel animate-slide-up rounded-[1.9rem] border px-4 pb-4 pt-3 xl:hidden">
            <div className="space-y-1">
              {navigation.map((link) =>
                link.children ? (
                  <MobileDropdown key={link.href} item={link} onNavigate={() => setMobileMenuOpen(false)} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-[1.15rem] px-4 py-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary-700 hover:bg-primary-100/60 hover:text-primary-950"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)} className="button-primary mt-3 w-full">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}



