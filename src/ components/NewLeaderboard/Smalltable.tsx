import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import STR from "./STR";

const tableData = [
    {
        rank: 1,
        rankP: "../img/PLS1.png",
        rankimg: "../img/Rankimg.png",
        workerimg: "../img/P_1.png",
        totalP: " 2,518,695",
    },
    {
        rank: 2,
        rankP: "../img/PLS2.png",
        rankimg: "../img/Rankimg.png",
        workerimg: "../img/P_1.png",
        totalP: " 2,518,695",
    },
    {
        rank: 3,
        rankP: "../img/PLS3.png",
        rankimg: "../img/Rankimg.png",
        workerimg: "../img/P_1.png",
        totalP: " 2,518,695",
    },
    {
        rank: "",
        rankP: "../img/UP.png",
        rankimg: "../img/Rankimg.png",
        workerimg: "../img/P_1.png",
        totalP: " 2,518,695",
    },
    {
        rank: "",
        rankP: "../img/UP.png",
        rankimg: "../img/Rankimg.png",
        workerimg: "../img/P_1.png",
        totalP: " 2,518,695",
    },
];

const useStyles = makeStyles({
    userdata: {
        background:
            "linear-gradient(135deg, rgba(255, 0, 128, 0.65) 0%, rgba(121, 40, 202, 0.65) 100%)",
        "& > :not(style)": {
            color: "#fff !important",
        },
    },
});
function Smalltable() {
    const classes = useStyles();

    return (
        <>
            <TableContainer
                sx={{
                    overflow: "hidden",
                    borderRadius: "16px",
                    width: "320px ",
                    display: "block",
                    background: "#fff",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Table
                    sx={{
                        width: "320px ",
                        display: "block",
                        borderRadius: "16px",
                    }}
                >
                    <TableHead
                        sx={{
                            display: "block",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            width: "320px ",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                        }}
                    >
                        <TableRow sx={{ display: "block", width: "320px " }}>
                            <TableCell
                                align="left"
                                colSpan={5}
                                sx={{
                                    display: "block",
                                    width: "320px ",
                                    borderColor: "#FFF",
                                    color: "#141414",
                                    fontWeight: 600,
                                    fontSize: "20px",
                                    textAlign: "center",
                                }}
                            >
                                Kitsap Top Performers
                            </TableCell>
                            {/* <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell> */}
                        </TableRow>
                        <TableRow
                            sx={{
                                display: "block",
                                width: "320px ",
                                "&> :not(style)": {
                                    color: "#8392AB",
                                },
                            }}
                        >
                            <TableCell
                                align="center"
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10px",
                                }}
                            >
                                # <ArrowDropDownIcon />
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10px",
                                }}
                            >
                                RANK
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10px",
                                }}
                            >
                                WORKER{" "}
                            </TableCell>

                            <TableCell
                                align="center"
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10px",
                                }}
                            >
                                TOTAL POINTS
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ width: "100%", display: "block" }}>
                        {tableData.map((data, index) => {
                            return (
                                <STR
                                    rank={data.rank}
                                    rankP={data.rankP}
                                    rankImg={data.rankimg}
                                    workerImg={data.workerimg}
                                    points={data.totalP}
                                />
                            );
                        })}
                        <TableRow
                            hover
                            className={classes.userdata}
                            sx={{ width: "100%", display: "block" }}
                        >
                            <TableCell
                                align="center"
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    backgroundImage: "",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                <img src="../img/UP.png" alt="" />
                            </TableCell>
                            <TableCell align="center">
                                <img src="../img/Rankimg.png" alt="" />
                            </TableCell>
                            <TableCell align="center">
                                <Stack
                                    flexDirection={"row"}
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src="../img/profile.png"
                                        alt=""
                                        style={{
                                            width: "45px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Stack>
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{
                                    color: "#fff",
                                    fontWeight: "500",
                                    fontSize: "12px",
                                }}
                            >
                                2,518,695
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Smalltable;
