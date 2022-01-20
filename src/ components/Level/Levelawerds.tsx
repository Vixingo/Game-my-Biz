import { Box, Typography } from "@mui/material";
import React from "react";

function Levelawerds() {
    return (
        <>
            <Box
                sx={{
                    background:
                        "linear-gradient(137.97deg, #12498E -13.62%, #232844 114.34%)",
                    boxShadow: "0px 15px 36px 2px rgba(135, 135, 135, 0.12)",
                    borderRadius: "33px",
                    padding: "25px",
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: "900",
                        fontSize: "20px",
                        marginBottom: "5px",
                    }}
                >
                    Awards
                </Typography>

                <div
                    className="main_box"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div className="first_sec">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ mr: 5 }}>
                                <Typography sx={{ color: "#fff" }}>
                                    Beat the yeti
                                </Typography>
                                <img
                                    style={{ width: "97px" }}
                                    src="./img/awardsgaint.png"
                                    alt=""
                                />
                            </Box>

                            <Box
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                }}
                            >
                                3
                            </Box>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography sx={{ color: "#fff" }}>
                                    Beat the yeti
                                </Typography>
                                <img
                                    style={{ width: "97px" }}
                                    src="./img/awardsgaint.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                }}
                            >
                                0
                            </Typography>
                        </div>
                    </div>

                    <img
                        src="./img/Line.png"
                        alt=""
                        style={{ height: "260px" }}
                    />

                    <div className="second_section ">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <Box sx={{ mr: 5 }}>
                                <Typography sx={{ color: "#fff" }}>
                                    Gold Medal
                                </Typography>
                                <img
                                    style={{}}
                                    src="./img/goldmedel.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                }}
                            >
                                0
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <Box>
                                <Typography sx={{ color: "#fff" }}>
                                    Gold Medal
                                </Typography>
                                <img
                                    style={{}}
                                    src="./img/goldmedel.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                }}
                            >
                                0
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <Box>
                                <Typography sx={{ color: "#fff" }}>
                                    Gold Medal
                                </Typography>
                                <img
                                    style={{}}
                                    src="./img/goldmedel.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                }}
                            >
                                0
                            </Typography>
                        </Box>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Levelawerds;
