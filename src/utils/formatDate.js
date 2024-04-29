export function formatDate(date) {
  const options = {
    year: "numeric",
    day: "2-digit",
    month: "short",
  }
  return new Date(date).toLocaleDateString("en-US", options)
}
