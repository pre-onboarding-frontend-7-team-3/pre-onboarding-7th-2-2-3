import PageHeader from "components/common/PageHeader";
import CompareGraph from "components/Home/CompareGraph/CompareGraph";
import ComparePerformance from "components/Home/ComparePerformance/ComparePerformance";
import React from "react";

const Home = () => {
  return (
    <>
    <PageHeader />
        <ComparePerformance />
      <CompareGraph />
    </>
  );
};

export default Home;
