import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dateConverterToKorean } from "utils/handleFormatDate";
import { endDateAtom, startDateAtom } from "store/date";
import { useRecoilValue } from "recoil";
import { DataFormatter } from "utils/YAxisUnitFormatter";
import { getDataBetweenDate } from "utils/getKPI";
import { trendDataQuery } from "store/trend";
import { graphXAxisState } from "store/graphNav";

function GraphChart() {
  const startDate = useRecoilValue(startDateAtom);
  const endDate = useRecoilValue(endDateAtom);
  const trendData = useRecoilValue(trendDataQuery);
  const navOption = useRecoilValue(graphXAxisState);
  const { KPIdataForComparison: data } = getDataBetweenDate(trendData, startDate, endDate);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
        <YAxis tickFormatter={data} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={navOption.firstOption}
          stroke="#2189dc"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={navOption.secondOption} stroke="#34cd2b" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphChart;
