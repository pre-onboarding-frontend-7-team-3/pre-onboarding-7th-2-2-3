import { useRecoilState } from "recoil";

import { startDateAtom } from "store/atoms/date";

export const useStartDate = () => {
  const [initialStartDate, setInitialStartDate] = useRecoilState(startDateAtom);

  return { initialStartDate, setInitialStartDate };
};
