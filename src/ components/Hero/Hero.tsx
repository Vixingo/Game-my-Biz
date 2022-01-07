import React from "react";
import { Box, Typography } from "@mui/material";
import PerformBox from "../PerformBox/PerformBox";

const PerformData = [
    {
        tittle: "Revenue",
        amount: "$8,696",
        percent: "+12%",
        icon: "../img/dollar.png",
    },
    {
        tittle: "Rank",
        amount: "Breaker",
        percent: "+8%",
        icon: "../img/uparrow.png",
    },
    {
        tittle: "Jobs",
        amount: "90",
        percent: "+6%",
        icon: "../img/bag.png",
    },
];
function Hero() {
    return (
        <>
            <Box
                sx={{
                    mt: 6,
                    py: 7,
                    background:
                        "linear-gradient(180deg, #EE238A 0%, #922790 100%);",
                }}
            >
                <Box className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Typography
                                variant="h2"
                                mt={2}
                                sx={{
                                    fontWeight: "bold",
                                    color: "#fff",
                                }}
                            >
                                MAKE YOUR WORK A
                            </Typography>
                            <Typography
                                component="span"
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#000",
                                    border: "6px solid #000000",
                                    borderRadius: "12px",
                                    padding: "6px 14px 0px 14px",
                                    position: "relative",

                                    zIndex: "2",
                                }}
                            >
                                PLAYGROUD
                            </Typography>

                            <img
                                src="../img/hero_bg.png"
                                alt=""
                                style={{
                                    width: "390px",
                                    display: "block",
                                    position: "relative",
                                    top: "-55px",
                                    right: "-150px",
                                }}
                            />

                            <div className="position-relative">
                                <Typography
                                    variant="h3"
                                    fontWeight={"bold"}
                                    sx={{
                                        color: "#fff",
                                        position: "absolute",
                                        top: "-265px",
                                    }}
                                >
                                    Hello, Jane
                                    <Typography>
                                        12:53, 28 MARCH 2018
                                    </Typography>
                                </Typography>
                            </div>
                            <div className="position-relative">
                                <img
                                    src="../img/waving.png"
                                    alt=""
                                    style={{
                                        position: "absolute",
                                        width: "950px",
                                        left: "450px",
                                        top: "-500px",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <Typography sx={{ color: "white" }}>
                                Here’s how you performed this month:
                                {PerformData.map((val, Index) => {
                                    return (
                                        <PerformBox
                                            tittle={val.tittle}
                                            amount={val.amount}
                                            percent={val.percent}
                                            imgsrc={val.icon}
                                        />
                                    );
                                })}
                            </Typography>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default Hero;
