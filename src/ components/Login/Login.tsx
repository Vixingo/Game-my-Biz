import React from "react";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { TextField } from "@mui/material";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const useStyles = makeStyles({
    root: {
        height: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
        background: "var(--bg_linear_gra)",
    },
    sec_logo: {
        maxWidth: "450px",
        margin: " 20px auto",
    },
    form_div: {
        maxWidth: "350px",
        margin: "20px auto 0 auto",
    },
    form_P: {
        color: "#ACACAC",
    },
    logo: {
        maxWidth: " 400px",
        margin: "0 auto",
    },
    h2: {
        color: " #12498e",
        fontWeight: "bold",
    },
});
const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
        },
        "&:before": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main)
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        "&:after": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main)
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 16,
        height: 16,
        margin: 2,
    },
    "& .MuiFormControlLabel-label": {
        color: "#9B9B9B",
    },
}));

function Login() {
    const classes = useStyles();
    return (
        <>
            <section className={classes.root}>
                <Box
                    className="container"
                    sx={{
                        padding: "80px",
                        borderRadius: "100px",
                        background: "var(--bg_color)",
                        "@media screen and (max-width: 575px)": {
                            paddingLeft: "30px",
                            paddingRight: "30px",
                        },
                    }}
                >
                    <div className="row">
                        <Box
                            className="col-lg-5"
                            sx={{
                                borderRight:
                                    " 1px solid rgba(210, 210, 210, 0.57)",
                                "@media screen and (max-width: 991px)": {
                                    border: "none",
                                },
                            }}
                        >
                            <div>
                                <Box className={classes.logo}>
                                    <img
                                        className="w-100"
                                        src="../img/GameMyBiz.png"
                                        alt=""
                                    ></img>
                                </Box>
                                <div className={classes.form_div}>
                                    <h2 className={classes.h2}> Sign In</h2>
                                    <p className={classes.form_P}>
                                        Enter your company, username and
                                        password to sign in
                                    </p>
                                    <Box
                                        sx={{
                                            width: "85%",
                                            "@media screen and (max-width: 991px)":
                                                {
                                                    width: "100%",
                                                },
                                        }}
                                    >
                                        <Box
                                            component="form"
                                            sx={{
                                                "& > :not(style)": {
                                                    my: 2,
                                                    p: 2,
                                                    width: "100%",
                                                    outlineColor:
                                                        "primary.main",
                                                    boxShadow:
                                                        "12px 12px 24px rgba(189, 189, 189, 0.25)",
                                                    background: "#F7F7F7",
                                                    borderRadius: "55px",
                                                    height: "55px",
                                                    border: "none",
                                                    outline: "none",
                                                },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <input placeholder="Company" />
                                            <input placeholder="Email" />
                                            <input placeholder="Password" />
                                        </Box>
                                        <Link
                                            href="#"
                                            variant="body2"
                                            sx={{
                                                display: "block",
                                                textAlign: "right",
                                                color: "#9B9B9B",
                                            }}
                                            underline="none"
                                        >
                                            forgot password?
                                        </Link>

                                        <FormControlLabel
                                            sx={{
                                                mt: 2,
                                                ml: 1,
                                            }}
                                            control={
                                                <Android12Switch
                                                    defaultChecked
                                                />
                                            }
                                            label="Remember Me"
                                        />
                                        <Box
                                            sx={{
                                                mt: 3,
                                                display: "flex",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",

                                                "& > :not(style)": {
                                                    borderRadius: "32px",
                                                    py: 2,
                                                },
                                                "@media screen and (max-width: 767px)":
                                                    {
                                                        flexDirection: "column",
                                                        textAlign: "center",
                                                    },
                                            }}
                                        >
                                            <Button
                                                href="/home"
                                                variant="contained"
                                                size="large"
                                                className="fw-bold "
                                                sx={{
                                                    px: 6,
                                                    background:
                                                        "linear-gradient(90deg, #EE238A 0%, #922790 93.85%);",
                                                }}
                                            >
                                                SIGN IN
                                            </Button>
                                            <span>or</span>
                                            <Button
                                                size="large"
                                                variant="contained"
                                                sx={{
                                                    px: 0,
                                                    background:
                                                        "linear-gradient(180deg, #EE238A 0%, #922790 100%);",
                                                }}
                                            >
                                                <GoogleIcon />
                                            </Button>
                                        </Box>
                                    </Box>
                                </div>
                            </div>
                        </Box>
                        <div className="col-lg-7 text-center">
                            <div className={classes.sec_logo}>
                                <img
                                    src="../img/main_logo.png"
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                            <h5 className="fw-bold">
                                Say goodbye to manual imports and hello to
                                automatic syncing
                            </h5>
                            <p>
                                Integrate your QuickBooks Online account with
                                Mailchimp and start using your invoice data to
                                create tags and send targeted, personalized
                                campaigns.
                            </p>
                            <p
                                style={{
                                    textAlign: "left",
                                    position: "relative",
                                    top: "50px",
                                }}
                            >
                                Don’t have an accout?{" "}
                                <Link href="#" underline="none">
                                    {" "}
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </Box>
            </section>
        </>
    );
}

export default Login;
