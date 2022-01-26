import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";

function SummeryBread() {
    const location = useLocation();
    return (
        <>
            <Box
                sx={{
                    background: "#FFADD6",
                    boxShadow:
                        "box-shadow: 0px 20px 27px rgba(100, 100, 100, 0.0509804)",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 5px 5px 20px",
                    position: "sticky",
                    top: "0",
                    zIndex: "1000",
                    paddingLeft: "100px",
                }}
            >
                <HomeIcon />
                <Typography
                    sx={{
                        fontWeight: "700",
                        color: "#252F40",
                        fontSize: "14px",
                    }}
                >
                    Company Name :
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "300",
                        color: "#252F40",
                        fontSize: "14px",
                    }}
                >
                    &nbsp; Performance Summary Dashboard
                    <a
                        style={{
                            textDecoration: "none",
                            color: "#252f40",
                        }}
                        href="level"
                    >
                        <Typography
                            display={"inline"}
                            sx={{ textDecoration: "underline" }}
                        >
                            {" "}
                            {location.pathname === "/" ? "" : location.pathname}
                        </Typography>
                    </a>
                </Typography>
            </Box>
        </>
    );
}

export default SummeryBread;
