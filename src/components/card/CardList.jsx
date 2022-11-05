import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import axios from "axios";

const CardList = () => {
  const [adDatas, setAdDatas] = useState([]);

  useEffect(() => {
    axios.get("/mock/adListData.json").then((res) => setAdDatas(res.data.ads));
  }, []);

  return (
    <div style={{ width: "1020px", top: "0", left: "0" }}>
      <Grid container spacing={3} gap="px">
        {adDatas.map((adData) => {
          return <Card key={adData.id} adData={adData} />;
        })}
      </Grid>
    </div>
  );
};

export default CardList;
