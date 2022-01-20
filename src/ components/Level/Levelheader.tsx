import React from "react";
import { Typography } from "@mui/material";

function Levelheader() {
    return (
        <>
            <section
                className="Levelheader"
                style={{
                    background: "url(./img/Levelheader.png)",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    margin: "10px",
                }}
            >
                <img
                    className="mt-5 ms-4"
                    src="./img/menubarwhite.png"
                    alt=""
                />
                <div className="container">
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            marginTop: "40px",
                            paddingBottom: "100px",
                        }}
                    >
                        LEVEL UP
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Levelheader;
