import { useState } from "react";
import { Box } from "@mui/material";
import DateRangeModal from "components/AdManagement/DateRangeModal";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useRecoilValue } from "recoil";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { startDate, endDate } from "store/atoms/date";
import { handleFormatDate } from "utils/handleFormatDate";

const PageHeader = ({ title }) => {
  const [isDateRangePickerOpen, setIsDateRangePickerOpen] = useState(true);
  const initialStartDate = useRecoilValue(startDate);
  const initialEndDate = useRecoilValue(endDate);

  const DateRange = handleFormatDate(initialStartDate, initialEndDate);

  const handleToggleDateRangePicker = () => {
    setIsDateRangePickerOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "80px",
        margin: "0 40px",
        borderBottom: "1px solid #EDEFF1",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "26px",
        color: "#3A474E",
      }}
    >
      <Box>{title}</Box>
      <Box sx={{ position: "relative" }} onClick={handleToggleDateRangePicker}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {DateRange}
          <KeyboardArrowDownSharpIcon fontSize="large" />
        </Box>
      </Box>
      {isDateRangePickerOpen && <DateRangeModal />}
    </Box>
  );
};

export default PageHeader;
