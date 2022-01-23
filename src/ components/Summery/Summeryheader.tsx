import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import SummeryBread from "./SummeryBread";

function Summeryheader() {
    return (
        <>
            <div className="container">
                <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
                    <Box sx={{ marginRight: "30px" }}>
                        <img src="./img/leftarrow.png" alt="" />
                    </Box>
                    <Box
                        sx={{
                            background:
                                "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
                            borderRadius: "12px",
                            marginRight: "30px",
                        }}
                    >
                        {/* <Typography
              sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "700",
                padding: "18px 8px",
              }}
            >
              +1UP
            </Typography> */}
                        <img src="../img/up+1.png" alt="+1up" />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "36px",
                                color: "#252F40",
                                fontWeight: "700",
                            }}
                        >
                            Level Up
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#252F40",
                                fontWeight: "300",
                            }}
                        >
                            Complete these badges to level up
                        </Typography>
                    </Box>
                </Box>

                {/* img section */}

                <Box
                    sx={{
                        position: "relative",
                        marginTop: "250px",
                        marginBottom: "250px",
                    }}
                >
                    <div
                        className="progress"
                        style={{
                            height: "4px",
                            width: "90%",
                            margin: "0 auto",
                        }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            position: "absolute",
                            top: "-50px",
                            width: "100%",
                        }}
                    >
                        <img src="./img/Levelreq.png" alt="" />
                        <img src="./img/Levelreq.png" alt="" />
                        <img
                            src="./img/Levelreq2.png"
                            alt=""
                            style={{ width: "100px", height: "112px" }}
                        />
                        <img
                            src="./img/Levelreq2.png"
                            alt=""
                            style={{ width: "100px", height: "112px" }}
                        />
                        <img
                            src="./img/Levelreq2.png"
                            alt=""
                            style={{ width: "100px", height: "112px" }}
                        />
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default Summeryheader;
