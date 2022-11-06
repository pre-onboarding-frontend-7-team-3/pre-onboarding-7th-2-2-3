import { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";

import { useStartDate } from "hooks/AdManagement/useStartDate";
import { useEndDate } from "hooks/AdManagement/useEndDate";

import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ko from "date-fns/esm/locale/ko/index.js";

const DateRangeModal = ({ handleToggleDateRangePicker }) => {
  const { initialStartDate, setInitialStartDate } = useStartDate();
  const { initialEndDate, setInitialEndDate } = useEndDate();

  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: initialStartDate,
      endDate: initialEndDate,
      key: "selection",
    },
  ]);

  const handleDateChange = (date) => {
    if (!date) {
      return;
    }
    setSelectedDateRange([date.selection]);
  };

  const handleSetDateRange = () => {
    const { startDate, endDate } = selectedDateRange[0];

    setInitialStartDate(startDate);
    setInitialEndDate(endDate);

    handleToggleDateRangePicker();
  };

  return (
    <ModalWrapper sx={{}}>
      <DateRangePicker
        onChange={handleDateChange}
        minDate={new Date("2022, 02, 01")}
        maxDate={new Date("2022, 04, 20")}
        showSelectionPreview={true}
        showDateDisplay={false}
        howDateDisplay={false}
        moveRangeOnFirstSelection={false}
        monthDisplayFormat="YYY년 MM월"
        inputRanges={[]}
        months={2}
        ranges={selectedDateRange}
        locale={ko}
        direction="horizontal"
      />
      <ButtonWrapper>
        <Button variant="contained" size="medium" onClick={handleToggleDateRangePicker}>
          닫기
        </Button>
        <Button variant="contained" size="medium" onClick={handleSetDateRange}>
          검색
        </Button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default DateRangeModal;

const ModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: absolute;
  width: 660px;
  margin: 460px 40px 0 0;
  right: 0;
  border-radius: 5px;
  box-shadow: 2px 0px 10px -1px rgb(229, 229, 229);
  z-index: 99;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 30px 20px 0;
`;
