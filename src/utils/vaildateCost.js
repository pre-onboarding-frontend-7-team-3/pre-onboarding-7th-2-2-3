export const vaildateCost = (cost) => {
  const a = ((cost + "").replace(/\d{3}$/g, "") * 1).toLocaleString() + "만원";

  return a;
};
