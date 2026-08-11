export type SchoolDivision = 'primary' | 'secondary';

export type VisualVariant =
  | 'primary'
  | 'secondary'
  | 'community'
  | 'academics'
  | 'leadership'
  | 'admissions';

export interface MediaAsset {
  src: string;
  alt: string;
  focalPoint?: string;
}

export interface SiteSettings {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  phones: string[];
  email: string;
  openingHours: string;
  dropOffPickupNote: string;
  uncertainFacts: string[];
}

export interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
}

export interface DivisionContent {
  id: SchoolDivision;
  label: string;
  eyebrow: string;
  headline: string;
  summary: string;
  href: string;
  admissionsHref: string;
  stages: string[];
  accent: string;
  media?: MediaAsset;
}

export interface LearningStage {
  title: string;
  slug: string;
  division: SchoolDivision;
  href: string;
  summary: string;
  sourceNote?: string;
}

export interface CurriculumFocus {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  categories: string[];
}

export interface Testimonial {
  quote: string;
  attribution: string;
  division: 'general' | SchoolDivision;
}

export interface ContentSection {
  title: string;
  body?: string;
  items?: string[];
}

export type CurriculumSlug =
  | 'kindergarten'
  | 'elementary'
  | 'junior-secondary'
  | 'science'
  | 'arts'
  | 'commercial';

export interface CurriculumPageContent {
  slug: CurriculumSlug;
  title: string;
  eyebrow: string;
  summary: string;
  division: SchoolDivision;
  href: string;
  sourceUrl: string;
  media?: MediaAsset;
  cardTitle?: string;
  cardDescription?: string;
  sections: ContentSection[];
  aside?: PageAside;
  confirmationNeeded?: string[];
}

export interface LeadershipPageContent {
  slug: 'founder' | 'proprietor';
  eyebrow: string;
  title: string;
  name: string;
  role: string;
  summary: string;
  sections: ContentSection[];
  confirmationNeeded: string[];
  portrait?: MediaAsset;
}

export interface AdmissionsStep {
  title: string;
  description: string;
  publicationStatus?: 'safe' | 'confirmation-needed' | 'hidden-pending-approval';
}

export interface SourceCoverageItem {
  sourcePage: string;
  sourceUrl: string;
  sourceSections: string[];
  destinations: string[];
  status: 'migrated' | 'partially-migrated' | 'centralized' | 'pending-assets' | 'confirmation-needed';
  notes: string;
}

export interface PageAside {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface PageSectionSet {
  heroTitle: string;
  eyebrow: string;
  summary: string;
  sections: ContentSection[];
  aside?: PageAside;
  media?: MediaAsset;
  visualVariant?: VisualVariant;
  confirmationNeeded?: string[];
}