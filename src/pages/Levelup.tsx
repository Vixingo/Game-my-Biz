import { Divider } from "@mui/material";
import React from "react";
import Claimbar from "../ components/Claim/Claimbar";
import Levelbox from "../ components/Level/Levelbox";
import LevelBoxholder from "../ components/Level/LevelBoxholder";
import Levelheader from "../ components/Level/Levelheader";
import Levelprofile from "../ components/Level/Levelprofile";
import Levels from "../ components/Level/Levels";

function Levelup() {
    return (
        <>
            <Levelheader />
            <Claimbar />
            <LevelBoxholder />
            <div className="container my-5">
                <Divider />
            </div>
            <Levels />
            <Levels />
            <Levels />
            <Levels />
        </>
    );
}

export default Levelup;
