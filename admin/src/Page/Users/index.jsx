// Material Ui Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import SearchBox from "../../Components/SearchBox";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const columns = [
  { id: "userImg", label: "USER IMAGE", minWidth: 80 },
  { id: "userName", label: "USER Name", minWidth: 100 },

  {
    id: "userEmail",
    label: "USER EMAIL",
    minWidth: 150,
  },
  {
    id: "userPh",
    label: "USER PHONE NO",
    minWidth: 130,
  },
];
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="card my-4 pb-4! pt-5 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center w-full pl-5! px-5 justify-between">
          <h2 className="text-[18px] font-semibold">
            Users List
            <span className="text-[14px] font-[500]"> (Material UI Table)</span>
          </h2>

          <div className="col w-[30%] ml-auto">
            <SearchBox />
          </div>
        </div>
        <br />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 600 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://mui.com/static/images/avatar/1.jpg"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Manzoor Ahmad
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    manzoorahmadm293@gmail.com
                  </span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone />
                    +923430510227
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};
