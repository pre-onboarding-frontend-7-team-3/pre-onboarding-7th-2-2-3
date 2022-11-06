import styled from "styled-components";
import { Grid } from "@mui/material";
import Card from "./Card";
import { adListFilterQuery } from "store/atoms/cards";
import AdManagementHeader from "components/AdManagement/AdManagementHeader";
import { useRecoilValue } from "recoil";

const CardList = () => {
  const adList = useRecoilValue(adListFilterQuery);
  return (
    <CardListContainer>
      <AdManagementHeader />
      <div style={{ height: "40px" }} />
      <div style={{ width: "1020px", top: "0", left: "0" }}>
        <Grid container spacing={3} gap="px">
          {adList?.map((ad) => (
            <Card key={ad.id} cardData={ad} />
          ))}
        </Grid>
      </div>
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  height: 100%;
`;