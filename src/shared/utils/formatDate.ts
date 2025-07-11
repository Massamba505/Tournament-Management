export const formatDate = (date: string | Date): string => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = parsedDate.toLocaleDateString("en-ZA", options);
  const [month, day, year] = formattedDate.split("/");

  return `${day}/${month}/${year}`;
};
