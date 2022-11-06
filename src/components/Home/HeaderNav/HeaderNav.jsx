import React, { useState } from "react";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

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
        // editableDateInputs={true}
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
