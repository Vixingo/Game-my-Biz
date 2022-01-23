import React from "react";
import Summerybox from "./Summerybox";

import SummeryBread from "./SummeryBread";
import Summeryheader from "./Summeryheader";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Typography } from "@mui/material";
import Summerybox2 from "./Summerybox2";
import FloatingBtn from "./FloatingBtn";

function Summery() {
    return (
        <>
            <SummeryBread />
            <Summeryheader />
            <div className="container">
                {" "}
                <Typography
                    color={"#252F40"}
                    fontWeight={"600"}
                    fontSize={"20px"}
                    mb={2}
                >
                    {" "}
                    <BarChartIcon sx={{ color: "#252F40" }} /> Level Up
                    Requirements{" "}
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
