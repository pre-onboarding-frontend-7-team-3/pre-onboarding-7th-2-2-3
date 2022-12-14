import { atom, selector } from "recoil";

import { GRAPH_X_AXIS_MENU_ITEMS } from "constants/GraphNavMenuItem";

export const graphXAxisState = atom({
  key: "graphXAsisState",
  default: { firstOption: "roas", secondOption: null },
});

export const menuItemsWithOutFirstState = selector({
  key: "graphNavState",
  get: ({ get }) => {
    const firstNavVal = get(graphXAxisState).firstOption;
    const menuItemsWithOutFirst = GRAPH_X_AXIS_MENU_ITEMS.filter(
      (menuItem) => menuItem.value !== firstNavVal,
    );

    return menuItemsWithOutFirst;
  },
});

export const graphDateRangeState = atom({
  key: "graphDateRangeState",
  default: "week",
});
