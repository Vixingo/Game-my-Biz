import { Box, Stack, Typography } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import React from "react";
import { Link } from "react-router-dom";

function Challenge() {
    return (
        <>
            <section className="Challenge">
                <Box
                    className="container"
                    sx={{
                        background: "url(../img/blogBG.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center ",
                        borderRadius: "80px",
                        px: 5,
                        py: 5,
                        mb: 5,
                    }}
                >
                    <Typography variant="h4">
                        <img
                            src="../img/sbar.png"
                            alt=""
                            style={{ height: "80px" }}
                        />{" "}
                        Company 1{" "}
                        <span
                            style={{
                                backgroundImage: "url(../img/clng_bg.png)",
                                backgroundRepeat: "no-repeat",
                                padding: "10px",
                                backgroundSize: "100% 100%",
                            }}
                        >
                            Challenge
                        </span>
                    </Typography>
                    <Box>
                        <Typography
                            variant="h2"
                            textAlign={"center"}
                            sx={{ my: 8, mb: 20 }}
                        >
                            Productive Office{" "}
                            <span style={{ fontWeight: "bold" }}> Time</span>
                        </Typography>
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        sx={{
                            "& > :not(style)": {
                                width: "50px",
                                marginRight: "34px",
                                padding: "10px",
                            },
                        }}
                    >
                        <img src="../img/edit.png" alt="" />
                        <img src="../img/bookmark-plus.png" alt="" />
                        <img src="../img/bike.png" alt="" />
                        <img
                            src="../img/album.png"
                            alt=""
                            style={{
                                background:
                                    "linear-gradient(138.94deg, #EE238A -4.52%, #922790 103.39%)",
                                borderRadius: "50%",
                                border: "1px solid black",
                            }}
                        />
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        sx={{
                            my: 4,
                            pt: 3,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight={"bold"}
                                sx={{ color: "#fff", mb: 3 }}
                            >
                                Posted by:
                            </Typography>
                            <Stack
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <img
                                    src="../img/posted.png"
                                    alt=""
                                    style={{
                                        width: "80px",
                                        marginRight: "20px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: "24px",
                                    }}
                                >
                                    Kathryn Murphy
                                    <Typography>General Manager</Typography>
                                </Typography>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight={"bold"}
                                sx={{ color: "#fff", mb: 3 }}
                            >
                                Objective:
                            </Typography>
                            <Typography
                                width={"300px"}
                                fontSize={"20px"}
                                sx={{
                                    color: "#fff",
                                }}
                            >
                                To measure the productive time of employees
                                between different companies.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight={"bold"}
                                sx={{ color: "#fff", mb: 3 }}
                            >
                                Participants:
                            </Typography>
                            <AvatarGroup max={6}>
                                <Avatar alt="Remy Sharp" src="../img/E1.png" />
                                <Avatar
                                    alt="Travis Howard"
                                    src="../img/E2.png"
                                />
                                <Avatar alt="Cindy Baker" src="../img/E3.png" />
                                <Avatar
                                    alt="Agnes Walker"
                                    src="../img/E4.png"
                                />
                                <Link
                                    to="#"
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    more
                                </Link>
                            </AvatarGroup>
                        </Box>
                    </Stack>
                </Box>
            </section>
        </>
    );
}

export default Challenge;
