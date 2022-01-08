import { Box, Stack } from "@mui/material";
import React from "react";
import Yetibox from "../Yetibox/Yetibox";
const Yetiboxdata = [
    {
        title: "Points",
        amount: "1,394",
        percent: +40,
        imgsrc: "../img/points.png",
    },
    {
        title: "Revenue",
        amount: "$8,696",
        percent: +50,
        imgsrc: "../img/rev.png",
    },
    {
        title: "Reviews",
        amount: "9",
        percent: +3,
        imgsrc: "../img/review.png",
    },
    {
        title: "Upsells",
        amount: "$525",
        percent: +5,
        imgsrc: "../img/upsell.png",
    },
    {
        title: "Sales",
        amount: "3,642",
        percent: -2,
        imgsrc: "../img/sales.png",
    },
];
function Yetiinfo() {
    return (
        <>
            <div
                className="container"
                style={{
                    margin: "100px auto",
                }}
            >
                <div className="row">
                    <div className="col-lg-6">
                        <Box width={"100%"}>
                            <img
                                src="../img/Yetigame.png"
                                alt=""
                                width="100%"
                            />
                        </Box>
                    </div>
                    <div className="col-lg-6  ">
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            justifyContent={"center"}
                        >
                            {Yetiboxdata.map((val, index) => {
                                return (
                                    <Yetibox
                                        title={val.title}
                                        amount={val.amount}
                                        percent={val.percent}
                                        imgsrc={val.imgsrc}
                                    />
                                );
                            })}
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Yetiinfo;
