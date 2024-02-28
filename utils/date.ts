export const getFormattedDate = (date: Date) => {
  return `${date.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}`;
};
