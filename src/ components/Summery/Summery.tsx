import React from "react";
import Summerybox from "./Summerybox";

import SummeryBread from "./SummeryBread";
import Summeryheader from "./Summeryheader";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Typography } from "@mui/material";
import Summerybox2 from "./Summerybox2";
import FloatingBtn from "./FloatingBtn";
import Progress from "./Progress";

function Summery() {
  return (
    <>
      <SummeryBread />
      <Summeryheader
        imgsrc="./img/up+1.png"
        title="Level Up"
        subtitle="Complete these badges to level up"
      />
      <Progress />
      <div className="container">
        {" "}
        <Typography
          color={"#252F40"}
          fontWeight={"600"}
          fontSize={"20px"}
          mb={2}
        >
          {" "}
          <BarChartIcon sx={{ color: "#252F40" }} /> Level Up Requirements{" "}
        </Typography>
      </div>
      <Summerybox />
      <Summerybox2 />
      <Summerybox />
      <Summerybox />
      <FloatingBtn />
    </>
  );
}

export default Summery;
