import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Path } from "typescript";
import { useEffect } from "react";

function PerformBox(props: {
    tittle: String;
    amount: Number | String;
    percent: Number;
    imgsrc: string | Path;
}) {
    let [colr, setColr] = React.useState("#21A300");
    let [plus, setPlus] = React.useState(" ");
    useEffect(() => {
        setPlus(props.percent > 0 ? "+" : "");
    });

    useEffect(() => {
        setColr(props.percent > 0 ? "#21A300" : "#FF0000");
    });

    return (
        <>
            <Box
                sx={{
                    mt: 2,
                    mb: 5,
                    background: "white",
                    color: "#000",
                    maxWidth: "440px",
                    boxShadow: "0px 18px 36px 5px rgba(135, 135, 135, 0.06)",
                    borderRadius: "35px",
                    position: "relative",
                    py: 3,
                    pb: 4,
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    sx={{ py: 1, px: 3, textAlign: "left" }}
                >
                    {props.tittle}
                </Typography>
                <img
                    src="../img/smalldot.png"
                    alt=""
                    style={{
                        width: "7px",
                        position: "absolute",
                        top: "25px",
                        right: "25px",
                    }}
                />
                <Stack
                    direction={"row"}
                    alignItems={"end"}
                    justifyContent={"space-between"}
                    maxWidth={"330px"}
                    margin={"0 auto"}
                >
                    <Typography
                        display={"flex"}
                        alignItems={"end"}
                        variant="h3"
                        sx={{
                            color: "#717171",
                        }}
                    >
                        {props.amount}
                        <Typography
                            color={colr}
                            variant="h6"
                            sx={{
                                ml: "16px",
                            }}
                        >
                            {plus}
                            {props.percent}%
                        </Typography>
                    </Typography>

                    <img
                        src={props.imgsrc}
                        alt=""
                        style={{
                            width: "65px",
                        }}
                    />
                </Stack>
            </Box>
        </>
    );
}

export default PerformBox;
