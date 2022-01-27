import { Box, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import React from "react";

function MiniBox() {
    return (
        <>
            <Box
                sx={{
                    width: "180px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textAlign: "center",
                    border: "2px solid #fff",
                    borderRadius: "12px",
                    paddingBottom: "12px",
                    margin: "10px",
                }}
            >
                <Typography
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        color: "#67748E",
                        fontSize: "20px",
                        fontWeight: "500",
                        padding: "10px",
                        borderRadius: "11px",
                        borderBottomRightRadius: "0",
                        borderBottomLeftRadius: "0",
                    }}
                >
                    Upsells <img src="../img/Shape1.png" alt="" />
                </Typography>
                <Typography
                    sx={{
                        paddingTop: "10px",
                        color: "#252F40",
                        fontSize: "32px",
                        fontWeight: "600",
                    }}
                >
                    +$2794
                </Typography>
                <Typography
                    sx={{
                        fontSize: "18px",
                        marginLeft: "22px",
                        color: "#82D616",
                        fontWeight: "bold",
                    }}
                >
                    <ShowChartIcon /> +25%
                </Typography>
            </Box>
        </>
    );
}

export default MiniBox;
