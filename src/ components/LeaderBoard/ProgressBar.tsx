import { Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React from "react";

function ProgressBar(props: {
    position: number;
    points: number;
    userName: string;
    progress: string;
    imgsrc: string;
}) {
    return (
        <>
            <section className="ProgressBar mb-5 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-1">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h5" fontWeight={"600"}>
                                    {props.position}
                                </Typography>
                                <ArrowDropDownIcon
                                    sx={{ color: "#C4C4C4", fontSize: "50px" }}
                                />
                            </Box>
                        </div>
                        <div className="col-lg-11">
                            <Box position={"relative"}>
                                <div
                                    className="progress"
                                    style={{
                                        height: "90px",
                                        borderRadius: "144px",
                                    }}
                                >
                                    <Box
                                        className="progress-bar "
                                        sx={{ width: props.progress }}
                                    ></Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            marginTop: "auto",
                                            marginBottom: "auto",
                                            marginLeft: "20px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {props.points} points
                                    </Typography>
                                </div>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        position: "absolute",
                                        left: "-2px",
                                        top: "0",
                                    }}
                                >
                                    <img
                                        src={props.imgsrc}
                                        alt=""
                                        style={{
                                            height: "90px",
                                            width: "90px",
                                            marginRight: "50px",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#fff" }}
                                    >
                                        {props.userName}
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProgressBar;
