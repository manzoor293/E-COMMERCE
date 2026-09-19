import { Button } from "@mui/material";
import DashboardBoxes from "../../Components/DashboardBoxes";

import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import Badge from "../../Components/Badge";

const Dashboard = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };
  return (
    <>
      <div className="w-full py-2 px-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5! justify-between">
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
