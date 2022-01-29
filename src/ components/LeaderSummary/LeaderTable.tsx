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
import tabledata from "../../tabledata.json";

const useStyles = makeStyles({
    userdata: {
        background:
            "linear-gradient(135deg, rgba(255, 0, 128, 0.65) 0%, rgba(121, 40, 202, 0.65) 100%)",
        "& > :not(style)": {
            color: "#fff !important",
        },
    },
});
const tableData = tabledata;

function Tbr(props: {
    rank: Number;
    rankP: string;
    rankImg: string;
    workerImg: string;
    workerName: string;
    workerMail: string;
    teamImg: string;
    points: number | string;
}) {
    return (
        <>
            <TableRow hover>
                <TableCell
                    align="center"
                    sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        backgroundImage: props.rankP,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    {props.rank}
                </TableCell>
                <TableCell align="center">
                    <img src={props.rankImg} alt="" />
                </TableCell>
                <TableCell align="center">
                    <Stack
                        flexDirection={"row"}
                        sx={{ justifyContent: "space-between" }}
                    >
                        <img
                            src={props.workerImg}
                            alt=""
                            style={{
                                width: "45px",
                                borderRadius: "50%",
                            }}
                        />
                        <Typography
                            sx={{
                                textAlign: "left",
                                color: "#141414",
                                fontWeight: "600",
                                fontSize: "16px",
                            }}
                        >
                            {props.workerName}
                            <Typography sx={{ color: "#8392AB" }}>
                                {props.workerMail}{" "}
                            </Typography>
                        </Typography>
                    </Stack>
                </TableCell>
                <TableCell align="center">
                    <img src={props.teamImg} alt="" />
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#141414",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.points}{" "}
                </TableCell>
            </TableRow>
        </>
    );
}
function LeaderTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const classes = useStyles();

    return (
        <>
            <Paper sx={{ width: "100%", borderRadius: "16px" }}>
                <TableContainer sx={{ borderRadius: "16px" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead
                            sx={{
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            <TableRow>
                                <TableCell
                                    align="left"
                                    colSpan={5}
                                    sx={{
                                        borderColor: "#FFF",
                                        color: "#8392AB",
                                        fontWeight: 600,
                                        fontSize: "20px",
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
                                    "&> :not(style)": {
                                        color: "#8392AB",
                                    },
                                }}
                            >
                                <TableCell
                                    align="center"
                                    style={{
                                        top: 57,
                                        minWidth: 120,
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    # <ArrowDropDownIcon />
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        top: 57,
                                        minWidth: 170,
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    RANK
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        top: 57,
                                        minWidth: 170,
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    WORKER{" "}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        top: 57,
                                        minWidth: 170,
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    TEAM
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        top: 57,
                                        minWidth: 170,
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    TOTAL POINTS
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((data, index) => {
                                return (
                                    <Tbr
                                        rank={data.tabledata.rank}
                                        rankP={data.tabledata.rankP}
                                        rankImg={data.tabledata.rankImg}
                                        workerImg={data.tabledata.workerImg}
                                        workerName={data.tabledata.workerName}
                                        workerMail={data.tabledata.workerMail}
                                        teamImg={data.tabledata.teamImg}
                                        points={data.tabledata.points}
                                    />
                                );
                            })}
                            <TableRow hover className={classes.userdata}>
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
                                    15
                                </TableCell>
                                <TableCell align="center">
                                    <img src="../img/Rankimg.png" alt="" />
                                </TableCell>
                                <TableCell align="center">
                                    <Stack
                                        flexDirection={"row"}
                                        sx={{ justifyContent: "space-between" }}
                                    >
                                        <img
                                            src="../img/profile.png"
                                            alt=""
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                textAlign: "left",
                                                color: "#fff",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                            }}
                                        >
                                            YOU
                                            <Typography sx={{ color: "#fff" }}>
                                                admin@gmail.com
                                            </Typography>
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell align="center">
                                    <img src="../img/Rimg.png" alt="" />
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        color: "#fff",
                                        fontWeight: "600",
                                        fontSize: "18px",
                                    }}
                                >
                                    2,518,695
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </Paper>
        </>
    );
}

export default LeaderTable;
