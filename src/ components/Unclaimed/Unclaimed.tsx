import { Box, Typography } from "@mui/material";
import React from "react";

function Unclaimed() {
    return (
        <>
            <section className="Unclaimed">
                <Box
                    className="container"
                    sx={{
                        background: "url(../img/un_BG.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "bottom ",
                        borderRadius: "80px",
                        mb: 5,
                    }}
                >
                    <Box className="row">
                        <div
                            className="col-lg-7 align-self-center "
                            style={{ color: "#fff" }}
                        >
                            <Typography variant="h3" fontWeight={"bold"} ml={5}>
                                UNCLAIMED POINTS
                            </Typography>
                            <Typography
                                variant="h1"
                                fontWeight={"bold"}
                                sx={{
                                    fontSize: "270px",
                                    textShadow:
                                        "0px 18px 36px rgba(0, 0, 0, 0.06)",
                                    textAlign: "center",
                                }}
                            >
                                558{" "}
                            </Typography>
                        </div>
                        <div className="col-lg-5">
                            <img
                                src="../img/boy.png"
                                alt=""
                                style={{ width: "70%" }}
                            />
                        </div>
                    </Box>
                </Box>
            </section>
        </>
    );
}

export default Unclaimed;
