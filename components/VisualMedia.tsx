import Image from 'next/image';
import LearningMotif from '@/components/LearningMotif';
import type { MediaAsset, VisualVariant } from '@/lib/content';

interface VisualMediaProps {
  variant: VisualVariant;
  eyebrow: string;
  title: string;
  image?: MediaAsset;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

const toneClasses: Record<VisualVariant, string> = {
  primary: 'bg-gradient-to-br from-accent-200 via-accent-100 to-white text-primary-950',
  secondary: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-500 text-white',
  community: 'bg-gradient-to-br from-accent-100 via-[#ffe2c2] to-primary-100 text-primary-950',
  academics: 'bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white',
  leadership: 'bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white',
  admissions: 'bg-gradient-to-br from-accent-400 via-accent-300 to-accent-100 text-primary-950',
};

export default function VisualMedia({
  variant,
  eyebrow,
  title,
  image,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  priority = false,
}: VisualMediaProps) {
  return (
    <div
      className={[
        'group relative isolate overflow-hidden rounded-[2.75rem] shadow-[0_28px_90px_rgba(23,16,68,0.18)]',
        toneClasses[variant],
        aspectClassName,
        className,
      ].join(' ')}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 44vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            style={{ objectPosition: image.focalPoint ?? 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/88 via-primary-950/10 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full border-[28px] border-white/20" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/12" />
          <div className="absolute right-[8%] top-[9%] grid grid-cols-4 gap-3 opacity-30">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className="h-2 w-2 rounded-full bg-current" />
            ))}
          </div>
          <LearningMotif
            variant={variant}
            className="absolute inset-x-[10%] top-[5%] h-[68%] w-[80%] opacity-85 transition-transform duration-700 ease-out group-hover:-rotate-1 group-hover:scale-[1.03]"
          />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-label text-[0.65rem] uppercase tracking-[0.16em] opacity-70">
          {eyebrow}
        </p>
        <p className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight sm:text-3xl">
          {title}
        </p>
      </div>
    </div>
  );
}