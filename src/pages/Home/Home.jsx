import CompareGraph from "components/Home/CompareGraph/CompareGraph";
import ComparePerformance from "components/Home/ComparePerformance/ComparePerformance";
import HeaderNav from "components/Home/HeaderNav/HeaderNav";
import React from "react";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <ComparePerformance />
      <CompareGraph />
    </>
  );
};

export default Home;
