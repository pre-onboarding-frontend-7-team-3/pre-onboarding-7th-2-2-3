import { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { startDateAtom, endDateAtom } from "store/atoms/date";

import { handleFormatDate } from "utils/handleFormatDate";

import DateRangeModal from "components/AdManagement/DateRangeModal";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const PageHeader = ({ title }) => {
  const [isShowDateRangePicker, setIsShowDateRangePicker] = useState(false);
  const initialStartDate = useRecoilValue(startDateAtom);
  const initialEndDate = useRecoilValue(endDateAtom);

  const DateRange = handleFormatDate(initialStartDate, initialEndDate);

  const handleToggleDateRangePicker = () => {
    setIsShowDateRangePicker((prev) => !prev);
  };

  return (
    <PageHeaderWrapper>
      <PageTitle>{title}</PageTitle>
      <DateRangeContainer onClick={handleToggleDateRangePicker}>
        <FlexBox>
          {DateRange}
          <KeyboardArrowDownSharpIcon fontSize="large" />
        </FlexBox>
      </DateRangeContainer>
      {isShowDateRangePicker && (
        <DateRangeModal handleToggleDateRangePicker={handleToggleDateRangePicker} />
      )}
    </PageHeaderWrapper>
  );
};

export default PageHeader;

const PageHeaderWrapper = styled.div`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  min-height: 80px;
  margin: 0 40px 0 10px;
  border-bottom: 1px solid #edeff1;
  font-weight: 900;
  font-size: 26px;
  color: #3a474e;
`;

const PageTitle = styled.div`
  font-weight: 900;
  font-size: 26px;
`;

const DateRangeContainer = styled.div``;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 260px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
