import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    links: {
        color: "#FFDFF3",
        textDecoration: "none",
        "&::hover ": { color: "unset !important" },
    },
});

function Footer() {
    const classes = useStyles();
    return (
        <>
            <section
                className="Footer"
                style={{
                    backgroundImage: "url(../img/footer_Bg.png)",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Box>
                    <div className="container">
                        <div className="row  py-5">
                            <div className="col-md-3">
                                <img
                                    src="../img/bg_logo.png"
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                                <Box
                                    sx={{
                                        marginTop: "60px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#fff",
                                        "& > :not(style)": {
                                            marginRight: "10px",
                                        },
                                    }}
                                >
                                    <InstagramIcon />
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <LinkedInIcon />
                                </Box>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-8">
                                <div
                                    className="position-relative"
                                    style={{ marginTop: "250px" }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Your e-mail"
                                        style={{
                                            color: "#fff",
                                            background: "transparent",
                                            borderRadius: "30px",
                                            padding: "10px 10px 10px 50px",
                                            width: "100%",
                                            border: "3px solid #fff",
                                        }}
                                    />
                                    <button
                                        style={{
                                            color: "#7C007A",
                                            background:
                                                "linear-gradient(90deg, #FFBEFE 0%, #FFE1F0 0.01%, #FFA9D5 97.04%)",
                                            padding: "10px 30px",
                                            border: "none",
                                            borderRadius: "30px",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            position: "absolute",
                                            top: "0",
                                            right: "0",
                                        }}
                                    >
                                        Subscribe Now!
                                    </button>
                                </div>
                                <div
                                    className="row"
                                    style={{ marginTop: "60px" }}
                                >
                                    <div className="col-md-4">
                                        <h5
                                            style={{
                                                color: "#fff",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Company
                                        </h5>
                                        <Box
                                            sx={{
                                                "& > :not(style)": {
                                                    listStyleType: "none",
                                                    paddingLeft: "0",
                                                },
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Team
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Blog
                                                    </a>
                                                </li>
                                            </ul>
                                        </Box>
                                    </div>
                                    <div className="col-md-4">
                                        <h5
                                            style={{
                                                color: "#fff",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            About
                                        </h5>
                                        <Box
                                            sx={{
                                                "& > :not(style)": {
                                                    listStyleType: "none",
                                                    paddingLeft: "0",
                                                },
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Our mission
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Careers
                                                    </a>
                                                </li>
                                            </ul>
                                        </Box>
                                    </div>
                                    <div className="col-md-4">
                                        <h5
                                            style={{
                                                color: "#fff",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Support
                                        </h5>
                                        <Box
                                            sx={{
                                                "& > :not(style)": {
                                                    listStyleType: "none",
                                                    paddingLeft: "0",
                                                },
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Support request
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={
                                                            classes.links
                                                        }
                                                        href=""
                                                    >
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                {/* <hr /> */}
            </section>
        </>
    );
}

export default Footer;
