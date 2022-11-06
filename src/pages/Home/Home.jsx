import React from "react";
import PageHeader from "components/common/PageHeader";
import KpiGraph from "components/Home/KpiGraph/KpiGraph";
import KpiRateLists from "components/Home/KpiRateLists";
import SEO from "components/common/SEO";
import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

const Home = () => {
  return (
    <>
      <SEO title={PAGE_HEADER_TITLE.DASHBOARD} />
      <PageHeader title={PAGE_HEADER_TITLE.DASHBOARD} />
      <KpiRateLists />
      <KpiGraph />
    </>
  );
};

export default Home;
