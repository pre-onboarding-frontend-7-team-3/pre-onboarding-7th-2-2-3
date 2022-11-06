import { getEveryDayAdResults } from "store/atoms/getEveryDayAdResults";
import Graph from "components/Graph";
import { useRecoilValue } from "recoil";

function DashBoard() {
  // const { count, totalAds } = useRecoilValue(getEveryDayAdResults);

  return (
    <>
      <Graph />
    </>
  );
}

export default DashBoard;
