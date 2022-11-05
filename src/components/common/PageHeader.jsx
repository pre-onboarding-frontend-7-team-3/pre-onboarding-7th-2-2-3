import { useState } from "react";
import { Box } from "@mui/material";
import DateRangeModal from "components/AdManagement/DateRangeModal";

const PageHeader = ({ title }) => {
  const [isDateRangePickerOpen, setIsDateRangePickerOpen] = useState(true);

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
        date
      </Box>
      {isDateRangePickerOpen && <DateRangeModal />}
    </Box>
  );
};

export default PageHeader;
