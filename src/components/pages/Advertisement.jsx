import AdCard from "components/AdCard";
import { getAdvertisState } from "components/atoms/advertis";
import React from "react";
import { useEffect, useState } from "react";

import { useRecoilValue } from "recoil";

const Advertisement = () => {
  const getAd = useRecoilValue(getAdvertisState);
  const [list, setList] = useState() || {};
  useEffect(() => {
    const getData = async () => {
      const res = await getAd();
      setList(res);
    };
    getData();
  }, []);
  /* eslint-disable no-console */
  console.log(list);
  /* eslint-disable no-console */

  return (
    <>
      {/* <div onClick={handlerGetData}>전체광고</div> */}
      {list.ads?.map((res, idx) => {
        console.log("res", res);
        <AdCard key={idx} res={list} />;
      })}
      <AdCard />
    </>
  );
};

export default Advertisement;
