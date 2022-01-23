import { Box, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function ReviewjtValue() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
          boxShadow: "0px 20px 27px rgba(0, 0, 0, 0.102)",
          borderRadius: "12px",
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <KeyboardArrowDownOutlinedIcon
            sx={{
              color: "#fff",
              marginTop: "10px",
              marginRight: "10px",
              fontSize: "50px",
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <img src="./img/Golden_Badge.png" alt="" />
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Review JT <br />
          Values
        </Typography>
        <img
          src="./img/devider2.png"
          alt=""
          style={{ width: "100%", height: "2px" }}
        />
        <Box
          sx={{ marginTop: "15px", paddingBottom: "20px", textAlign: "center" }}
        >
          <img
            src="./img/check-circle-2.png"
            alt=""
            style={{ width: "23px", height: "24px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default ReviewjtValue;
