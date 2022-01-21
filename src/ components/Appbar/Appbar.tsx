import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    appbar: {
        backgroundColor: "#fff",
        borderRadius: "95.5px",
        boxShadow: " 0px 18px 36px 5px rgba(135, 135, 135, 0.06)",
        backgroundImage: "linear-gradient(90deg, #ee238a 0%, #922790 100%)",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent",
    },
});
function Appbar() {
    const classes = useStyles();

    return (
        <>
            <div
                className="container px-0 mt-4"
                style={{ backgroundColor: "#fff", borderRadius: "95.5px" }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar className={classes.appbar} position="static">
                        <Toolbar
                            sx={{
                                justifyContent: "space-between",
                                "& > :not(style)": {
                                    textAlign: "center",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <img
                                    src="../img/menubar.png"
                                    alt=""
                                    width={40}
                                />
                            </IconButton>

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 1, sm: 2, md: 9 }}
                                alignItems={{ xs: "center" }}
                            >
                                <Box sx={{ flexGrow: 1, fontWeight: "700" }}>
                                    <Link
                                        to={"/home"}
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "18px",
                                        }}
                                    >
                                        HOME
                                    </Link>{" "}
                                </Box>
                                <Box sx={{ flexGrow: 1, fontWeight: "700" }}>
                                    <Link
                                        to={"/login"}
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "18px",
                                        }}
                                    >
                                        ABOUT
                                    </Link>{" "}
                                </Box>
                                <img
                                    src="../img/main_logo.png"
                                    alt=""
                                    width="100px"
                                    className="py-1"
                                />
                                <Box sx={{ flexGrow: 1, fontWeight: "700" }}>
                                    <Link
                                        to={"/level"}
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "18px",
                                        }}
                                    >
                                        PRICING
                                    </Link>{" "}
                                </Box>
                                <Box sx={{ flexGrow: 1, fontWeight: "700" }}>
                                    <Link
                                        to={"/claim"}
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "18px",
                                        }}
                                    >
                                        TEAM
                                    </Link>
                                </Box>
                            </Stack>
                            <Avatar
                                alt="Avatar"
                                src="../img/profile.png"
                                sx={{
                                    width: 50,
                                    height: 50,
                                    filter: " drop-shadow(0px 10px 25px rgba(238, 35, 138, 0.23))",
                                }}
                            />
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </>
    );
}

export default Appbar;
