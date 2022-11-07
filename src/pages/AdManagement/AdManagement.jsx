import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

import PageHeader from "components/common/PageHeader";
import CardList from "components/card/CardList";

const AdManagement = () => {
  return (
    <>
      <PageHeader title={PAGE_HEADER_TITLE.AD_MANAGEMENT} />
      <CardList />
    </>
  );
};

export default AdManagement;
