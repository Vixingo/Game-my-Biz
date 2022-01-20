import React from "react";
import Levelbox from "./Levelbox";

function LevelBoxholder() {
    return (
        <>
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <Levelbox />
                <Levelbox />
                <Levelbox />
                <Levelbox />
                <Levelbox />
            </div>
        </>
    );
}

export default LevelBoxholder;
