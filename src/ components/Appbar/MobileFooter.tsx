import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    normal: {
        borderRadius: "0",
        transition: "0.2s",
    },
    activated: {
        transition: "0.2s",
        padding: "10px",
        transform: "translateY(-20px)",
        background: "linear-gradient(180deg, #EE238A 0%, #922790 100%)",
        boxShadow: "0px 9px 18px 2.5px rgba(135, 135, 135, 0.3)",
        "& > :not(style)": {
            color: "#fff",
        },
    },
});
function MobileFooter() {
    const classes = useStyles();
    const [toggleState, setToggleState] = React.useState(1);
    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <>
            <Box
                className="MobileFooter"
                sx={{
                    display: "none",

                    "@media(max-width:767px)": {
                        display: "block",
                        backgroundColor: "#fff",
                        position: "fixed",
                        bottom: "0px",
                        width: "100%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        boxShadow: "0px -3px 6px 5px rgba(135, 135, 135, 0.04)",
                        borderRadius: "8px",
                    },
                }}
            >
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        height: "40px",
                    }}
                >
                    <IconButton
                        className={
                            toggleState === 1
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 2
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <ShieldOutlinedIcon />
                    </IconButton>
                    <Button
                        sx={{
                            transform: "translateY(-10px)",
                            borderRadius: "50%",
                            padding: "5px 2px",
                        }}
                    >
                        <Avatar
                            alt="Avatar"
                            src="../img/profile.png"
                            sx={{
                                width: 60,
                                height: 60,
                                filter: " drop-shadow(0px 10px 25px rgba(238, 35, 138, 0.23))",
                            }}
                        />
                    </Button>
                    <IconButton
                        className={
                            toggleState === 4
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(4)}
                    >
                        <MailOutlineIcon />
                    </IconButton>
                    <IconButton
                        className={
                            toggleState === 5
                                ? classes.activated
                                : classes.normal
                        }
                        onClick={() => toggleTab(5)}
                    >
                        <WindowSharpIcon />
                    </IconButton>
                </Stack>
            </Box>
        </>
    );
}

export default MobileFooter;
