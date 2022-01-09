import { Box, Stack, Theme, Typography } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system/styleFunctionSx";
import { Property } from "csstype";
import React, { useEffect } from "react";

function Yetibox(props: {
    title: string;
    amount: string | number;
    percent: number;
    imgsrc: string;
}): JSX.Element {
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
                    margin: "10px 5px",
                    width: "200px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 18px 36px 2px rgba(135, 135, 135, 0.1);",
                    borderRadius: "37px",
                    padding: "20px ",
                }}
            >
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="h6" color={"#656565"} fontWeight={500}>
                        {props.title}
                    </Typography>
                    <img
                        src={props.imgsrc}
                        alt=""
                        width="35px"
                        style={{
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.16)",
                        }}
                    />
                </Stack>
                <Typography
                    variant="h3"
                    fontWeight={"bold"}
                    color={"#000"}
                    mt={2}
                >
                    {props.amount}
                </Typography>
                <Typography variant="h6" color={colr} textAlign={"right"}>
                    {plus}
                    {props.percent}%
                </Typography>
            </Box>
        </>
    );
}
export default Yetibox;
