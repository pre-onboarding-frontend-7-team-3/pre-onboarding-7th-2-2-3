import React, { useState } from "react";

import { dateConvert } from "utils/dateConvert";
import { vaildateCost } from "utils/vaildateCost";

import Paper from "@mui/material/Paper";
import { Box, Grid, InputBase, Table, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Card = ({ cardData }) => {
  const [toggle, settoggle] = useState(false);
  const statusModify = toggle ? "수정 완료" : "수정 하기";

  const ModifyProps = !toggle
    ? {
        onClick: () => {
          settoggle(true);
        },
      }
    : {
        onClick: (e) => {
          alert("수정이 완료되었습니다");
          settoggle(false);
        },
      };

  const inputProps = !toggle ? { readOnly: true } : {};

  function createData(name, description) {
    if (description === "active") {
      description = "진행중";
    } else if (description === "ended") {
      description = "중단됨" + " (" + dateConvert(cardData.endDate) + ")";
    }
    return { name, description };
  }

  const rows = [
    createData("상태", cardData.status),
    createData("광고 생성일", dateConvert(cardData.startDate)),
    createData("일 희망 예산", vaildateCost(cardData.budget)),
    createData("광고 수익률", cardData.report.roas + "%"),
    createData("매출", vaildateCost(cardData.report.convValue)),
    createData("광고 비용", vaildateCost(cardData.report.cost)),
  ];

  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{
          width: 305,
          borderRadius: "10px",
          border: "1 solid #D1D8DC",
        }}
      >
        <Box
          sx={{
            width: "305px",
            margin: "40px 20px 21px 10px",
          }}
        >
          <Box
            sx={{
              height: "40px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#3A474E",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            {cardData.title}
          </Typography>
          <Table sx={{ width: "280px" }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 500, fontSize: "12px", color: "#94A2AD" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <InputBase
                      style={{
                        height: "10px",
                        fontWeight: "700",
                        fontSize: "12px",
                        color: "#3A474E",
                      }}
                      {...inputProps}
                      defaultValue={row.description}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            {...ModifyProps}
            variant="outlined"
            sx={{
              width: "92px",
              height: "40px",
              color: "#3A474E",
              fontWeight: "700",
              fontSize: "14px",
              margin: "20px 0 20px 20px",
              border: "1 solid black",
            }}
          >
            {statusModify}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
