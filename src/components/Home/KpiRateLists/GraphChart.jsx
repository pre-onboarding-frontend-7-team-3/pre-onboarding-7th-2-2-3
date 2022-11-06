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
import { endDateAtom, startDateAtom } from "store/atoms/date";
import { useRecoilValue } from "recoil";
import { DataFormatter } from "utils/YAxisUnitFormatter";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function GraphChart() {
  const startDate = useRecoilValue(startDateAtom);
  const endDate = useRecoilValue(endDateAtom);
  const labels = [
    dateConverterToKorean(startDate, "MM월 DD일"),
    dateConverterToKorean(endDate, "MM월 DD일"),
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis tickFormatter={DataFormatter} />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#34cd2b" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="amt" stroke="#2189dc" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphChart;
