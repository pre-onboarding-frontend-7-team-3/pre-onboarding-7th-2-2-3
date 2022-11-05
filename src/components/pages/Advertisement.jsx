import { getData } from "api/request";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Advertisement = () => {
  const baseURL = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/05a1a9db-897f-4e9d-87bd-1e81a03d8e04/wanted_FE_ad-list-data-set.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221105T133227Z&X-Amz-Expires=86400&X-Amz-Signature=9e4b8b52f77254b264a50adbee71fac6ee0404ef1dd0d16224a826eed41c0e90&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22wanted_FE_ad-list-data-set.json%22&x-id=GetObject`;
  const [advs, setAdvs] = useState(null);
  useEffect(() => {
    getData(baseURL).then((data) => setAdvs(data));
  }, []);

  return (
    <div>
      {advs.map((advs) => (
        <li key={advs}>{advs}</li>
      ))}
    </div>
  );
};

export default Advertisement;
