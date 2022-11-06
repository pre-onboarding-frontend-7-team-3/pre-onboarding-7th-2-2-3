import { useRecoilState } from "recoil";
import { endDateAtom } from "store/date";

export const useEndDate = () => {
  const [initialEndDate, setInitialEndDate] = useRecoilState(endDateAtom);

  return { initialEndDate, setInitialEndDate };
};
