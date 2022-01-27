import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import MiniBox from "./MiniBox";
import Point from "./Point";
import Miniboxholder from "./Miniboxholder";
import MainProfile from "./MainProfile";
function Dashboard() {
    return (
        <>
            <section className="Dashboard mb-5">
                <div className="container ">
                    {" "}
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "end",
                            mt: 5,
                        }}
                    >
                        {" "}
                        <Typography variant={"h3"} fontWeight={600}>
                            Hello Adam Tibbs!
                            <Typography
                                variant={"h6"}
                                fontWeight={500}
                                alignItems={"center"}
                            >
                                <DirectionsRunIcon /> PERFORMANCE SUMMARY
                            </Typography>
                        </Typography>
                        <Typography>
                            <span
                                style={{
                                    color: "#8392AB",
                                    fontStyle: "italic",
                                }}
                            >
                                Generated:
                            </span>{" "}
                            4th May 2022 at 3:12 PM
                        </Typography>
                    </Stack>
                    <Box
                        sx={{
                            position: "relative",
                            background:
                                "linear-gradient(135deg, #3A416F 0%, #141727 100%)",
                            padding: "30px",
                            borderRadius: "20px",
                            boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(25px)",
                        }}
                    >
                        <div className="row ">
                            <div className="col-lg-6">
                                <Miniboxholder />
                                <MainProfile />
                            </div>
                            <div className="col-lg-6 ">
                                <Box>
                                    <img
                                        src="../img/hill.png"
                                        alt=""
                                        style={{
                                            position: "absolute",
                                            right: "0px",
                                            bottom: "0px",
                                            width: "950px",
                                            height: "100%",
                                        }}
                                    />
                                </Box>
                            </div>
                            {/* <Point /> */}
                        </div>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
