import numberUnitToKorean from "./numberUnitToKorean";

const kpiToKorean = {
  roas: "ROAS",
  cost: "광고비",
  imp: "노출수",
  click: "클릭수",
  cvr: "전환수",
  revenue: "매출",
};

const kpiToUnit = (kpi) => {
  switch (kpi) {
    case "roas":
      return "%";
    case "cost":
      return "월";
    case "imp":
      return "회";
    case "click":
      return "회";
    case "cvr":
      return "회";
    case "revenue":
      return "원";
    default:
      return "";
  }
};

const kpiNumberToKoreanWithUnit = (number, kpi = null) => {
  const shortenedNumberWithKorean = numberUnitToKorean(number);
  return `${shortenedNumberWithKorean} ${kpiToUnit(kpi)}`;
};

export { kpiToKorean, kpiNumberToKoreanWithUnit };
