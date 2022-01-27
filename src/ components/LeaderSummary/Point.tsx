import { Box, Typography } from "@mui/material";
import React from "react";

function Point() {
    return (
        <>
            <div className="container">
                <Box
                    sx={{
                        background: "url(../img/pointsbg.png)",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "12px",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",
                            marginTop: "20px",
                            textAlign: "center",
                            fontWeight: "600",
                            padding: "20px",
                            fontSize: "30px",
                            paddingBottom: "600px",
                        }}
                    >
                        UNLOCK THESE REWARDS
                    </Typography>
                </Box>
            </div>
        </>
    );
}

export default Point;
