import * as React from "react";
import { Avatar, Box, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HubIcon from "@mui/icons-material/Hub";
import SettingsIcon from "@mui/icons-material/Settings";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SmsIcon from "@mui/icons-material/Sms";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Summery from "../ components/Summery/Summery";
import IconButton from "@mui/material/IconButton";
const useStyles = makeStyles({
    normal: {
        borderRadius: "0",
    },
    activated: {
        background: "#9B004E !important",
        color: "#fff !important",
        borderRadius: "0 !important",
        "& > :not(style)": {
            color: "#fff",
        },
        "&:hover": {
            color: "#000",
            "& > :not(style)": {
                color: "#000",
            },
        },
    },
    content: {
        display: "none",
    },
    activeContent: {
        display: "block",
    },
});
function Level_1() {
    const classes = useStyles();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };
    return (
        <>
            <Box
                sx={{
                    background: "#FF0080",
                    height: "100vh",
                    width: "50px",
                    position: "fixed",
                    textAlign: "center",
                }}
            >
                <HomeIcon
                    sx={{
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                    }}
                />
                <Stack
                    sx={{
                        height: "100%",
                        justifyContent: "center",
                        "& > :not(style)": {
                            textAlign: "center",
                            color: "#E5E5E5",
                            padding: "",
                            marginY: "5px",
                        },
                    }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="../img/profile.png"
                        sx={{
                            border: "2px solid #FFF",
                            width: "30px",
                            height: "30px",
                            margin: "0 auto",
                            marginBottom: "20px !important",
                        }}
                    />
                    <IconButton
                        sx={{
                            borderRadius: "0",
                        }}
                        className={
                            toggleState === 1
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <DashboardIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 2
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <HubIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 3
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(3)}
                    >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 4
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(4)}
                    >
                        <NewspaperIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 5
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(5)}
                    >
                        <SmsIcon />
                    </IconButton>
                </Stack>
                <LogoutIcon
                    sx={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                    }}
                />
            </Box>
            <Box sx={{ marginLeft: "50px" }}>
                {" "}
                <div
                    className={
                        toggleState === 1
                            ? classes.activeContent
                            : classes.content
                    }
                >
                    <Summery />
                </div>
                <div
                    className={
                        toggleState === 2
                            ? classes.activeContent
                            : classes.content
                    }
                >
                    <h1>2</h1>
                </div>
                <div
                    className={
                        toggleState === 3
                            ? classes.activeContent
                            : classes.content
                    }
                >
                    <h1>3</h1>
                </div>
                <div
                    className={
                        toggleState === 4
                            ? classes.activeContent
                            : classes.content
                    }
                >
                    <h1>4</h1>
                </div>
                <div
                    className={
                        toggleState === 5
                            ? classes.activeContent
                            : classes.content
                    }
                >
                    <h1>5</h1>
                </div>
            </Box>
        </>
    );
}

export default Level_1;
