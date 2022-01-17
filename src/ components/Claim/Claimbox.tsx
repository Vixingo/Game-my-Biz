import { Box, Typography, Button } from "@mui/material";
import React from "react";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import IconButton from "@mui/material/IconButton";
import { borderRadius, padding } from "@mui/system";

function Claimbox() {
  return (
    <>
      <section
        className="Claimbox"
        style={{
          background: "#fff",
          padding: "25px",
          boxShadow: "0px 18px 36px 5px rgba(135, 135, 135, 0.12)",
          borderRadius: "25px",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img style={{ padding: "10px" }} src="./img/boximg.png" alt="" />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Job Title
            <Typography sx={{ color: "#858585", fontSize: "14px" }}>
              You have complete this task on 22/8/2021 Claim your points.
            </Typography>
          </Typography>
          <IconButton>
            {" "}
            <MoreVertSharpIcon sx={{ fontSize: "45px" }} />{" "}
          </IconButton>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#7C7C7C", ml: "20px", fontWeight: "bold", mt: 2 }}
          >
            Task Details
            <Typography sx={{ color: "#BBBBBB", ml: "40px", fontSize: "18px" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box>
            <Typography sx={{ color: "#8B99B0", fontSize: "18px" }}>
              Due date
              <Typography
                sx={{ color: "#8B99B0", fontWeight: "bold", fontSize: "18px" }}
              >
                09.18.16
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                background:
                  "linear-gradient(97.78deg, #EE238A -6.15%, #922790 106.13%)",
                borderRadius: "16px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                padding: "10px 16px",
              }}
            >
              Claim points 178
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default Claimbox;
