export const SORT_OPTIONS = [
  { value: 'default', label: 'None' },
  { value: 'title_asc', label: 'Title Ascending' },
  { value: 'title_desc', label: 'Title Descending' },
  { value: 'date_asc', label: 'Date Ascending' },
  { value: 'date_desc', label: 'Date Descending' }
] as const;

export type SortBy = (typeof SORT_OPTIONS)[number]['value'];
