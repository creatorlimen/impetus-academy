import type { VisualVariant } from '@/lib/content';

export type LearningMotifVariant =
  | VisualVariant
  | 'early-years'
  | 'growth'
  | 'writing'
  | 'science'
  | 'art'
  | 'thinking';

interface LearningMotifProps {
  variant: LearningMotifVariant;
  className?: string;
}

export default function LearningMotif({ variant, className = '' }: LearningMotifProps) {
  const sharedProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden="true" focusable="false">
      <circle cx="34" cy="32" r="7" fill="currentColor" opacity="0.24" />
      <circle cx="208" cy="40" r="11" fill="currentColor" opacity="0.12" />
      <path d="M18 154c26-12 43-10 62 6s39 18 65 2 46-16 77-1" {...sharedProps} strokeWidth="3" opacity="0.2" />

      {variant === 'primary' && (
        <>
          <path d="M50 62c25-9 48-4 69 13v72c-22-16-45-20-69-11V62Z" {...sharedProps} strokeWidth="5" />
          <path d="M190 62c-25-9-48-4-71 13v72c24-16 47-20 71-11V62Z" {...sharedProps} strokeWidth="5" />
          <path d="m176 32 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" fill="currentColor" opacity="0.8" />
          <path d="M75 91h24M75 108h29M141 91h24M136 108h29" {...sharedProps} strokeWidth="4" opacity="0.65" />
        </>
      )}

      {variant === 'secondary' && (
        <>
          <ellipse cx="120" cy="102" rx="72" ry="31" {...sharedProps} strokeWidth="4" transform="rotate(28 120 102)" />
          <ellipse cx="120" cy="102" rx="72" ry="31" {...sharedProps} strokeWidth="4" transform="rotate(-28 120 102)" />
          <ellipse cx="120" cy="102" rx="72" ry="31" {...sharedProps} strokeWidth="4" transform="rotate(90 120 102)" />
          <circle cx="120" cy="102" r="13" fill="currentColor" opacity="0.85" />
          <circle cx="184" cy="137" r="8" fill="currentColor" />
          <path d="M45 44h34M45 55h21M169 45h24" {...sharedProps} strokeWidth="4" opacity="0.55" />
        </>
      )}

      {variant === 'community' && (
        <>
          <circle cx="81" cy="81" r="26" {...sharedProps} strokeWidth="5" />
          <circle cx="159" cy="81" r="26" {...sharedProps} strokeWidth="5" />
          <circle cx="120" cy="126" r="29" {...sharedProps} strokeWidth="5" />
          <path d="M101 78h38M98 101l10 10M142 101l-10 10" {...sharedProps} strokeWidth="5" />
          <path d="M120 52c8-12 24-5 24 7 0 11-12 18-24 27-12-9-24-16-24-27 0-12 16-19 24-7Z" fill="currentColor" opacity="0.78" />
        </>
      )}

      {variant === 'academics' && (
        <>
          <path d="m52 142 20-67 97-42 18 18-42 97-67 20-26-26Z" {...sharedProps} strokeWidth="5" />
          <path d="m72 75 73 73M145 148l42-97M52 142l26 26" {...sharedProps} strokeWidth="4" opacity="0.65" />
          <circle cx="116" cy="108" r="14" fill="currentColor" opacity="0.78" />
        </>
      )}

      {variant === 'leadership' && (
        <>
          <path d="M55 151h130M72 151v-24h35v-25h35V77h35V49" {...sharedProps} strokeWidth="6" />
          <path d="m160 52 17-17 17 17M177 35v46" {...sharedProps} strokeWidth="6" />
          <circle cx="72" cy="64" r="21" {...sharedProps} strokeWidth="5" />
          <path d="M72 32v-9M72 105v-9M40 64h-9M113 64h-9M49 41l-7-7M102 93l-7-7M95 41l7-7M42 93l7-7" {...sharedProps} strokeWidth="4" opacity="0.65" />
        </>
      )}

      {variant === 'admissions' && (
        <>
          <path d="M55 154h130V48H55v106Z" {...sharedProps} strokeWidth="6" />
          <path d="M91 154V88h58v66M120 88V60" {...sharedProps} strokeWidth="5" />
          <path d="m101 78 19-19 19 19" {...sharedProps} strokeWidth="5" />
          <circle cx="137" cy="121" r="4" fill="currentColor" />
          <path d="M32 174h176" {...sharedProps} strokeWidth="5" opacity="0.5" />
        </>
      )}

      {variant === 'early-years' && (
        <>
          <rect x="47" y="103" width="52" height="52" rx="10" {...sharedProps} strokeWidth="5" />
          <rect x="99" y="62" width="52" height="93" rx="10" {...sharedProps} strokeWidth="5" />
          <rect x="151" y="92" width="42" height="63" rx="10" {...sharedProps} strokeWidth="5" />
          <circle cx="73" cy="129" r="9" fill="currentColor" opacity="0.8" />
          <path d="m116 111 9-18 9 18h-18ZM163 116h19M172 106v20" {...sharedProps} strokeWidth="4" />
        </>
      )}

      {variant === 'growth' && (
        <>
          <path d="M43 153h35v-31h36V91h36V60h47" {...sharedProps} strokeWidth="6" />
          <path d="m177 40 20 20-20 20" {...sharedProps} strokeWidth="6" />
          <path d="M55 87c28 2 45-12 52-42 17 20 14 43-8 57-16 10-32 5-44-15Z" fill="currentColor" opacity="0.22" />
          <path d="M57 88c18-13 31-21 50-43" {...sharedProps} strokeWidth="4" />
        </>
      )}

      {variant === 'writing' && (
        <>
          <path d="M46 146c37-5 70-3 99 4M48 121c36-6 72-4 108 2M48 96c28-5 55-4 82 0" {...sharedProps} strokeWidth="5" opacity="0.55" />
          <path d="m153 50 35 35-72 72-42 8 8-42 71-73Z" {...sharedProps} strokeWidth="6" />
          <path d="m82 123 34 34M154 51l34 34" {...sharedProps} strokeWidth="4" />
        </>
      )}

      {variant === 'science' && (
        <>
          <path d="M98 45v42l-39 65c-5 9 1 20 12 20h98c11 0 17-11 12-20l-39-65V45" {...sharedProps} strokeWidth="6" />
          <path d="M88 45h64M76 132h88" {...sharedProps} strokeWidth="5" />
          <circle cx="108" cy="116" r="7" fill="currentColor" />
          <circle cx="140" cy="146" r="9" fill="currentColor" opacity="0.6" />
          <circle cx="128" cy="98" r="5" fill="currentColor" opacity="0.4" />
        </>
      )}

      {variant === 'art' && (
        <>
          <path d="M120 38c46 0 84 31 84 69 0 20-13 30-31 30h-17c-11 0-17 11-12 21 5 11-3 20-17 20-51 0-91-31-91-70 0-38 37-70 84-70Z" {...sharedProps} strokeWidth="6" />
          <circle cx="78" cy="89" r="10" fill="currentColor" opacity="0.45" />
          <circle cx="107" cy="67" r="10" fill="currentColor" opacity="0.7" />
          <circle cx="142" cy="70" r="10" fill="currentColor" />
          <circle cx="166" cy="98" r="10" fill="currentColor" opacity="0.58" />
        </>
      )}

      {variant === 'thinking' && (
        <>
          <path d="M120 35c-39 0-67 25-67 58 0 24 12 40 31 52v23h72v-23c19-12 31-28 31-52 0-33-28-58-67-58Z" {...sharedProps} strokeWidth="6" />
          <path d="M91 93h19V75h21v37h20M93 168v13h54v-13" {...sharedProps} strokeWidth="5" />
          <path d="M120 20V8M52 40l-10-10M188 40l10-10M32 97H17M223 97h-15" {...sharedProps} strokeWidth="4" opacity="0.55" />
        </>
      )}
    </svg>
  );
}