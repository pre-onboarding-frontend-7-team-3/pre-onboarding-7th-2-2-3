import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { adListFilterQuery } from "store/adList";

import Card from "./Card";
import AdManagementHeader from "components/AdManagement/AdManagementHeader";

import { Grid } from "@mui/material";

const CardList = () => {
  const adList = useRecoilValue(adListFilterQuery);
  return (
    <CardListContainer>
      <AdManagementHeader />
      <GridWrapper>
        <Grid container spacing={3} gap="px">
          {adList?.map((ad) => (
            <Card key={ad.id} cardData={ad} />
          ))}
        </Grid>
      </GridWrapper>
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  height: 100%;
`;

const GridWrapper = styled.div`
  display: flex;
  padding-left: 10px;
`;
