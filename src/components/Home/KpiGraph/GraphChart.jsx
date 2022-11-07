/* eslint-disable no-console */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useRecoilValue } from "recoil";

import { dateConverterToKorean } from "utils/handleFormatDate";
import { getDataBetweenDate } from "utils/getKPI";
import { kpiNumberToKoreanWithUnit } from "utils/graphUnitConverter";

import { endDateAtom, startDateAtom } from "store/date";
import { trendDataQuery } from "store/trend";
import { graphDateRangeState, graphXAxisState } from "store/graphNav";

import CustomTooltip from "./CustomToolTip";

function GraphChart() {
  const startDate = useRecoilValue(startDateAtom);
  const endDate = useRecoilValue(endDateAtom);
  const trendData = useRecoilValue(trendDataQuery);
  const navOption = useRecoilValue(graphXAxisState);
  const dayRangeNavOption = useRecoilValue(graphDateRangeState);

  const { KPIdataForComparison: data } = getDataBetweenDate(trendData, startDate, endDate);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={dayRangeNavOption === "week" ? data : [data[0]]}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{
          fontFamily: "roboto",
          fontWeight: "bold",
          color: "#010101d7",
          fontSize: ".8rem",
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tickMargin="10"
          dataKey="date"
          tickFormatter={(value) => dateConverterToKorean(value, "MM월 DD일")}
        />
        <YAxis tickFormatter={(value) => kpiNumberToKoreanWithUnit(value)} yAxisId="left" />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => kpiNumberToKoreanWithUnit(value)}
        />
        <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />

        <Line
          yAxisId="left"
          type="monotone"
          dataKey={navOption.firstOption}
          stroke="#2189dc"
          activeDot={{ r: 8 }}
        />
        <Line yAxisId="right" type="monotone" dataKey={navOption.secondOption} stroke="#34cd2b" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphChart;
