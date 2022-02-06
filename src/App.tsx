import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./App.css";
import Homepage from "./pages/Homepage";
import Claimpage from "./pages/Claimpage";
import Levelup from "./pages/Levelup";
import Level_1 from "./pages/Level_1";
import LeaderSummaryBoard from "./ components/LeaderSummary/LeaderSummaryBoard";
import Summery from "./ components/Summery/Summery";
import Hub from "./ components/Hub/Hub";
import Leaderboard from "./pages/Leaderboard";
import Signup from "./ components/Signup/Signup";
import FloatingBtn from "./ components/Summery/FloatingBtn";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ee238a",
        },
    },
});
function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/home-v1" component={Homepage} />
                <Route path="/" component={Level_1} />
                {/* <Redirect from="/" to="/dashboard" /> */}
                <Route exact path="/" component={LeaderSummaryBoard} />
                <Route exact path="/levelup" component={Summery} />
                <Route exact path="/dashboard" component={Summery} />
                <Route exact path="/hub" component={Hub} />
                <Route exact path="/leaderboard" component={Leaderboard} />{" "}
                {/* <Route exact path="/" component={LoginPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/levelup" component={Level_1} />
               
                <Route exact path="/claim" component={Claimpage} />
                <Route exact path="/level" component={Levelup} /> */}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
