import { useRecoilState } from "recoil";
import { startDate } from "store/atoms/date";

export const useStartDate = () => {
  const [initialStartDate, setInitialStartDate] = useRecoilState(startDate);

  return { initialStartDate, setInitialStartDate };
};
