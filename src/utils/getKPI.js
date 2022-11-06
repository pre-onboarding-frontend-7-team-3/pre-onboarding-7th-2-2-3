export const getKPI = (trendData, startDate, endDate) => {
  const startPoint = trendData.findIndex((data) => {
    if (startDate.getTime() === new Date(data.date).getTime()) {
      return true;
    }
  });

  const diffOfdate = startDate.getDate() - endDate.getDate() + 1;

  const KPIs = {
    roas: 0, //ROAS
    cost: 0, //광고비
    imp: 0, // 노출 수
    click: 0, //클릭수
    conv: 0, //전환 수
    revenue: 0,
  };

  const exKPIs = {
    roas: 0, //ROAS
    cost: 0, //광고비
    imp: 0, // 노출 수
    click: 0, //클릭수
    conv: 0, //전환 수
    revenue: 0,
  };

  const A = trendData.slice(startPoint, startPoint + diffOfdate);
  const B = trendData.slice(startPoint - diffOfdate - 1, startPoint - 1);

  for (let i = 0; i < diffOfdate; i++) {
    for (let key of Object.keys(KPIs)) {
      KPIs[key] += A[i][key];
      exKPIs[key] += B[i][key];
    }
  }
  return [KPIs, exKPIs];
};
