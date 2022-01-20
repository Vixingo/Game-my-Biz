import React from "react";
import Levelprofile from "./Levelprofile";
import Leveltask from "./Leveltask";
import Mainlevel from "./Mainlevel";
import Levelawerds from "./Levelawerds";
import { Typography } from "@mui/material";

function Levels() {
    return (
        <>
            <div className="container my-5">
                <Typography
                    variant="h3"
                    fontWeight={"bold"}
                    ml={2}
                    mb={3}
                    mt={2}
                    color={"#000"}
                >
                    {" "}
                    Level 1
                </Typography>
                <div className="row">
                    <div className="col-md-3">
                        <Levelprofile />
                    </div>
                    <div className="col-md-5">
                        <Mainlevel />
                    </div>
                    <div className="col-md-4">
                        <Levelawerds />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Levels;
