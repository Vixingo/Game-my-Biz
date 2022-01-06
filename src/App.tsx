import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./ components/Signup/Signup";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./App.css";
import Homepage from "./pages/Homepage";

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
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
