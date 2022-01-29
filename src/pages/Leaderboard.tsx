import React from "react";
import SummeryBread from "../ components/Summery/SummeryBread";
import Summeryheader from "../ components/Summery/Summeryheader";

function Leaderboard() {
    return (
        <>
            {" "}
            <SummeryBread />
            <Summeryheader
                imgsrc="./img/bars.png"
                title="Leaderboard"
                subtitle="This section reports the summary of your rankings  in comparison with your team mates for the last 30 days. "
            />
            <div className="container">
                <h1>hl</h1>
            </div>
        </>
    );
}

export default Leaderboard;
