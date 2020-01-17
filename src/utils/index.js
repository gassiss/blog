export function formatDate(date) {
  return new Date(`${date}T00:00`).toLocaleDateString("en-ca", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
}

export function formatReadTime(date, timeToRead) {
  return `${formatDate(date)} - ${timeToRead} min read`;
}
