import React from "react";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { Box, Checkbox, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { TextField } from "@mui/material";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
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
function Signup() {
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
                                    <h2 className={classes.h2}> Sign Up</h2>
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
                                            <input placeholder="Confirm Password" />
                                        </Box>
                                        <FormControlLabel
                                            sx={{ color: "rgb(155, 155, 155)" }}
                                            control={<Checkbox />}
                                            label="I agree to Terms and Conditions"
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
                                                sx={{
                                                    px: 6,
                                                    background:
                                                        "linear-gradient(90deg, #EE238A 0%, #922790 93.85%);",
                                                }}
                                            >
                                                {" "}
                                                <Link
                                                    to={"#"}
                                                    style={{
                                                        color: "#fff",
                                                        textDecoration: "none",
                                                        fontWeight: "bold",
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    SIGN UP
                                                </Link>
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
                                Already Have an Account
                                <Link
                                    to={"/login"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#EE238A",
                                    }}
                                >
                                    {" "}
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </Box>
            </section>
        </>
    );
}

export default Signup;
