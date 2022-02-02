import React from "react";
import LeaderContainer from "../ components/NewLeaderboard/LeaderContainer";
import PerformerTable from "../ components/NewLeaderboard/PerformerTable";
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
            <LeaderContainer />
            <PerformerTable />
        </>
    );
}

export default Leaderboard;
