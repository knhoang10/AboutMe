// The page's sections, in order. The nav and every section header read from here,
// and each id is that section's anchor (/#projects, /#contact, ...).
export const sectionData = [
  { id: 'about', title: 'About Me' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Connect With Me' },
] as const;

export type SectionId = typeof sectionData[number]['id'];

export const sectionTitle = (id: SectionId) => sectionData.find((section) => section.id === id)?.title ?? id;
