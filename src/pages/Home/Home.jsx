import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { startDateAtom, endDateAtom } from "store/date";
import { handleFormatDate } from "utils/handleFormatDate";
import DateRangeModal from "components/AdManagement/DateRangeModal";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

function Home() {
  const [isShowDateRangePicker, setIsShowDateRangePicker] = useState(false);
  const initialStartDate = useRecoilValue(startDateAtom);
  const initialEndDate = useRecoilValue(endDateAtom);

  const DateRange = handleFormatDate(initialStartDate, initialEndDate);

  const handleToggleDateRangePicker = () => {
    setIsShowDateRangePicker((prev) => !prev);
  };

  return (
    // TODO S.PageHeaderWrapper
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        margin: "0 40px",
        // borderBottom: "1px solid #EDEFF1",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "26px",
        color: "#3A474E",
      }}
    >
      {/* TODO S.title */}
      <Box sx={{ fontWeight: "900", fontSize: "26px" }}>title</Box>
      {/* TODO S.DateRangeModalWrapper */}
      <Box onClick={handleToggleDateRangePicker}>
        {/* TODO S.DateRangeModal */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            minWidth: "260px",
            fontWeight: "500",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {DateRange}
          <KeyboardArrowDownSharpIcon fontSize="large" />
        </Box>
      </Box>
      {isShowDateRangePicker && (
        <DateRangeModal handleToggleDateRangePicker={handleToggleDateRangePicker} />
      )}
    </Box>
  );
}

export default Home;
