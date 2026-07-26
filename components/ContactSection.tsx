import Section from '@/components/Section';
import { getSiteSettings } from '@/lib/content';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string | null;
  className?: string;
}

export default function ContactSection({
  title = 'We would be glad to hear from you.',
  subtitle = 'Call or email Impetus Academy with questions about admissions, school visits, or everyday school matters.',
  eyebrow = 'Contact',
  className = '',
}: ContactSectionProps) {
  const settings = getSiteSettings();
  const contactItems = [
    { icon: MapPin, title: 'Address', value: settings.address },
    { icon: Phone, title: 'Phone', value: settings.phones.join(' / ') },
    { icon: Mail, title: 'Email', value: settings.email },
    { icon: Clock, title: 'Opening Hours', value: settings.openingHours },
  ];

  return (
    <Section title={title} eyebrow={eyebrow || undefined} subtitle={subtitle} className={className} align="left">
      <div className="grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.012em] text-card-foreground">School contact details</h3>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            Reach the school team using the details below. If you are enquiring about admission, tell us the division and class you are considering.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.title} className="surface-panel rounded-[1.75rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] bg-accent-50 text-accent-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-label text-[0.62rem] uppercase tracking-[0.14em] text-accent-700">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-card-foreground">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dark-panel rounded-[2.3rem] p-6 text-primary-950 sm:p-8">
          <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-accent-700">Admissions and school visits</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.015em]">Start with a conversation.</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-950/72">
            The school team can help you understand the current application process, arrange a suitable visit, or direct your question to the right person.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${settings.phones[0]}`} className="button-primary">
              Call admissions
            </a>
            <a href={`mailto:${settings.email}`} className="button-secondary">
              Email the school
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
