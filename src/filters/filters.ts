/*
export function dateFilter(value) {
  return value.substr(0, 10);
}

export function toUpperCase(value) {
  return value.toUpperCase();
}
*/

export default {
  dateFilter: (value: string) => value.substr(0, 10),
  toUpperCase: (value: string) => value.toUpperCase(),
};
