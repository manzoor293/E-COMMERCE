import DashboardBoxes from "../../Components/DashboardBoxes";
import ProgressBar from "../../Components/ProgressBar";
import Badge from "../../Components/Badge";

import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";

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

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },

  {
    id: "subcategory",
    label: "SUB CATEGORY",
    minWidth: 150,
    // align: "right",
    // format: (value) => value.toLocaleString("en-US"),
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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

const Dashboard = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [categoryFilterVal, setcategoryFilterVal] = useState("");

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
      <div className="w-full py-2 px-5 bg-[#f1faff] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5! justify-between">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br /> Tony
          </h1>
          <p>
            Here's What happening on you store today. See the statistics at
            once.
          </p>

          <br />
          <Button className="btn-blue">
            <FaPlus />
            Add Product
          </Button>
        </div>

        <img src="/shop_illustration.png" className="w-[250px] " />
      </div>
      <DashboardBoxes />

      <div className="card my-4 pb-4! overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-semibold">
            Products{" "}
            <span className="text-[14px] font-medium">
              (Tailwind Css Table)
            </span>
          </h2>
        </div>

        <div className="flex items-center w-full pl-5! justify-between pr-5!">
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

          <div className="col w-[20%] ml-auto flex items-center gap-3">
            <Button className="bg-green-600! font-bold! text-white! btn-sm!">
              Export
            </Button>
            <Button className="btn-blue font-bold! text-white! btn-sm">
              Add Product
            </Button>
          </div>
        </div>

        <div className="custom-scrollbar relative! overflow-x-auto! mt-5! pb-5! bg-neutral-primary-soft! rounded-base!">
          <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
            <thead className="text-xs! text-gray-700! uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6! pr-0 py-3! w-[10px]">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="px-0! py-3!  whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Category
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Sub Category
                </th>

                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6! pr-0 py-2!">
                  <div className="w-60px">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0! py-2!">
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
                </td>
                <td className="px-6! py-2!">Electronics</td>
                <td className="px-6! py-2!">Women</td>

                <td className="px-6! py-2!">
                  <div className="flex  gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-[14px] text-gray-500 font-medium">
                      $58.00
                    </span>
                    <span className="oldPrice text-[14px] text-[#3872fa] font-semibold">
                      $48.00
                    </span>
                  </div>
                </td>
                <td className="px-6! py-2!">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-semibold">235</span> sale
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>

                <td className="px-6! py-2!">
                  <div className="flex items-center gap-2">
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      <div className="card my-4 pb-4! overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-semibold">
            Products
            <span className="text-[14px] font-[500]"> (Material UI Table)</span>
          </h2>
        </div>

        <div className="flex items-center w-full pl-5! justify-between pr-5!">
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

          <div className="col w-[20%] ml-auto flex items-center gap-3">
            <Button className="bg-green-600! text-white! font-bold! btn-sm!">
              Export
            </Button>
            <Button className="btn-blue text-white! font-bold! btn-sm">
              Add Product
            </Button>
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
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
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
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
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
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
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
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
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
                    <Tooltip describeChild title="Edit Product" placement="top">
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="View Product Details"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip
                      describeChild
                      title="Remove Product"
                      placement="top"
                    >
                      <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip>
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

      <div className="card my-4 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-semibold">Recent Orders</h2>
        </div>

        <div className="custom-scrollbar relative! overflow-x-auto! mt-5! pb-5! bg-neutral-primary-soft! shadow-xs! rounded-base!">
          <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
            <thead className="text-xs! text-gray-700! uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6! py-3!">
                  &nbsp;
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Products
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6! py-3!  whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6! py-3! whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-primary border-b border-gray-200">
                <td className="px-6! py-4! font-medium">
                  <Button
                    className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! bg-[#f1f1f1]! hover:bg-[rgba(0,0,0,0.1)]! flex items-center justify-center"
                    onClick={() => isShowOrderdProduct(0)}
                  >
                    {isOpenOrderdProduct === 0 ? (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3872fa] font-medium">
                    234567890b0456b12789s234
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3872fa] font-medium">
                    Pay_wefghjkoiuytre
                  </span>
                </td>
                <td className="px-6! py-4! font-medium whitespace-nowrap">
                  Manzoor Ahmad
                </td>
                <td className="px-6! py-4! font-medium">0093430510227</td>
                <td className="px-6! py-4! font-medium">
                  <span className="block w-[400px]">
                    H No 222 Street No 1 near Railway hospital Rawalpindi
                    +903430510227
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">110054</td>
                <td className="px-6! py-4! font-medium">3800</td>
                <td className="px-6! py-4! font-medium">
                  manzoorahmadm293@gmail.com
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3873fa] font-medium">
                    {" "}
                    66e120733dc4a19335ab
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">
                  <Badge status="pending" />
                </td>
                <td className="px-6! py-4! font-medium whitespace-nowrap">
                  2026-9-14
                </td>
              </tr>

              {isOpenOrderdProduct === 0 && (
                <tr>
                  <td className="pl-20!" colSpan={6}>
                    <div className="custom-scrollbar relative! overflow-x-auto! mt-5! bg-neutral-primary-soft! shadow-xs! rounded-base!">
                      <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
                        <thead className="text-xs! text-gray-700! uppercase bg-gray-50! dark:bg-gray-700! dark:text-gray-400!">
                          <tr>
                            <th
                              scope="col"
                              className="px-6! py-3! whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-neutral-primary border-b border-gray-200">
                            <td className="px-6! py-4! font-medium">
                              <span className="text-gray-600">
                                234567890b0456b12789s234
                              </span>
                            </td>
                            <td className="px-6! py-4! font-medium">
                              Pay_wefghjkoiuytre
                            </td>
                            <td className="px-6! py-4! font-medium">
                              <img
                                src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                alt=""
                                className="w-10! h-10 min-w-10! object-cover rounded-md!"
                              />
                            </td>
                            <td className="px-6! py-4! font-medium">2</td>
                            <td className="px-6! py-4! font-medium">1900</td>
                            <td className="px-6! py-4! font-medium">3800</td>
                          </tr>
                          <tr className="bg-neutral-primary border-b border-gray-200">
                            <td className="px-6! py-4! font-medium">
                              <span className="text-gray-600">
                                234567890b0456b12789s234
                              </span>
                            </td>
                            <td className="px-6! py-4! font-medium">
                              Pay_wefghjkoiuytre
                            </td>
                            <td className="px-6! py-4! font-medium">
                              <img
                                src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                alt=""
                                className="w-10! h-10 min-w-10! object-cover rounded-md!"
                              />
                            </td>
                            <td className="px-6! py-4! font-medium">2</td>
                            <td className="px-6! py-4! font-medium">1900</td>
                            <td className="px-6! py-4! font-medium">3800</td>
                          </tr>

                          <tr>
                            <td className="bg-[#f1f1f1]!" colSpan={12}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="bg-neutral-primary border-b border-gray-200">
                <td className="px-6! py-4! font-medium">
                  <Button
                    className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! bg-[#f1f1f1]! hover:bg-[rgba(0,0,0,0.1)]! flex items-center justify-center"
                    onClick={() => isShowOrderdProduct(1)}
                  >
                    {isOpenOrderdProduct === 1 ? (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3872fa] font-medium">
                    234567890b0456b12789s234
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3872fa] font-medium">
                    Pay_wefghjkoiuytre
                  </span>
                </td>
                <td className="px-6! py-4! font-medium whitespace-nowrap">
                  Manzoor Ahmad
                </td>
                <td className="px-6! py-4! font-medium">0093430510227</td>
                <td className="px-6! py-4! font-medium">
                  <span className="block w-[400px]">
                    H No 222 Street No 1 near Railway hospital Rawalpindi
                    +903430510227
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">110054</td>
                <td className="px-6! py-4! font-medium">3800</td>
                <td className="px-6! py-4! font-medium">
                  manzoorahmadm293@gmail.com
                </td>
                <td className="px-6! py-4! font-medium">
                  <span className="text-[#3872fa] font-medium">
                    66e120733dc4a19335ab
                  </span>
                </td>
                <td className="px-6! py-4! font-medium">
                  <Badge status="pending" />
                </td>
                <td className="px-6! py-4! font-medium whitespace-nowrap">
                  2026-9-14
                </td>
              </tr>

              {isOpenOrderdProduct === 1 && (
                <tr>
                  <td className="pl-20!" colSpan={6}>
                    <div className="custom-scrollbar relative! overflow-x-auto! mt-5! bg-neutral-primary-soft! shadow-xs! rounded-base!">
                      <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
                        <thead className="text-xs! text-gray-700! uppercase bg-gray-50! dark:bg-gray-700! dark:text-gray-400!">
                          <tr>
                            <th
                              scope="col"
                              className="px-6! py-3! whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6! py-3!  whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-neutral-primary border-b border-gray-200">
                            <td className="px-6! py-4! font-medium">
                              <span className="text-gray-600">
                                234567890b0456b12789s234
                              </span>
                            </td>
                            <td className="px-6! py-4! font-medium">
                              Pay_wefghjkoiuytre
                            </td>
                            <td className="px-6! py-4! font-medium">
                              <img
                                src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                alt=""
                                className="w-10! h-10 min-w-10! object-cover rounded-md!"
                              />
                            </td>
                            <td className="px-6! py-4! font-medium">2</td>
                            <td className="px-6! py-4! font-medium">1900</td>
                            <td className="px-6! py-4! font-medium">3800</td>
                          </tr>
                          <tr className="bg-neutral-primary border-b border-gray-200">
                            <td className="px-6! py-4! font-medium">
                              <span className="text-gray-600">
                                234567890b0456b12789s234
                              </span>
                            </td>
                            <td className="px-6! py-4! font-medium">
                              Pay_wefghjkoiuytre
                            </td>
                            <td className="px-6! py-4! font-medium">
                              <img
                                src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                alt=""
                                className="w-10! h-10 min-w-10! object-cover rounded-md!"
                              />
                            </td>
                            <td className="px-6! py-4! font-medium">2</td>
                            <td className="px-6! py-4! font-medium">1900</td>
                            <td className="px-6! py-4! font-medium">3800</td>
                          </tr>

                          <tr>
                            <td className="bg-[#f1f1f1]!" colSpan={12}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
