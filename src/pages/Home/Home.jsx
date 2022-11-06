import PageHeader from "components/common/PageHeader";
import KpiGraph from "components/Home/KpiGraph/KpiGraph";
import KpiRateLists from "components/Home/KpiRateLists";
import React from "react";

const Home = () => {
  return (
    <>
      <PageHeader />
      <KpiRateLists />
      <KpiGraph />
    </>
  );
};

export default Home;
