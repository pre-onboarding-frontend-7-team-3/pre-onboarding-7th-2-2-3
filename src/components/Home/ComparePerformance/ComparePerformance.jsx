import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import {  trendDataQuery } from "store/data";
import { getKPI } from "utils/getKPI";
import { Click, Conv, Cost, Imp, Revenue, ROAS } from "./InfoBoxes";
import { endDateAtom, startDateAtom } from "store/date";

// 
export default function ComparePerformance() {
  const startDate = useRecoilValue(startDateAtom)
  const endDate = useRecoilValue(endDateAtom)

  const data = useRecoilValueLoadable(trendDataQuery);
  if (data.state === "loading") {
    return <>loading</>;
  }
  
  const kpiValues = getKPI(data.contents, startDate, endDate);

  return (
    <Container>
      <ROAS value={kpiValues[0].roas} exValue={kpiValues[1].roas} />
      <Cost value={kpiValues[0].cost} exValue={kpiValues[1].cost} />
      <Imp value={kpiValues[0].imp} exValue={kpiValues[1].imp} />
      <Click value={kpiValues[0].click} exValue={kpiValues[1].click} />
      <Conv value={kpiValues[0].conv} exValue={kpiValues[1].conv} />
      <Revenue value={kpiValues[0].revenue} exValue={kpiValues[0].revenue} />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 20px;
`;
