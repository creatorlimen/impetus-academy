import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-6 py-24">
      <div className="dark-panel mx-auto max-w-4xl rounded-[2.75rem] p-8 text-white sm:p-10">
        <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">Page not found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">Let’s get you back to the right school journey.</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">Choose Primary School, Secondary School, Admissions, or Contact to continue.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/primary-school" className="button-primary">Primary School</Link>
          <Link href="/secondary-school" className="button-secondary">Secondary School</Link>
          <Link href="/admissions" className="button-secondary">Admissions</Link>
          <Link href="/contact" className="button-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}



