import styled from "styled-components";
import { kpiNumberToKoreanWithUnit, kpiToKorean } from "utils/graphUnitConverter";
import { dateConverterToKorean } from "utils/handleFormatDate";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    // kpi
    return (
      <>
        <ToolTipWrapper className="custom-tooltip">
          <Label>{`${dateConverterToKorean(label, "YYYY년 MM월 DD일")}`}</Label>
          {payload.map((loadData, idx) => (
            <InfoBox key={idx} color={idx === 0 ? "#2189dc" : "#34cd2b"}>{`${
              kpiToKorean[loadData.name]
            } : ${kpiNumberToKoreanWithUnit(parseInt(loadData.value), loadData.name)}`}</InfoBox>
          ))}
        </ToolTipWrapper>
      </>
    );
  }
  return null;
}

const ToolTipWrapper = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #efefef;
  border-radius: 5px;
  color: #f8f4f4;
  gap: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  color: #474747;
`;

const InfoBox = styled.div`
  font-family: Roboto;
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 5px;
`;

export default CustomTooltip;
