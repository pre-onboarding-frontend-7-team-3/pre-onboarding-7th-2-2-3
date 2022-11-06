import PageHeader from "components/common/PageHeader";
import CardList from "components/card/CardList";
import SEO from "components/common/SEO";
import { PAGE_HEADER_TITLE } from "constants/PageheaderData";

const AdManagement = () => {
  return ( 
    <>
    <SEO title={PAGE_HEADER_TITLE.AD_MANAGEMENT}/>
    <PageHeader title={PAGE_HEADER_TITLE.AD_MANAGEMENT} />
    <CardList />
    </>
   );
}
 
export default AdManagement;