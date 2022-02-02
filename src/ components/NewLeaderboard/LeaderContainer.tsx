import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import React from "react";
import Smalltable from "./Smalltable";
import STR from "./STR";
import MySTR from "./MySTR";

function LeaderContainer() {
    return (
        <>
            <div
                className="container mb-5 pb-4 pe-4 "
                style={{
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "16px",
                }}
            >
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
                    <Typography
                        variant={"h6"}
                        fontWeight={600}
                        color={"#8392AB"}
                        alignItems={"center"}
                    >
                        RANKINGS BY LOCATION
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
                {/* <Box>
                    <Stack sx={{ alignItems: "end" }}>
                        <Pagination
                            count={3}
                            variant="outlined"
                            color="primary"
                            sx={{
                                mt: 2,
                            }}
                        />
                    </Stack>
                </Box> */}
                <div className="row mt-3 p-2">
                    <div className="col-md-3 p-2">
                        <Smalltable />
                    </div>
                    <div className="col-md-3 p-2">
                        <MySTR />
                    </div>
                    <div className="col-md-3 p-2">
                        <MySTR />
                    </div>
                    <div className="col-md-3 p-2">
                        <MySTR />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeaderContainer;
