import { Box } from "@mui/material";
import React, { useState } from "react";
import "./leader.css";
import Leaders from "./Leaders";
import ProgressBar from "./ProgressBar";

const progressData = [
    {
        position: 4,
        points: 6887,
        userName: "Esther Howard",
        progress: "80%",
        imgsrc: "../img/P_4.png",
    },
    {
        position: 5,
        points: 5687,
        userName: "Leslie Alexander",
        progress: "70%",
        imgsrc: "../img/P_5.png",
    },
    {
        position: 6,
        points: 5347,
        userName: "Zeenath Asra",
        progress: "60%",
        imgsrc: "../img/P_6.png",
    },
    {
        position: 7,
        points: 4668,
        userName: "Robert Fox",
        progress: "50%",
        imgsrc: "../img/P_7.png",
    },
];
function LeaderBoard(): JSX.Element {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };
    return (
        <>
            <Box
                className="container"
                sx={{
                    py: 4,
                    px: 8,
                    backgroundImage: "url(../img/inter.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundColor: "#FFF",
                    borderRadius: "106px",
                    boxShadow: "0px 18px 36px 6px rgba(135, 135, 135, 0.1)",
                    mb: 5,

                    "@media(max-width : 767px)": {
                        display: "none",
                    },
                }}
            >
                <section className="Home_tabs">
                    <div
                        className="tab_btn_holder "
                        style={{ textAlign: "right" }}
                    >
                        <button
                            className={
                                toggleState === 1 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            Today{" "}
                        </button>
                        <button
                            className={
                                toggleState === 2 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            Week{" "}
                        </button>
                        <button
                            className={
                                toggleState === 3 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            Month{" "}
                        </button>
                    </div>

                    <div className="tab_content_holder">
                        <div
                            className={
                                toggleState === 1
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <h1 style={{ color: "#fff", padding: "30px" }}>
                                There is nothing here
                            </h1>
                        </div>

                        <div
                            className={
                                toggleState === 2
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <Leaders />
                            {progressData.map((val, Index) => {
                                return (
                                    <ProgressBar
                                        position={val.position}
                                        points={val.points}
                                        userName={val.userName}
                                        progress={val.progress}
                                        imgsrc={val.imgsrc}
                                    />
                                );
                            })}
                        </div>
                        <div
                            className={
                                toggleState === 3
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <h1 style={{ color: "#fff", padding: "30px" }}>
                                There is nothing here
                            </h1>
                        </div>
                    </div>
                </section>
            </Box>
        </>
    );
}

export default LeaderBoard;
