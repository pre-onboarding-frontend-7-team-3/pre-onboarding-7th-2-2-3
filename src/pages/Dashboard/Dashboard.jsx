/* eslint-disable no-console */
import useGetTrendData from "hooks/useGetTrendData";

const Dashboard = () => {
  let res = useGetTrendData();
  console.log(res);

  return (
    <>
      <span>통합 광고 현황</span>
    </>
  );
};

export default Dashboard;
