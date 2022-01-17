import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ActivityBox from "./ActivityBox";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

function Activity() {
    return (
        <>
            <section className="Activity">
                <Box className="container" sx={{ mb: 5, mt: 8 }}>
                    <Stack
                        flexDirection={"row"}
                        alignItems={"end"}
                        justifyContent={"space-between"}
                    >
                        <Typography variant="h2" fontWeight={500}>
                            Activity
                        </Typography>
                        <Link
                            href="#"
                            variant="h5"
                            sx={{
                                color: "#232844",
                            }}
                        >
                            view more
                        </Link>
                    </Stack>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={20}
                        // nav
                        // autoplay
                        // autoplayTimeout={2000}
                        // navText={[
                        //     '<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;',
                        //     '&nbsp;<img src="/img/Arrow_right.png"/>',
                        // ]}
                        items={2.5}
                    >
                        <div className="item">
                            <ActivityBox />
                        </div>
                        <div className="item">
                            <ActivityBox />
                        </div>
                        <div className="item">
                            <ActivityBox />
                        </div>
                        <div className="item">
                            <ActivityBox />
                        </div>
                    </OwlCarousel>
                </Box>
            </section>
        </>
    );
}

export default Activity;
