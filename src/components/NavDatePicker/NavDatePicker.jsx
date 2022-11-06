/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { boundaryDate, selectedPeriod } from "atoms/selectedPeriod";
import { useState, useRef, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState, useRecoilValue } from "recoil";

const NavDatePicker = () => {
  const { minDate, maxDate } = useRecoilValue(boundaryDate);
  const [period, setPeriod] = useRecoilState(selectedPeriod);
  const [selected, setSelected] = useState([]);
  // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  let { startDate, endDate } = period;

  const handleChange = (dates) => {
    const [start, end] = dates;
    setPeriod({
      startDate: start,
      endDate: end,
    });
  };

  // const pushDate = (date) => {
  //   if (selected.length === 0) {
  //     setSelected([date]);
  //     setPeriod({
  //       ...period,
  //       endDate: selected[0],
  //     });
  //   } else {
  //     setPeriod({
  //       startDate: selected[0],
  //       endDate: selected[1],
  //     });
  //     setSelected([]);
  //   }
  // };
  return (
    <>
      <StyledDatePicker
        selectsRange={true}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
        startDate={period.startDate}
        endDate={period.endDate}
        dateFormat="yyyy년 MM월 dd일"
      />
    </>
  );
};

const StyledDatePicker = styled(DatePicker)`
  background-color: red;
  width: 100%;
  border: none;
  outline: none;
  background: url("/assests/images/arrow_select.png") no-repeat right 0px center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #3a474e;
`;

export default NavDatePicker;
