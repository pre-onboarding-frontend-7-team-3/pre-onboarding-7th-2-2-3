import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

import PageHeader from "components/common/PageHeader";
import CardList from "components/card/CardList";
import SEO from "components/common/SEO";

const AdManagement = () => {
  // eslint-disable-next-line no-console
  console.log("admangement page rendering!");
  return (
    <>
      <PageHeader title={PAGE_HEADER_TITLE.AD_MANAGEMENT} />
      <CardList />
    </>
  );
};

export default AdManagement;
