import React from "react";
import PageHeader from "components/common/PageHeader";
import CompareGraph from "components/Home/CompareGraph/CompareGraph";
import ComparePerformance from "components/Home/ComparePerformance/ComparePerformance";
import SEO from "components/common/SEO";
import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

const Home = () => {
  return (
    <>
    <SEO title={PAGE_HEADER_TITLE.DASHBOARD}/>
    <PageHeader title={PAGE_HEADER_TITLE.DASHBOARD}/>
        <ComparePerformance />
      <CompareGraph />
    </>
  );
};

export default Home;
