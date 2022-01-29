import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Fab } from "@mui/material";

function FloatingBtn() {
    return (
        <>
            {" "}
            <Box
                sx={{
                    transform: "translateZ(0px)",
                    flexGrow: 1,
                    position: "fixed",
                    bottom: "50px",
                    right: "40px",
                    zIndex: "5000",
                }}
            >
                <Fab>
                    <img src="../img/PopBtn.png" width={"100%"} />
                </Fab>
            </Box>
        </>
    );
}

export default FloatingBtn;
