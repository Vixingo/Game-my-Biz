import { Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React from "react";

function Leaders() {
    return (
        <>
            <section className="Leaders" style={{ marginBottom: "100px" }}>
                <div className="container">
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                            color: "#FFF",
                            my: "40px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h4">2</Typography>
                            <ArrowDropDownIcon
                                fontSize="large"
                                sx={{ fontSize: "50px" }}
                            />
                            <img
                                src="../img/P_2.png"
                                alt=""
                                width={"120px"}
                                style={{
                                    border: "2px solid #EE238A",
                                    boxShadow: "0px 18px 36px 5px #00000040",
                                    borderRadius: "50%",
                                    margin: "10px ",
                                }}
                            />
                            <Typography variant="h6" fontSize={"large"}>
                                Courtney Henry
                            </Typography>
                            <Typography
                                fontSize={"large"}
                                variant="h6"
                                sx={{ color: "#EE238A" }}
                            >
                                8032
                            </Typography>
                        </Box>
                        {/* item break */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                top: "-50px",
                            }}
                        >
                            <Typography variant="h4">1</Typography>
                            <img
                                src="../img/king.png"
                                alt=""
                                width={"50%"}
                                className="my-2"
                            />

                            {/* <ArrowDropDownIcon fontSize="large" /> */}
                            <img
                                src="../img/P_1.png"
                                alt=""
                                width={"120px"}
                                style={{
                                    border: "5px solid #EE238A",
                                    boxShadow:
                                        "0px 0px 32px 6px rgba(238, 35, 138, 0.9)",
                                    borderRadius: "50%",
                                    margin: "10px ",
                                }}
                            />
                            <Typography variant="h6" fontSize={"large"}>
                                Wade Warren
                            </Typography>
                            <Typography
                                fontSize={"large"}
                                variant="h6"
                                sx={{ color: "#EE238A" }}
                            >
                                8122
                            </Typography>
                        </Box>
                        {/* item break */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h4">3</Typography>
                            <ArrowDropUpIcon
                                sx={{ fontSize: "50px" }}
                                color="primary"
                            />
                            <img
                                src="../img/P_3.png"
                                alt=""
                                width={"120px"}
                                style={{
                                    border: "2px solid #EE238A",
                                    boxShadow: "0px 18px 36px 5px #00000040",
                                    borderRadius: "50%",
                                    margin: "10px ",
                                }}
                            />
                            <Typography fontSize={"large"} variant="h6">
                                Munzira Khan{" "}
                            </Typography>
                            <Typography
                                fontSize={"large"}
                                variant="h6"
                                sx={{ color: "#EE238A" }}
                            >
                                7884
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Leaders;
