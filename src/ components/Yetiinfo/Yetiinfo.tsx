import { Box } from "@mui/material";
import React from "react";
import Yetibox from "../Yetibox/Yetibox";
function Yetiinfo() {
    return (
        <>
            <div
                className="container"
                style={{
                    margin: "100px auto",
                }}
            >
                <div className="row">
                    <div className="col-lg-6">
                        <Box width={"100%"}>
                            <img
                                src="../img/Yetigame.png"
                                alt=""
                                width="100%"
                            />
                        </Box>
                    </div>
                    <div className="col-lg-6">
                        <Yetibox />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Yetiinfo;
