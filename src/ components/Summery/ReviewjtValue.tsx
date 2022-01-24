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
                            color: "#fff",
                            marginTop: "10px",
                            marginRight: "10px",
                            fontSize: "50px",
                            transform: rotate,
                            transition: "all 0.2s linear",
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
                    sx={{
                        marginTop: "15px",
                        paddingBottom: "20px",
                        textAlign: "center",
                    }}
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
};

function ReviewjtValue() {
    return (
        <>
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
                    boxShadow: "0px 20px 27px rgba(0, 0, 0, 0.102)",
                    borderRadius: "12px",
                }}
            >
                <Collapsible trigger={Collaps()}>
                    <Typography
                        sx={{
                            color: "#fff",
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

export default ReviewjtValue;
