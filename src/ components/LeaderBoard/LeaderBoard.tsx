import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function LeaderBoard(): JSX.Element {
    return (
        <>
            <Box
                className="container"
                sx={{
                    py: 3,
                    backgroundImage: "url(../img/inter.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            ></Box>
        </>
    );
}

export default LeaderBoard;
