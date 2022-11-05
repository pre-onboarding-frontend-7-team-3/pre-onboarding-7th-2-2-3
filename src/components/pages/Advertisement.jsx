import { getAdvertisState } from "components/atoms/advertis";
import React from "react";
// import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Advertisement = () => {
  const getAd = useRecoilValue(getAdvertisState);
  const handlerGetData = async () => {
    const res = await getAd();
    /* eslint-disable no-console */
    console.log(res.ads);
    /* eslint-disable no-console */
  };

  return (
    <>
      <div onClick={handlerGetData}>전체광고</div>
    </>
  );
};

export default Advertisement;
