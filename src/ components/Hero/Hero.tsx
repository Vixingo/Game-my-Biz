import React from "react";
import { Box, Typography } from "@mui/material";
import PerformBox from "../PerformBox/PerformBox";

const SW = window.screen.width;
console.log(SW);
const PerformData = [
    {
        tittle: "Revenue",
        amount: "$8,696",
        percent: 12,
        icon: "../img/dollar.png",
    },
    {
        tittle: "Rank",
        amount: "Breaker",
        percent: +8,
        icon: "../img/uparrow.png",
    },
    {
        tittle: "Jobs",
        amount: "90",
        percent: +6,
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
                    "@media(max-width : 767px)": {
                        marginTop: "0",
                        paddingTop: "0",
                        background: "none",
                    },
                }}
            >
                <Box className="container">
                    <div className="row">
                        <Box
                            className="col-lg-8"
                            sx={{
                                "@media(max-width : 767px)": {
                                    background:
                                        "linear-gradient(180deg, rgba(238, 35, 138, 0.95) 35.73%, rgba(146, 39, 144, 0) 100%)",
                                },
                            }}
                        >
                            <Typography
                                variant="h2"
                                mt={2}
                                sx={{
                                    fontWeight: "bold",
                                    color: "#fff",
                                    "@media (max-width: 767px)": {
                                        fontSize: "35px",
                                        maxWidth: "150px",
                                        marginRight: "0",
                                        marginLeft: "auto",
                                    },
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
                                    "@media (max-width:767px)": {
                                        fontSize: "30px",
                                        display: "block",
                                        maxWidth: "150px",
                                        padding: "5px",
                                        marginRight: "0",
                                        marginLeft: "auto",
                                    },
                                }}
                            >
                                {SW < 768 ? "PLAY GROUND" : "PLAYGROUND"}
                            </Typography>

                            <Box
                                sx={{
                                    width: "390px",
                                    display: "block",
                                    position: "relative",
                                    top: "-55px",
                                    right: "-150px",
                                    "@media (max-width:767px)": {
                                        top: "-80px",
                                        right: "0",
                                        width: "100px",
                                    },
                                }}
                            >
                                {" "}
                                <img
                                    src="../img/hero_bg.png"
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </Box>
                            <div className="position-relative">
                                <Typography
                                    variant="h3"
                                    fontWeight={"bold"}
                                    sx={{
                                        color: "#fff",
                                        position: "absolute",
                                        top: "-265px",
                                        "@media (max-width:767px)": {
                                            display: "none",
                                        },
                                    }}
                                >
                                    Hello, Jane
                                    <Typography>
                                        12:53, 28 MARCH 2018
                                    </Typography>
                                </Typography>
                            </div>
                            <div className="position-relative ">
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "950px",
                                        left: "450px",
                                        top: "-500px",
                                        "@media (max-width:767px)": {
                                            width: "420px",
                                            top: "-300px",
                                            left: "60px",
                                        },
                                    }}
                                >
                                    {" "}
                                    <img
                                        src="../img/waving.png"
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </Box>
                            </div>
                        </Box>
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
