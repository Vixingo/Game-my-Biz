import { Box, Typography } from "@mui/material";
import React from "react";

function Levelbox() {
  return (
    <>
      <section className="Levelbox">
        <div className="contaiuner">
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "900" }}
            >
              Drop
            </Typography>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(137.97deg, #EE238A -13.62%, #922790 114.34%)",
              boxShadow: "0px 15px 36px 2px rgba(135, 135, 135, 0.12)",
              borderRadius: "33px",
              padding: "25px",
              margin: "10px",
            }}
          >
            <img
              src="./img/drop.png"
              alt=""
              style={{ display: "block", margin: "0 auto" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#Fff", marginTop: "20px", fontSize: "16px" }}
            >
              Review JT Values Complete SWS Safety Basic Window Cleaning Basic
              Gutter Cleaning Basic Pressure Wash
            </Typography>
          </Box>
        </div>
      </section>
    </>
  );
}

export default Levelbox;
