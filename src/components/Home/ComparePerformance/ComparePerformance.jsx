import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import styled from "@emotion/styled";


export default function ComparePerformance() {

  // 선택한 날짜에서, 정해야 함.
  return (
    <Container>
      ROAS

      <AiOutlineCaretDown />
      
    </Container>
  );
}


const Container =styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2,1fr);
  row-gap: 10px;
  column-gap:20px;
`
