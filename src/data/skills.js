export const skills = [
  {
    id: 1,
    name: "HTML",
    level: 1,
    created: convertDate("2022-08-14"),
  },
  {
    id: 2,
    name: "xPath",
    level: 5,
    created: convertDate("2023-04-01"),
  },
  {
    id: 3,
    name: "Typescript",
    level: 0,
    created: convertDate("2022-12-25"),
  },
];

function convertDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = day + "." + month + "." + year;

  return formattedDate;
}
