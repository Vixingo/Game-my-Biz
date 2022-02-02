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
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import tabledata2 from "../../tabledata2.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const useStyles = makeStyles({
    userdata: {
        background:
            "linear-gradient(135deg, rgba(255, 0, 128, 0.65) 0%, rgba(121, 40, 202, 0.65) 100%)",
        "& > :not(style)": {
            color: "#fff !important",
        },
    },
});
const tableData = tabledata2;

function Tbr2(props: {
    rank: Number;
    rankP: string;
    rankImg: string;
    workerImg: string;
    workerName: string;
    workerMail: string;
    teamImg: string;
    points: number | string;
    revenue: number | string;
    review: number | string;
    up: number | string;
    max: number | string;
    callback: number | string;
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
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.points}{" "}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.revenue}{" "}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    <StarIcon
                        sx={{ color: "#FFD700", fontSize: "20px", mb: 0.5 }}
                    />{" "}
                    {props.review}{" "}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.up}{" "}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.max}{" "}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: "#8392AB",
                        fontWeight: "600",
                        fontSize: "18px",
                    }}
                >
                    {props.callback}{" "}
                </TableCell>
            </TableRow>
        </>
    );
}

function PerformerTable() {
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
    const [age, setAge] = React.useState("10");
    const [filter, serFilter] = React.useState("5");
    const [date, serDate] = React.useState("5");
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChange1 = (event: SelectChangeEvent) => {
        serFilter(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        serDate(event.target.value as string);
    };

    return (
        <>
            <section className="PerformerTable my-4">
                <div
                    className="container"
                    style={{
                        background: "#FFF",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        padding: "30px",
                        borderRadius: "16px",
                    }}
                >
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "end",
                            mt: 5,
                            mb: 2,
                        }}
                    >
                        {" "}
                        <Typography
                            variant={"h6"}
                            fontWeight={600}
                            color={"#8392AB"}
                            alignItems={"center"}
                        >
                            [GAME MY BIZ] TOP PERFORMERS
                        </Typography>
                        <Typography>
                            <span
                                style={{
                                    color: "#8392AB",
                                    fontStyle: "italic",
                                }}
                            >
                                Generated:
                            </span>{" "}
                            4th May 2022 at 3:12 PM
                        </Typography>
                    </Stack>
                    <Paper sx={{ width: "100%", borderRadius: "16px" }}>
                        <TableContainer sx={{ borderRadius: "16px" }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead
                                    sx={{
                                        boxShadow:
                                            "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
                                            <Stack
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                            >
                                                {" "}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label={""}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={5}>
                                                        5
                                                    </MenuItem>
                                                    <MenuItem value={10}>
                                                        10
                                                    </MenuItem>
                                                    <MenuItem value={30}>
                                                        30
                                                    </MenuItem>
                                                </Select>
                                                <Typography
                                                    sx={{
                                                        mx: 1,
                                                        color: "#141414",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Players Per Page
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            colSpan={2}
                                            sx={{
                                                borderColor: "#FFF",
                                                color: "#8392AB",
                                                fontWeight: 600,
                                                fontSize: "20px",
                                            }}
                                        >
                                            <Stack
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                            >
                                                {" "}
                                                <Typography
                                                    sx={{
                                                        mx: 1,
                                                        color: "#141414",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Filter by KPI:
                                                </Typography>{" "}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={filter}
                                                    label={"filter"}
                                                    onChange={handleChange1}
                                                >
                                                    <MenuItem value={5}>
                                                        Filter
                                                    </MenuItem>
                                                    <MenuItem value={10}>
                                                        Filters
                                                    </MenuItem>
                                                    <MenuItem value={30}>
                                                        Filterss
                                                    </MenuItem>
                                                </Select>
                                            </Stack>
                                        </TableCell>
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
                                            <Stack
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                            >
                                                {" "}
                                                <Typography
                                                    sx={{
                                                        mx: 1,
                                                        color: "#141414",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Filter by Date:
                                                </Typography>{" "}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={date}
                                                    label={
                                                        "Last 30 days (default)"
                                                    }
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={5}>
                                                        Last 30 days (default)
                                                    </MenuItem>
                                                    <MenuItem value={10}>
                                                        Filters
                                                    </MenuItem>
                                                    <MenuItem value={30}>
                                                        Filterss
                                                    </MenuItem>
                                                </Select>
                                            </Stack>
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
                                                minWidth: 90,
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
                                                minWidth: 80,
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
                                            PLAYER
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            DEPARTMENT
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,
                                                minWidth: 150,
                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            TOTAL POINTS
                                        </TableCell>

                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            REVENUE
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            REVIEWS
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            UPSELL
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            MX PLAN
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                top: 57,

                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            CALLBACK
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.map((data, index) => {
                                        return (
                                            <Tbr2
                                                rank={data.tabledata.rank}
                                                rankP={data.tabledata.rankP}
                                                rankImg={data.tabledata.rankImg}
                                                workerImg={
                                                    data.tabledata.workerImg
                                                }
                                                workerName={
                                                    data.tabledata.workerName
                                                }
                                                workerMail={
                                                    data.tabledata.workerMail
                                                }
                                                teamImg={data.tabledata.teamImg}
                                                points={data.tabledata.points}
                                                revenue={data.tabledata.revenue}
                                                review={data.tabledata.review}
                                                up={data.tabledata.up}
                                                max={data.tabledata.max}
                                                callback={
                                                    data.tabledata.callback
                                                }
                                            />
                                        );
                                    })}
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
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 4,
                                py: 3,
                            }}
                        >
                            {" "}
                            <Typography>
                                Showing 1 to 10 of 30 entries
                            </Typography>
                            <Stack sx={{ alignItems: "end" }}>
                                <Pagination
                                    count={3}
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        mt: 2,
                                    }}
                                />
                            </Stack>
                        </Box>
                    </Paper>
                </div>
            </section>
        </>
    );
}

export default PerformerTable;
