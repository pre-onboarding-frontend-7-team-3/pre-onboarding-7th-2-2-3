/**
 *
 * * 용어 정리
 *  kpi : key performance indicator(핵심 성과 지표)
 *  roas: ROAS
 *  cost:광고비
 *  imp: 노출 수
 *  click: 클릭수
 *  conv: 전환 수
 *  revenue: 총매출
 */

const treatAsUTC = (date) => {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
};

const daysBetween = (d1, d2) => {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  const a = Math.ceil(
    Math.abs(treatAsUTC(d1).setHours(0, 0, 0, 0) - treatAsUTC(d2).setHours(0, 0, 0, 0)) /
      millisecondsPerDay,
  );
  return a;
};

export const getDataBetweenDate = (data, startDate, endDate) => {
  const startPoint = data.findIndex((data) => daysBetween(new Date(data.date), startDate) < 1);

  const diffOfdate = daysBetween(startDate, endDate);

  const KPIdataForComparison = data.slice(startPoint, startPoint + diffOfdate + 1);

  return { KPIdataForComparison, diffOfdate };
};

export const getKPI = (trendData, startDate, endDate) => {
  const KPIs = {
    roas: 0,
    cost: 0,
    imp: 0,
    click: 0,
    conv: 0,
    revenue: 0,
  };

  const exKPIs = {
    roas: 0,
    cost: 0,
    imp: 0,
    click: 0,
    conv: 0,
    revenue: 0,
  };
  const { KPIdataForComparison, diffOfdate } = getDataBetweenDate(trendData, startDate, endDate);
  const startPoint = trendData.findIndex((data) => daysBetween(new Date(data.date), startDate) < 1);

  const exKPIdataForComparison = trendData.slice(startPoint - diffOfdate - 1, startPoint);
  for (let i = 0; i <= diffOfdate; i++) {
    for (let key of Object.keys(KPIs)) {
      KPIs[key] += KPIdataForComparison[i][key];
      exKPIs[key] += exKPIdataForComparison[i][key];
    }
  }
  return [KPIs, exKPIs];
};
