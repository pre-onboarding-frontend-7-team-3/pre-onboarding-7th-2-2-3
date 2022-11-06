export function getDateCovert(string) {
  const a = string.substr(0, 10);
  const b = a.replace("-", "년 ");
  const c = b.replace("-", "월 ") + "일";

  return c;
}
