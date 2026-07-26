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
  title = 'Begin a clear conversation with the school.',
  subtitle = 'Use the details below for admissions enquiries, visits, and general communication with Impetus Academy.',
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
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-card-foreground">School contact details</h3>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            Use these details to reach the school team for admissions enquiries, visits, and general questions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.title} className="surface-panel rounded-[1.75rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] bg-primary-100/70 text-primary-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-primary-500">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-card-foreground">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2.3rem] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-primary-500">Admissions Desk</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-card-foreground">Book an admission enquiry</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Share the essentials, and the admissions team can guide you on the next step once enquiry handling is connected.
            </p>
          </div>

          <form className="mt-7 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium text-card-foreground">
                Parent/guardian name
                <input name="guardianName" type="text" placeholder="Full name" />
              </label>
              <label className="grid gap-1.5 text-sm font-medium text-card-foreground">
                Phone number
                <input name="phone" type="tel" placeholder="Phone or WhatsApp" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium text-card-foreground">
                School division
                <select name="division" defaultValue="">
                  <option value="" disabled>Select division</option>
                  <option value="primary">Primary School</option>
                  <option value="secondary">Secondary School</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-medium text-card-foreground">
                Email address
                <input name="email" type="email" placeholder="name@example.com" />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium text-card-foreground">
              Message
              <textarea name="message" rows={5} placeholder="Tell us what you would like to confirm." />
            </label>
            <button type="button" className="button-primary w-full">
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}




