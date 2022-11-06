import { useRecoilState } from "recoil";
import { endDate } from "store/atoms/date";

export const useEndDate = () => {
  const [initialEndDate, setInitialEndDate] = useRecoilState(endDate);

  return { initialEndDate, setInitialEndDate };
};
