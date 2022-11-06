import React from "react";
import PageHeader from "components/common/PageHeader";
import KpiGraph from "components/Home/KpiGraph/KpiGraph";
import KpiRateLists from "components/Home/KpiRateLists";
import SEO from "components/common/SEO";
import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

const Home = () => {
  return (
    <>
      <PageHeader title={PAGE_HEADER_TITLE.DASHBOARD} />
      <KpiRateLists />
      <KpiGraph />
      {/* <SEO title={PAGE_HEADER_TITLE.DASHBOARD} /> */}
    </>
  );
};

export default Home;
