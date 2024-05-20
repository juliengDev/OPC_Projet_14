import { stateCodeMap } from "../mock/states";

export function formatStatecode(stateName) {
  return stateCodeMap[stateName] || null;
}
export const formatDate = (date) => {
  const { $M: month, $D: day, $y: year } = date;
  return `${month + 1}/${day}/${year}`;
};
