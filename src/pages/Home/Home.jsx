import CompareGraph from "components/Home/CompareGraph/CompareGraph";
import ComparePerformance from "components/Home/ComparePerformance/ComparePerformance";
// import HeaderNav from "components/Home/HeaderNav/HeaderNav";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <>
      {/* <HeaderNav /> */}
      <Suspense fallback={<div>로딩중...</div>}>
        <ComparePerformance />
      </Suspense>
      <CompareGraph />
    </>
  );
};

export default Home;
