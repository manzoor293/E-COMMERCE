import { Button } from "@mui/material";

// Material Ui Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { MyContext } from "../../App";

const columns = [
  { id: "image", label: "CATEGORY IMAGE", minWidth: 250 },
  { id: "catName", label: "CATEGORY NAME", minWidth: 250 },
  { id: "subCatName", label: "SUB CATEGORY NAME", minWidth: 400 },
  { id: "action", label: "Action", minWidth: 100 },
];
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const SubCategoryList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const context = useContext(MyContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-semibold">
          Sub Category List
          <span className="text-[14px] font-[500]"> (Material UI Table)</span>
        </h2>

        <div className="col w-[30%] ml-auto flex items-center justify-end gap-3">
          <Button className="bg-green-600! text-white! font-bold! btn-sm!">
            Export
          </Button>
          <Button
            className="btn-blue text-white! font-bold! btn-sm"
            onClick={() =>
              context.setIsOpneFullScreenPanel({
                open: true,
                model: "Add New Sub Category",
              })
            }
          >
            Add New Sub Category
          </Button>
        </div>
      </div>

      <div className="card my-4 pb-4! pt-5 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    className="font-bold"
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="w-full rounded-md overflow-hidden group">
                      <img
                        src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Chip label="Fashion" />
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <Chip label="Men" color="primary" />
                    <Chip label="Women" color="primary" />
                    <Chip label="Kids" color="primary" />
                  </div>
                </TableCell>

                <TableCell width={100}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
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
