import { Box, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Collapsible from "react-collapsible";
import { useState } from "react";

const Collaps = () => {
    const [rotateChevron, setRotateChevron] = useState(false);

    const handleRotate = () => setRotateChevron(!rotateChevron);

    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";
    return (
        <>
            <Box onClick={handleRotate}>
                <Box sx={{ textAlign: "right" }}>
                    <KeyboardArrowDownOutlinedIcon
                        sx={{
                            color: "#C4C4C4",
                            marginTop: "10px",
                            marginRight: "10px",
                            fontSize: "50px",
                            transform: rotate,
                            transition: "all 0.2s linear",
                        }}
                    />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <img src="./img/silver_Badge.png" alt="" />
                </Box>
                <Typography
                    sx={{
                        color: "#252F40",
                        fontSize: "16px",
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Complete <br /> SWS Safety
                </Typography>
                <img
                    src="./img/devider2.png"
                    alt=""
                    style={{ width: "100%", height: "2px", color: "#F5F5F5" }}
                />
                <Box
                    sx={{
                        marginTop: "15px",
                        paddingBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src="./img/silver_check.png"
                        alt=""
                        style={{ width: "23px", height: "24px" }}
                    />
                </Box>
            </Box>
        </>
    );
};
function Seafty() {
    return (
        <>
            <Box
                sx={{
                    background: "#fff",
                    boxShadow: "0px 20px 27px rgba(0, 0, 0, 0.102)",
                    borderRadius: "12px",
                    marginBottom: "25px",
                }}
            >
                <Collapsible trigger={Collaps()}>
                    <Typography
                        sx={{
                            color: "#252F40",
                            padding: "10px",
                            textAlign: "center",
                            fontSize: "16px",
                            fontWeight: "300",
                        }}
                    >
                        This badge can be unlocked by completing the on-site
                        training prepared by the JT Team. Consult with the HR
                        Department for more details.
                    </Typography>
                </Collapsible>
            </Box>
        </>
    );
}

export default Seafty;
