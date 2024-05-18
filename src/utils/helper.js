import { stateCodeMap } from "../mock/states";

export function formatDate(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate().toString().padStart(2, "0"); // Ensure
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); //
  const year = date.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

export function formatStatecode(stateName) {
  return stateCodeMap[stateName] || null;
}
