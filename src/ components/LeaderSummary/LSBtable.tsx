import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import React from "react";
import LeaderTable from "./LeaderTable";

function LSBtable() {
    return (
        <>
            <div className="container mb-5  ">
                {" "}
                <Typography
                    color={"#252F40"}
                    fontWeight={"600"}
                    fontSize={"20px"}
                    mb={2}
                >
                    {" "}
                    <BarChartIcon sx={{ color: "#252F40" }} /> LEADERBOARD
                    SUMMARY
                </Typography>
                <div className="row">
                    <div className="col-lg-9">
                        <LeaderTable />
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
                    </div>
                    <div className="col-lg-3">
                        <Box
                            sx={{
                                background: "url(../img/LBG.png)",
                                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                backdropFilter: "blur(25px)",
                                borderRadius: " 12px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                padding: "25px",
                                backgroundSize: "100% 100%",
                                color: "#fff",
                            }}
                        >
                            {" "}
                            <Typography>
                                This section reports the summary of your
                                position ('rankings') in comparison with your
                                team mates for the last 30 days (default mode).
                                Click the link below to view the full report
                                consisting of the overall performance score and
                                scorecard history within your team or company.
                                <br />
                                <br />
                                You obviously want to appear as high up the
                                rankings as possible, so keep doing your best.
                                The aim is for you to beat the Yeti, earn more
                                badges and appear in positions 1, 2 & 3 as many
                                times as possible. If you have lots of negative
                                scores against the YETI that means you have a
                                lot of work to do. Don't let the Yeti beat you!{" "}
                            </Typography>
                            <Button
                                sx={{
                                    background: "rgba(255, 255, 255, 0.5)",
                                    width: "100%",
                                    boxShadow:
                                        "0px 20px 27px rgba(0, 0, 0, 0.102)",
                                    borderRadius: "12px",
                                    fontWeight: "bold",
                                    color: "#FFF",
                                    border: "2px solid #fff",
                                    padding: "10px",
                                    mt: "20px",
                                }}
                            >
                                View Full Report
                            </Button>
                        </Box>
                    </div>
                </div>{" "}
            </div>
        </>
    );
}

export default LSBtable;
