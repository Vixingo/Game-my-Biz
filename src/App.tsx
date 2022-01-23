import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./App.css";
import Homepage from "./pages/Homepage";
import Claimpage from "./pages/Claimpage";
import Levelup from "./pages/Levelup";
import Level_1 from "./pages/Level_1";

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
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/levelup" component={Level_1} />
                <Route exact path="/home" component={Homepage} />
                <Route exact path="/claim" component={Claimpage} />
                <Route exact path="/level" component={Levelup} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
