import { Typography } from "@mui/material";
import React from "react";

function Claimheader() {
  return (
    <>
      <section
        className="Claimheader"
        style={{
          background: "url(./img/claimheader.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          margin: "10px",
        }}
      >
        <img className="mt-5 ms-4" src="./img/menubarwhite.png" alt="" />
        <div className="container">
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              marginTop: "40px",
              paddingBottom: "100px",
            }}
          >
            CLAIMS SECTION
          </Typography>
        </div>
      </section>
    </>
  );
}

export default Claimheader;
