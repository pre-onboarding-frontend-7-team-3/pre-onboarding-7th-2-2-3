import styled from "styled-components";
import { centerize } from "shared/GlobalStyle";
import DropDown from "components/dropDown";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  graphDateRangeState,
  graphXAxisState,
  menuItemsWithOutFirstState,
} from "store/atoms/graphNav";
import { GRAPH_RANGE_DAY_MENU_ITEM, GRAPH_X_AXIS_MENU_ITEMS } from "constants/GraphNavMenuItem";

function CompareGraph() {
  const [graphXAxis, setGraphXAxis] = useRecoilState(graphXAxisState);
  const menuItemsWithOutFirst = useRecoilValue(menuItemsWithOutFirstState);
  const [graphDateRange, setGraphDateRange] = useRecoilState(graphDateRangeState);

  return (
    <>
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
    </>
  );
}

const NavWrapper = styled.section`
  ${centerize}
  justify-content: space-between;
`;

const XAxisIndexWrapper = styled.div`
  ${centerize}
`;

export default CompareGraph;
