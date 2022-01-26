import React from "react";
import { Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import LSBtable from "./LSBtable";
import Level_1 from "../../pages/Level_1";
import SummeryBread from "../Summery/SummeryBread";
import Dashboard from "./Dashboard";

function LeaderSummaryBoard() {
    return (
        <>
            {" "}
            <SummeryBread />
            <Dashboard />
            {/* <LSBtable /> */}
        </>
    );
}

export default LeaderSummaryBoard;
