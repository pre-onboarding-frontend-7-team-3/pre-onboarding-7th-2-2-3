import { useRecoilState } from "recoil";
import { endDateAtom } from "store/atoms/date";

export const useEndDate = () => {
  const [initialEndDate, setInitialEndDate] = useRecoilState(endDateAtom);

  return { initialEndDate, setInitialEndDate };
};
