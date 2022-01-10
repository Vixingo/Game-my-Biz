import { Box } from "@mui/material";
import React, { useState } from "react";
import "./leader.css";
import Leaders from "./Leaders";

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
                            <Leaders />{" "}
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
