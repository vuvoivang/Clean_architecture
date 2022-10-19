export function trimExtraSpace(str: string) {
  return str.replace(/\s+/g, " ").trim();
}
export const numberFormat = (value) =>
  new Intl.NumberFormat("vi").format(value);
