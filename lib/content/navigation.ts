import type { NavigationItem, SchoolDivision } from './types';

export const navigation: NavigationItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about', label: 'Academy Overview' },
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/founder', label: 'Founder' },
      { href: '/about/proprietor', label: 'Proprietor' },
    ],
  },
  {
    href: '/primary-school',
    label: 'Primary School',
    children: [
      { href: '/primary-school', label: 'Primary Overview' },
      { href: '/primary-school/kindergarten', label: 'Kindergarten' },
      { href: '/primary-school/elementary', label: 'Elementary/Primary' },
      { href: '/primary-school/admissions', label: 'Primary Admissions' },
    ],
  },
  {
    href: '/secondary-school',
    label: 'Secondary School',
    children: [
      { href: '/secondary-school', label: 'Secondary Overview' },
      { href: '/secondary-school/junior-secondary', label: 'Junior Secondary' },
      { href: '/secondary-school/senior-secondary', label: 'Senior Secondary' },
      { href: '/secondary-school/senior-secondary/science', label: 'Science' },
      { href: '/secondary-school/senior-secondary/arts', label: 'Arts' },
      { href: '/secondary-school/senior-secondary/commercial', label: 'Commercial' },
      { href: '/secondary-school/admissions', label: 'Secondary Admissions' },
    ],
  },
  { href: '/admissions', label: 'Admissions' },
  { href: '/life-at-impetus', label: 'Life at Impetus' },
  { href: '/contact', label: 'Contact' },
];

export function getNavigation() {
  return navigation;
}

export function getDivisionNavigation(division: SchoolDivision) {
  const href = division === 'primary' ? '/primary-school' : '/secondary-school';
  return navigation.find((item) => item.href === href)?.children ?? [];
}

export function getDivisionFooterNavigation(division: SchoolDivision) {
  return getDivisionNavigation(division).filter(
    (item) => division === 'primary' || !item.href.includes('/senior-secondary/'),
  );
}

const generalFooterNavigation: NavigationItem[] = [
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/life-at-impetus', label: 'Life at Impetus' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function getGeneralFooterNavigation() {
  return generalFooterNavigation;
}
