import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const HeaderNav = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  return (
    <div>
      <h1>대시보드</h1>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
      />
    </div>
  );
};

export default HeaderNav;
