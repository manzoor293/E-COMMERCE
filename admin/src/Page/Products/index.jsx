import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

// Material Ui Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import ProgressBar from "../../Components/ProgressBar";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },

  {
    id: "subcategory",
    label: "SUB CATEGORY",
    minWidth: 150,
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 130,
  },
  {
    id: "sales",
    label: "SALES",
    minWidth: 100,
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 120,
  },
];
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const Products = () => {
  const [categoryFilterVal, setcategoryFilterVal] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const context = useContext(MyContext);

  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

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
          Products
          <span className="text-[14px] font-[500]"> (Material UI Table)</span>
        </h2>

        <div className="col w-[20%] ml-auto flex items-center justify-end gap-3">
          <Button className="bg-green-600! text-white! font-bold! btn-sm!">
            Export
          </Button>
          <Button
            className="btn-blue text-white! font-bold! btn-sm"
            onClick={() =>
              context.setIsOpneFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className="card my-4 pb-4! pt-5 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center w-full pl-5! px-5 justify-between">
          <div className="col w-[20%]">
            <h4 className="font-semibold text-[15px] mb-2">Category By</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col w-[20%] ml-auto">
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
                    style={{ minWidth: column.minWidth }}
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
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <img
                        src="https://shahijora.com/cdn/shop/articles/44_55353a0f-80b1-4fcf-a70d-903bd50368cd.png?v=1777462951"
                        alt="women-dress"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[70%]">
                      <h3 className="font-medium text-[12px] leading-4 hover:text-[#3872fa]">
                        <Link to="/product/45677">
                          Best Unstitched Clothing Brands Pakistani for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Shahijora</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>{" "}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>
                    <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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
