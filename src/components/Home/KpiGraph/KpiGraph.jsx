import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { graphDateRangeState, graphXAxisState, menuItemsWithOutFirstState } from "store/graphNav";
import { GRAPH_RANGE_DAY_MENU_ITEM, GRAPH_X_AXIS_MENU_ITEMS } from "constants/GraphNavMenuItem";
import GraphChart from "./GraphChart";

import DropDown from "components/dropDown";
import { centerize } from "shared/GlobalStyle";
function KpiGraph() {
  const [graphXAxis, setGraphXAxis] = useRecoilState(graphXAxisState);
  const menuItemsWithOutFirst = useRecoilValue(menuItemsWithOutFirstState);
  const [graphDateRange, setGraphDateRange] = useRecoilState(graphDateRangeState);

  return (
    <GraphWrapper>
      <NavWrapper>
        <XAxisIndexWrapper>
          <DropDown
            saveRecoilNavOption={(option) => setGraphXAxis({ ...graphXAxis, firstOption: option })}
            initValue={graphXAxis["firstOption"]}
            prefixIcon="🔵"
            menuItems={GRAPH_X_AXIS_MENU_ITEMS}
          />
          <DropDown
            saveRecoilNavOption={(option) => setGraphXAxis({ ...graphXAxis, secondOption: option })}
            initValue={graphXAxis["secondOption"]}
            prefixIcon="🟢"
            menuItems={menuItemsWithOutFirst}
          />
        </XAxisIndexWrapper>
        <DropDown
          saveRecoilNavOption={setGraphDateRange}
          initValue={graphDateRange}
          standard
          menuItems={GRAPH_RANGE_DAY_MENU_ITEM}
        />
      </NavWrapper>
      <GraphChart />
    </GraphWrapper>
  );
}

const GraphWrapper = styled.section`
  height: 70%;
`;

const NavWrapper = styled.nav`
  ${centerize};
  width: 97%;
  justify-content: space-between;
`;

const XAxisIndexWrapper = styled.div`
  ${centerize}
`;

export default KpiGraph;
