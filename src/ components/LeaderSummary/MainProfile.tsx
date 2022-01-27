import { Box, Typography } from "@mui/material";
import React from "react";

function MainProfile() {
    return (
        <>
            <Box
                sx={{
                    background: "rgba(9, 20, 26, 0.5)",
                    maxWidth: "420px",
                    backdropFilter: "blur(25px)",
                    marginTop: "40px",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",

                    paddingBottom: "0",
                    position: "relative",
                    zIndex: "1",
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #fff",
                }}
            >
                <Box>
                    {" "}
                    <img src="../img/profileA.png" alt="" />
                </Box>
                <Box sx={{ color: "#fff" }}>
                    <Typography
                        fontFamily={"monospace"}
                        fontSize={"10px"}
                        mt={1}
                    >
                        Game My Biz ID
                    </Typography>
                    <Typography
                        fontFamily={"monospace"}
                        fontWeight={"600"}
                        sx={{
                            fontSize: "16px",
                            mb: 3,
                        }}
                    >
                        Adam Tibbs <br /> Window Cleaner
                    </Typography>

                    <Typography
                        fontFamily={"monospace"}
                        sx={{
                            fontSize: "16px",
                            mb: 3,
                        }}
                    >
                        JOBS: 2,150
                    </Typography>
                    <Typography fontFamily={"monospace"}>Rank</Typography>
                    <Typography
                        fontFamily={"monospace"}
                        sx={{ fontSize: "18px", fontWeight: "bold", mb: 1 }}
                    >
                        Tsunami <img src="../img/Rankimg.png" alt="" />
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default MainProfile;
