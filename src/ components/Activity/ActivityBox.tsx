import { Box, Button, Stack, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import TelegramIcon from "@mui/icons-material/Telegram";
import React from "react";

function ActivityBox() {
    return (
        <>
            <section className="ActivityBox">
                <Box
                    sx={{
                        marginTop: "20px",
                        marginBottom: "50px",
                        padding: "35px",
                        backgroundColor: "#fff",
                        boxShadow:
                            " 0px 18px 36px 5px rgba(135, 135, 135, 0.12)",
                        borderRadius: "54px",
                    }}
                >
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack flexDirection={"row"} alignItems={"center"}>
                            <img
                                src="../img/P_1.png"
                                alt=""
                                style={{
                                    width: "63px",
                                    marginRight: "12px",
                                }}
                            />
                            <Box>
                                <Typography variant="h6" fontWeight={600}>
                                    Wade Warren
                                </Typography>

                                <Typography
                                    sx={{ color: "#9B9B9B", fontSize: "12px" }}
                                >
                                    September 28, 2021 12:45 pm <br /> 18 Maran
                                    Way, Erith, DA18 4BP
                                </Typography>
                            </Box>
                        </Stack>
                        <Typography textAlign={"center"} fontWeight={700}>
                            Points <br /> 187
                        </Typography>
                    </Stack>
                    <Box sx={{ position: "relative" }}>
                        <img src="../img/map.png" alt="" className="mt-2" />
                        <Button
                            sx={{
                                position: "absolute",
                                top: "25px",
                                right: "15px",
                                px: 2,
                                color: "#000000",
                                backgroundColor: "#fff",
                                borderRadius: "20px",
                                fontWeight: "700",
                                fontSize: "14px",
                                textTransform: "none",
                            }}
                        >
                            expand map
                        </Button>
                    </Box>
                    <Stack
                        mt={2}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <Typography variant="h5" fontWeight={600}>
                                Roof Cleaning
                            </Typography>
                            <table
                                style={{
                                    color: "#787878",
                                    fontSize: "14px",
                                }}
                            >
                                <tr style={{ fontWeight: "bold" }}>
                                    <td className="pe-3">Job total</td>
                                    <td>Time</td>
                                </tr>
                                <tr>
                                    <td>975.00</td>
                                    <td>7:55</td>
                                </tr>
                            </table>
                        </Box>
                        <Box>
                            <Typography
                                textAlign={"right"}
                                fontWeight={"600"}
                                fontSize={"18px"}
                            >
                                Achievements <br />
                                <MilitaryTechIcon /> 2
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        my={5}
                        sx={{
                            "& > :not(style)": {
                                marginRight: "20px",
                                fontWeight: "700",
                            },
                        }}
                    >
                        <Typography>
                            <FavoriteIcon /> 8 KUDOS
                        </Typography>
                        <Typography>
                            <SmsIcon /> 4
                        </Typography>
                        <Typography>
                            <TelegramIcon />
                        </Typography>
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        sx={{
                            "& > :not(style)": {
                                width: "120px",
                                borderRadius: "20px",
                                boxShadow:
                                    "0px 4px 8px rgba(238, 35, 138, 0.19)",
                                fontWeight: "bold",
                                color: "#000",
                            },
                        }}
                    >
                        <Button>REVIEWS</Button>
                        <Button
                            sx={{
                                color: "#fff !important",
                                background:
                                    "linear-gradient(95.76deg, #EE238A -1.6%, #922790 105.5%)",
                            }}
                        >
                            MX PLAN
                        </Button>
                        <Button>UP SELL</Button>
                    </Stack>
                </Box>
            </section>
        </>
    );
}

export default ActivityBox;
