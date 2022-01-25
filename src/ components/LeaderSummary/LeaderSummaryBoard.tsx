import React from "react";
import { Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import LSBtable from "./LSBtable";
import Level_1 from "../../pages/Level_1";

function LeaderSummaryBoard() {
    return (
        <>
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
            <LSBtable />
        </>
    );
}

export default LeaderSummaryBoard;
