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
function STR(props: {
    rank: Number | string;
    rankP: string;
    rankImg: string;
    workerImg: string;
    points: number | string;
}) {
    return (
        <>
            <TableRow hover sx={{ width: "100%", display: "block" }}>
                <TableCell align="center">
                    <div className="position-relative">
                        <img src={props.rankP} alt="" />
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "600",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {props.rank}
                        </Typography>
                    </div>
                </TableCell>
                <TableCell align="center">
                    <img src={props.rankImg} alt="" />
                </TableCell>
                <TableCell align="center">
                    <Stack
                        flexDirection={"row"}
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={props.workerImg}
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
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "12px",
                    }}
                >
                    {props.points}
                </TableCell>
            </TableRow>
        </>
    );
}

export default STR;
