export function validateOnlyNormalCharacter(char: string) {
  return /^[A-Za-z0-9]*$/.test(char);
}

export function validateExpiredTime(date?: Date | string) {
  if (!date) return true;
  if (typeof date === "string") {
    return new Date(date).toISOString() < new Date().toISOString();
  }
  return date.toISOString() < new Date().toISOString();
}

export function validateMaxLength(char: string, maxLength: number) {
  return char.length <= maxLength;
}

export function validateUtf8(str: string) {
  return /[^a-zA-Z '\u00C0-\u01B0\u1EA0-\u1EFF]/g.test(str);
}
