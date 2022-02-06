import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function MobileAppbar() {
    return (
        <>
            <Box
                sx={{
                    display: "none",
                    "@media(max-width: 767px)": {
                        display: "block",
                    },
                }}
            >
                <div className="container">
                    <Stack
                        justifyContent={"space-between"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{ padding: "14px" }}
                    >
                        <Box>
                            {" "}
                            <Typography
                                sx={{ fontWeight: "700", fontSize: "25px" }}
                            >
                                Hello, Jane{" "}
                            </Typography>
                            <Typography
                                sx={{ fontWeight: "400", fontSize: "9px" }}
                            >
                                12:53, 28 MARCH 2018
                            </Typography>
                        </Box>
                        <Box width={"45px"}>
                            <img
                                src="../img/menubar.png"
                                width={"100%"}
                                alt=""
                            />
                        </Box>
                    </Stack>
                </div>
            </Box>
        </>
    );
}

export default MobileAppbar;
