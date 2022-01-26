import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import MiniBox from "./MiniBox";
function Dashboard() {
    return (
        <>
            <section className="Dashboard">
                <div className="container">
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
                            background:
                                "linear-gradient(135deg, #3A416F 0%, #141727 100%)",
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-6">
                                <MiniBox />
                            </div>
                        </div>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
