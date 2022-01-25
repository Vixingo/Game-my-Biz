import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import SummeryBread from "./SummeryBread";

function Summeryheader(props: {
  imgsrc: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <div className="container">
        <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
          <Box sx={{ marginRight: "30px" }}>
            <img src="./img/leftarrow.png" alt="" />
          </Box>
          <Box
            sx={{
              background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
              borderRadius: "12px",
              marginRight: "30px",
            }}
          >
            <img src={props.imgsrc} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "36px",
                color: "#252F40",
                fontWeight: "700",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#252F40",
                fontWeight: "300",
              }}
            >
              {props.subtitle}
            </Typography>
          </Box>
        </Box>

        {/* img section */}
      </div>
    </>
  );
}

export default Summeryheader;
