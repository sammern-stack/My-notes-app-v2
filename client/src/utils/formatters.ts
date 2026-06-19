export const capitalizeStr = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
