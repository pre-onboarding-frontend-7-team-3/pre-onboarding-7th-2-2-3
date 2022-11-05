import { useRecoilValue } from "recoil";
import { getAdvertismentState } from "atoms/advertisment";

function DashBoard() {
  const getAdvertisment = useRecoilValue(getAdvertismentState);
  const handleGetAdvertisment = async () => {
    const result = await getAdvertisment("/trend_data/1");
    console.log(result);
  };
  return <div onClick={handleGetAdvertisment}>dashboard</div>;
}

export default DashBoard;
