import React from "react";
import Appbar from "../ components/Appbar/Appbar";
import Hero from "../ components/Hero/Hero";
import Yetiinfo from "../ components/Yetiinfo/Yetiinfo";

function Homepage() {
    return (
        <>
            <Appbar />
            <Hero />
            <Yetiinfo />
        </>
    );
}

export default Homepage;
