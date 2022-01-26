import { Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import React from "react";

function LSBtable() {
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
                <h1>Hwell</h1>
            </div>
        </>
    );
}

export default LSBtable;
