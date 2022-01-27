import { Box } from "@mui/material";
import React from "react";
import MiniBox from "./MiniBox";

function Miniboxholder() {
    return (
        <>
            <section className="Miniboxholder">
                <Box sx={{ display: "flex", flexWrap: "wrap", flexFlow: "3" }}>
                    <MiniBox />
                    <MiniBox />
                    <MiniBox />
                    <MiniBox />
                    <MiniBox />
                </Box>
            </section>
        </>
    );
}

export default Miniboxholder;
