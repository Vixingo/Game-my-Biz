import React from "react";
import Appbar from "../ components/Appbar/Appbar";
import Hero from "../ components/Hero/Hero";
import LeaderBoard from "../ components/LeaderBoard/LeaderBoard";
import Yetiinfo from "../ components/Yetiinfo/Yetiinfo";

function Homepage() {
    return (
        <>
            <Appbar />
            <Hero />
            <Yetiinfo />
            <LeaderBoard />
        </>
    );
}

export default Homepage;
