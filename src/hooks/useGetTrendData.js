import { getTrendData } from "utils/apis/trendData";
import { useRecoilState, useSetRecoilState } from "recoil";
import { boundaryDate, selectedPeriod } from "atoms/selectedPeriod";
import getEndDate from "utils/getEndDate";
import getStartDate from "utils/getStartDate";

const useGetTrendData = async () => {
  const [period, setPeriod] = useRecoilState(selectedPeriod);
  const setBoundaryDate = useSetRecoilState(boundaryDate);

  try {
    let data = await getTrendData();

    let maxDate = new Date(getEndDate(data.report.daily));
    let minDate = new Date(getStartDate(data.report.daily));

    setBoundaryDate({ minDate: minDate, maxDate: maxDate });

    if (period.startDate === null) {
      setPeriod({ startDate: maxDate, endDate: maxDate });
    }

    return data.report.daily;
  } catch (err) {
    throw new Error(err);
  }
};

export default useGetTrendData;
