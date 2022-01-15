import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ActivityBox from "./ActivityBox";

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
                        <Link href="#" variant="h5">
                            view more
                        </Link>
                    </Stack>
                    <ActivityBox />
                </Box>
            </section>
        </>
    );
}

export default Activity;
